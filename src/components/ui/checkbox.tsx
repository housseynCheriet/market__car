import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/checkbox.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1ac3b587"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/usr/src/workspace/src/components/ui/checkbox.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=1ac3b587"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import * as CheckboxPrimitive from "/node_modules/.vite/deps/@radix-ui_react-checkbox.js?v=1ac3b587";
import { Check } from "/node_modules/.vite/deps/lucide-react.js?v=1ac3b587";
import { cn } from "/src/lib/utils.ts";
const Checkbox = React.forwardRef(
  _c = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    CheckboxPrimitive.Root,
    {
      ref,
      className: cn(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxDEV(
        CheckboxPrimitive.Indicator,
        {
          className: cn("flex items-center justify-center text-current"),
          children: /* @__PURE__ */ jsxDEV(Check, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/usr/src/workspace/src/components/ui/checkbox.tsx",
            lineNumber: 41,
            columnNumber: 7
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/usr/src/workspace/src/components/ui/checkbox.tsx",
          lineNumber: 38,
          columnNumber: 5
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "/usr/src/workspace/src/components/ui/checkbox.tsx",
      lineNumber: 30,
      columnNumber: 1
    },
    this
  )
);
_c2 = Checkbox;
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
export { Checkbox };
var _c, _c2;
$RefreshReg$(_c, "Checkbox$React.forwardRef");
$RefreshReg$(_c2, "Checkbox");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/usr/src/workspace/src/components/ui/checkbox.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/usr/src/workspace/src/components/ui/checkbox.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBcUJNOzs7Ozs7Ozs7Ozs7Ozs7O0FBckJOLFlBQVlBLFdBQVc7QUFDdkIsWUFBWUMsdUJBQXVCO0FBQ25DLFNBQVNDLGFBQWE7QUFFdEIsU0FBU0MsVUFBVTtBQUVuQixNQUFNQyxXQUFXSixNQUFNSztBQUFBQSxFQUd0QkMsS0FBQ0EsQ0FBQyxFQUFFQyxXQUFXLEdBQUdDLE1BQU0sR0FBR0MsUUFDMUI7QUFBQSxJQUFDLGtCQUFrQjtBQUFBLElBQWxCO0FBQUEsTUFDQztBQUFBLE1BQ0EsV0FBV047QUFBQUEsUUFDVDtBQUFBLFFBQ0FJO0FBQUFBLE1BQ0Y7QUFBQSxNQUNBLEdBQUlDO0FBQUFBLE1BRUo7QUFBQSxRQUFDLGtCQUFrQjtBQUFBLFFBQWxCO0FBQUEsVUFDQyxXQUFXTCxHQUFHLCtDQUErQztBQUFBLFVBRTdELGlDQUFDLFNBQU0sV0FBVSxhQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUEwQjtBQUFBO0FBQUEsUUFINUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSUE7QUFBQTtBQUFBLElBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBYUE7QUFDRDtBQUFDTyxNQWxCSU47QUFtQk5BLFNBQVNPLGNBQWNWLGtCQUFrQlcsS0FBS0Q7QUFFOUMsU0FBU1A7QUFBVSxJQUFBRSxJQUFBSTtBQUFBRyxhQUFBUCxJQUFBO0FBQUFPLGFBQUFILEtBQUEiLCJuYW1lcyI6WyJSZWFjdCIsIkNoZWNrYm94UHJpbWl0aXZlIiwiQ2hlY2siLCJjbiIsIkNoZWNrYm94IiwiZm9yd2FyZFJlZiIsIl9jIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJyZWYiLCJfYzIiLCJkaXNwbGF5TmFtZSIsIlJvb3QiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiY2hlY2tib3gudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgKiBhcyBDaGVja2JveFByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LWNoZWNrYm94XCJcbmltcG9ydCB7IENoZWNrIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiXG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCJcblxuY29uc3QgQ2hlY2tib3ggPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBDaGVja2JveFByaW1pdGl2ZS5Sb290PixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBDaGVja2JveFByaW1pdGl2ZS5Sb290PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8Q2hlY2tib3hQcmltaXRpdmUuUm9vdFxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcInBlZXIgaC00IHctNCBzaHJpbmstMCByb3VuZGVkLXNtIGJvcmRlciBib3JkZXItcHJpbWFyeSByaW5nLW9mZnNldC1iYWNrZ3JvdW5kIGZvY3VzLXZpc2libGU6b3V0bGluZS1ub25lIGZvY3VzLXZpc2libGU6cmluZy0yIGZvY3VzLXZpc2libGU6cmluZy1yaW5nIGZvY3VzLXZpc2libGU6cmluZy1vZmZzZXQtMiBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQgZGlzYWJsZWQ6b3BhY2l0eS01MCBkYXRhLVtzdGF0ZT1jaGVja2VkXTpiZy1wcmltYXJ5IGRhdGEtW3N0YXRlPWNoZWNrZWRdOnRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kXCIsXG4gICAgICBjbGFzc05hbWVcbiAgICApfVxuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIDxDaGVja2JveFByaW1pdGl2ZS5JbmRpY2F0b3JcbiAgICAgIGNsYXNzTmFtZT17Y24oXCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWN1cnJlbnRcIil9XG4gICAgPlxuICAgICAgPENoZWNrIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxuICAgIDwvQ2hlY2tib3hQcmltaXRpdmUuSW5kaWNhdG9yPlxuICA8L0NoZWNrYm94UHJpbWl0aXZlLlJvb3Q+XG4pKVxuQ2hlY2tib3guZGlzcGxheU5hbWUgPSBDaGVja2JveFByaW1pdGl2ZS5Sb290LmRpc3BsYXlOYW1lXG5cbmV4cG9ydCB7IENoZWNrYm94IH1cbiJdLCJmaWxlIjoiL3Vzci9zcmMvd29ya3NwYWNlL3NyYy9jb21wb25lbnRzL3VpL2NoZWNrYm94LnRzeCJ9