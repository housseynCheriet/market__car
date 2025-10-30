import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/scroll-area.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1ac3b587"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/usr/src/workspace/src/components/ui/scroll-area.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=1ac3b587"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import * as ScrollAreaPrimitive from "/node_modules/.vite/deps/@radix-ui_react-scroll-area.js?v=1ac3b587";
import { cn } from "/src/lib/utils.ts";
const ScrollArea = React.forwardRef(
  _c = ({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    ScrollAreaPrimitive.Root,
    {
      ref,
      className: cn("relative overflow-hidden", className),
      ...props,
      children: [
        /* @__PURE__ */ jsxDEV(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]", children }, void 0, false, {
          fileName: "/usr/src/workspace/src/components/ui/scroll-area.tsx",
          lineNumber: 34,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ jsxDEV(ScrollBar, {}, void 0, false, {
          fileName: "/usr/src/workspace/src/components/ui/scroll-area.tsx",
          lineNumber: 37,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ jsxDEV(ScrollAreaPrimitive.Corner, {}, void 0, false, {
          fileName: "/usr/src/workspace/src/components/ui/scroll-area.tsx",
          lineNumber: 38,
          columnNumber: 5
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/usr/src/workspace/src/components/ui/scroll-area.tsx",
      lineNumber: 29,
      columnNumber: 1
    },
    this
  )
);
_c2 = ScrollArea;
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
const ScrollBar = React.forwardRef(
  _c3 = ({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsxDEV(
    ScrollAreaPrimitive.ScrollAreaScrollbar,
    {
      ref,
      orientation,
      className: cn(
        "flex touch-none select-none transition-colors",
        orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
        orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxDEV(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" }, void 0, false, {
        fileName: "/usr/src/workspace/src/components/ui/scroll-area.tsx",
        lineNumber: 60,
        columnNumber: 5
      }, this)
    },
    void 0,
    false,
    {
      fileName: "/usr/src/workspace/src/components/ui/scroll-area.tsx",
      lineNumber: 47,
      columnNumber: 1
    },
    this
  )
);
_c4 = ScrollBar;
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;
export { ScrollArea, ScrollBar };
var _c, _c2, _c3, _c4;
$RefreshReg$(_c, "ScrollArea$React.forwardRef");
$RefreshReg$(_c2, "ScrollArea");
$RefreshReg$(_c3, "ScrollBar$React.forwardRef");
$RefreshReg$(_c4, "ScrollBar");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/usr/src/workspace/src/components/ui/scroll-area.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/usr/src/workspace/src/components/ui/scroll-area.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBY0k7Ozs7Ozs7Ozs7Ozs7Ozs7QUFkSixZQUFZQSxXQUFXO0FBQ3ZCLFlBQVlDLHlCQUF5QjtBQUVyQyxTQUFTQyxVQUFVO0FBRW5CLE1BQU1DLGFBQWFILE1BQU1JO0FBQUFBLEVBR3hCQyxLQUFDQSxDQUFDLEVBQUVDLFdBQVdDLFVBQVUsR0FBR0MsTUFBTSxHQUFHQyxRQUNwQztBQUFBLElBQUMsb0JBQW9CO0FBQUEsSUFBcEI7QUFBQSxNQUNDO0FBQUEsTUFDQSxXQUFXUCxHQUFHLDRCQUE0QkksU0FBUztBQUFBLE1BQ25ELEdBQUlFO0FBQUFBLE1BRUo7QUFBQSwrQkFBQyxvQkFBb0IsVUFBcEIsRUFBNkIsV0FBVSxtQ0FDckNELFlBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUVBO0FBQUEsUUFDQSx1QkFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBVTtBQUFBLFFBQ1YsdUJBQUMsb0JBQW9CLFFBQXBCLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUEyQjtBQUFBO0FBQUE7QUFBQSxJQVQ3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFVQTtBQUNEO0FBQUNHLE1BZklQO0FBZ0JOQSxXQUFXUSxjQUFjVixvQkFBb0JXLEtBQUtEO0FBRWxELE1BQU1FLFlBQVliLE1BQU1JO0FBQUFBLEVBR3ZCVSxNQUFDQSxDQUFDLEVBQUVSLFdBQVdTLGNBQWMsWUFBWSxHQUFHUCxNQUFNLEdBQUdDLFFBQ3BEO0FBQUEsSUFBQyxvQkFBb0I7QUFBQSxJQUFwQjtBQUFBLE1BQ0M7QUFBQSxNQUNBO0FBQUEsTUFDQSxXQUFXUDtBQUFBQSxRQUNUO0FBQUEsUUFDQWEsZ0JBQWdCLGNBQ2Q7QUFBQSxRQUNGQSxnQkFBZ0IsZ0JBQ2Q7QUFBQSxRQUNGVDtBQUFBQSxNQUNGO0FBQUEsTUFDQSxHQUFJRTtBQUFBQSxNQUVKLGlDQUFDLG9CQUFvQixpQkFBcEIsRUFBb0MsV0FBVSw0Q0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUF1RjtBQUFBO0FBQUEsSUFiekY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBY0E7QUFDRDtBQUFDUSxNQW5CSUg7QUFvQk5BLFVBQVVGLGNBQWNWLG9CQUFvQmdCLG9CQUFvQk47QUFFaEUsU0FBU1IsWUFBWVU7QUFBVyxJQUFBUixJQUFBSyxLQUFBSSxLQUFBRTtBQUFBRSxhQUFBYixJQUFBO0FBQUFhLGFBQUFSLEtBQUE7QUFBQVEsYUFBQUosS0FBQTtBQUFBSSxhQUFBRixLQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJTY3JvbGxBcmVhUHJpbWl0aXZlIiwiY24iLCJTY3JvbGxBcmVhIiwiZm9yd2FyZFJlZiIsIl9jIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJwcm9wcyIsInJlZiIsIl9jMiIsImRpc3BsYXlOYW1lIiwiUm9vdCIsIlNjcm9sbEJhciIsIl9jMyIsIm9yaWVudGF0aW9uIiwiX2M0IiwiU2Nyb2xsQXJlYVNjcm9sbGJhciIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJzY3JvbGwtYXJlYS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCAqIGFzIFNjcm9sbEFyZWFQcmltaXRpdmUgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1zY3JvbGwtYXJlYVwiXG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCJcblxuY29uc3QgU2Nyb2xsQXJlYSA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIFNjcm9sbEFyZWFQcmltaXRpdmUuUm9vdD4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgU2Nyb2xsQXJlYVByaW1pdGl2ZS5Sb290PlxuPigoeyBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPFNjcm9sbEFyZWFQcmltaXRpdmUuUm9vdFxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXCJyZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIiwgY2xhc3NOYW1lKX1cbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICA8U2Nyb2xsQXJlYVByaW1pdGl2ZS5WaWV3cG9ydCBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIHJvdW5kZWQtW2luaGVyaXRdXCI+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9TY3JvbGxBcmVhUHJpbWl0aXZlLlZpZXdwb3J0PlxuICAgIDxTY3JvbGxCYXIgLz5cbiAgICA8U2Nyb2xsQXJlYVByaW1pdGl2ZS5Db3JuZXIgLz5cbiAgPC9TY3JvbGxBcmVhUHJpbWl0aXZlLlJvb3Q+XG4pKVxuU2Nyb2xsQXJlYS5kaXNwbGF5TmFtZSA9IFNjcm9sbEFyZWFQcmltaXRpdmUuUm9vdC5kaXNwbGF5TmFtZVxuXG5jb25zdCBTY3JvbGxCYXIgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBTY3JvbGxBcmVhUHJpbWl0aXZlLlNjcm9sbEFyZWFTY3JvbGxiYXI+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIFNjcm9sbEFyZWFQcmltaXRpdmUuU2Nyb2xsQXJlYVNjcm9sbGJhcj5cbj4oKHsgY2xhc3NOYW1lLCBvcmllbnRhdGlvbiA9IFwidmVydGljYWxcIiwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxTY3JvbGxBcmVhUHJpbWl0aXZlLlNjcm9sbEFyZWFTY3JvbGxiYXJcbiAgICByZWY9e3JlZn1cbiAgICBvcmllbnRhdGlvbj17b3JpZW50YXRpb259XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwiZmxleCB0b3VjaC1ub25lIHNlbGVjdC1ub25lIHRyYW5zaXRpb24tY29sb3JzXCIsXG4gICAgICBvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiICYmXG4gICAgICAgIFwiaC1mdWxsIHctMi41IGJvcmRlci1sIGJvcmRlci1sLXRyYW5zcGFyZW50IHAtWzFweF1cIixcbiAgICAgIG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiAmJlxuICAgICAgICBcImgtMi41IGZsZXgtY29sIGJvcmRlci10IGJvcmRlci10LXRyYW5zcGFyZW50IHAtWzFweF1cIixcbiAgICAgIGNsYXNzTmFtZVxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICA+XG4gICAgPFNjcm9sbEFyZWFQcmltaXRpdmUuU2Nyb2xsQXJlYVRodW1iIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXgtMSByb3VuZGVkLWZ1bGwgYmctYm9yZGVyXCIgLz5cbiAgPC9TY3JvbGxBcmVhUHJpbWl0aXZlLlNjcm9sbEFyZWFTY3JvbGxiYXI+XG4pKVxuU2Nyb2xsQmFyLmRpc3BsYXlOYW1lID0gU2Nyb2xsQXJlYVByaW1pdGl2ZS5TY3JvbGxBcmVhU2Nyb2xsYmFyLmRpc3BsYXlOYW1lXG5cbmV4cG9ydCB7IFNjcm9sbEFyZWEsIFNjcm9sbEJhciB9XG4iXSwiZmlsZSI6Ii91c3Ivc3JjL3dvcmtzcGFjZS9zcmMvY29tcG9uZW50cy91aS9zY3JvbGwtYXJlYS50c3gifQ==