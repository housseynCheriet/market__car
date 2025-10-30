import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/dialog.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1ac3b587"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/usr/src/workspace/src/components/ui/dialog.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
"use client";
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=1ac3b587"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import * as DialogPrimitive from "/node_modules/.vite/deps/@radix-ui_react-dialog.js?v=1ac3b587";
import { X } from "/node_modules/.vite/deps/lucide-react.js?v=1ac3b587";
import { cn } from "/src/lib/utils.ts";
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;
const DialogOverlay = React.forwardRef(
  _c = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    DialogPrimitive.Overlay,
    {
      ref,
      className: cn(
        "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/usr/src/workspace/src/components/ui/dialog.tsx",
      lineNumber: 40,
      columnNumber: 1
    },
    this
  )
);
_c2 = DialogOverlay;
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(
  _c3 = ({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV(DialogPortal, { children: [
    /* @__PURE__ */ jsxDEV(DialogOverlay, {}, void 0, false, {
      fileName: "/usr/src/workspace/src/components/ui/dialog.tsx",
      lineNumber: 56,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV(
      DialogPrimitive.Content,
      {
        ref,
        className: cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          className
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxDEV(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
            /* @__PURE__ */ jsxDEV(X, { className: "h-4 w-4" }, void 0, false, {
              fileName: "/usr/src/workspace/src/components/ui/dialog.tsx",
              lineNumber: 67,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "sr-only", children: "Close" }, void 0, false, {
              fileName: "/usr/src/workspace/src/components/ui/dialog.tsx",
              lineNumber: 68,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "/usr/src/workspace/src/components/ui/dialog.tsx",
            lineNumber: 66,
            columnNumber: 7
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/usr/src/workspace/src/components/ui/dialog.tsx",
        lineNumber: 57,
        columnNumber: 5
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/usr/src/workspace/src/components/ui/dialog.tsx",
    lineNumber: 55,
    columnNumber: 1
  }, this)
);
_c4 = DialogContent;
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxDEV(
  "div",
  {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/usr/src/workspace/src/components/ui/dialog.tsx",
    lineNumber: 79,
    columnNumber: 1
  },
  this
);
_c5 = DialogHeader;
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxDEV(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/usr/src/workspace/src/components/ui/dialog.tsx",
    lineNumber: 93,
    columnNumber: 1
  },
  this
);
_c6 = DialogFooter;
DialogFooter.displayName = "DialogFooter";
const DialogTitle = React.forwardRef(
  _c7 = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    DialogPrimitive.Title,
    {
      ref,
      className: cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/usr/src/workspace/src/components/ui/dialog.tsx",
      lineNumber: 107,
      columnNumber: 1
    },
    this
  )
);
_c8 = DialogTitle;
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(
  _c9 = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    DialogPrimitive.Description,
    {
      ref,
      className: cn("text-sm text-muted-foreground", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/usr/src/workspace/src/components/ui/dialog.tsx",
      lineNumber: 122,
      columnNumber: 1
    },
    this
  )
);
_c0 = DialogDescription;
DialogDescription.displayName = DialogPrimitive.Description.displayName;
export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription
};
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c0;
$RefreshReg$(_c, "DialogOverlay$React.forwardRef");
$RefreshReg$(_c2, "DialogOverlay");
$RefreshReg$(_c3, "DialogContent$React.forwardRef");
$RefreshReg$(_c4, "DialogContent");
$RefreshReg$(_c5, "DialogHeader");
$RefreshReg$(_c6, "DialogFooter");
$RefreshReg$(_c7, "DialogTitle$React.forwardRef");
$RefreshReg$(_c8, "DialogTitle");
$RefreshReg$(_c9, "DialogDescription$React.forwardRef");
$RefreshReg$(_c0, "DialogDescription");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/usr/src/workspace/src/components/ui/dialog.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/usr/src/workspace/src/components/ui/dialog.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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Q0EsR0FBSUM7QUFBQUE7QUFBQUEsSUFOTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNWTtBQUViO0FBQUNnQixNQVpJRjtBQWFOQSxZQUFZWCxjQUFjbEIsZ0JBQWdCZ0MsTUFBTWQ7QUFFaEQsTUFBTWUsb0JBQW9CbEMsTUFBTWE7QUFBQUEsRUFHL0JzQixNQUFDQSxDQUFDLEVBQUVwQixXQUFXLEdBQUdDLE1BQU0sR0FBR0MsUUFDMUI7QUFBQSxJQUFDLGdCQUFnQjtBQUFBLElBQWhCO0FBQUEsTUFDQztBQUFBLE1BQ0EsV0FBV2QsR0FBRyxpQ0FBaUNZLFNBQVM7QUFBQSxNQUN4RCxHQUFJQztBQUFBQTtBQUFBQSxJQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUdZO0FBRWI7QUFBQ29CLE1BVElGO0FBVU5BLGtCQUFrQmYsY0FBY2xCLGdCQUFnQm9DLFlBQVlsQjtBQUU1RDtBQUFBLEVBQ0VmO0FBQUFBLEVBQ0FJO0FBQUFBLEVBQ0FJO0FBQUFBLEVBQ0FGO0FBQUFBLEVBQ0FKO0FBQUFBLEVBQ0FlO0FBQUFBLEVBQ0FLO0FBQUFBLEVBQ0FFO0FBQUFBLEVBQ0FFO0FBQUFBLEVBQ0FJO0FBQUFBO0FBQ0QsSUFBQXBCLElBQUFJLEtBQUFJLEtBQUFFLEtBQUFHLEtBQUFFLEtBQUFFLEtBQUFDLEtBQUFHLEtBQUFDO0FBQUFFLGFBQUF4QixJQUFBO0FBQUF3QixhQUFBcEIsS0FBQTtBQUFBb0IsYUFBQWhCLEtBQUE7QUFBQWdCLGFBQUFkLEtBQUE7QUFBQWMsYUFBQVgsS0FBQTtBQUFBVyxhQUFBVCxLQUFBO0FBQUFTLGFBQUFQLEtBQUE7QUFBQU8sYUFBQU4sS0FBQTtBQUFBTSxhQUFBSCxLQUFBO0FBQUFHLGFBQUFGLEtBQUEiLCJuYW1lcyI6WyJSZWFjdCIsIkRpYWxvZ1ByaW1pdGl2ZSIsIlgiLCJjbiIsIkRpYWxvZyIsIlJvb3QiLCJEaWFsb2dUcmlnZ2VyIiwiVHJpZ2dlciIsIkRpYWxvZ1BvcnRhbCIsIlBvcnRhbCIsIkRpYWxvZ0Nsb3NlIiwiQ2xvc2UiLCJEaWFsb2dPdmVybGF5IiwiZm9yd2FyZFJlZiIsIl9jIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJyZWYiLCJfYzIiLCJkaXNwbGF5TmFtZSIsIk92ZXJsYXkiLCJEaWFsb2dDb250ZW50IiwiX2MzIiwiY2hpbGRyZW4iLCJfYzQiLCJDb250ZW50IiwiRGlhbG9nSGVhZGVyIiwiX2M1IiwiRGlhbG9nRm9vdGVyIiwiX2M2IiwiRGlhbG9nVGl0bGUiLCJfYzciLCJfYzgiLCJUaXRsZSIsIkRpYWxvZ0Rlc2NyaXB0aW9uIiwiX2M5IiwiX2MwIiwiRGVzY3JpcHRpb24iLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiZGlhbG9nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0ICogYXMgRGlhbG9nUHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtZGlhbG9nXCJcbmltcG9ydCB7IFggfSBmcm9tIFwibHVjaWRlLXJlYWN0XCJcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIlxuXG5jb25zdCBEaWFsb2cgPSBEaWFsb2dQcmltaXRpdmUuUm9vdFxuXG5jb25zdCBEaWFsb2dUcmlnZ2VyID0gRGlhbG9nUHJpbWl0aXZlLlRyaWdnZXJcblxuY29uc3QgRGlhbG9nUG9ydGFsID0gRGlhbG9nUHJpbWl0aXZlLlBvcnRhbFxuXG5jb25zdCBEaWFsb2dDbG9zZSA9IERpYWxvZ1ByaW1pdGl2ZS5DbG9zZVxuXG5jb25zdCBEaWFsb2dPdmVybGF5ID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgRGlhbG9nUHJpbWl0aXZlLk92ZXJsYXk+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIERpYWxvZ1ByaW1pdGl2ZS5PdmVybGF5PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8RGlhbG9nUHJpbWl0aXZlLk92ZXJsYXlcbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJmaXhlZCBpbnNldC0wIHotNTAgYmctYmxhY2svODAgZGF0YS1bc3RhdGU9b3Blbl06YW5pbWF0ZS1pbiBkYXRhLVtzdGF0ZT1jbG9zZWRdOmFuaW1hdGUtb3V0IGRhdGEtW3N0YXRlPWNsb3NlZF06ZmFkZS1vdXQtMCBkYXRhLVtzdGF0ZT1vcGVuXTpmYWRlLWluLTBcIixcbiAgICAgIGNsYXNzTmFtZVxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSlcbkRpYWxvZ092ZXJsYXkuZGlzcGxheU5hbWUgPSBEaWFsb2dQcmltaXRpdmUuT3ZlcmxheS5kaXNwbGF5TmFtZVxuXG5jb25zdCBEaWFsb2dDb250ZW50ID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgRGlhbG9nUHJpbWl0aXZlLkNvbnRlbnQ+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIERpYWxvZ1ByaW1pdGl2ZS5Db250ZW50PlxuPigoeyBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPERpYWxvZ1BvcnRhbD5cbiAgICA8RGlhbG9nT3ZlcmxheSAvPlxuICAgIDxEaWFsb2dQcmltaXRpdmUuQ29udGVudFxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcImZpeGVkIGxlZnQtWzUwJV0gdG9wLVs1MCVdIHotNTAgZ3JpZCB3LWZ1bGwgbWF4LXctbGcgdHJhbnNsYXRlLXgtWy01MCVdIHRyYW5zbGF0ZS15LVstNTAlXSBnYXAtNCBib3JkZXIgYmctYmFja2dyb3VuZCBwLTYgc2hhZG93LWxnIGR1cmF0aW9uLTIwMCBkYXRhLVtzdGF0ZT1vcGVuXTphbmltYXRlLWluIGRhdGEtW3N0YXRlPWNsb3NlZF06YW5pbWF0ZS1vdXQgZGF0YS1bc3RhdGU9Y2xvc2VkXTpmYWRlLW91dC0wIGRhdGEtW3N0YXRlPW9wZW5dOmZhZGUtaW4tMCBkYXRhLVtzdGF0ZT1jbG9zZWRdOnpvb20tb3V0LTk1IGRhdGEtW3N0YXRlPW9wZW5dOnpvb20taW4tOTUgZGF0YS1bc3RhdGU9Y2xvc2VkXTpzbGlkZS1vdXQtdG8tbGVmdC0xLzIgZGF0YS1bc3RhdGU9Y2xvc2VkXTpzbGlkZS1vdXQtdG8tdG9wLVs0OCVdIGRhdGEtW3N0YXRlPW9wZW5dOnNsaWRlLWluLWZyb20tbGVmdC0xLzIgZGF0YS1bc3RhdGU9b3Blbl06c2xpZGUtaW4tZnJvbS10b3AtWzQ4JV0gc206cm91bmRlZC1sZ1wiLFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPERpYWxvZ1ByaW1pdGl2ZS5DbG9zZSBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC00IHRvcC00IHJvdW5kZWQtc20gb3BhY2l0eS03MCByaW5nLW9mZnNldC1iYWNrZ3JvdW5kIHRyYW5zaXRpb24tb3BhY2l0eSBob3ZlcjpvcGFjaXR5LTEwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcmluZyBmb2N1czpyaW5nLW9mZnNldC0yIGRpc2FibGVkOnBvaW50ZXItZXZlbnRzLW5vbmUgZGF0YS1bc3RhdGU9b3Blbl06YmctYWNjZW50IGRhdGEtW3N0YXRlPW9wZW5dOnRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlxuICAgICAgICA8WCBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkNsb3NlPC9zcGFuPlxuICAgICAgPC9EaWFsb2dQcmltaXRpdmUuQ2xvc2U+XG4gICAgPC9EaWFsb2dQcmltaXRpdmUuQ29udGVudD5cbiAgPC9EaWFsb2dQb3J0YWw+XG4pKVxuRGlhbG9nQ29udGVudC5kaXNwbGF5TmFtZSA9IERpYWxvZ1ByaW1pdGl2ZS5Db250ZW50LmRpc3BsYXlOYW1lXG5cbmNvbnN0IERpYWxvZ0hlYWRlciA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PikgPT4gKFxuICA8ZGl2XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTEuNSB0ZXh0LWNlbnRlciBzbTp0ZXh0LWxlZnRcIixcbiAgICAgIGNsYXNzTmFtZVxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKVxuRGlhbG9nSGVhZGVyLmRpc3BsYXlOYW1lID0gXCJEaWFsb2dIZWFkZXJcIlxuXG5jb25zdCBEaWFsb2dGb290ZXIgPSAoe1xuICBjbGFzc05hbWUsXG4gIC4uLnByb3BzXG59OiBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4pID0+IChcbiAgPGRpdlxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcImZsZXggZmxleC1jb2wtcmV2ZXJzZSBzbTpmbGV4LXJvdyBzbTpqdXN0aWZ5LWVuZCBzbTpzcGFjZS14LTJcIixcbiAgICAgIGNsYXNzTmFtZVxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKVxuRGlhbG9nRm9vdGVyLmRpc3BsYXlOYW1lID0gXCJEaWFsb2dGb290ZXJcIlxuXG5jb25zdCBEaWFsb2dUaXRsZSA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIERpYWxvZ1ByaW1pdGl2ZS5UaXRsZT4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgRGlhbG9nUHJpbWl0aXZlLlRpdGxlPlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8RGlhbG9nUHJpbWl0aXZlLlRpdGxlXG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwidGV4dC1sZyBmb250LXNlbWlib2xkIGxlYWRpbmctbm9uZSB0cmFja2luZy10aWdodFwiLFxuICAgICAgY2xhc3NOYW1lXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKVxuRGlhbG9nVGl0bGUuZGlzcGxheU5hbWUgPSBEaWFsb2dQcmltaXRpdmUuVGl0bGUuZGlzcGxheU5hbWVcblxuY29uc3QgRGlhbG9nRGVzY3JpcHRpb24gPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBEaWFsb2dQcmltaXRpdmUuRGVzY3JpcHRpb24+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIERpYWxvZ1ByaW1pdGl2ZS5EZXNjcmlwdGlvbj5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPERpYWxvZ1ByaW1pdGl2ZS5EZXNjcmlwdGlvblxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXCJ0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiLCBjbGFzc05hbWUpfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpXG5EaWFsb2dEZXNjcmlwdGlvbi5kaXNwbGF5TmFtZSA9IERpYWxvZ1ByaW1pdGl2ZS5EZXNjcmlwdGlvbi5kaXNwbGF5TmFtZVxuXG5leHBvcnQge1xuICBEaWFsb2csXG4gIERpYWxvZ1BvcnRhbCxcbiAgRGlhbG9nT3ZlcmxheSxcbiAgRGlhbG9nQ2xvc2UsXG4gIERpYWxvZ1RyaWdnZXIsXG4gIERpYWxvZ0NvbnRlbnQsXG4gIERpYWxvZ0hlYWRlcixcbiAgRGlhbG9nRm9vdGVyLFxuICBEaWFsb2dUaXRsZSxcbiAgRGlhbG9nRGVzY3JpcHRpb24sXG59XG4iXSwiZmlsZSI6Ii91c3Ivc3JjL3dvcmtzcGFjZS9zcmMvY29tcG9uZW50cy91aS9kaWFsb2cudHN4In0=