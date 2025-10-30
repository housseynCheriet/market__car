import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/NotificationDropdown.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1ac3b587"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/usr/src/workspace/src/components/NotificationDropdown.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=1ac3b587"; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=1ac3b587";
import { MessageSquare, Reply, Mail, X, Check, Trash2 } from "/node_modules/.vite/deps/lucide-react.js?v=1ac3b587";
import { Button } from "/src/components/ui/button.tsx";
import { ScrollArea } from "/src/components/ui/scroll-area.tsx";
import { db } from "/src/lib/database.ts";
import { useToast } from "/src/hooks/use-toast.ts";
const CURRENT_USER_ID = "user_123";
export default function NotificationDropdown() {
  _s();
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();
  const { toast } = useToast();
  useEffect(() => {
    loadNotifications();
  }, []);
  const loadNotifications = () => {
    const notifs = db.getNotifications(CURRENT_USER_ID);
    setNotifications(notifs);
  };
  const handleNotificationClick = (notification) => {
    db.markNotificationAsRead(notification.id);
    loadNotifications();
    if (notification.type === "message") {
      navigate(`/car/${notification.carId}#message-${notification.targetId}`);
    } else if (notification.type === "comment") {
      navigate(`/car/${notification.carId}#comment-${notification.targetId}`);
    } else if (notification.type === "reply") {
      navigate(`/car/${notification.carId}#reply-${notification.targetId}`);
    }
  };
  const handleMarkAllAsRead = () => {
    db.markAllNotificationsAsRead(CURRENT_USER_ID);
    loadNotifications();
    toast({
      title: "All notifications marked as read",
      description: "Your notifications have been updated"
    });
  };
  const handleDeleteNotification = (e, id) => {
    e.stopPropagation();
    db.deleteNotification(id);
    loadNotifications();
    toast({
      title: "Notification deleted",
      description: "The notification has been removed"
    });
  };
  const handleClearAll = () => {
    db.clearAllNotifications(CURRENT_USER_ID);
    loadNotifications();
    toast({
      title: "All notifications cleared",
      description: "Your notification list has been cleared"
    });
  };
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = /* @__PURE__ */ new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / (1e3 * 60));
    const hours = Math.floor(diff / (1e3 * 60 * 60));
    const days = Math.floor(diff / (1e3 * 60 * 60 * 24));
    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };
  const getNotificationIcon = (type) => {
    switch (type) {
      case "message":
        return /* @__PURE__ */ jsxDEV(Mail, { className: "w-4 h-4 text-blue-500" }, void 0, false, {
          fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
          lineNumber: 106,
          columnNumber: 16
        }, this);
      case "comment":
        return /* @__PURE__ */ jsxDEV(MessageSquare, { className: "w-4 h-4 text-green-500" }, void 0, false, {
          fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
          lineNumber: 108,
          columnNumber: 16
        }, this);
      case "reply":
        return /* @__PURE__ */ jsxDEV(Reply, { className: "w-4 h-4 text-purple-500" }, void 0, false, {
          fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
          lineNumber: 110,
          columnNumber: 16
        }, this);
      default:
        return /* @__PURE__ */ jsxDEV(MessageSquare, { className: "w-4 h-4 text-app-text/70" }, void 0, false, {
          fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
          lineNumber: 112,
          columnNumber: 16
        }, this);
    }
  };
  const getNotificationText = (type) => {
    switch (type) {
      case "message":
        return "sent you a message";
      case "comment":
        return "commented on";
      case "reply":
        return "replied to your comment on";
      default:
        return "interacted with";
    }
  };
  const truncateContent = (content, maxLength = 60) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + "...";
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "w-96 max-w-[calc(100vw-2rem)] bg-app-surface border border-app-border rounded-xl shadow-xl overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "bg-app-bg border-b border-app-border px-4 py-3", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mb-2", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-bold text-app-text", children: "Notifications" }, void 0, false, {
          fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
          lineNumber: 139,
          columnNumber: 11
        }, this),
        notifications.length > 0 && /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: handleMarkAllAsRead,
              className: "h-7 text-xs",
              children: [
                /* @__PURE__ */ jsxDEV(Check, { className: "w-3 h-3 mr-1" }, void 0, false, {
                  fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
                  lineNumber: 148,
                  columnNumber: 17
                }, this),
                "Mark all read"
              ]
            },
            void 0,
            true,
            {
              fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
              lineNumber: 142,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: handleClearAll,
              className: "h-7 text-xs text-red-600 hover:text-red-700",
              children: [
                /* @__PURE__ */ jsxDEV(Trash2, { className: "w-3 h-3 mr-1" }, void 0, false, {
                  fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
                  lineNumber: 157,
                  columnNumber: 17
                }, this),
                "Clear all"
              ]
            },
            void 0,
            true,
            {
              fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
              lineNumber: 151,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
          lineNumber: 141,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
        lineNumber: 138,
        columnNumber: 9
      }, this),
      notifications.length > 0 && /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-app-text/70", children: [
        notifications.filter((n) => !n.isRead).length,
        " unread"
      ] }, void 0, true, {
        fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
        lineNumber: 164,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
      lineNumber: 137,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(ScrollArea, { className: "h-[500px]", children: notifications.length === 0 ? /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center justify-center py-12 px-4", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "w-16 h-16 bg-app-bg rounded-full flex items-center justify-center mb-3", children: /* @__PURE__ */ jsxDEV(MessageSquare, { className: "w-8 h-8 text-app-text/40" }, void 0, false, {
        fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
        lineNumber: 175,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
        lineNumber: 174,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-medium text-app-text/70", children: "No notifications" }, void 0, false, {
        fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
        lineNumber: 177,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-app-text/50 mt-1 text-center", children: "You're all caught up! New notifications will appear here." }, void 0, false, {
        fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
        lineNumber: 178,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
      lineNumber: 173,
      columnNumber: 9
    }, this) : /* @__PURE__ */ jsxDEV("div", { className: "divide-y divide-app-border", children: notifications.map(
      (notification) => /* @__PURE__ */ jsxDEV(
        "div",
        {
          onClick: () => handleNotificationClick(notification),
          className: `p-4 hover:bg-app-bg transition-colors cursor-pointer group relative ${!notification.isRead ? "bg-orange-50/50 dark:bg-orange-950/20" : ""}`,
          children: [
            !notification.isRead && /* @__PURE__ */ jsxDEV("div", { className: "absolute left-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full" }, void 0, false, {
              fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
              lineNumber: 194,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3 pl-3", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0", children: notification.fromUserName.charAt(0) }, void 0, false, {
                fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
                lineNumber: 199,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2 mb-1", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "flex-1", children: /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-app-text", children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "font-semibold", children: notification.fromUserName }, void 0, false, {
                      fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
                      lineNumber: 208,
                      columnNumber: 27
                    }, this),
                    " ",
                    /* @__PURE__ */ jsxDEV("span", { className: "text-app-text/70", children: getNotificationText(notification.type) }, void 0, false, {
                      fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
                      lineNumber: 210,
                      columnNumber: 27
                    }, this),
                    " ",
                    /* @__PURE__ */ jsxDEV("span", { className: "font-medium", children: notification.carName }, void 0, false, {
                      fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
                      lineNumber: 214,
                      columnNumber: 27
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
                    lineNumber: 207,
                    columnNumber: 25
                  }, this) }, void 0, false, {
                    fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
                    lineNumber: 206,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1 flex-shrink-0", children: getNotificationIcon(notification.type) }, void 0, false, {
                    fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
                    lineNumber: 217,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
                  lineNumber: 205,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-app-text/80 bg-app-bg rounded px-2 py-1.5 mb-2 line-clamp-2", children: [
                  '"',
                  truncateContent(notification.content),
                  '"'
                ] }, void 0, true, {
                  fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
                  lineNumber: 223,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxDEV(
                      "img",
                      {
                        src: notification.carImage,
                        alt: notification.carName,
                        className: "w-12 h-9 rounded object-cover border border-app-border"
                      },
                      void 0,
                      false,
                      {
                        fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
                        lineNumber: 231,
                        columnNumber: 25
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-app-text/50", children: formatTime(notification.timestamp) }, void 0, false, {
                      fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
                      lineNumber: 236,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
                    lineNumber: 229,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      onClick: (e) => handleDeleteNotification(e, notification.id),
                      className: "opacity-0 group-hover:opacity-100 transition-opacity p-1.5 hover:bg-red-50 dark:hover:bg-red-950/30 rounded",
                      title: "Delete notification",
                      children: /* @__PURE__ */ jsxDEV(X, { className: "w-4 h-4 text-red-600" }, void 0, false, {
                        fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
                        lineNumber: 247,
                        columnNumber: 25
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
                      lineNumber: 242,
                      columnNumber: 23
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
                  lineNumber: 228,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
                lineNumber: 204,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
              lineNumber: 197,
              columnNumber: 17
            }, this)
          ]
        },
        notification.id,
        true,
        {
          fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
          lineNumber: 185,
          columnNumber: 11
        },
        this
      )
    ) }, void 0, false, {
      fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
      lineNumber: 183,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
      lineNumber: 171,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/usr/src/workspace/src/components/NotificationDropdown.tsx",
    lineNumber: 135,
    columnNumber: 5
  }, this);
}
_s(NotificationDropdown, "A9J1C/TtszyziyJOQiNA5bxsD50=", false, function() {
  return [useNavigate, useToast];
});
_c = NotificationDropdown;
var _c;
$RefreshReg$(_c, "NotificationDropdown");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/usr/src/workspace/src/components/NotificationDropdown.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/usr/src/workspace/src/components/NotificationDropdown.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUE7QUFBQSxxQkE4Q0E7QUFBQSxpQkFyREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFzREE7QUFBQTtBQUFBO0FBQUEsUUFqRUtGLGFBQWFFO0FBQUFBLFFBRHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFtRUE7QUFBQSxJQUNELEtBdEVIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0F1RUEsS0FuRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQXFGQTtBQUFBLE9BekhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0EwSEE7QUFFSjtBQUFDWCxHQXBPdUJELHNCQUFvQjtBQUFBLFVBRXpCWixhQUNDVSxRQUFRO0FBQUE7QUFBQTBELEtBSEp4RDtBQUFvQixJQUFBd0Q7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlTmF2aWdhdGUiLCJNZXNzYWdlU3F1YXJlIiwiUmVwbHkiLCJNYWlsIiwiWCIsIkNoZWNrIiwiVHJhc2gyIiwiQnV0dG9uIiwiU2Nyb2xsQXJlYSIsImRiIiwidXNlVG9hc3QiLCJDVVJSRU5UX1VTRVJfSUQiLCJOb3RpZmljYXRpb25Ecm9wZG93biIsIl9zIiwibm90aWZpY2F0aW9ucyIsInNldE5vdGlmaWNhdGlvbnMiLCJuYXZpZ2F0ZSIsInRvYXN0IiwibG9hZE5vdGlmaWNhdGlvbnMiLCJub3RpZnMiLCJnZXROb3RpZmljYXRpb25zIiwiaGFuZGxlTm90aWZpY2F0aW9uQ2xpY2siLCJub3RpZmljYXRpb24iLCJtYXJrTm90aWZpY2F0aW9uQXNSZWFkIiwiaWQiLCJ0eXBlIiwiY2FySWQiLCJ0YXJnZXRJZCIsImhhbmRsZU1hcmtBbGxBc1JlYWQiLCJtYXJrQWxsTm90aWZpY2F0aW9uc0FzUmVhZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJoYW5kbGVEZWxldGVOb3RpZmljYXRpb24iLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiZGVsZXRlTm90aWZpY2F0aW9uIiwiaGFuZGxlQ2xlYXJBbGwiLCJjbGVhckFsbE5vdGlmaWNhdGlvbnMiLCJmb3JtYXRUaW1lIiwidGltZXN0YW1wIiwiZGF0ZSIsIkRhdGUiLCJub3ciLCJkaWZmIiwiZ2V0VGltZSIsIm1pbnV0ZXMiLCJNYXRoIiwiZmxvb3IiLCJob3VycyIsImRheXMiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJtb250aCIsImRheSIsImdldE5vdGlmaWNhdGlvbkljb24iLCJnZXROb3RpZmljYXRpb25UZXh0IiwidHJ1bmNhdGVDb250ZW50IiwiY29udGVudCIsIm1heExlbmd0aCIsImxlbmd0aCIsInN1YnN0cmluZyIsImZpbHRlciIsIm4iLCJpc1JlYWQiLCJtYXAiLCJmcm9tVXNlck5hbWUiLCJjaGFyQXQiLCJjYXJOYW1lIiwiY2FySW1hZ2UiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJOb3RpZmljYXRpb25Ecm9wZG93bi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgTWVzc2FnZVNxdWFyZSwgUmVwbHksIE1haWwsIFgsIENoZWNrLCBUcmFzaDIgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2J1dHRvbic7XG5pbXBvcnQgeyBTY3JvbGxBcmVhIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL3Njcm9sbC1hcmVhJztcbmltcG9ydCB7IFNlcGFyYXRvciB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9zZXBhcmF0b3InO1xuaW1wb3J0IHsgZGIsIE5vdGlmaWNhdGlvbiB9IGZyb20gJ0AvbGliL2RhdGFiYXNlJztcbmltcG9ydCB7IHVzZVRvYXN0IH0gZnJvbSAnQC9ob29rcy91c2UtdG9hc3QnO1xuXG5jb25zdCBDVVJSRU5UX1VTRVJfSUQgPSAndXNlcl8xMjMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RpZmljYXRpb25Ecm9wZG93bigpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCBbbm90aWZpY2F0aW9ucywgc2V0Tm90aWZpY2F0aW9uc10gPSB1c2VTdGF0ZTxOb3RpZmljYXRpb25bXT4oW10pO1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IHsgdG9hc3QgfSA9IHVzZVRvYXN0KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2FkTm90aWZpY2F0aW9ucygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgbG9hZE5vdGlmaWNhdGlvbnMgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3Qgbm90aWZzID0gZGIuZ2V0Tm90aWZpY2F0aW9ucyhDVVJSRU5UX1VTRVJfSUQpO1xuICAgIHNldE5vdGlmaWNhdGlvbnMobm90aWZzKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVOb3RpZmljYXRpb25DbGljayA9IChub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbik6IHZvaWQgPT4ge1xuICAgIC8vIE1hcmsgYXMgcmVhZFxuICAgIGRiLm1hcmtOb3RpZmljYXRpb25Bc1JlYWQobm90aWZpY2F0aW9uLmlkKTtcbiAgICBsb2FkTm90aWZpY2F0aW9ucygpO1xuXG4gICAgLy8gTmF2aWdhdGUgdG8gY2FyIGRldGFpbHMgcGFnZSB3aXRoIGhhc2ggdG8gc2Nyb2xsIHRvIGVsZW1lbnRcbiAgICBpZiAobm90aWZpY2F0aW9uLnR5cGUgPT09ICdtZXNzYWdlJykge1xuICAgICAgbmF2aWdhdGUoYC9jYXIvJHtub3RpZmljYXRpb24uY2FySWR9I21lc3NhZ2UtJHtub3RpZmljYXRpb24udGFyZ2V0SWR9YCk7XG4gICAgfSBlbHNlIGlmIChub3RpZmljYXRpb24udHlwZSA9PT0gJ2NvbW1lbnQnKSB7XG4gICAgICBuYXZpZ2F0ZShgL2Nhci8ke25vdGlmaWNhdGlvbi5jYXJJZH0jY29tbWVudC0ke25vdGlmaWNhdGlvbi50YXJnZXRJZH1gKTtcbiAgICB9IGVsc2UgaWYgKG5vdGlmaWNhdGlvbi50eXBlID09PSAncmVwbHknKSB7XG4gICAgICBuYXZpZ2F0ZShgL2Nhci8ke25vdGlmaWNhdGlvbi5jYXJJZH0jcmVwbHktJHtub3RpZmljYXRpb24udGFyZ2V0SWR9YCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1hcmtBbGxBc1JlYWQgPSAoKTogdm9pZCA9PiB7XG4gICAgZGIubWFya0FsbE5vdGlmaWNhdGlvbnNBc1JlYWQoQ1VSUkVOVF9VU0VSX0lEKTtcbiAgICBsb2FkTm90aWZpY2F0aW9ucygpO1xuICAgIHRvYXN0KHtcbiAgICAgIHRpdGxlOiAnQWxsIG5vdGlmaWNhdGlvbnMgbWFya2VkIGFzIHJlYWQnLFxuICAgICAgZGVzY3JpcHRpb246ICdZb3VyIG5vdGlmaWNhdGlvbnMgaGF2ZSBiZWVuIHVwZGF0ZWQnXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlTm90aWZpY2F0aW9uID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQsIGlkOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGRiLmRlbGV0ZU5vdGlmaWNhdGlvbihpZCk7XG4gICAgbG9hZE5vdGlmaWNhdGlvbnMoKTtcbiAgICB0b2FzdCh7XG4gICAgICB0aXRsZTogJ05vdGlmaWNhdGlvbiBkZWxldGVkJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIG5vdGlmaWNhdGlvbiBoYXMgYmVlbiByZW1vdmVkJ1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsZWFyQWxsID0gKCk6IHZvaWQgPT4ge1xuICAgIGRiLmNsZWFyQWxsTm90aWZpY2F0aW9ucyhDVVJSRU5UX1VTRVJfSUQpO1xuICAgIGxvYWROb3RpZmljYXRpb25zKCk7XG4gICAgdG9hc3Qoe1xuICAgICAgdGl0bGU6ICdBbGwgbm90aWZpY2F0aW9ucyBjbGVhcmVkJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnWW91ciBub3RpZmljYXRpb24gbGlzdCBoYXMgYmVlbiBjbGVhcmVkJ1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGZvcm1hdFRpbWUgPSAodGltZXN0YW1wOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXApO1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGlmZiA9IG5vdy5nZXRUaW1lKCkgLSBkYXRlLmdldFRpbWUoKTtcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcihkaWZmIC8gKDEwMDAgKiA2MCkpO1xuICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihkaWZmIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IoZGlmZiAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgXG4gICAgaWYgKG1pbnV0ZXMgPCAxKSByZXR1cm4gJ0p1c3Qgbm93JztcbiAgICBpZiAobWludXRlcyA8IDYwKSByZXR1cm4gYCR7bWludXRlc31tIGFnb2A7XG4gICAgaWYgKGhvdXJzIDwgMjQpIHJldHVybiBgJHtob3Vyc31oIGFnb2A7XG4gICAgaWYgKGRheXMgPCA3KSByZXR1cm4gYCR7ZGF5c31kIGFnb2A7XG4gICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHsgbW9udGg6ICdzaG9ydCcsIGRheTogJ251bWVyaWMnIH0pO1xuICB9O1xuXG4gIGNvbnN0IGdldE5vdGlmaWNhdGlvbkljb24gPSAodHlwZTogc3RyaW5nKTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ21lc3NhZ2UnOlxuICAgICAgICByZXR1cm4gPE1haWwgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWJsdWUtNTAwXCIgLz47XG4gICAgICBjYXNlICdjb21tZW50JzpcbiAgICAgICAgcmV0dXJuIDxNZXNzYWdlU3F1YXJlIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1ncmVlbi01MDBcIiAvPjtcbiAgICAgIGNhc2UgJ3JlcGx5JzpcbiAgICAgICAgcmV0dXJuIDxSZXBseSBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtcHVycGxlLTUwMFwiIC8+O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDxNZXNzYWdlU3F1YXJlIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1hcHAtdGV4dC83MFwiIC8+O1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXROb3RpZmljYXRpb25UZXh0ID0gKHR5cGU6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdtZXNzYWdlJzpcbiAgICAgICAgcmV0dXJuICdzZW50IHlvdSBhIG1lc3NhZ2UnO1xuICAgICAgY2FzZSAnY29tbWVudCc6XG4gICAgICAgIHJldHVybiAnY29tbWVudGVkIG9uJztcbiAgICAgIGNhc2UgJ3JlcGx5JzpcbiAgICAgICAgcmV0dXJuICdyZXBsaWVkIHRvIHlvdXIgY29tbWVudCBvbic7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ2ludGVyYWN0ZWQgd2l0aCc7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHRydW5jYXRlQ29udGVudCA9IChjb250ZW50OiBzdHJpbmcsIG1heExlbmd0aDogbnVtYmVyID0gNjApOiBzdHJpbmcgPT4ge1xuICAgIGlmIChjb250ZW50Lmxlbmd0aCA8PSBtYXhMZW5ndGgpIHJldHVybiBjb250ZW50O1xuICAgIHJldHVybiBjb250ZW50LnN1YnN0cmluZygwLCBtYXhMZW5ndGgpICsgJy4uLic7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctOTYgbWF4LXctW2NhbGMoMTAwdnctMnJlbSldIGJnLWFwcC1zdXJmYWNlIGJvcmRlciBib3JkZXItYXBwLWJvcmRlciByb3VuZGVkLXhsIHNoYWRvdy14bCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWFwcC1iZyBib3JkZXItYiBib3JkZXItYXBwLWJvcmRlciBweC00IHB5LTNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItMlwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LWFwcC10ZXh0XCI+Tm90aWZpY2F0aW9uczwvaDM+XG4gICAgICAgICAge25vdGlmaWNhdGlvbnMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxuICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTWFya0FsbEFzUmVhZH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTcgdGV4dC14c1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2hlY2sgY2xhc3NOYW1lPVwidy0zIGgtMyBtci0xXCIgLz5cbiAgICAgICAgICAgICAgICBNYXJrIGFsbCByZWFkXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCJcbiAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsZWFyQWxsfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNyB0ZXh0LXhzIHRleHQtcmVkLTYwMCBob3Zlcjp0ZXh0LXJlZC03MDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRyYXNoMiBjbGFzc05hbWU9XCJ3LTMgaC0zIG1yLTFcIiAvPlxuICAgICAgICAgICAgICAgIENsZWFyIGFsbFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7bm90aWZpY2F0aW9ucy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtYXBwLXRleHQvNzBcIj5cbiAgICAgICAgICAgIHtub3RpZmljYXRpb25zLmZpbHRlcihuID0+ICFuLmlzUmVhZCkubGVuZ3RofSB1bnJlYWRcbiAgICAgICAgICA8L3A+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIE5vdGlmaWNhdGlvbnMgTGlzdCAqL31cbiAgICAgIDxTY3JvbGxBcmVhIGNsYXNzTmFtZT1cImgtWzUwMHB4XVwiPlxuICAgICAgICB7bm90aWZpY2F0aW9ucy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS0xMiBweC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTYgaC0xNiBiZy1hcHAtYmcgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1iLTNcIj5cbiAgICAgICAgICAgICAgPE1lc3NhZ2VTcXVhcmUgY2xhc3NOYW1lPVwidy04IGgtOCB0ZXh0LWFwcC10ZXh0LzQwXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWFwcC10ZXh0LzcwXCI+Tm8gbm90aWZpY2F0aW9uczwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1hcHAtdGV4dC81MCBtdC0xIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIFlvdSdyZSBhbGwgY2F1Z2h0IHVwISBOZXcgbm90aWZpY2F0aW9ucyB3aWxsIGFwcGVhciBoZXJlLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlLXkgZGl2aWRlLWFwcC1ib3JkZXJcIj5cbiAgICAgICAgICAgIHtub3RpZmljYXRpb25zLm1hcCgobm90aWZpY2F0aW9uKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e25vdGlmaWNhdGlvbi5pZH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVOb3RpZmljYXRpb25DbGljayhub3RpZmljYXRpb24pfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHAtNCBob3ZlcjpiZy1hcHAtYmcgdHJhbnNpdGlvbi1jb2xvcnMgY3Vyc29yLXBvaW50ZXIgZ3JvdXAgcmVsYXRpdmUgJHtcbiAgICAgICAgICAgICAgICAgICFub3RpZmljYXRpb24uaXNSZWFkID8gJ2JnLW9yYW5nZS01MC81MCBkYXJrOmJnLW9yYW5nZS05NTAvMjAnIDogJydcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsvKiBVbnJlYWQgSW5kaWNhdG9yICovfVxuICAgICAgICAgICAgICAgIHshbm90aWZpY2F0aW9uLmlzUmVhZCAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMiB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzIgdy0yIGgtMiBiZy1vcmFuZ2UtNTAwIHJvdW5kZWQtZnVsbFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTMgcGwtM1wiPlxuICAgICAgICAgICAgICAgICAgey8qIFVzZXIgQXZhdGFyICovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1ibHVlLTQwMCB0by1ibHVlLTUwMCByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC1zbSBmbGV4LXNocmluay0wXCI+XG4gICAgICAgICAgICAgICAgICAgIHtub3RpZmljYXRpb24uZnJvbVVzZXJOYW1lLmNoYXJBdCgwKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICB7LyogQ29udGVudCAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG1pbi13LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0yIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWFwcC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj57bm90aWZpY2F0aW9uLmZyb21Vc2VyTmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYXBwLXRleHQvNzBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0Tm90aWZpY2F0aW9uVGV4dChub3RpZmljYXRpb24udHlwZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj57bm90aWZpY2F0aW9uLmNhck5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgZmxleC1zaHJpbmstMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2dldE5vdGlmaWNhdGlvbkljb24obm90aWZpY2F0aW9uLnR5cGUpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7LyogTWVzc2FnZS9Db21tZW50IFByZXZpZXcgKi99XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1hcHAtdGV4dC84MCBiZy1hcHAtYmcgcm91bmRlZCBweC0yIHB5LTEuNSBtYi0yIGxpbmUtY2xhbXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIFwie3RydW5jYXRlQ29udGVudChub3RpZmljYXRpb24uY29udGVudCl9XCJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBGb290ZXIgKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIENhciBUaHVtYm5haWwgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bm90aWZpY2F0aW9uLmNhckltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e25vdGlmaWNhdGlvbi5jYXJOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEyIGgtOSByb3VuZGVkIG9iamVjdC1jb3ZlciBib3JkZXIgYm9yZGVyLWFwcC1ib3JkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1hcHAtdGV4dC81MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0VGltZShub3RpZmljYXRpb24udGltZXN0YW1wKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBEZWxldGUgQnV0dG9uICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVEZWxldGVOb3RpZmljYXRpb24oZSwgbm90aWZpY2F0aW9uLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9wYWNpdHktMCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCB0cmFuc2l0aW9uLW9wYWNpdHkgcC0xLjUgaG92ZXI6YmctcmVkLTUwIGRhcms6aG92ZXI6YmctcmVkLTk1MC8zMCByb3VuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRGVsZXRlIG5vdGlmaWNhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFggY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LXJlZC02MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9TY3JvbGxBcmVhPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sImZpbGUiOiIvdXNyL3NyYy93b3Jrc3BhY2Uvc3JjL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uRHJvcGRvd24udHN4In0=