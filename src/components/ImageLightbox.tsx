import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ImageLightbox.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1ac3b587"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/usr/src/workspace/src/components/ImageLightbox.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=1ac3b587"; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "/node_modules/.vite/deps/lucide-react.js?v=1ac3b587";
import { motion, AnimatePresence } from "/node_modules/.vite/deps/framer-motion.js?v=1ac3b587";
export default function ImageLightbox({
  images,
  initialIndex = 0,
  isOpen,
  onClose
}) {
  _s();
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);
  useEffect(() => {
    setCurrentIndex(initialIndex);
    setZoom(1);
  }, [initialIndex, isOpen]);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex]);
  const handlePrevious = () => {
    setCurrentIndex((prev) => prev > 0 ? prev - 1 : images.length - 1);
    setZoom(1);
  };
  const handleNext = () => {
    setCurrentIndex((prev) => prev < images.length - 1 ? prev + 1 : 0);
    setZoom(1);
  };
  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.5, 3));
  };
  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.5, 1));
  };
  if (!isOpen) return /* @__PURE__ */ jsxDEV(Fragment, {}, void 0, false, {
    fileName: "/usr/src/workspace/src/components/ImageLightbox.tsx",
    lineNumber: 76,
    columnNumber: 23
  }, this);
  return /* @__PURE__ */ jsxDEV(AnimatePresence, { children: /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.2 },
      className: "fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm",
      onClick: onClose,
      children: [
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: onClose,
            className: "absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all",
            children: /* @__PURE__ */ jsxDEV(X, { className: "w-6 h-6 text-white" }, void 0, false, {
              fileName: "/usr/src/workspace/src/components/ImageLightbox.tsx",
              lineNumber: 93,
              columnNumber: 11
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/usr/src/workspace/src/components/ImageLightbox.tsx",
            lineNumber: 89,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute top-4 left-4 z-10 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: (e) => {
                e.stopPropagation();
                handleZoomOut();
              },
              disabled: zoom <= 1,
              className: "p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed",
              children: /* @__PURE__ */ jsxDEV(ZoomOut, { className: "w-5 h-5 text-white" }, void 0, false, {
                fileName: "/usr/src/workspace/src/components/ImageLightbox.tsx",
                lineNumber: 106,
                columnNumber: 13
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/usr/src/workspace/src/components/ImageLightbox.tsx",
              lineNumber: 98,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("span", { className: "text-white text-sm font-semibold px-3 py-1 bg-white/10 rounded-full", children: [
            Math.round(zoom * 100),
            "%"
          ] }, void 0, true, {
            fileName: "/usr/src/workspace/src/components/ImageLightbox.tsx",
            lineNumber: 108,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: (e) => {
                e.stopPropagation();
                handleZoomIn();
              },
              disabled: zoom >= 3,
              className: "p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed",
              children: /* @__PURE__ */ jsxDEV(ZoomIn, { className: "w-5 h-5 text-white" }, void 0, false, {
                fileName: "/usr/src/workspace/src/components/ImageLightbox.tsx",
                lineNumber: 119,
                columnNumber: 13
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/usr/src/workspace/src/components/ImageLightbox.tsx",
              lineNumber: 111,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/usr/src/workspace/src/components/ImageLightbox.tsx",
          lineNumber: 97,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full", children: /* @__PURE__ */ jsxDEV("span", { className: "text-white text-sm font-semibold", children: [
          currentIndex + 1,
          " / ",
          images.length
        ] }, void 0, true, {
          fileName: "/usr/src/workspace/src/components/ImageLightbox.tsx",
          lineNumber: 125,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "/usr/src/workspace/src/components/ImageLightbox.tsx",
          lineNumber: 124,
          columnNumber: 9
        }, this),
        images.length > 1 && /* @__PURE__ */ jsxDEV(Fragment, { children: [
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: (e) => {
                e.stopPropagation();
                handlePrevious();
              },
              className: "absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all",
              children: /* @__PURE__ */ jsxDEV(ChevronLeft, { className: "w-6 h-6 text-white" }, void 0, false, {
                fileName: "/usr/src/workspace/src/components/ImageLightbox.tsx",
                lineNumber: 140,
                columnNumber: 15
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/usr/src/workspace/src/components/ImageLightbox.tsx",
              lineNumber: 133,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: (e) => {
                e.stopPropagation();
                handleNext();
              },
              className: "absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all",
              children: /* @__PURE__ */ jsxDEV(ChevronRight, { className: "w-6 h-6 text-white" }, void 0, false, {
                fileName: "/usr/src/workspace/src/components/ImageLightbox.tsx",
                lineNumber: 149,
                columnNumber: 15
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/usr/src/workspace/src/components/ImageLightbox.tsx",
              lineNumber: 142,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/usr/src/workspace/src/components/ImageLightbox.tsx",
          lineNumber: 132,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "w-full h-full flex items-center justify-center p-16", children: /* @__PURE__ */ jsxDEV(
          motion.img,
          {
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: zoom },
            exit: { opacity: 0, scale: 0.9 },
            transition: { duration: 0.3 },
            src: images[currentIndex],
            alt: `Image ${currentIndex + 1}`,
            className: "max-w-full max-h-full object-contain cursor-zoom-in",
            onClick: (e) => {
              e.stopPropagation();
              handleZoomIn();
            }
          },
          currentIndex,
          false,
          {
            fileName: "/usr/src/workspace/src/components/ImageLightbox.tsx",
            lineNumber: 156,
            columnNumber: 11
          },
          this
        ) }, void 0, false, {
          fileName: "/usr/src/workspace/src/components/ImageLightbox.tsx",
          lineNumber: 155,
          columnNumber: 9
        }, this),
        images.length > 1 && /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-20 left-0 right-0 z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-center gap-2 px-4 overflow-x-auto pb-2", children: images.map(
          (img, idx) => /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: (e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
                setZoom(1);
              },
              className: `flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${idx === currentIndex ? "border-orange-400 opacity-100" : "border-white/20 opacity-50 hover:opacity-75"}`,
              children: /* @__PURE__ */ jsxDEV("img", { src: img, alt: `Thumbnail ${idx + 1}`, className: "w-full h-full object-cover" }, void 0, false, {
                fileName: "/usr/src/workspace/src/components/ImageLightbox.tsx",
                lineNumber: 190,
                columnNumber: 19
              }, this)
            },
            idx,
            false,
            {
              fileName: "/usr/src/workspace/src/components/ImageLightbox.tsx",
              lineNumber: 177,
              columnNumber: 13
            },
            this
          )
        ) }, void 0, false, {
          fileName: "/usr/src/workspace/src/components/ImageLightbox.tsx",
          lineNumber: 175,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/usr/src/workspace/src/components/ImageLightbox.tsx",
          lineNumber: 174,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/usr/src/workspace/src/components/ImageLightbox.tsx",
      lineNumber: 80,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "/usr/src/workspace/src/components/ImageLightbox.tsx",
    lineNumber: 79,
    columnNumber: 5
  }, this);
}
_s(ImageLightbox, "ekTd+oqWG1M3HbU4F9mEX53z6Io=");
_c = ImageLightbox;
var _c;
$RefreshReg$(_c, "ImageLightbox");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/usr/src/workspace/src/components/ImageLightbox.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/usr/src/workspace/src/components/ImageLightbox.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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O0FBQ25CdkIsd0JBQVEsQ0FBQztBQUFBLGNBQ1g7QUFBQSxjQUNBLFdBQVcsOEVBQ1R1QixRQUFRMUIsZUFDSixrQ0FDQSw2Q0FBNkM7QUFBQSxjQUduRCxpQ0FBQyxTQUFJLEtBQUt5QixLQUFLLEtBQUssYUFBYUMsTUFBTSxDQUFDLElBQUksV0FBVSxnQ0FBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBa0Y7QUFBQTtBQUFBLFlBWjdFQTtBQUFBQSxZQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFjQTtBQUFBLFFBQ0QsS0FqQkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWtCQSxLQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBb0JBO0FBQUE7QUFBQTtBQUFBLElBbEhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQW9IQSxLQXJIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBc0hBO0FBRUo7QUFBQzNCLEdBeEt1QkwsZUFBYTtBQUFBaUMsS0FBYmpDO0FBQWEsSUFBQWlDO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlgiLCJDaGV2cm9uTGVmdCIsIkNoZXZyb25SaWdodCIsIlpvb21JbiIsIlpvb21PdXQiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJJbWFnZUxpZ2h0Ym94IiwiaW1hZ2VzIiwiaW5pdGlhbEluZGV4IiwiaXNPcGVuIiwib25DbG9zZSIsIl9zIiwiY3VycmVudEluZGV4Iiwic2V0Q3VycmVudEluZGV4Iiwiem9vbSIsInNldFpvb20iLCJoYW5kbGVLZXlEb3duIiwiZSIsImtleSIsImhhbmRsZVByZXZpb3VzIiwiaGFuZGxlTmV4dCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicHJldiIsImxlbmd0aCIsImhhbmRsZVpvb21JbiIsIk1hdGgiLCJtaW4iLCJoYW5kbGVab29tT3V0IiwibWF4Iiwib3BhY2l0eSIsImR1cmF0aW9uIiwic3RvcFByb3BhZ2F0aW9uIiwicm91bmQiLCJzY2FsZSIsIm1hcCIsImltZyIsImlkeCIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkltYWdlTGlnaHRib3gudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgWCwgQ2hldnJvbkxlZnQsIENoZXZyb25SaWdodCwgWm9vbUluLCBab29tT3V0IH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmludGVyZmFjZSBJbWFnZUxpZ2h0Ym94UHJvcHMge1xuICBpbWFnZXM6IHN0cmluZ1tdO1xuICBpbml0aWFsSW5kZXg/OiBudW1iZXI7XG4gIGlzT3BlbjogYm9vbGVhbjtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2VMaWdodGJveCh7IFxuICBpbWFnZXMsIFxuICBpbml0aWFsSW5kZXggPSAwLCBcbiAgaXNPcGVuLCBcbiAgb25DbG9zZSBcbn06IEltYWdlTGlnaHRib3hQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgW2N1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IHVzZVN0YXRlPG51bWJlcj4oaW5pdGlhbEluZGV4KTtcbiAgY29uc3QgW3pvb20sIHNldFpvb21dID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEN1cnJlbnRJbmRleChpbml0aWFsSW5kZXgpO1xuICAgIHNldFpvb20oMSk7XG4gIH0sIFtpbml0aWFsSW5kZXgsIGlzT3Blbl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgICBpZiAoIWlzT3BlbikgcmV0dXJuO1xuICAgICAgXG4gICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSBvbkNsb3NlKCk7XG4gICAgICBpZiAoZS5rZXkgPT09ICdBcnJvd0xlZnQnKSBoYW5kbGVQcmV2aW91cygpO1xuICAgICAgaWYgKGUua2V5ID09PSAnQXJyb3dSaWdodCcpIGhhbmRsZU5leHQoKTtcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duKTtcbiAgfSwgW2lzT3BlbiwgY3VycmVudEluZGV4XSk7XG5cbiAgY29uc3QgaGFuZGxlUHJldmlvdXMgPSAoKTogdm9pZCA9PiB7XG4gICAgc2V0Q3VycmVudEluZGV4KChwcmV2KSA9PiAocHJldiA+IDAgPyBwcmV2IC0gMSA6IGltYWdlcy5sZW5ndGggLSAxKSk7XG4gICAgc2V0Wm9vbSgxKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVOZXh0ID0gKCk6IHZvaWQgPT4ge1xuICAgIHNldEN1cnJlbnRJbmRleCgocHJldikgPT4gKHByZXYgPCBpbWFnZXMubGVuZ3RoIC0gMSA/IHByZXYgKyAxIDogMCkpO1xuICAgIHNldFpvb20oMSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlWm9vbUluID0gKCk6IHZvaWQgPT4ge1xuICAgIHNldFpvb20oKHByZXYpID0+IE1hdGgubWluKHByZXYgKyAwLjUsIDMpKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVab29tT3V0ID0gKCk6IHZvaWQgPT4ge1xuICAgIHNldFpvb20oKHByZXYpID0+IE1hdGgubWF4KHByZXYgLSAwLjUsIDEpKTtcbiAgfTtcblxuICBpZiAoIWlzT3BlbikgcmV0dXJuIDw+PC8+O1xuXG4gIHJldHVybiAoXG4gICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMiB9fVxuICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHotWzEwMF0gYmctYmxhY2svOTUgYmFja2Ryb3AtYmx1ci1zbVwiXG4gICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICA+XG4gICAgICAgIHsvKiBDbG9zZSBCdXR0b24gKi99XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC00IHJpZ2h0LTQgei0xMCBwLTIgYmctd2hpdGUvMTAgaG92ZXI6Ymctd2hpdGUvMjAgcm91bmRlZC1mdWxsIHRyYW5zaXRpb24tYWxsXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxYIGNsYXNzTmFtZT1cInctNiBoLTYgdGV4dC13aGl0ZVwiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIHsvKiBab29tIENvbnRyb2xzICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC00IGxlZnQtNCB6LTEwIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgaGFuZGxlWm9vbU91dCgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGRpc2FibGVkPXt6b29tIDw9IDF9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgYmctd2hpdGUvMTAgaG92ZXI6Ymctd2hpdGUvMjAgcm91bmRlZC1mdWxsIHRyYW5zaXRpb24tYWxsIGRpc2FibGVkOm9wYWNpdHktNTAgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Wm9vbU91dCBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1zbSBmb250LXNlbWlib2xkIHB4LTMgcHktMSBiZy13aGl0ZS8xMCByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICAgIHtNYXRoLnJvdW5kKHpvb20gKiAxMDApfSVcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgaGFuZGxlWm9vbUluKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgZGlzYWJsZWQ9e3pvb20gPj0gM31cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiBiZy13aGl0ZS8xMCBob3ZlcjpiZy13aGl0ZS8yMCByb3VuZGVkLWZ1bGwgdHJhbnNpdGlvbi1hbGwgZGlzYWJsZWQ6b3BhY2l0eS01MCBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxab29tSW4gY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIEltYWdlIENvdW50ZXIgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTQgbGVmdC0xLzIgLXRyYW5zbGF0ZS14LTEvMiB6LTEwIHB4LTQgcHktMiBiZy13aGl0ZS8xMCBiYWNrZHJvcC1ibHVyLXNtIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1zbSBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICB7Y3VycmVudEluZGV4ICsgMX0gLyB7aW1hZ2VzLmxlbmd0aH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBOYXZpZ2F0aW9uIEJ1dHRvbnMgKi99XG4gICAgICAgIHtpbWFnZXMubGVuZ3RoID4gMSAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGhhbmRsZVByZXZpb3VzKCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtNCB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzIgcC0zIGJnLXdoaXRlLzEwIGhvdmVyOmJnLXdoaXRlLzIwIHJvdW5kZWQtZnVsbCB0cmFuc2l0aW9uLWFsbFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDaGV2cm9uTGVmdCBjbGFzc05hbWU9XCJ3LTYgaC02IHRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBoYW5kbGVOZXh0KCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTQgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIHAtMyBiZy13aGl0ZS8xMCBob3ZlcjpiZy13aGl0ZS8yMCByb3VuZGVkLWZ1bGwgdHJhbnNpdGlvbi1hbGxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q2hldnJvblJpZ2h0IGNsYXNzTmFtZT1cInctNiBoLTYgdGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cblxuICAgICAgICB7LyogTWFpbiBJbWFnZSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMTZcIj5cbiAgICAgICAgICA8bW90aW9uLmltZ1xuICAgICAgICAgICAga2V5PXtjdXJyZW50SW5kZXh9XG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjkgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgc2NhbGU6IHpvb20gfX1cbiAgICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCwgc2NhbGU6IDAuOSB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4zIH19XG4gICAgICAgICAgICBzcmM9e2ltYWdlc1tjdXJyZW50SW5kZXhdfVxuICAgICAgICAgICAgYWx0PXtgSW1hZ2UgJHtjdXJyZW50SW5kZXggKyAxfWB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYXgtdy1mdWxsIG1heC1oLWZ1bGwgb2JqZWN0LWNvbnRhaW4gY3Vyc29yLXpvb20taW5cIlxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgaGFuZGxlWm9vbUluKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBUaHVtYm5haWwgU3RyaXAgKi99XG4gICAgICAgIHtpbWFnZXMubGVuZ3RoID4gMSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMjAgbGVmdC0wIHJpZ2h0LTAgei0xMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiBweC00IG92ZXJmbG93LXgtYXV0byBwYi0yXCI+XG4gICAgICAgICAgICAgIHtpbWFnZXMubWFwKChpbWcsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudEluZGV4KGlkeCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFpvb20oMSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleC1zaHJpbmstMCB3LTE2IGgtMTYgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyLTIgdHJhbnNpdGlvbi1hbGwgJHtcbiAgICAgICAgICAgICAgICAgICAgaWR4ID09PSBjdXJyZW50SW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICA/ICdib3JkZXItb3JhbmdlLTQwMCBvcGFjaXR5LTEwMCdcbiAgICAgICAgICAgICAgICAgICAgICA6ICdib3JkZXItd2hpdGUvMjAgb3BhY2l0eS01MCBob3ZlcjpvcGFjaXR5LTc1J1xuICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ30gYWx0PXtgVGh1bWJuYWlsICR7aWR4ICsgMX1gfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlclwiIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICk7XG59XG4iXSwiZmlsZSI6Ii91c3Ivc3JjL3dvcmtzcGFjZS9zcmMvY29tcG9uZW50cy9JbWFnZUxpZ2h0Ym94LnRzeCJ9