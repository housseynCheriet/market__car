import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/textarea.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1ac3b587"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/usr/src/workspace/src/components/ui/textarea.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=1ac3b587"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import { cn } from "/src/lib/utils.ts";
const Textarea = React.forwardRef(_c = ({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxDEV(
    "textarea",
    {
      className: cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ref,
      ...props
    },
    void 0,
    false,
    {
      fileName: "/usr/src/workspace/src/components/ui/textarea.tsx",
      lineNumber: 29,
      columnNumber: 5
    },
    this
  );
});
_c2 = Textarea;
Textarea.displayName = "Textarea";
export { Textarea };
var _c, _c2;
$RefreshReg$(_c, "Textarea$React.forwardRef");
$RefreshReg$(_c2, "Textarea");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/usr/src/workspace/src/components/ui/textarea.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/usr/src/workspace/src/components/ui/textarea.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBU0k7Ozs7Ozs7Ozs7Ozs7Ozs7QUFUSixZQUFZQSxXQUFXO0FBRXZCLFNBQVNDLFVBQVU7QUFFbkIsTUFBTUMsV0FBV0YsTUFBTUcsV0FHdEJDLEtBQUNBLENBQUMsRUFBRUMsV0FBVyxHQUFHQyxNQUFNLEdBQUdDLFFBQVE7QUFDbEMsU0FDRTtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0MsV0FBV047QUFBQUEsUUFDVDtBQUFBLFFBQ0FJO0FBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsTUFDQSxHQUFJQztBQUFBQTtBQUFBQSxJQU5OO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1ZO0FBR2hCLENBQUM7QUFBQ0UsTUFkSU47QUFlTkEsU0FBU08sY0FBYztBQUV2QixTQUFTUDtBQUFVLElBQUFFLElBQUFJO0FBQUFFLGFBQUFOLElBQUE7QUFBQU0sYUFBQUYsS0FBQSIsIm5hbWVzIjpbIlJlYWN0IiwiY24iLCJUZXh0YXJlYSIsImZvcndhcmRSZWYiLCJfYyIsImNsYXNzTmFtZSIsInByb3BzIiwicmVmIiwiX2MyIiwiZGlzcGxheU5hbWUiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsidGV4dGFyZWEudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCJcblxuY29uc3QgVGV4dGFyZWEgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBIVE1MVGV4dEFyZWFFbGVtZW50LFxuICBSZWFjdC5Db21wb25lbnRQcm9wczxcInRleHRhcmVhXCI+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHRleHRhcmVhXG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcImZsZXggbWluLWgtWzgwcHhdIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItaW5wdXQgYmctYmFja2dyb3VuZCBweC0zIHB5LTIgdGV4dC1iYXNlIHJpbmctb2Zmc2V0LWJhY2tncm91bmQgcGxhY2Vob2xkZXI6dGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGZvY3VzLXZpc2libGU6b3V0bGluZS1ub25lIGZvY3VzLXZpc2libGU6cmluZy0yIGZvY3VzLXZpc2libGU6cmluZy1yaW5nIGZvY3VzLXZpc2libGU6cmluZy1vZmZzZXQtMiBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQgZGlzYWJsZWQ6b3BhY2l0eS01MCBtZDp0ZXh0LXNtXCIsXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHJlZj17cmVmfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gIClcbn0pXG5UZXh0YXJlYS5kaXNwbGF5TmFtZSA9IFwiVGV4dGFyZWFcIlxuXG5leHBvcnQgeyBUZXh0YXJlYSB9XG4iXSwiZmlsZSI6Ii91c3Ivc3JjL3dvcmtzcGFjZS9zcmMvY29tcG9uZW50cy91aS90ZXh0YXJlYS50c3gifQ==