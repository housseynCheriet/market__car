import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/NotFound.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1ac3b587"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/usr/src/workspace/src/pages/NotFound.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { NavLink } from "/node_modules/.vite/deps/react-router-dom.js?v=1ac3b587";
export default function NotFound() {
  return /* @__PURE__ */ jsxDEV("div", { className: "flex h-screen flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-white px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "text-center p-8 rounded-lg shadow-lg bg-white", children: [
    /* @__PURE__ */ jsxDEV("h1", { className: "text-6xl font-bold mb-4", style: { color: "#9B36FF" }, children: "404" }, void 0, false, {
      fileName: "/usr/src/workspace/src/pages/NotFound.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-gray-700 mb-2", children: "Page not found" }, void 0, false, {
      fileName: "/usr/src/workspace/src/pages/NotFound.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("p", { className: "text-gray-500 mb-6", children: "Sorry, the page you’re looking for doesn’t exist." }, void 0, false, {
      fileName: "/usr/src/workspace/src/pages/NotFound.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(
      NavLink,
      {
        to: "/",
        className: "rounded-lg px-6 py-2 text-white shadow-md transition",
        style: { backgroundColor: "#9B36FF" },
        children: "Go Home"
      },
      void 0,
      false,
      {
        fileName: "/usr/src/workspace/src/pages/NotFound.tsx",
        lineNumber: 33,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/usr/src/workspace/src/pages/NotFound.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/usr/src/workspace/src/pages/NotFound.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
_c = NotFound;
var _c;
$RefreshReg$(_c, "NotFound");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/usr/src/workspace/src/pages/NotFound.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/usr/src/workspace/src/pages/NotFound.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBTVE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFOUixTQUFTQSxlQUFlO0FBRXhCLHdCQUF3QkMsV0FBVztBQUNqQyxTQUNFLHVCQUFDLFNBQUksV0FBVSxvR0FDYixpQ0FBQyxTQUFJLFdBQVUsaURBQ2I7QUFBQSwyQkFBQyxRQUFHLFdBQVUsMkJBQTBCLE9BQU8sRUFBRUMsT0FBTyxVQUFVLEdBQUUsbUJBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FFQTtBQUFBLElBQ0EsdUJBQUMsT0FBRSxXQUFVLDhCQUE2Qiw4QkFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUF3RDtBQUFBLElBQ3hELHVCQUFDLE9BQUUsV0FBVSxzQkFBb0IsaUVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FFQTtBQUFBLElBQ0E7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUNDLElBQUc7QUFBQSxRQUNILFdBQVU7QUFBQSxRQUNWLE9BQU8sRUFBRUMsaUJBQWlCLFVBQVU7QUFBQSxRQUFFO0FBQUE7QUFBQSxNQUh4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFNQTtBQUFBLE9BZEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWVBLEtBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FpQkE7QUFFSjtBQUFDQyxLQXJCdUJIO0FBQVEsSUFBQUc7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIk5hdkxpbmsiLCJOb3RGb3VuZCIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiTm90Rm91bmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RGb3VuZCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1wdXJwbGUtNTAgdG8td2hpdGUgcHgtNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwLTggcm91bmRlZC1sZyBzaGFkb3ctbGcgYmctd2hpdGVcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNnhsIGZvbnQtYm9sZCBtYi00XCIgc3R5bGU9e3sgY29sb3I6IFwiIzlCMzZGRlwiIH19PlxuICAgICAgICAgIDQwNFxuICAgICAgICA8L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtZ3JheS03MDAgbWItMlwiPlBhZ2Ugbm90IGZvdW5kPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIG1iLTZcIj5cbiAgICAgICAgICBTb3JyeSwgdGhlIHBhZ2UgeW914oCZcmUgbG9va2luZyBmb3IgZG9lc27igJl0IGV4aXN0LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgdG89XCIvXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHB4LTYgcHktMiB0ZXh0LXdoaXRlIHNoYWRvdy1tZCB0cmFuc2l0aW9uXCJcbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzlCMzZGRlwiIH19XG4gICAgICAgID5cbiAgICAgICAgICBHbyBIb21lXG4gICAgICAgIDwvTmF2TGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwiZmlsZSI6Ii91c3Ivc3JjL3dvcmtzcGFjZS9zcmMvcGFnZXMvTm90Rm91bmQudHN4In0=