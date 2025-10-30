import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/QuickActionsSheet.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1ac3b587"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/usr/src/workspace/src/components/QuickActionsSheet.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { Heart, Share2, Calendar, MapPin, Phone, Mail, AlertCircle } from "/node_modules/.vite/deps/lucide-react.js?v=1ac3b587";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "/src/components/ui/drawer.tsx";
import { Button } from "/src/components/ui/button.tsx";
export default function QuickActionsSheet({
  car,
  isOpen,
  onClose,
  onToggleFavorite
}) {
  if (!car) return /* @__PURE__ */ jsxDEV(Fragment, {}, void 0, false, {
    fileName: "/usr/src/workspace/src/components/QuickActionsSheet.tsx",
    lineNumber: 39,
    columnNumber: 20
  }, this);
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: car.name,
          text: `Check out this ${car.name} for $${car.price.toLocaleString()}`,
          url: window.location.href
        });
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          console.error("Error sharing:", error);
        }
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };
  const handleScheduleViewing = () => {
    alert("Schedule viewing feature coming soon!");
    onClose();
  };
  const handleContactSeller = () => {
    alert("Contact seller feature coming soon!");
    onClose();
  };
  const handleReportIssue = () => {
    alert("Report issue feature coming soon!");
    onClose();
  };
  return /* @__PURE__ */ jsxDEV(Drawer, { open: isOpen, onOpenChange: onClose, children: /* @__PURE__ */ jsxDEV(DrawerContent, { children: [
    /* @__PURE__ */ jsxDEV(DrawerHeader, { className: "border-b border-gray-200 pb-4", children: [
      /* @__PURE__ */ jsxDEV(DrawerTitle, { className: "text-base font-bold text-gray-900", children: "Quick Actions" }, void 0, false, {
        fileName: "/usr/src/workspace/src/components/QuickActionsSheet.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-gray-600 mt-1", children: car.name }, void 0, false, {
        fileName: "/usr/src/workspace/src/components/QuickActionsSheet.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/usr/src/workspace/src/components/QuickActionsSheet.tsx",
      lineNumber: 79,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "p-4 space-y-2", children: [
      /* @__PURE__ */ jsxDEV(
        Button,
        {
          variant: "outline",
          className: "w-full justify-start gap-3 h-12 text-sm font-semibold",
          onClick: () => {
            onToggleFavorite(car.id);
            onClose();
          },
          children: [
            /* @__PURE__ */ jsxDEV(
              Heart,
              {
                className: `w-5 h-5 ${car.isFavorite ? "fill-orange-500 text-orange-500" : "text-gray-700"}`
              },
              void 0,
              false,
              {
                fileName: "/usr/src/workspace/src/components/QuickActionsSheet.tsx",
                lineNumber: 96,
                columnNumber: 13
              },
              this
            ),
            car.isFavorite ? "Remove from Favorites" : "Add to Favorites"
          ]
        },
        void 0,
        true,
        {
          fileName: "/usr/src/workspace/src/components/QuickActionsSheet.tsx",
          lineNumber: 88,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        Button,
        {
          variant: "outline",
          className: "w-full justify-start gap-3 h-12 text-sm font-semibold",
          onClick: handleShare,
          children: [
            /* @__PURE__ */ jsxDEV(Share2, { className: "w-5 h-5 text-gray-700" }, void 0, false, {
              fileName: "/usr/src/workspace/src/components/QuickActionsSheet.tsx",
              lineNumber: 108,
              columnNumber: 13
            }, this),
            "Share this car"
          ]
        },
        void 0,
        true,
        {
          fileName: "/usr/src/workspace/src/components/QuickActionsSheet.tsx",
          lineNumber: 103,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        Button,
        {
          variant: "outline",
          className: "w-full justify-start gap-3 h-12 text-sm font-semibold",
          onClick: handleScheduleViewing,
          children: [
            /* @__PURE__ */ jsxDEV(Calendar, { className: "w-5 h-5 text-gray-700" }, void 0, false, {
              fileName: "/usr/src/workspace/src/components/QuickActionsSheet.tsx",
              lineNumber: 118,
              columnNumber: 13
            }, this),
            "Schedule a viewing"
          ]
        },
        void 0,
        true,
        {
          fileName: "/usr/src/workspace/src/components/QuickActionsSheet.tsx",
          lineNumber: 113,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        Button,
        {
          variant: "outline",
          className: "w-full justify-start gap-3 h-12 text-sm font-semibold",
          children: [
            /* @__PURE__ */ jsxDEV(MapPin, { className: "w-5 h-5 text-gray-700" }, void 0, false, {
              fileName: "/usr/src/workspace/src/components/QuickActionsSheet.tsx",
              lineNumber: 127,
              columnNumber: 13
            }, this),
            "View location: ",
            car.location
          ]
        },
        void 0,
        true,
        {
          fileName: "/usr/src/workspace/src/components/QuickActionsSheet.tsx",
          lineNumber: 123,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        Button,
        {
          variant: "outline",
          className: "w-full justify-start gap-3 h-12 text-sm font-semibold",
          onClick: handleContactSeller,
          children: [
            /* @__PURE__ */ jsxDEV(Phone, { className: "w-5 h-5 text-gray-700" }, void 0, false, {
              fileName: "/usr/src/workspace/src/components/QuickActionsSheet.tsx",
              lineNumber: 137,
              columnNumber: 13
            }, this),
            "Contact seller"
          ]
        },
        void 0,
        true,
        {
          fileName: "/usr/src/workspace/src/components/QuickActionsSheet.tsx",
          lineNumber: 132,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        Button,
        {
          variant: "outline",
          className: "w-full justify-start gap-3 h-12 text-sm font-semibold",
          children: [
            /* @__PURE__ */ jsxDEV(Mail, { className: "w-5 h-5 text-gray-700" }, void 0, false, {
              fileName: "/usr/src/workspace/src/components/QuickActionsSheet.tsx",
              lineNumber: 146,
              columnNumber: 13
            }, this),
            "Email seller"
          ]
        },
        void 0,
        true,
        {
          fileName: "/usr/src/workspace/src/components/QuickActionsSheet.tsx",
          lineNumber: 142,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        Button,
        {
          variant: "outline",
          className: "w-full justify-start gap-3 h-12 text-sm font-semibold text-red-600 border-red-200 hover:bg-red-50",
          onClick: handleReportIssue,
          children: [
            /* @__PURE__ */ jsxDEV(AlertCircle, { className: "w-5 h-5 text-red-600" }, void 0, false, {
              fileName: "/usr/src/workspace/src/components/QuickActionsSheet.tsx",
              lineNumber: 156,
              columnNumber: 13
            }, this),
            "Report an issue"
          ]
        },
        void 0,
        true,
        {
          fileName: "/usr/src/workspace/src/components/QuickActionsSheet.tsx",
          lineNumber: 151,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/usr/src/workspace/src/components/QuickActionsSheet.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/usr/src/workspace/src/components/QuickActionsSheet.tsx",
    lineNumber: 78,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/usr/src/workspace/src/components/QuickActionsSheet.tsx",
    lineNumber: 77,
    columnNumber: 5
  }, this);
}
_c = QuickActionsSheet;
var _c;
$RefreshReg$(_c, "QuickActionsSheet");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/usr/src/workspace/src/components/QuickActionsSheet.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/usr/src/workspace/src/components/QuickActionsSheet.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QTtBQUFBO0FBQUE7QUFBQSxtQkFBNkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUwvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPQTtBQUFBLFNBeEVGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0F5RUE7QUFBQSxPQWpGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBa0ZBLEtBbkZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FvRkE7QUFFSjtBQUFDRyxLQWxJdUI1QjtBQUFpQixJQUFBNEI7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIkhlYXJ0IiwiU2hhcmUyIiwiQ2FsZW5kYXIiLCJNYXBQaW4iLCJQaG9uZSIsIk1haWwiLCJBbGVydENpcmNsZSIsIkRyYXdlciIsIkRyYXdlckNvbnRlbnQiLCJEcmF3ZXJIZWFkZXIiLCJEcmF3ZXJUaXRsZSIsIkJ1dHRvbiIsIlF1aWNrQWN0aW9uc1NoZWV0IiwiY2FyIiwiaXNPcGVuIiwib25DbG9zZSIsIm9uVG9nZ2xlRmF2b3JpdGUiLCJoYW5kbGVTaGFyZSIsIm5hdmlnYXRvciIsInNoYXJlIiwidGl0bGUiLCJuYW1lIiwidGV4dCIsInByaWNlIiwidG9Mb2NhbGVTdHJpbmciLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJlcnJvciIsIkVycm9yIiwiY29uc29sZSIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImFsZXJ0IiwiaGFuZGxlU2NoZWR1bGVWaWV3aW5nIiwiaGFuZGxlQ29udGFjdFNlbGxlciIsImhhbmRsZVJlcG9ydElzc3VlIiwiaWQiLCJpc0Zhdm9yaXRlIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiUXVpY2tBY3Rpb25zU2hlZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBIZWFydCwgU2hhcmUyLCBDYWxlbmRhciwgTWFwUGluLCBQaG9uZSwgTWFpbCwgQWxlcnRDaXJjbGUgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgRHJhd2VyLCBEcmF3ZXJDb250ZW50LCBEcmF3ZXJIZWFkZXIsIERyYXdlclRpdGxlIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2RyYXdlcic7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvYnV0dG9uJztcbmltcG9ydCB7IENhciB9IGZyb20gJ0AvbGliL2RhdGFiYXNlJztcblxuaW50ZXJmYWNlIFF1aWNrQWN0aW9uc1NoZWV0UHJvcHMge1xuICBjYXI6IENhciB8IG51bGw7XG4gIGlzT3BlbjogYm9vbGVhbjtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbiAgb25Ub2dnbGVGYXZvcml0ZTogKGNhcklkOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1aWNrQWN0aW9uc1NoZWV0KHtcbiAgY2FyLFxuICBpc09wZW4sXG4gIG9uQ2xvc2UsXG4gIG9uVG9nZ2xlRmF2b3JpdGUsXG59OiBRdWlja0FjdGlvbnNTaGVldFByb3BzKTogSlNYLkVsZW1lbnQge1xuICBpZiAoIWNhcikgcmV0dXJuIDw+PC8+O1xuXG4gIGNvbnN0IGhhbmRsZVNoYXJlID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGlmIChuYXZpZ2F0b3Iuc2hhcmUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IG5hdmlnYXRvci5zaGFyZSh7XG4gICAgICAgICAgdGl0bGU6IGNhci5uYW1lLFxuICAgICAgICAgIHRleHQ6IGBDaGVjayBvdXQgdGhpcyAke2Nhci5uYW1lfSBmb3IgJCR7Y2FyLnByaWNlLnRvTG9jYWxlU3RyaW5nKCl9YCxcbiAgICAgICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIGVycm9yLm5hbWUgIT09ICdBYm9ydEVycm9yJykge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNoYXJpbmc6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZhbGxiYWNrOiBjb3B5IHRvIGNsaXBib2FyZFxuICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgYWxlcnQoJ0xpbmsgY29waWVkIHRvIGNsaXBib2FyZCEnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2NoZWR1bGVWaWV3aW5nID0gKCk6IHZvaWQgPT4ge1xuICAgIGFsZXJ0KCdTY2hlZHVsZSB2aWV3aW5nIGZlYXR1cmUgY29taW5nIHNvb24hJyk7XG4gICAgb25DbG9zZSgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNvbnRhY3RTZWxsZXIgPSAoKTogdm9pZCA9PiB7XG4gICAgYWxlcnQoJ0NvbnRhY3Qgc2VsbGVyIGZlYXR1cmUgY29taW5nIHNvb24hJyk7XG4gICAgb25DbG9zZSgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVJlcG9ydElzc3VlID0gKCk6IHZvaWQgPT4ge1xuICAgIGFsZXJ0KCdSZXBvcnQgaXNzdWUgZmVhdHVyZSBjb21pbmcgc29vbiEnKTtcbiAgICBvbkNsb3NlKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RHJhd2VyIG9wZW49e2lzT3Blbn0gb25PcGVuQ2hhbmdlPXtvbkNsb3NlfT5cbiAgICAgIDxEcmF3ZXJDb250ZW50PlxuICAgICAgICA8RHJhd2VySGVhZGVyIGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBwYi00XCI+XG4gICAgICAgICAgPERyYXdlclRpdGxlIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LWJvbGQgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgUXVpY2sgQWN0aW9uc1xuICAgICAgICAgIDwvRHJhd2VyVGl0bGU+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNjAwIG10LTFcIj57Y2FyLm5hbWV9PC9wPlxuICAgICAgICA8L0RyYXdlckhlYWRlcj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBzcGFjZS15LTJcIj5cbiAgICAgICAgICB7LyogVG9nZ2xlIEZhdm9yaXRlICovfVxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBqdXN0aWZ5LXN0YXJ0IGdhcC0zIGgtMTIgdGV4dC1zbSBmb250LXNlbWlib2xkXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgb25Ub2dnbGVGYXZvcml0ZShjYXIuaWQpO1xuICAgICAgICAgICAgICBvbkNsb3NlKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxIZWFydFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTUgaC01ICR7Y2FyLmlzRmF2b3JpdGUgPyAnZmlsbC1vcmFuZ2UtNTAwIHRleHQtb3JhbmdlLTUwMCcgOiAndGV4dC1ncmF5LTcwMCd9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7Y2FyLmlzRmF2b3JpdGUgPyAnUmVtb3ZlIGZyb20gRmF2b3JpdGVzJyA6ICdBZGQgdG8gRmF2b3JpdGVzJ31cbiAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgIHsvKiBTaGFyZSAqL31cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwganVzdGlmeS1zdGFydCBnYXAtMyBoLTEyIHRleHQtc20gZm9udC1zZW1pYm9sZFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTaGFyZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U2hhcmUyIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1ncmF5LTcwMFwiIC8+XG4gICAgICAgICAgICBTaGFyZSB0aGlzIGNhclxuICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgey8qIFNjaGVkdWxlIFZpZXdpbmcgKi99XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGp1c3RpZnktc3RhcnQgZ2FwLTMgaC0xMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2NoZWR1bGVWaWV3aW5nfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDYWxlbmRhciBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtZ3JheS03MDBcIiAvPlxuICAgICAgICAgICAgU2NoZWR1bGUgYSB2aWV3aW5nXG4gICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICB7LyogVmlldyBMb2NhdGlvbiAqL31cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwganVzdGlmeS1zdGFydCBnYXAtMyBoLTEyIHRleHQtc20gZm9udC1zZW1pYm9sZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE1hcFBpbiBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtZ3JheS03MDBcIiAvPlxuICAgICAgICAgICAgVmlldyBsb2NhdGlvbjoge2Nhci5sb2NhdGlvbn1cbiAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgIHsvKiBDb250YWN0IFNlbGxlciAqL31cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwganVzdGlmeS1zdGFydCBnYXAtMyBoLTEyIHRleHQtc20gZm9udC1zZW1pYm9sZFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDb250YWN0U2VsbGVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQaG9uZSBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtZ3JheS03MDBcIiAvPlxuICAgICAgICAgICAgQ29udGFjdCBzZWxsZXJcbiAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgIHsvKiBFbWFpbCBTZWxsZXIgKi99XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGp1c3RpZnktc3RhcnQgZ2FwLTMgaC0xMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxNYWlsIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1ncmF5LTcwMFwiIC8+XG4gICAgICAgICAgICBFbWFpbCBzZWxsZXJcbiAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgIHsvKiBSZXBvcnQgSXNzdWUgKi99XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGp1c3RpZnktc3RhcnQgZ2FwLTMgaC0xMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1yZWQtNjAwIGJvcmRlci1yZWQtMjAwIGhvdmVyOmJnLXJlZC01MFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVSZXBvcnRJc3N1ZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QWxlcnRDaXJjbGUgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LXJlZC02MDBcIiAvPlxuICAgICAgICAgICAgUmVwb3J0IGFuIGlzc3VlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9EcmF3ZXJDb250ZW50PlxuICAgIDwvRHJhd2VyPlxuICApO1xufVxuIl0sImZpbGUiOiIvdXNyL3NyYy93b3Jrc3BhY2Uvc3JjL2NvbXBvbmVudHMvUXVpY2tBY3Rpb25zU2hlZXQudHN4In0=