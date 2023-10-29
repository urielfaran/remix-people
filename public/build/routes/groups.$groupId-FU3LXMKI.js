import {
  GroupsList
} from "/build/_shared/chunk-LRVF3ZA5.js";
import {
  NavLink,
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

// app/components/peopleList.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\peopleList.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\peopleList.tsx"
  );
  import.meta.hot.lastModified = "1698330400251.072";
}
function PeopleList({
  people,
  name
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 max-w-md m-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-3xl", children: name ? name + ":" : "" }, void 0, false, {
      fileName: "app/components/peopleList.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex flex-col space-y-3 my-3", children: people?.[0] ? people?.map((person) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/people/" + person._id, prefetch: "intent", className: ({
      isActive
    }) => `w-full hover:underline p-3 rounded border border-slate-400 max-w-[10] inline-block ${isActive ? "bg-slate-300 text-black font-bold border-2" : "text-blue-500 "} `, children: person.name }, void 0, false, {
      fileName: "app/components/peopleList.tsx",
      lineNumber: 30,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/components/peopleList.tsx",
      lineNumber: 29,
      columnNumber: 54
    }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl", children: [
      "No ",
      name
    ] }, void 0, true, {
      fileName: "app/components/peopleList.tsx",
      lineNumber: 35,
      columnNumber: 34
    }, this) }, void 0, false, {
      fileName: "app/components/peopleList.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/peopleList.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = PeopleList;
var _c;
$RefreshReg$(_c, "PeopleList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/groups.$groupId.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\groups.$groupId.tsx"
  );
  import.meta.hot.lastModified = "1698594259162.51";
}
var meta = (data) => {
  return [
    { title: data.name }
  ];
};
function $Group() {
  const group = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-3xl mb-20 text-center ", children: [
      group.name,
      " "
    ] }, void 0, true, {
      fileName: "app/routes/groups.$groupId.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GroupsList, { groups: group.child_groups, name: "Child Groups" }, void 0, false, {
      fileName: "app/routes/groups.$groupId.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PeopleList, { people: group.people, name: "Children" }, void 0, false, {
      fileName: "app/routes/groups.$groupId.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-xl m-20 max-w-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-3xl", children: "Parent:" }, void 0, false, {
        fileName: "app/routes/groups.$groupId.tsx",
        lineNumber: 43,
        columnNumber: 17
      }, this),
      group.parent ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        NavLink,
        {
          to: "/groups/" + group.parent._id,
          title: group.parent.name,
          prefetch: "intent",
          className: ({ isActive }) => `w-full hover:underline p-3 rounded border border-slate-400 inline-block ${isActive ? "bg-slate-300 text-black font-bold border-2" : "text-blue-500 "} `,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: group.parent.name }, void 0, false, {
            fileName: "app/routes/groups.$groupId.tsx",
            lineNumber: 55,
            columnNumber: 25
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/routes/groups.$groupId.tsx",
          lineNumber: 45,
          columnNumber: 21
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "No parent" }, void 0, false, {
        fileName: "app/routes/groups.$groupId.tsx",
        lineNumber: 58,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/groups.$groupId.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/groups.$groupId.tsx",
    lineNumber: 38,
    columnNumber: 9
  }, this);
}
export {
  $Group as default,
  meta
};
//# sourceMappingURL=/build/routes/groups.$groupId-FU3LXMKI.js.map
