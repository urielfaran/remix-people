import {
  GroupsList
} from "/build/_shared/chunk-LRVF3ZA5.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
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

// app/routes/people.$personId.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\people.$personId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\people.$personId.tsx"
  );
  import.meta.hot.lastModified = "1698594635805.9211";
}
var meta = () => {
  return [{
    title: "Person"
  }];
};
function Person() {
  _s();
  const person = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl mb-20 text-center ", children: [
      person.name,
      " "
    ] }, void 0, true, {
      fileName: "app/routes/people.$personId.tsx",
      lineNumber: 51,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex py-5 space-x-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GroupsList, { groups: person.groups, name: "Groups" }, void 0, false, {
      fileName: "app/routes/people.$personId.tsx",
      lineNumber: 53,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/people.$personId.tsx",
      lineNumber: 52,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", onSubmit: (event) => {
      const response = confirm("Please confirm you want to delete this record.");
      if (!response) {
        event.preventDefault();
      }
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "text-[red] m-20", children: "Delete" }, void 0, false, {
      fileName: "app/routes/people.$personId.tsx",
      lineNumber: 61,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/people.$personId.tsx",
      lineNumber: 55,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/people.$personId.tsx",
    lineNumber: 50,
    columnNumber: 10
  }, this);
}
_s(Person, "vA3YW74I1A8IzBgAHgL6sftqGHQ=", false, function() {
  return [useLoaderData];
});
_c = Person;
var _c;
$RefreshReg$(_c, "Person");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Person as default,
  meta
};
//# sourceMappingURL=/build/routes/people.$personId-HFTMC5Q2.js.map
