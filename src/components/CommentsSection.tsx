import React, { useState, useEffect } from 'react';
import { MessageSquare, Reply, Edit2, Trash2, Check, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Separator } from '@/components/ui/separator';
import { db, Comment, CommentReply } from '@/lib/database';
import { useToast } from '@/hooks/use-toast';

interface CommentsSectionProps {
  carId: string;
}

// Mock current user - in real app this would come from auth
const CURRENT_USER = {
  id: 'user_123',
  name: 'John Doe'
};

export default function CommentsSection({ carId }: CommentsSectionProps): React.ReactElement {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>('');
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState<string>('');
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [editCommentContent, setEditCommentContent] = useState<string>('');
  const [editingReplyId, setEditingReplyId] = useState<{ commentId: string; replyId: string } | null>(null);
  const [editReplyContent, setEditReplyContent] = useState<string>('');
  const [deleteTarget, setDeleteTarget] = useState<{ type: 'comment' | 'reply'; id: string; commentId?: string } | null>(null);
  const [expandedComments, setExpandedComments] = useState<Set<string>>(new Set());
  const { toast } = useToast();

  useEffect(() => {
    loadComments();
  }, [carId]);

  const loadComments = (): void => {
    const cmts = db.getComments(carId);
    setComments(cmts);
  };

  const handleAddComment = (): void => {
    if (!newComment.trim()) return;

    try {
      const comment = db.addComment({
        carId,
        userId: CURRENT_USER.id,
        userName: CURRENT_USER.name,
        content: newComment.trim()
      });

      // Create notification for the car owner/seller
      const car = db.getCarById(carId);
      if (car) {
        db.addNotification({
          type: 'comment',
          carId,
          carName: car.name,
          carImage: car.image,
          fromUserId: CURRENT_USER.id,
          fromUserName: CURRENT_USER.name,
          content: newComment.trim(),
          targetId: comment.id
        });
      }

      setNewComment('');
      loadComments();
      toast({
        title: 'Comment posted',
        description: 'Your comment has been added'
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to post comment',
        variant: 'destructive'
      });
    }
  };

  const handleAddReply = (commentId: string): void => {
    if (!replyContent.trim()) return;

    const reply = db.addCommentReply(commentId, {
      userId: CURRENT_USER.id,
      userName: CURRENT_USER.name,
      content: replyContent.trim()
    });

    if (reply) {
      // Create notification for the comment author
      const car = db.getCarById(carId);
      const comment = comments.find(c => c.id === commentId);
      if (car && comment) {
        db.addNotification({
          type: 'reply',
          carId,
          carName: car.name,
          carImage: car.image,
          fromUserId: CURRENT_USER.id,
          fromUserName: CURRENT_USER.name,
          content: replyContent.trim(),
          targetId: reply.id,
          parentId: commentId
        });
      }

      setReplyingTo(null);
      setReplyContent('');
      loadComments();
      setExpandedComments(prev => new Set(prev).add(commentId));
      toast({
        title: 'Reply posted',
        description: 'Your reply has been added'
      });
    }
  };

  const handleStartEditComment = (comment: Comment): void => {
    setEditingCommentId(comment.id);
    setEditCommentContent(comment.content);
  };

  const handleSaveEditComment = (): void => {
    if (!editingCommentId || !editCommentContent.trim()) return;

    const updated = db.updateComment(editingCommentId, editCommentContent.trim());
    if (updated) {
      loadComments();
      setEditingCommentId(null);
      setEditCommentContent('');
      toast({
        title: 'Comment updated',
        description: 'Your comment has been edited'
      });
    }
  };

  const handleStartEditReply = (commentId: string, reply: CommentReply): void => {
    setEditingReplyId({ commentId, replyId: reply.id });
    setEditReplyContent(reply.content);
  };

  const handleSaveEditReply = (): void => {
    if (!editingReplyId || !editReplyContent.trim()) return;

    const updated = db.updateCommentReply(
      editingReplyId.commentId,
      editingReplyId.replyId,
      editReplyContent.trim()
    );
    if (updated) {
      loadComments();
      setEditingReplyId(null);
      setEditReplyContent('');
      toast({
        title: 'Reply updated',
        description: 'Your reply has been edited'
      });
    }
  };

  const handleDelete = (): void => {
    if (!deleteTarget) return;

    let success = false;
    if (deleteTarget.type === 'comment') {
      success = db.deleteComment(deleteTarget.id);
    } else if (deleteTarget.type === 'reply' && deleteTarget.commentId) {
      success = db.deleteCommentReply(deleteTarget.commentId, deleteTarget.id);
    }

    if (success) {
      loadComments();
      toast({
        title: `${deleteTarget.type === 'comment' ? 'Comment' : 'Reply'} deleted`,
        description: 'The item has been removed'
      });
    }
    setDeleteTarget(null);
  };

  const toggleExpanded = (commentId: string): void => {
    setExpandedComments(prev => {
      const newSet = new Set(prev);
      if (newSet.has(commentId)) {
        newSet.delete(commentId);
      } else {
        newSet.add(commentId);
      }
      return newSet;
    });
  };

  const formatTime = (timestamp: number): string => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const isOwnContent = (userId: string): boolean => {
    return userId === CURRENT_USER.id;
  };

  return (
    <div className="bg-app-surface rounded-xl border border-app-border p-3">
      {/* Header */}
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-10 h-10 bg-app-primary/10 rounded-lg flex items-center justify-center">
          <MessageSquare className="w-5 h-5 text-app-primary" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-app-text">Public Comments</h3>
          <p className="text-xs text-app-text/70">
            {comments.length} {comments.length === 1 ? 'comment' : 'comments'}
          </p>
        </div>
      </div>

      {/* Add New Comment */}
      <div className="mb-3">
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Share your thoughts about this car..."
          className="min-h-[80px] mb-3"
        />
        <div className="flex justify-end">
          <Button
            onClick={handleAddComment}
            disabled={!newComment.trim()}
            size="sm"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Post Comment
          </Button>
        </div>
      </div>

      <Separator className="mb-3" />

      {/* Comments List */}
      <div className="space-y-3">
        {comments.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-app-bg rounded-full flex items-center justify-center mx-auto mb-3">
              <MessageSquare className="w-8 h-8 text-app-text/40" />
            </div>
            <p className="text-sm text-app-text/70">No comments yet</p>
            <p className="text-xs text-app-text/50 mt-1">Be the first to share your thoughts</p>
          </div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} id={`comment-${comment.id}`} className="space-y-3 scroll-mt-4">
              {/* Comment */}
              <div className="flex gap-3">
                {/* Avatar */}
                <div className="w-9 h-9 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {comment.userName.charAt(0)}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-2 group">
                    <div className="bg-app-bg rounded-lg p-4 flex-1">
                      {/* Header */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-sm text-app-text">{comment.userName}</span>
                        <span className="text-xs text-app-text/50">•</span>
                        <span className="text-xs text-app-text/50">{formatTime(comment.timestamp)}</span>
                        {comment.isEdited && (
                          <>
                            <span className="text-xs text-app-text/50">•</span>
                            <span className="text-xs text-app-text/50 italic">edited</span>
                          </>
                        )}
                      </div>

                      {/* Content */}
                      {editingCommentId === comment.id ? (
                        <div>
                          <Textarea
                            value={editCommentContent}
                            onChange={(e) => setEditCommentContent(e.target.value)}
                            className="min-h-[60px] mb-2 text-sm"
                            autoFocus
                          />
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              onClick={handleSaveEditComment}
                              className="h-7 text-xs"
                            >
                              <Check className="w-3 h-3 mr-1" />
                              Save
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                setEditingCommentId(null);
                                setEditCommentContent('');
                              }}
                              className="h-7 text-xs"
                            >
                              <X className="w-3 h-3 mr-1" />
                              Cancel
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <p className="text-sm text-app-text/90 leading-relaxed whitespace-pre-wrap break-words">
                          {comment.content}
                        </p>
                      )}
                    </div>

                    {/* Action Icons - Beside comment */}
                    {!editingCommentId && isOwnContent(comment.userId) && (
                      <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-1">
                        <button
                          onClick={() => handleStartEditComment(comment)}
                          className="w-7 h-7 bg-app-surface hover:bg-app-bg border border-app-border rounded-md flex items-center justify-center shadow-sm transition-colors"
                          title="Edit comment"
                        >
                          <Edit2 className="w-3.5 h-3.5 text-app-text/70" />
                        </button>
                        <button
                          onClick={() => setDeleteTarget({ type: 'comment', id: comment.id })}
                          className="w-7 h-7 bg-app-surface hover:bg-red-50 border border-app-border hover:border-red-200 rounded-md flex items-center justify-center shadow-sm transition-colors"
                          title="Delete comment"
                        >
                          <Trash2 className="w-3.5 h-3.5 text-red-600" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Reply Button */}
                  <div className="flex items-center gap-3 mt-2 ml-4">
                    <button
                      onClick={() => {
                        setReplyingTo(replyingTo === comment.id ? null : comment.id);
                        setReplyContent('');
                      }}
                      className="text-xs font-medium text-app-text/70 hover:text-app-primary transition-colors flex items-center gap-1"
                    >
                      <Reply className="w-3.5 h-3.5" />
                      Reply
                    </button>

                    {comment.replies.length > 0 && (
                      <button
                        onClick={() => toggleExpanded(comment.id)}
                        className="text-xs font-medium text-app-text/70 hover:text-app-primary transition-colors flex items-center gap-1"
                      >
                        {expandedComments.has(comment.id) ? (
                          <>
                            <ChevronUp className="w-3.5 h-3.5" />
                            Hide {comment.replies.length} {comment.replies.length === 1 ? 'reply' : 'replies'}
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-3.5 h-3.5" />
                            Show {comment.replies.length} {comment.replies.length === 1 ? 'reply' : 'replies'}
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Reply Input */}
                  {replyingTo === comment.id && (
                    <div className="mt-3 ml-4">
                      <Textarea
                        value={replyContent}
                        onChange={(e) => setReplyContent(e.target.value)}
                        placeholder="Write your reply..."
                        className="min-h-[60px] mb-2 text-sm"
                        autoFocus
                      />
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => handleAddReply(comment.id)}
                          disabled={!replyContent.trim()}
                          className="h-7 text-xs"
                        >
                          <Reply className="w-3 h-3 mr-1" />
                          Reply
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setReplyingTo(null);
                            setReplyContent('');
                          }}
                          className="h-7 text-xs"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Replies */}
                  {expandedComments.has(comment.id) && comment.replies.length > 0 && (
                    <div className="mt-4 ml-4 space-y-3 border-l-2 border-app-border pl-4">
                      {comment.replies.map((reply) => (
                        <div key={reply.id} id={`reply-${reply.id}`} className="flex gap-3 scroll-mt-4">
                          {/* Avatar */}
                          <div className="w-7 h-7 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                            {reply.userName.charAt(0)}
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start gap-2 group">
                              <div className="bg-app-bg rounded-lg p-3 flex-1">
                                {/* Header */}
                                <div className="flex items-center gap-2 mb-1.5">
                                  <span className="font-semibold text-xs text-app-text">{reply.userName}</span>
                                  <span className="text-xs text-app-text/50">•</span>
                                  <span className="text-xs text-app-text/50">{formatTime(reply.timestamp)}</span>
                                  {reply.isEdited && (
                                    <>
                                      <span className="text-xs text-app-text/50">•</span>
                                      <span className="text-xs text-app-text/50 italic">edited</span>
                                    </>
                                  )}
                                </div>

                                {/* Content */}
                                {editingReplyId?.commentId === comment.id && editingReplyId?.replyId === reply.id ? (
                                  <div>
                                    <Textarea
                                      value={editReplyContent}
                                      onChange={(e) => setEditReplyContent(e.target.value)}
                                      className="min-h-[50px] mb-2 text-sm"
                                      autoFocus
                                    />
                                    <div className="flex gap-2">
                                      <Button
                                        size="sm"
                                        onClick={handleSaveEditReply}
                                        className="h-6 text-xs"
                                      >
                                        <Check className="w-3 h-3 mr-1" />
                                        Save
                                      </Button>
                                      <Button
                                        size="sm"
                                        variant="outline"
                                        onClick={() => {
                                          setEditingReplyId(null);
                                          setEditReplyContent('');
                                        }}
                                        className="h-6 text-xs"
                                      >
                                        <X className="w-3 h-3 mr-1" />
                                        Cancel
                                      </Button>
                                    </div>
                                  </div>
                                ) : (
                                  <p className="text-sm text-app-text/90 leading-relaxed whitespace-pre-wrap break-words">
                                    {reply.content}
                                  </p>
                                )}
                              </div>

                              {/* Action Icons - Beside reply */}
                              {!(editingReplyId?.commentId === comment.id && editingReplyId?.replyId === reply.id) && isOwnContent(reply.userId) && (
                                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-1">
                                  <button
                                    onClick={() => handleStartEditReply(comment.id, reply)}
                                    className="w-6 h-6 bg-app-surface hover:bg-app-bg border border-app-border rounded-md flex items-center justify-center shadow-sm transition-colors"
                                    title="Edit reply"
                                  >
                                    <Edit2 className="w-3 h-3 text-app-text/70" />
                                  </button>
                                  <button
                                    onClick={() => setDeleteTarget({ type: 'reply', id: reply.id, commentId: comment.id })}
                                    className="w-6 h-6 bg-app-surface hover:bg-red-50 border border-app-border hover:border-red-200 rounded-md flex items-center justify-center shadow-sm transition-colors"
                                    title="Delete reply"
                                  >
                                    <Trash2 className="w-3 h-3 text-red-600" />
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {comment !== comments[comments.length - 1] && (
                <Separator className="mt-6" />
              )}
            </div>
          ))
        )}
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteTarget} onOpenChange={() => setDeleteTarget(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Delete {deleteTarget?.type === 'comment' ? 'Comment' : 'Reply'}?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this {deleteTarget?.type}? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-red-600 hover:bg-red-700">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
