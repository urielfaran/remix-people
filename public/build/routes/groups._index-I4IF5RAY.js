import {
  Form,
  Link,
  Outlet,
  useLoaderData
} from "/build/_shared/chunk-LLSFN2D5.js";
import {
  createHotContext
} from "/build/_shared/chunk-ZYOVMMKZ.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/groups._index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\groups._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\groups._index.tsx"
  );
  import.meta.hot.lastModified = "1698397893945.2266";
}
var meta = () => {
  return [{
    title: "Groups | List"
  }];
};
function GroupsIndex() {
  _s();
  const groups = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "sidebar", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "People List" }, void 0, false, {
        fileName: "app/routes/groups._index.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { id: "search-form", role: "search", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "font-bold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "search", name: "name", placeholder: "Type a name...", className: "border-2 rounded py-2 px-3" }, void 0, false, {
          fileName: "app/routes/groups._index.tsx",
          lineNumber: 47,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/groups._index.tsx",
          lineNumber: 46,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/groups._index.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "New" }, void 0, false, {
          fileName: "app/routes/groups._index.tsx",
          lineNumber: 51,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/groups._index.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/groups._index.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: groups.map((group) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: group._id, children: group.name }, void 0, false, {
        fileName: "app/routes/groups._index.tsx",
        lineNumber: 57,
        columnNumber: 19
      }, this) }, group._id, false, {
        fileName: "app/routes/groups._index.tsx",
        lineNumber: 56,
        columnNumber: 36
      }, this)) }, void 0, false, {
        fileName: "app/routes/groups._index.tsx",
        lineNumber: 55,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/groups._index.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/groups._index.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "detail", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/groups._index.tsx",
      lineNumber: 63,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/groups._index.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/groups._index.tsx",
    lineNumber: 41,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/groups._index.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}
_s(GroupsIndex, "rQn36nB4a0dctJtHQP3oHF/p1Hc=", false, function() {
  return [useLoaderData];
});
_c = GroupsIndex;
var _c;
$RefreshReg$(_c, "GroupsIndex");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  GroupsIndex as default,
  meta
};
//# sourceMappingURL=/build/routes/groups._index-I4IF5RAY.js.map
