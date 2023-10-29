import {
  NavLink
} from "/build/_shared/chunk-LLSFN2D5.js";
import {
  createHotContext
} from "/build/_shared/chunk-ZYOVMMKZ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/groupsList.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\groupsList.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\groupsList.tsx"
  );
  import.meta.hot.lastModified = "1698256125625.0154";
}
function GroupsList({
  groups,
  name
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 max-w-md m-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-3xl", children: [
      name,
      ":"
    ] }, void 0, true, {
      fileName: "app/components/groupsList.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex flex-col space-y-3 my-3", children: groups?.[0] ? groups?.map((group) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/groups/" + group._id, prefetch: "intent", className: ({
      isActive
    }) => `w-full hover:underline p-3 rounded border border-slate-400 inline-block ${isActive ? "bg-slate-300 text-black font-bold border-2" : "text-blue-500 "} `, children: group.name }, void 0, false, {
      fileName: "app/components/groupsList.tsx",
      lineNumber: 30,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/components/groupsList.tsx",
      lineNumber: 29,
      columnNumber: 53
    }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl", children: [
      "No ",
      name
    ] }, void 0, true, {
      fileName: "app/components/groupsList.tsx",
      lineNumber: 35,
      columnNumber: 34
    }, this) }, void 0, false, {
      fileName: "app/components/groupsList.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/groupsList.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = GroupsList;
var _c;
$RefreshReg$(_c, "GroupsList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  GroupsList
};
//# sourceMappingURL=/build/_shared/chunk-LRVF3ZA5.js.map
