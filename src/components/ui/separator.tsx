import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/separator.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1ac3b587"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/usr/src/workspace/src/components/ui/separator.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=1ac3b587"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import * as SeparatorPrimitive from "/node_modules/.vite/deps/@radix-ui_react-separator.js?v=1ac3b587";
import { cn } from "/src/lib/utils.ts";
const Separator = React.forwardRef(
  _c = ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    SeparatorPrimitive.Root,
    {
      ref,
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/usr/src/workspace/src/components/ui/separator.tsx",
      lineNumber: 33,
      columnNumber: 1
    },
    this
  )
);
_c2 = Separator;
Separator.displayName = SeparatorPrimitive.Root.displayName;
export { Separator };
var _c, _c2;
$RefreshReg$(_c, "Separator$React.forwardRef");
$RefreshReg$(_c2, "Separator");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/usr/src/workspace/src/components/ui/separator.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/usr/src/workspace/src/components/ui/separator.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBYUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUFiSixZQUFZQSxXQUFXO0FBQ3ZCLFlBQVlDLHdCQUF3QjtBQUVwQyxTQUFTQyxVQUFVO0FBRW5CLE1BQU1DLFlBQVlILE1BQU1JO0FBQUFBLEVBR3ZCQyxLQUNDQSxDQUNFLEVBQUVDLFdBQVdDLGNBQWMsY0FBY0MsYUFBYSxNQUFNLEdBQUdDLE1BQU0sR0FDckVDLFFBRUE7QUFBQSxJQUFDLG1CQUFtQjtBQUFBLElBQW5CO0FBQUEsTUFDQztBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQSxXQUFXUjtBQUFBQSxRQUNUO0FBQUEsUUFDQUssZ0JBQWdCLGVBQWUsbUJBQW1CO0FBQUEsUUFDbEREO0FBQUFBLE1BQ0Y7QUFBQSxNQUNBLEdBQUlHO0FBQUFBO0FBQUFBLElBVE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBU1k7QUFHaEI7QUFBQ0UsTUFwQktSO0FBcUJOQSxVQUFVUyxjQUFjWCxtQkFBbUJZLEtBQUtEO0FBRWhELFNBQVNUO0FBQVcsSUFBQUUsSUFBQU07QUFBQUcsYUFBQVQsSUFBQTtBQUFBUyxhQUFBSCxLQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJTZXBhcmF0b3JQcmltaXRpdmUiLCJjbiIsIlNlcGFyYXRvciIsImZvcndhcmRSZWYiLCJfYyIsImNsYXNzTmFtZSIsIm9yaWVudGF0aW9uIiwiZGVjb3JhdGl2ZSIsInByb3BzIiwicmVmIiwiX2MyIiwiZGlzcGxheU5hbWUiLCJSb290IiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbInNlcGFyYXRvci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCAqIGFzIFNlcGFyYXRvclByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXNlcGFyYXRvclwiXG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCJcblxuY29uc3QgU2VwYXJhdG9yID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgU2VwYXJhdG9yUHJpbWl0aXZlLlJvb3Q+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIFNlcGFyYXRvclByaW1pdGl2ZS5Sb290PlxuPihcbiAgKFxuICAgIHsgY2xhc3NOYW1lLCBvcmllbnRhdGlvbiA9IFwiaG9yaXpvbnRhbFwiLCBkZWNvcmF0aXZlID0gdHJ1ZSwgLi4ucHJvcHMgfSxcbiAgICByZWZcbiAgKSA9PiAoXG4gICAgPFNlcGFyYXRvclByaW1pdGl2ZS5Sb290XG4gICAgICByZWY9e3JlZn1cbiAgICAgIGRlY29yYXRpdmU9e2RlY29yYXRpdmV9XG4gICAgICBvcmllbnRhdGlvbj17b3JpZW50YXRpb259XG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcInNocmluay0wIGJnLWJvcmRlclwiLFxuICAgICAgICBvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgPyBcImgtWzFweF0gdy1mdWxsXCIgOiBcImgtZnVsbCB3LVsxcHhdXCIsXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApXG4pXG5TZXBhcmF0b3IuZGlzcGxheU5hbWUgPSBTZXBhcmF0b3JQcmltaXRpdmUuUm9vdC5kaXNwbGF5TmFtZVxuXG5leHBvcnQgeyBTZXBhcmF0b3IgfVxuIl0sImZpbGUiOiIvdXNyL3NyYy93b3Jrc3BhY2Uvc3JjL2NvbXBvbmVudHMvdWkvc2VwYXJhdG9yLnRzeCJ9