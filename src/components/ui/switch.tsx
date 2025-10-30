import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/switch.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1ac3b587"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/usr/src/workspace/src/components/ui/switch.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=1ac3b587"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import * as SwitchPrimitives from "/node_modules/.vite/deps/@radix-ui_react-switch.js?v=1ac3b587";
import { cn } from "/src/lib/utils.ts";
const Switch = React.forwardRef(
  _c = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    SwitchPrimitives.Root,
    {
      className: cn(
        "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        className
      ),
      ...props,
      ref,
      children: /* @__PURE__ */ jsxDEV(
        SwitchPrimitives.Thumb,
        {
          className: cn(
            "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
          )
        },
        void 0,
        false,
        {
          fileName: "/usr/src/workspace/src/components/ui/switch.tsx",
          lineNumber: 37,
          columnNumber: 5
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "/usr/src/workspace/src/components/ui/switch.tsx",
      lineNumber: 29,
      columnNumber: 1
    },
    this
  )
);
_c2 = Switch;
Switch.displayName = SwitchPrimitives.Root.displayName;
export { Switch };
var _c, _c2;
$RefreshReg$(_c, "Switch$React.forwardRef");
$RefreshReg$(_c2, "Switch");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/usr/src/workspace/src/components/ui/switch.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/usr/src/workspace/src/components/ui/switch.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBaUJJOzs7Ozs7Ozs7Ozs7Ozs7O0FBakJKLFlBQVlBLFdBQVc7QUFDdkIsWUFBWUMsc0JBQXNCO0FBRWxDLFNBQVNDLFVBQVU7QUFFbkIsTUFBTUMsU0FBU0gsTUFBTUk7QUFBQUEsRUFHcEJDLEtBQUNBLENBQUMsRUFBRUMsV0FBVyxHQUFHQyxNQUFNLEdBQUdDLFFBQzFCO0FBQUEsSUFBQyxpQkFBaUI7QUFBQSxJQUFqQjtBQUFBLE1BQ0MsV0FBV047QUFBQUEsUUFDVDtBQUFBLFFBQ0FJO0FBQUFBLE1BQ0Y7QUFBQSxNQUNBLEdBQUlDO0FBQUFBLE1BQ0o7QUFBQSxNQUVBO0FBQUEsUUFBQyxpQkFBaUI7QUFBQSxRQUFqQjtBQUFBLFVBQ0MsV0FBV0w7QUFBQUEsWUFDVDtBQUFBLFVBQ0Y7QUFBQTtBQUFBLFFBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BR0k7QUFBQTtBQUFBLElBWE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBYUE7QUFDRDtBQUFDTyxNQWxCSU47QUFtQk5BLE9BQU9PLGNBQWNULGlCQUFpQlUsS0FBS0Q7QUFFM0MsU0FBU1A7QUFBUSxJQUFBRSxJQUFBSTtBQUFBRyxhQUFBUCxJQUFBO0FBQUFPLGFBQUFILEtBQUEiLCJuYW1lcyI6WyJSZWFjdCIsIlN3aXRjaFByaW1pdGl2ZXMiLCJjbiIsIlN3aXRjaCIsImZvcndhcmRSZWYiLCJfYyIsImNsYXNzTmFtZSIsInByb3BzIiwicmVmIiwiX2MyIiwiZGlzcGxheU5hbWUiLCJSb290IiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbInN3aXRjaC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCAqIGFzIFN3aXRjaFByaW1pdGl2ZXMgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1zd2l0Y2hcIlxuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiXG5cbmNvbnN0IFN3aXRjaCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIFN3aXRjaFByaW1pdGl2ZXMuUm9vdD4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgU3dpdGNoUHJpbWl0aXZlcy5Sb290PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8U3dpdGNoUHJpbWl0aXZlcy5Sb290XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwicGVlciBpbmxpbmUtZmxleCBoLTYgdy0xMSBzaHJpbmstMCBjdXJzb3ItcG9pbnRlciBpdGVtcy1jZW50ZXIgcm91bmRlZC1mdWxsIGJvcmRlci0yIGJvcmRlci10cmFuc3BhcmVudCB0cmFuc2l0aW9uLWNvbG9ycyBmb2N1cy12aXNpYmxlOm91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnJpbmctMiBmb2N1cy12aXNpYmxlOnJpbmctcmluZyBmb2N1cy12aXNpYmxlOnJpbmctb2Zmc2V0LTIgZm9jdXMtdmlzaWJsZTpyaW5nLW9mZnNldC1iYWNrZ3JvdW5kIGRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZCBkaXNhYmxlZDpvcGFjaXR5LTUwIGRhdGEtW3N0YXRlPWNoZWNrZWRdOmJnLXByaW1hcnkgZGF0YS1bc3RhdGU9dW5jaGVja2VkXTpiZy1pbnB1dFwiLFxuICAgICAgY2xhc3NOYW1lXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gICAgcmVmPXtyZWZ9XG4gID5cbiAgICA8U3dpdGNoUHJpbWl0aXZlcy5UaHVtYlxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJwb2ludGVyLWV2ZW50cy1ub25lIGJsb2NrIGgtNSB3LTUgcm91bmRlZC1mdWxsIGJnLWJhY2tncm91bmQgc2hhZG93LWxnIHJpbmctMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkYXRhLVtzdGF0ZT1jaGVja2VkXTp0cmFuc2xhdGUteC01IGRhdGEtW3N0YXRlPXVuY2hlY2tlZF06dHJhbnNsYXRlLXgtMFwiXG4gICAgICApfVxuICAgIC8+XG4gIDwvU3dpdGNoUHJpbWl0aXZlcy5Sb290PlxuKSlcblN3aXRjaC5kaXNwbGF5TmFtZSA9IFN3aXRjaFByaW1pdGl2ZXMuUm9vdC5kaXNwbGF5TmFtZVxuXG5leHBvcnQgeyBTd2l0Y2ggfVxuIl0sImZpbGUiOiIvdXNyL3NyYy93b3Jrc3BhY2Uvc3JjL2NvbXBvbmVudHMvdWkvc3dpdGNoLnRzeCJ9