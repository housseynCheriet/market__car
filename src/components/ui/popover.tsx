import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/popover.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1ac3b587"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/usr/src/workspace/src/components/ui/popover.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=1ac3b587"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import * as PopoverPrimitive from "/node_modules/.vite/deps/@radix-ui_react-popover.js?v=1ac3b587";
import { cn } from "/src/lib/utils.ts";
const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverContent = React.forwardRef(
  _c = ({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxDEV(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsxDEV(
    PopoverPrimitive.Content,
    {
      ref,
      align,
      sideOffset,
      className: cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-popover-content-transform-origin]",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/usr/src/workspace/src/components/ui/popover.tsx",
      lineNumber: 34,
      columnNumber: 5
    },
    this
  ) }, void 0, false, {
    fileName: "/usr/src/workspace/src/components/ui/popover.tsx",
    lineNumber: 33,
    columnNumber: 1
  }, this)
);
_c2 = PopoverContent;
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
export { Popover, PopoverTrigger, PopoverContent };
var _c, _c2;
$RefreshReg$(_c, "PopoverContent$React.forwardRef");
$RefreshReg$(_c2, "PopoverContent");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/usr/src/workspace/src/components/ui/popover.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/usr/src/workspace/src/components/ui/popover.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBY0k7Ozs7Ozs7Ozs7Ozs7Ozs7QUFkSixZQUFZQSxXQUFXO0FBQ3ZCLFlBQVlDLHNCQUFzQjtBQUVsQyxTQUFTQyxVQUFVO0FBRW5CLE1BQU1DLFVBQVVGLGlCQUFpQkc7QUFFakMsTUFBTUMsaUJBQWlCSixpQkFBaUJLO0FBRXhDLE1BQU1DLGlCQUFpQlAsTUFBTVE7QUFBQUEsRUFHNUJDLEtBQUNBLENBQUMsRUFBRUMsV0FBV0MsUUFBUSxVQUFVQyxhQUFhLEdBQUcsR0FBR0MsTUFBTSxHQUFHQyxRQUM1RCx1QkFBQyxpQkFBaUIsUUFBakIsRUFDQztBQUFBLElBQUMsaUJBQWlCO0FBQUEsSUFBakI7QUFBQSxNQUNDO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBLFdBQVdaO0FBQUFBLFFBQ1Q7QUFBQSxRQUNBUTtBQUFBQSxNQUNGO0FBQUEsTUFDQSxHQUFJRztBQUFBQTtBQUFBQSxJQVJOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVFZLEtBVGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVdBO0FBQ0Q7QUFBQ0UsTUFoQklSO0FBaUJOQSxlQUFlUyxjQUFjZixpQkFBaUJnQixRQUFRRDtBQUV0RCxTQUFTYixTQUFTRSxnQkFBZ0JFO0FBQWdCLElBQUFFLElBQUFNO0FBQUFHLGFBQUFULElBQUE7QUFBQVMsYUFBQUgsS0FBQSIsIm5hbWVzIjpbIlJlYWN0IiwiUG9wb3ZlclByaW1pdGl2ZSIsImNuIiwiUG9wb3ZlciIsIlJvb3QiLCJQb3BvdmVyVHJpZ2dlciIsIlRyaWdnZXIiLCJQb3BvdmVyQ29udGVudCIsImZvcndhcmRSZWYiLCJfYyIsImNsYXNzTmFtZSIsImFsaWduIiwic2lkZU9mZnNldCIsInByb3BzIiwicmVmIiwiX2MyIiwiZGlzcGxheU5hbWUiLCJDb250ZW50IiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbInBvcG92ZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgKiBhcyBQb3BvdmVyUHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtcG9wb3ZlclwiXG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCJcblxuY29uc3QgUG9wb3ZlciA9IFBvcG92ZXJQcmltaXRpdmUuUm9vdFxuXG5jb25zdCBQb3BvdmVyVHJpZ2dlciA9IFBvcG92ZXJQcmltaXRpdmUuVHJpZ2dlclxuXG5jb25zdCBQb3BvdmVyQ29udGVudCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIFBvcG92ZXJQcmltaXRpdmUuQ29udGVudD4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgUG9wb3ZlclByaW1pdGl2ZS5Db250ZW50PlxuPigoeyBjbGFzc05hbWUsIGFsaWduID0gXCJjZW50ZXJcIiwgc2lkZU9mZnNldCA9IDQsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8UG9wb3ZlclByaW1pdGl2ZS5Qb3J0YWw+XG4gICAgPFBvcG92ZXJQcmltaXRpdmUuQ29udGVudFxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBhbGlnbj17YWxpZ259XG4gICAgICBzaWRlT2Zmc2V0PXtzaWRlT2Zmc2V0fVxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJ6LTUwIHctNzIgcm91bmRlZC1tZCBib3JkZXIgYmctcG9wb3ZlciBwLTQgdGV4dC1wb3BvdmVyLWZvcmVncm91bmQgc2hhZG93LW1kIG91dGxpbmUtbm9uZSBkYXRhLVtzdGF0ZT1vcGVuXTphbmltYXRlLWluIGRhdGEtW3N0YXRlPWNsb3NlZF06YW5pbWF0ZS1vdXQgZGF0YS1bc3RhdGU9Y2xvc2VkXTpmYWRlLW91dC0wIGRhdGEtW3N0YXRlPW9wZW5dOmZhZGUtaW4tMCBkYXRhLVtzdGF0ZT1jbG9zZWRdOnpvb20tb3V0LTk1IGRhdGEtW3N0YXRlPW9wZW5dOnpvb20taW4tOTUgZGF0YS1bc2lkZT1ib3R0b21dOnNsaWRlLWluLWZyb20tdG9wLTIgZGF0YS1bc2lkZT1sZWZ0XTpzbGlkZS1pbi1mcm9tLXJpZ2h0LTIgZGF0YS1bc2lkZT1yaWdodF06c2xpZGUtaW4tZnJvbS1sZWZ0LTIgZGF0YS1bc2lkZT10b3BdOnNsaWRlLWluLWZyb20tYm90dG9tLTIgb3JpZ2luLVstLXJhZGl4LXBvcG92ZXItY29udGVudC10cmFuc2Zvcm0tb3JpZ2luXVwiLFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgPC9Qb3BvdmVyUHJpbWl0aXZlLlBvcnRhbD5cbikpXG5Qb3BvdmVyQ29udGVudC5kaXNwbGF5TmFtZSA9IFBvcG92ZXJQcmltaXRpdmUuQ29udGVudC5kaXNwbGF5TmFtZVxuXG5leHBvcnQgeyBQb3BvdmVyLCBQb3BvdmVyVHJpZ2dlciwgUG9wb3ZlckNvbnRlbnQgfVxuIl0sImZpbGUiOiIvdXNyL3NyYy93b3Jrc3BhY2Uvc3JjL2NvbXBvbmVudHMvdWkvcG9wb3Zlci50c3gifQ==