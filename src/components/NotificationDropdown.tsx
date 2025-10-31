import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, Reply, Mail, X, Check, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { db, Notification } from '@/lib/database';
import { useToast } from '@/hooks/use-toast';

const CURRENT_USER_ID = 'user_123';

export default function NotificationDropdown(): React.ReactElement {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = (): void => {
    const notifs = db.getNotifications(CURRENT_USER_ID);
    setNotifications(notifs);
  };

  const handleNotificationClick = (notification: Notification): void => {
    // Mark as read
    db.markNotificationAsRead(notification.id);
    loadNotifications();

    // Navigate to car details page with hash to scroll to element
    if (notification.type === 'message') {
      navigate(`/car/${notification.carId}#message-${notification.targetId}`);
    } else if (notification.type === 'comment') {
      navigate(`/car/${notification.carId}#comment-${notification.targetId}`);
    } else if (notification.type === 'reply') {
      navigate(`/car/${notification.carId}#reply-${notification.targetId}`);
    }
  };

  const handleMarkAllAsRead = (): void => {
    db.markAllNotificationsAsRead(CURRENT_USER_ID);
    loadNotifications();
    toast({
      title: 'All notifications marked as read',
      description: 'Your notifications have been updated'
    });
  };

  const handleDeleteNotification = (e: React.MouseEvent, id: string): void => {
    e.stopPropagation();
    db.deleteNotification(id);
    loadNotifications();
    toast({
      title: 'Notification deleted',
      description: 'The notification has been removed'
    });
  };

  const handleClearAll = (): void => {
    db.clearAllNotifications(CURRENT_USER_ID);
    loadNotifications();
    toast({
      title: 'All notifications cleared',
      description: 'Your notification list has been cleared'
    });
  };

  const formatTime = (timestamp: number): string => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const getNotificationIcon = (type: string): React.ReactElement => {
    switch (type) {
      case 'message':
        return <Mail className="w-4 h-4 text-blue-500" />;
      case 'comment':
        return <MessageSquare className="w-4 h-4 text-green-500" />;
      case 'reply':
        return <Reply className="w-4 h-4 text-purple-500" />;
      default:
        return <MessageSquare className="w-4 h-4 text-app-text/70" />;
    }
  };

  const getNotificationText = (type: string): string => {
    switch (type) {
      case 'message':
        return 'sent you a message';
      case 'comment':
        return 'commented on';
      case 'reply':
        return 'replied to your comment on';
      default:
        return 'interacted with';
    }
  };

  const truncateContent = (content: string, maxLength: number = 60): string => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + '...';
  };

  return (
    <div className="w-96 max-w-[calc(100vw-2rem)] bg-app-surface border border-app-border rounded-xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-app-bg border-b border-app-border px-4 py-3">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-app-text">Notifications</h3>
          {notifications.length > 0 && (
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleMarkAllAsRead}
                className="h-7 text-xs"
              >
                <Check className="w-3 h-3 mr-1" />
                Mark all read
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClearAll}
                className="h-7 text-xs text-red-600 hover:text-red-700"
              >
                <Trash2 className="w-3 h-3 mr-1" />
                Clear all
              </Button>
            </div>
          )}
        </div>
        {notifications.length > 0 && (
          <p className="text-xs text-app-text/70">
            {notifications.filter(n => !n.isRead).length} unread
          </p>
        )}
      </div>

      {/* Notifications List */}
      <ScrollArea className="h-[500px]">
        {notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 px-4">
            <div className="w-16 h-16 bg-app-bg rounded-full flex items-center justify-center mb-3">
              <MessageSquare className="w-8 h-8 text-app-text/40" />
            </div>
            <p className="text-sm font-medium text-app-text/70">No notifications</p>
            <p className="text-xs text-app-text/50 mt-1 text-center">
              You're all caught up! New notifications will appear here.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-app-border">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                onClick={() => handleNotificationClick(notification)}
                className={`p-4 hover:bg-app-bg transition-colors cursor-pointer group relative ${
                  !notification.isRead ? 'bg-orange-50/50 dark:bg-orange-950/20' : ''
                }`}
              >
                {/* Unread Indicator */}
                {!notification.isRead && (
                  <div className="absolute left-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full"></div>
                )}

                <div className="flex gap-3 pl-3">
                  {/* User Avatar */}
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {notification.fromUserName.charAt(0)}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-2 mb-1">
                      <div className="flex-1">
                        <p className="text-sm text-app-text">
                          <span className="font-semibold">{notification.fromUserName}</span>
                          {' '}
                          <span className="text-app-text/70">
                            {getNotificationText(notification.type)}
                          </span>
                          {' '}
                          <span className="font-medium">{notification.carName}</span>
                        </p>
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        {getNotificationIcon(notification.type)}
                      </div>
                    </div>

                    {/* Message/Comment Preview */}
                    <p className="text-xs text-app-text/80 bg-app-bg rounded px-2 py-1.5 mb-2 line-clamp-2">
                      "{truncateContent(notification.content)}"
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {/* Car Thumbnail */}
                        <img
                          src={notification.carImage}
                          alt={notification.carName}
                          className="w-12 h-9 rounded object-cover border border-app-border"
                        />
                        <span className="text-xs text-app-text/50">
                          {formatTime(notification.timestamp)}
                        </span>
                      </div>

                      {/* Delete Button */}
                      <button
                        onClick={(e) => handleDeleteNotification(e, notification.id)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 hover:bg-red-50 dark:hover:bg-red-950/30 rounded"
                        title="Delete notification"
                      >
                        <X className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </ScrollArea>
    </div>
  );
}
