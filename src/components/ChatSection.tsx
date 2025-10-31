import React, { useState, useEffect, useRef } from 'react';
import { Send, Edit2, Trash2, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { db, ChatMessage } from '@/lib/database';
import { useToast } from '@/hooks/use-toast';

interface ChatSectionProps {
  carId: string;
  sellerName: string;
}

// Mock current user - in real app this would come from auth
const CURRENT_USER = {
  id: 'user_123',
  name: 'John Doe'
};

export default function ChatSection({ carId, sellerName }: ChatSectionProps): React.ReactElement {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState<string>('');
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    loadMessages();
  }, [carId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const loadMessages = (): void => {
    const msgs = db.getChatMessages(carId);
    setMessages(msgs);
  };

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (): void => {
    if (!newMessage.trim()) return;

    try {
      const message = db.addChatMessage({
        carId,
        senderId: CURRENT_USER.id,
        senderName: CURRENT_USER.name,
        message: newMessage.trim(),
        isFromSeller: false
      });

      // Create notification for the seller
      const car = db.getCarById(carId);
      if (car) {
        db.addNotification({
          type: 'message',
          carId,
          carName: car.name,
          carImage: car.image,
          fromUserId: CURRENT_USER.id,
          fromUserName: CURRENT_USER.name,
          content: newMessage.trim(),
          targetId: message.id
        });
      }

      setNewMessage('');
      loadMessages();
      toast({
        title: 'Message sent',
        description: 'Your message has been sent to the seller'
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send message',
        variant: 'destructive'
      });
    }
  };

  const handleStartEdit = (message: ChatMessage): void => {
    setEditingId(message.id);
    setEditContent(message.message);
  };

  const handleSaveEdit = (): void => {
    if (!editingId || !editContent.trim()) return;

    const updated = db.updateChatMessage(editingId, editContent.trim());
    if (updated) {
      loadMessages();
      setEditingId(null);
      setEditContent('');
      toast({
        title: 'Message updated',
        description: 'Your message has been edited'
      });
    }
  };

  const handleCancelEdit = (): void => {
    setEditingId(null);
    setEditContent('');
  };

  const handleDelete = (): void => {
    if (!deleteId) return;

    const success = db.deleteChatMessage(deleteId);
    if (success) {
      loadMessages();
      toast({
        title: 'Message deleted',
        description: 'Your message has been removed'
      });
    }
    setDeleteId(null);
  };

  const formatTime = (timestamp: number): string => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    
    if (hours < 24) {
      return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    }
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const isOwnMessage = (message: ChatMessage): boolean => {
    return message.senderId === CURRENT_USER.id;
  };

  return (
    <div className="bg-app-surface rounded-xl border border-app-border overflow-hidden flex flex-col h-[600px]">
      {/* Header */}
      <div className="bg-app-bg border-b border-app-border px-2 py-1.5">
        <h3 className="text-lg font-bold text-app-text">Private Chat with Seller</h3>
        <p className="text-xs text-app-text/70 mt-0.5">Chat directly with {sellerName}</p>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-2 space-y-1.5">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-app-bg rounded-full flex items-center justify-center mx-auto mb-3">
                <Send className="w-8 h-8 text-app-text/40" />
              </div>
              <p className="text-sm text-app-text/70">No messages yet</p>
              <p className="text-xs text-app-text/50 mt-1">Start a conversation with the seller</p>
            </div>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <div
                key={message.id}
                id={`message-${message.id}`}
                className={`flex ${isOwnMessage(message) ? 'justify-end' : 'justify-start'} scroll-mt-4`}
              >
                <div className={`max-w-[75%] ${isOwnMessage(message) ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
                  {/* Sender Name */}
                  <div className="flex items-center gap-2 px-2">
                    <span className="text-xs font-medium text-app-text/70">
                      {isOwnMessage(message) ? 'You' : message.senderName}
                    </span>
                    <span className="text-xs text-app-text/50">
                      {formatTime(message.timestamp)}
                    </span>
                    {message.isEdited && (
                      <span className="text-xs text-app-text/50 italic">(edited)</span>
                    )}
                  </div>

                  {/* Message Bubble with Actions */}
                  <div className="flex items-start gap-2 group">
                    {editingId === message.id ? (
                      <div className="bg-app-bg border border-app-border rounded-lg p-3 min-w-[200px]">
                        <Textarea
                          value={editContent}
                          onChange={(e) => setEditContent(e.target.value)}
                          className="min-h-[60px] mb-2 text-sm"
                          autoFocus
                        />
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            onClick={handleSaveEdit}
                            className="flex-1 h-7 text-xs"
                          >
                            <Check className="w-3 h-3 mr-1" />
                            Save
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={handleCancelEdit}
                            className="flex-1 h-7 text-xs"
                          >
                            <X className="w-3 h-3 mr-1" />
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div
                          className={`rounded-lg px-4 py-2.5 ${
                            isOwnMessage(message)
                              ? 'bg-app-primary text-white'
                              : 'bg-app-bg border border-app-border text-app-text'
                          }`}
                        >
                          <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                            {message.message}
                          </p>
                        </div>

                        {/* Action Icons - Only for own messages - Show on hover - Beside message */}
                        {isOwnMessage(message) && (
                          <div className={`flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1 ${
                            isOwnMessage(message) ? 'order-first' : ''
                          }`}>
                            <button
                              onClick={() => handleStartEdit(message)}
                              className="w-7 h-7 bg-app-surface hover:bg-app-bg border border-app-border rounded-md flex items-center justify-center shadow-sm transition-colors"
                              title="Edit message"
                            >
                              <Edit2 className="w-3.5 h-3.5 text-app-text/70" />
                            </button>
                            <button
                              onClick={() => setDeleteId(message.id)}
                              className="w-7 h-7 bg-app-surface hover:bg-red-50 border border-app-border hover:border-red-200 rounded-md flex items-center justify-center shadow-sm transition-colors"
                              title="Delete message"
                            >
                              <Trash2 className="w-3.5 h-3.5 text-red-600" />
                            </button>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t border-app-border p-2 bg-app-bg">
        <div className="flex gap-1">
          <Textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            placeholder="Type your message..."
            className="min-h-[44px] max-h-[120px] resize-none"
          />
          <Button
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            className="h-[44px] px-4"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-xs text-app-text/50 mt-2">Press Enter to send, Shift+Enter for new line</p>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Message?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this message? This action cannot be undone.
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
