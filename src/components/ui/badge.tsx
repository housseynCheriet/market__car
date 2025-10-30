import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/badge.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1ac3b587"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/usr/src/workspace/src/components/ui/badge.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { cva } from "/node_modules/.vite/deps/class-variance-authority.js?v=1ac3b587";
import { cn } from "/src/lib/utils.ts";
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsxDEV("div", { className: cn(badgeVariants({ variant }), className), ...props }, void 0, false, {
    fileName: "/usr/src/workspace/src/components/ui/badge.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}
_c = Badge;
export { Badge, badgeVariants };
var _c;
$RefreshReg$(_c, "Badge");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/usr/src/workspace/src/components/ui/badge.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/usr/src/workspace/src/components/ui/badge.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBK0JJOzs7Ozs7Ozs7Ozs7Ozs7O0FBOUJKLFNBQVNBLFdBQThCO0FBRXZDLFNBQVNDLFVBQVU7QUFFbkIsTUFBTUMsZ0JBQWdCRjtBQUFBQSxFQUNwQjtBQUFBLEVBQ0E7QUFBQSxJQUNFRyxVQUFVO0FBQUEsTUFDUkMsU0FBUztBQUFBLFFBQ1BDLFNBQ0U7QUFBQSxRQUNGQyxXQUNFO0FBQUEsUUFDRkMsYUFDRTtBQUFBLFFBQ0ZDLFNBQVM7QUFBQSxNQUNYO0FBQUEsSUFDRjtBQUFBLElBQ0FDLGlCQUFpQjtBQUFBLE1BQ2ZMLFNBQVM7QUFBQSxJQUNYO0FBQUEsRUFDRjtBQUNGO0FBTUEsU0FBU00sTUFBTSxFQUFFQyxXQUFXUCxTQUFTLEdBQUdRLE1BQWtCLEdBQUc7QUFDM0QsU0FDRSx1QkFBQyxTQUFJLFdBQVdYLEdBQUdDLGNBQWMsRUFBRUUsUUFBUSxDQUFDLEdBQUdPLFNBQVMsR0FBRyxHQUFJQyxTQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXFFO0FBRXpFO0FBQUNDLEtBSlFIO0FBTVQsU0FBU0EsT0FBT1I7QUFBZSxJQUFBVztBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiY3ZhIiwiY24iLCJiYWRnZVZhcmlhbnRzIiwidmFyaWFudHMiLCJ2YXJpYW50IiwiZGVmYXVsdCIsInNlY29uZGFyeSIsImRlc3RydWN0aXZlIiwib3V0bGluZSIsImRlZmF1bHRWYXJpYW50cyIsIkJhZGdlIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJiYWRnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGN2YSwgdHlwZSBWYXJpYW50UHJvcHMgfSBmcm9tIFwiY2xhc3MtdmFyaWFuY2UtYXV0aG9yaXR5XCJcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIlxuXG5jb25zdCBiYWRnZVZhcmlhbnRzID0gY3ZhKFxuICBcImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLWZ1bGwgYm9yZGVyIHB4LTIuNSBweS0wLjUgdGV4dC14cyBmb250LXNlbWlib2xkIHRyYW5zaXRpb24tY29sb3JzIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1yaW5nIGZvY3VzOnJpbmctb2Zmc2V0LTJcIixcbiAge1xuICAgIHZhcmlhbnRzOiB7XG4gICAgICB2YXJpYW50OiB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgXCJib3JkZXItdHJhbnNwYXJlbnQgYmctcHJpbWFyeSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBob3ZlcjpiZy1wcmltYXJ5LzgwXCIsXG4gICAgICAgIHNlY29uZGFyeTpcbiAgICAgICAgICBcImJvcmRlci10cmFuc3BhcmVudCBiZy1zZWNvbmRhcnkgdGV4dC1zZWNvbmRhcnktZm9yZWdyb3VuZCBob3ZlcjpiZy1zZWNvbmRhcnkvODBcIixcbiAgICAgICAgZGVzdHJ1Y3RpdmU6XG4gICAgICAgICAgXCJib3JkZXItdHJhbnNwYXJlbnQgYmctZGVzdHJ1Y3RpdmUgdGV4dC1kZXN0cnVjdGl2ZS1mb3JlZ3JvdW5kIGhvdmVyOmJnLWRlc3RydWN0aXZlLzgwXCIsXG4gICAgICAgIG91dGxpbmU6IFwidGV4dC1mb3JlZ3JvdW5kXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZGVmYXVsdFZhcmlhbnRzOiB7XG4gICAgICB2YXJpYW50OiBcImRlZmF1bHRcIixcbiAgICB9LFxuICB9XG4pXG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFkZ2VQcm9wc1xuICBleHRlbmRzIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PixcbiAgICBWYXJpYW50UHJvcHM8dHlwZW9mIGJhZGdlVmFyaWFudHM+IHt9XG5cbmZ1bmN0aW9uIEJhZGdlKHsgY2xhc3NOYW1lLCB2YXJpYW50LCAuLi5wcm9wcyB9OiBCYWRnZVByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NuKGJhZGdlVmFyaWFudHMoeyB2YXJpYW50IH0pLCBjbGFzc05hbWUpfSB7Li4ucHJvcHN9IC8+XG4gIClcbn1cblxuZXhwb3J0IHsgQmFkZ2UsIGJhZGdlVmFyaWFudHMgfVxuIl0sImZpbGUiOiIvdXNyL3NyYy93b3Jrc3BhY2Uvc3JjL2NvbXBvbmVudHMvdWkvYmFkZ2UudHN4In0=