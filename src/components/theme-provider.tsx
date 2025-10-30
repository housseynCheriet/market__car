import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/theme-provider.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1ac3b587"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/usr/src/workspace/src/components/theme-provider.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$(), _s2 = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=1ac3b587"; const createContext = __vite__cjsImport3_react["createContext"]; const useContext = __vite__cjsImport3_react["useContext"]; const useEffect = __vite__cjsImport3_react["useEffect"]; const useState = __vite__cjsImport3_react["useState"];
import { applyAll, getSettings } from "/src/lib/theme.ts";
const initialState = {
  theme: "system",
  setTheme: () => null
};
const ThemeProviderContext = createContext(initialState);
export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}) {
  _s();
  const [theme, setTheme] = useState(
    () => localStorage.getItem(storageKey) || defaultTheme
  );
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    let actualTheme;
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.add(systemTheme);
      actualTheme = systemTheme;
    } else {
      root.classList.add(theme);
      actualTheme = theme;
    }
    const settings = getSettings();
    const palette = actualTheme === "dark" ? settings.darkPalette : settings.lightPalette;
    const paletteToApply = palette === "default" ? "" : palette;
    applyAll(actualTheme, paletteToApply, settings.fontSize, settings.fontFamily);
  }, [theme]);
  const value = {
    theme,
    setTheme: (theme2) => {
      localStorage.setItem(storageKey, theme2);
      setTheme(theme2);
    }
  };
  return /* @__PURE__ */ jsxDEV(ThemeProviderContext.Provider, { ...props, value, children }, void 0, false, {
    fileName: "/usr/src/workspace/src/components/theme-provider.tsx",
    lineNumber: 88,
    columnNumber: 5
  }, this);
}
_s(ThemeProvider, "YkY4D08WntVjXLroWjAGi4sfNRs=");
_c = ThemeProvider;
export const useTheme = () => {
  _s2();
  const context = useContext(ThemeProviderContext);
  if (context === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
_s2(useTheme, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
$RefreshReg$(_c, "ThemeProvider");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/usr/src/workspace/src/components/theme-provider.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/usr/src/workspace/src/components/theme-provider.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBb0VJOzs7Ozs7Ozs7Ozs7Ozs7OztBQXBFSixTQUFnQkEsZUFBZUMsWUFBWUMsV0FBV0MsZ0JBQWdCO0FBQ3RFLFNBQVNDLFVBQVVDLG1CQUFtQjtBQWV0QyxNQUFNQyxlQUFtQztBQUFBLEVBQ3ZDQyxPQUFPO0FBQUEsRUFDUEMsVUFBVUEsTUFBTTtBQUNsQjtBQUVBLE1BQU1DLHVCQUF1QlQsY0FBa0NNLFlBQVk7QUFFcEUsZ0JBQVNJLGNBQWM7QUFBQSxFQUM1QkM7QUFBQUEsRUFDQUMsZUFBZTtBQUFBLEVBQ2ZDLGFBQWE7QUFBQSxFQUNiLEdBQUdDO0FBQ2UsR0FBdUI7QUFBQUMsS0FBQTtBQUN6QyxRQUFNLENBQUNSLE9BQU9DLFFBQVEsSUFBSUw7QUFBQUEsSUFDeEIsTUFBT2EsYUFBYUMsUUFBUUosVUFBVSxLQUFlRDtBQUFBQSxFQUN2RDtBQUVBVixZQUFVLE1BQU07QUFDZCxVQUFNZ0IsT0FBT0MsT0FBT0MsU0FBU0M7QUFFN0JILFNBQUtJLFVBQVVDLE9BQU8sU0FBUyxNQUFNO0FBRXJDLFFBQUlDO0FBQ0osUUFBSWpCLFVBQVUsVUFBVTtBQUN0QixZQUFNa0IsY0FBY04sT0FBT08sV0FBVyw4QkFBOEIsRUFDakVDLFVBQ0MsU0FDQTtBQUVKVCxXQUFLSSxVQUFVTSxJQUFJSCxXQUFXO0FBQzlCRCxvQkFBY0M7QUFBQUEsSUFDaEIsT0FBTztBQUNMUCxXQUFLSSxVQUFVTSxJQUFJckIsS0FBSztBQUN4QmlCLG9CQUFjakI7QUFBQUEsSUFDaEI7QUFHQSxVQUFNc0IsV0FBV3hCLFlBQVk7QUFDN0IsVUFBTXlCLFVBQVVOLGdCQUFnQixTQUFTSyxTQUFTRSxjQUFjRixTQUFTRztBQUN6RSxVQUFNQyxpQkFBaUJILFlBQVksWUFBWSxLQUFLQTtBQUNwRDFCLGFBQVNvQixhQUFhUyxnQkFBZ0JKLFNBQVNLLFVBQVVMLFNBQVNNLFVBQVU7QUFBQSxFQUM5RSxHQUFHLENBQUM1QixLQUFLLENBQUM7QUFFVixRQUFNNkIsUUFBUTtBQUFBLElBQ1o3QjtBQUFBQSxJQUNBQyxVQUFVQSxDQUFDRCxXQUFpQjtBQUMxQlMsbUJBQWFxQixRQUFReEIsWUFBWU4sTUFBSztBQUN0Q0MsZUFBU0QsTUFBSztBQUFBLElBQ2hCO0FBQUEsRUFDRjtBQUVBLFNBQ0UsdUJBQUMscUJBQXFCLFVBQXJCLEVBQThCLEdBQUlPLE9BQU8sT0FDdkNILFlBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVBO0FBRUo7QUFBQ0ksR0FqRGVMLGVBQWE7QUFBQTRCLEtBQWI1QjtBQW1EVCxhQUFNNkIsV0FBV0EsTUFBMEI7QUFBQUMsTUFBQTtBQUNoRCxRQUFNQyxVQUFVeEMsV0FBV1Esb0JBQW9CO0FBRS9DLE1BQUlnQyxZQUFZQztBQUNkLFVBQU0sSUFBSUMsTUFBTSw4Q0FBOEM7QUFFaEUsU0FBT0Y7QUFDVDtBQUFFRCxJQVBXRCxVQUFRO0FBQUEsSUFBQUQ7QUFBQU0sYUFBQU4sSUFBQSIsIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhcHBseUFsbCIsImdldFNldHRpbmdzIiwiaW5pdGlhbFN0YXRlIiwidGhlbWUiLCJzZXRUaGVtZSIsIlRoZW1lUHJvdmlkZXJDb250ZXh0IiwiVGhlbWVQcm92aWRlciIsImNoaWxkcmVuIiwiZGVmYXVsdFRoZW1lIiwic3RvcmFnZUtleSIsInByb3BzIiwiX3MiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicm9vdCIsIndpbmRvdyIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWN0dWFsVGhlbWUiLCJzeXN0ZW1UaGVtZSIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiYWRkIiwic2V0dGluZ3MiLCJwYWxldHRlIiwiZGFya1BhbGV0dGUiLCJsaWdodFBhbGV0dGUiLCJwYWxldHRlVG9BcHBseSIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsInZhbHVlIiwic2V0SXRlbSIsIl9jIiwidXNlVGhlbWUiLCJfczIiLCJjb250ZXh0IiwidW5kZWZpbmVkIiwiRXJyb3IiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsidGhlbWUtcHJvdmlkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYXBwbHlBbGwsIGdldFNldHRpbmdzIH0gZnJvbSAnQC9saWIvdGhlbWUnO1xuXG50eXBlIFRoZW1lID0gJ2RhcmsnIHwgJ2xpZ2h0JyB8ICdzeXN0ZW0nO1xuXG50eXBlIFRoZW1lUHJvdmlkZXJQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgZGVmYXVsdFRoZW1lPzogVGhlbWU7XG4gIHN0b3JhZ2VLZXk/OiBzdHJpbmc7XG59O1xuXG50eXBlIFRoZW1lUHJvdmlkZXJTdGF0ZSA9IHtcbiAgdGhlbWU6IFRoZW1lO1xuICBzZXRUaGVtZTogKHRoZW1lOiBUaGVtZSkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogVGhlbWVQcm92aWRlclN0YXRlID0ge1xuICB0aGVtZTogJ3N5c3RlbScsXG4gIHNldFRoZW1lOiAoKSA9PiBudWxsLFxufTtcblxuY29uc3QgVGhlbWVQcm92aWRlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0PFRoZW1lUHJvdmlkZXJTdGF0ZT4oaW5pdGlhbFN0YXRlKTtcblxuZXhwb3J0IGZ1bmN0aW9uIFRoZW1lUHJvdmlkZXIoe1xuICBjaGlsZHJlbixcbiAgZGVmYXVsdFRoZW1lID0gJ3N5c3RlbScsXG4gIHN0b3JhZ2VLZXkgPSAndml0ZS11aS10aGVtZScsXG4gIC4uLnByb3BzXG59OiBUaGVtZVByb3ZpZGVyUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlPFRoZW1lPihcbiAgICAoKSA9PiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmFnZUtleSkgYXMgVGhlbWUpIHx8IGRlZmF1bHRUaGVtZVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgcm9vdCA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2xpZ2h0JywgJ2RhcmsnKTtcblxuICAgIGxldCBhY3R1YWxUaGVtZTogJ2RhcmsnIHwgJ2xpZ2h0JztcbiAgICBpZiAodGhlbWUgPT09ICdzeXN0ZW0nKSB7XG4gICAgICBjb25zdCBzeXN0ZW1UaGVtZSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJylcbiAgICAgICAgLm1hdGNoZXNcbiAgICAgICAgPyAnZGFyaydcbiAgICAgICAgOiAnbGlnaHQnO1xuXG4gICAgICByb290LmNsYXNzTGlzdC5hZGQoc3lzdGVtVGhlbWUpO1xuICAgICAgYWN0dWFsVGhlbWUgPSBzeXN0ZW1UaGVtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm9vdC5jbGFzc0xpc3QuYWRkKHRoZW1lKTtcbiAgICAgIGFjdHVhbFRoZW1lID0gdGhlbWU7XG4gICAgfVxuXG4gICAgLy8gUmVhcHBseSBzYXZlZCBzZXR0aW5ncyB3aGVuIHRoZW1lIG1vZGUgY2hhbmdlc1xuICAgIGNvbnN0IHNldHRpbmdzID0gZ2V0U2V0dGluZ3MoKTtcbiAgICBjb25zdCBwYWxldHRlID0gYWN0dWFsVGhlbWUgPT09ICdkYXJrJyA/IHNldHRpbmdzLmRhcmtQYWxldHRlIDogc2V0dGluZ3MubGlnaHRQYWxldHRlO1xuICAgIGNvbnN0IHBhbGV0dGVUb0FwcGx5ID0gcGFsZXR0ZSA9PT0gJ2RlZmF1bHQnID8gJycgOiBwYWxldHRlO1xuICAgIGFwcGx5QWxsKGFjdHVhbFRoZW1lLCBwYWxldHRlVG9BcHBseSwgc2V0dGluZ3MuZm9udFNpemUsIHNldHRpbmdzLmZvbnRGYW1pbHkpO1xuICB9LCBbdGhlbWVdKTtcblxuICBjb25zdCB2YWx1ZSA9IHtcbiAgICB0aGVtZSxcbiAgICBzZXRUaGVtZTogKHRoZW1lOiBUaGVtZSkgPT4ge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmFnZUtleSwgdGhlbWUpO1xuICAgICAgc2V0VGhlbWUodGhlbWUpO1xuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlckNvbnRleHQuUHJvdmlkZXIgey4uLnByb3BzfSB2YWx1ZT17dmFsdWV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvVGhlbWVQcm92aWRlckNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCB1c2VUaGVtZSA9ICgpOiBUaGVtZVByb3ZpZGVyU3RhdGUgPT4ge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChUaGVtZVByb3ZpZGVyQ29udGV4dCk7XG5cbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZClcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZVRoZW1lIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBUaGVtZVByb3ZpZGVyJyk7XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59O1xuIl0sImZpbGUiOiIvdXNyL3NyYy93b3Jrc3BhY2Uvc3JjL2NvbXBvbmVudHMvdGhlbWUtcHJvdmlkZXIudHN4In0=