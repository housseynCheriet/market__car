import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/toaster.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1ac3b587"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/usr/src/workspace/src/components/ui/toaster.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import { useToast } from "/src/hooks/use-toast.ts";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport
} from "/src/components/ui/toast.tsx";
export function Toaster() {
  _s();
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxDEV(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ jsxDEV(Toast, { ...props, children: [
        /* @__PURE__ */ jsxDEV("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsxDEV(ToastTitle, { children: title }, void 0, false, {
            fileName: "/usr/src/workspace/src/components/ui/toaster.tsx",
            lineNumber: 39,
            columnNumber: 25
          }, this),
          description && /* @__PURE__ */ jsxDEV(ToastDescription, { children: description }, void 0, false, {
            fileName: "/usr/src/workspace/src/components/ui/toaster.tsx",
            lineNumber: 41,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/usr/src/workspace/src/components/ui/toaster.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this),
        action,
        /* @__PURE__ */ jsxDEV(ToastClose, {}, void 0, false, {
          fileName: "/usr/src/workspace/src/components/ui/toaster.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this)
      ] }, id, true, {
        fileName: "/usr/src/workspace/src/components/ui/toaster.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this);
    }),
    /* @__PURE__ */ jsxDEV(ToastViewport, {}, void 0, false, {
      fileName: "/usr/src/workspace/src/components/ui/toaster.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/usr/src/workspace/src/components/ui/toaster.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}
_s(Toaster, "1YTCnXrq2qRowe0H/LBWLjtXoYc=", false, function() {
  return [useToast];
});
_c = Toaster;
var _c;
$RefreshReg$(_c, "Toaster");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/usr/src/workspace/src/components/ui/toaster.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/usr/src/workspace/src/components/ui/toaster.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBbUJ3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFuQnhCLFNBQVNBLGdCQUFnQjtBQUN6QjtBQUFBLEVBQ0VDO0FBQUFBLEVBQ0FDO0FBQUFBLEVBQ0FDO0FBQUFBLEVBQ0FDO0FBQUFBLEVBQ0FDO0FBQUFBLEVBQ0FDO0FBQUFBLE9BQ0s7QUFFQSxnQkFBU0MsVUFBVTtBQUFBQyxLQUFBO0FBQ3hCLFFBQU0sRUFBRUMsT0FBTyxJQUFJVCxTQUFTO0FBRTVCLFNBQ0UsdUJBQUMsaUJBQ0VTO0FBQUFBLFdBQU9DLElBQUksU0FBVSxFQUFFQyxJQUFJQyxPQUFPQyxhQUFhQyxRQUFRLEdBQUdDLE1BQU0sR0FBRztBQUNsRSxhQUNFLHVCQUFDLFNBQWUsR0FBSUEsT0FDbEI7QUFBQSwrQkFBQyxTQUFJLFdBQVUsY0FDWkg7QUFBQUEsbUJBQVMsdUJBQUMsY0FBWUEsbUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBbUI7QUFBQSxVQUM1QkMsZUFDQyx1QkFBQyxvQkFBa0JBLHlCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUErQjtBQUFBLGFBSG5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFLQTtBQUFBLFFBQ0NDO0FBQUFBLFFBQ0QsdUJBQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFXO0FBQUEsV0FSREgsSUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBU0E7QUFBQSxJQUVKLENBQUM7QUFBQSxJQUNELHVCQUFDLG1CQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBYztBQUFBLE9BZmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FnQkE7QUFFSjtBQUFDSCxHQXRCZUQsU0FBTztBQUFBLFVBQ0ZQLFFBQVE7QUFBQTtBQUFBZ0IsS0FEYlQ7QUFBTyxJQUFBUztBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsidXNlVG9hc3QiLCJUb2FzdCIsIlRvYXN0Q2xvc2UiLCJUb2FzdERlc2NyaXB0aW9uIiwiVG9hc3RQcm92aWRlciIsIlRvYXN0VGl0bGUiLCJUb2FzdFZpZXdwb3J0IiwiVG9hc3RlciIsIl9zIiwidG9hc3RzIiwibWFwIiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYWN0aW9uIiwicHJvcHMiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJ0b2FzdGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VUb2FzdCB9IGZyb20gXCJAL2hvb2tzL3VzZS10b2FzdFwiXG5pbXBvcnQge1xuICBUb2FzdCxcbiAgVG9hc3RDbG9zZSxcbiAgVG9hc3REZXNjcmlwdGlvbixcbiAgVG9hc3RQcm92aWRlcixcbiAgVG9hc3RUaXRsZSxcbiAgVG9hc3RWaWV3cG9ydCxcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90b2FzdFwiXG5cbmV4cG9ydCBmdW5jdGlvbiBUb2FzdGVyKCkge1xuICBjb25zdCB7IHRvYXN0cyB9ID0gdXNlVG9hc3QoKVxuXG4gIHJldHVybiAoXG4gICAgPFRvYXN0UHJvdmlkZXI+XG4gICAgICB7dG9hc3RzLm1hcChmdW5jdGlvbiAoeyBpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBhY3Rpb24sIC4uLnByb3BzIH0pIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8VG9hc3Qga2V5PXtpZH0gey4uLnByb3BzfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMVwiPlxuICAgICAgICAgICAgICB7dGl0bGUgJiYgPFRvYXN0VGl0bGU+e3RpdGxlfTwvVG9hc3RUaXRsZT59XG4gICAgICAgICAgICAgIHtkZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgPFRvYXN0RGVzY3JpcHRpb24+e2Rlc2NyaXB0aW9ufTwvVG9hc3REZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2FjdGlvbn1cbiAgICAgICAgICAgIDxUb2FzdENsb3NlIC8+XG4gICAgICAgICAgPC9Ub2FzdD5cbiAgICAgICAgKVxuICAgICAgfSl9XG4gICAgICA8VG9hc3RWaWV3cG9ydCAvPlxuICAgIDwvVG9hc3RQcm92aWRlcj5cbiAgKVxufVxuIl0sImZpbGUiOiIvdXNyL3NyYy93b3Jrc3BhY2Uvc3JjL2NvbXBvbmVudHMvdWkvdG9hc3Rlci50c3gifQ==