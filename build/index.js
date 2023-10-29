var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 98,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/app.css
var app_default = "/build/_assets/app-3KTS7F44.css";

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "Root | Root" }
], links = () => [
  { rel: "stylesheet", href: app_default }
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/people.$personId.tsx
var people_personId_exports = {};
__export(people_personId_exports, {
  action: () => action,
  default: () => Person,
  loader: () => loader,
  meta: () => meta2
});
import { redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";

// app/api/connect.ts
import mongoose from "mongoose";
mongoose.set("strictQuery", !1);
async function dbConnect() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ServerSide"), console.log("Connected");
}

// app/api/models/person.model.ts
import mongoose2 from "mongoose";
var personSchema = new mongoose2.Schema({
  name: { type: String },
  groups: {
    type: [mongoose2.Schema.Types.ObjectId],
    ref: "group"
  }
}), personModel = mongoose2.models.person || mongoose2.model("person", personSchema, "Persons");

// app/api/models/group.model.ts
import mongoose3 from "mongoose";
var groupSchema = new mongoose3.Schema({
  name: { type: String },
  parent: {
    type: mongoose3.Schema.Types.ObjectId,
    ref: "group"
  },
  child_groups: {
    type: [mongoose3.Schema.Types.ObjectId],
    ref: "group"
  },
  people: {
    type: [mongoose3.Schema.Types.ObjectId],
    ref: "person"
  }
}), groupModel = mongoose3.models.group || mongoose3.model("group", groupSchema, "Groups");

// app/api/people.ts
async function getAllPeople(name) {
  await dbConnect();
  let people = await personModel.find({}).populate({ path: "groups", model: groupModel });
  return name == null ? people : people.filter((person) => name ? person.name.toLowerCase().includes(name.toLowerCase()) : !0);
}
async function getPersonById(id) {
  return await personModel.findById(id).populate({ path: "groups", model: groupModel });
}
async function deletePerson(id) {
  await personModel.findByIdAndDelete(id);
}
async function createPerson() {
  await personModel.create({});
}

// app/components/groupsList.tsx
import { NavLink } from "@remix-run/react";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function GroupsList({ groups, name }) {
  return /* @__PURE__ */ jsxDEV3("div", { className: "flex-1 max-w-md m-20", children: [
    /* @__PURE__ */ jsxDEV3("h3", { className: "text-3xl", children: [
      name,
      ":"
    ] }, void 0, !0, {
      fileName: "app/components/groupsList.tsx",
      lineNumber: 11,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV3("ul", { className: "flex flex-col space-y-3 my-3", children: groups?.[0] ? groups?.map((group) => /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3(
      NavLink,
      {
        to: "/groups/" + group._id,
        prefetch: "intent",
        className: ({ isActive }) => `w-full hover:underline p-3 rounded border border-slate-400 inline-block ${isActive ? "bg-slate-300 text-black font-bold border-2" : "text-blue-500 "} `,
        children: group.name
      },
      void 0,
      !1,
      {
        fileName: "app/components/groupsList.tsx",
        lineNumber: 16,
        columnNumber: 29
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/groupsList.tsx",
      lineNumber: 15,
      columnNumber: 25
    }, this)) : /* @__PURE__ */ jsxDEV3("p", { className: "text-2xl", children: [
      "No ",
      name
    ] }, void 0, !0, {
      fileName: "app/components/groupsList.tsx",
      lineNumber: 30,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/components/groupsList.tsx",
      lineNumber: 12,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/groupsList.tsx",
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

// app/routes/people.$personId.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var meta2 = () => [{ title: "Person" }], loader = async ({ params }) => {
  invariant(params.personId, "Missing person Id param");
  let person = await getPersonById(params.personId);
  return console.log("fetching person... -->", person.name), person;
}, action = async ({ params }) => (invariant(params.personId, "Missing contactId param"), await deletePerson(params.personId), redirect("/people"));
function Person() {
  let person = useLoaderData();
  return /* @__PURE__ */ jsxDEV4("div", { children: [
    /* @__PURE__ */ jsxDEV4("h1", { className: "text-3xl mb-20 text-center ", children: [
      person.name,
      " "
    ] }, void 0, !0, {
      fileName: "app/routes/people.$personId.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { className: "flex py-5 space-x-5", children: /* @__PURE__ */ jsxDEV4(GroupsList, { groups: person.groups, name: "Groups" }, void 0, !1, {
      fileName: "app/routes/people.$personId.tsx",
      lineNumber: 33,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/people.$personId.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV4(
      Form,
      {
        method: "post",
        onSubmit: (event) => {
          confirm(
            "Please confirm you want to delete this record."
          ) || event.preventDefault();
        },
        children: /* @__PURE__ */ jsxDEV4("button", { type: "submit", className: "text-[red] m-20", children: "Delete" }, void 0, !1, {
          fileName: "app/routes/people.$personId.tsx",
          lineNumber: 46,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/people.$personId.tsx",
        lineNumber: 35,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/people.$personId.tsx",
    lineNumber: 30,
    columnNumber: 9
  }, this);
}

// app/routes/groups.$groupId.tsx
var groups_groupId_exports = {};
__export(groups_groupId_exports, {
  default: () => $Group,
  loader: () => loader2,
  meta: () => meta3
});
import { NavLink as NavLink3, useLoaderData as useLoaderData2 } from "@remix-run/react";
import invariant2 from "tiny-invariant";

// app/api/groups.ts
var query = [
  {
    path: "child_groups",
    model: groupModel
  },
  {
    path: "people",
    model: personModel
  },
  {
    path: "parent",
    model: groupModel
  }
];
async function getAllGroups(name) {
  return await dbConnect(), (await groupModel.find({}).populate(query)).filter((group) => name ? group.name.toLowerCase().includes(name.toLowerCase()) : !0);
}
async function getGroupById(id) {
  return await groupModel.findById(id).populate(query);
}

// app/components/peopleList.tsx
import { NavLink as NavLink2 } from "@remix-run/react";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function PeopleList({ people, name }) {
  return /* @__PURE__ */ jsxDEV5("div", { className: "flex-1 max-w-md m-20", children: [
    /* @__PURE__ */ jsxDEV5("h3", { className: "text-3xl", children: name ? name + ":" : "" }, void 0, !1, {
      fileName: "app/components/peopleList.tsx",
      lineNumber: 12,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV5("ul", { className: "flex flex-col space-y-3 my-3", children: people?.[0] ? people?.map((person) => /* @__PURE__ */ jsxDEV5("li", { children: /* @__PURE__ */ jsxDEV5(
      NavLink2,
      {
        to: "/people/" + person._id,
        prefetch: "intent",
        className: ({ isActive }) => `w-full hover:underline p-3 rounded border border-slate-400 max-w-[10] inline-block ${isActive ? "bg-slate-300 text-black font-bold border-2" : "text-blue-500 "} `,
        children: person.name
      },
      void 0,
      !1,
      {
        fileName: "app/components/peopleList.tsx",
        lineNumber: 17,
        columnNumber: 29
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/peopleList.tsx",
      lineNumber: 16,
      columnNumber: 25
    }, this)) : /* @__PURE__ */ jsxDEV5("p", { className: "text-2xl", children: [
      "No ",
      name
    ] }, void 0, !0, {
      fileName: "app/components/peopleList.tsx",
      lineNumber: 31,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/components/peopleList.tsx",
      lineNumber: 13,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/peopleList.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

// app/routes/groups.$groupId.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var meta3 = (data) => [
  { title: data.name }
], loader2 = async ({ params }) => {
  invariant2(params.groupId, "Missing group Id param");
  let group = await getGroupById(params.groupId);
  return console.log("fetching group... -->", group.name), group;
};
function $Group() {
  let group = useLoaderData2();
  return /* @__PURE__ */ jsxDEV6("div", { children: [
    /* @__PURE__ */ jsxDEV6("h1", { className: "text-3xl mb-20 text-center ", children: [
      group.name,
      " "
    ] }, void 0, !0, {
      fileName: "app/routes/groups.$groupId.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV6(GroupsList, { groups: group.child_groups, name: "Child Groups" }, void 0, !1, {
      fileName: "app/routes/groups.$groupId.tsx",
      lineNumber: 29,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV6(PeopleList, { people: group.people, name: "Children" }, void 0, !1, {
      fileName: "app/routes/groups.$groupId.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { className: "text-xl m-20 max-w-md", children: [
      /* @__PURE__ */ jsxDEV6("h3", { className: "text-3xl", children: "Parent:" }, void 0, !1, {
        fileName: "app/routes/groups.$groupId.tsx",
        lineNumber: 32,
        columnNumber: 17
      }, this),
      group.parent ? /* @__PURE__ */ jsxDEV6(
        NavLink3,
        {
          to: "/groups/" + group.parent._id,
          title: group.parent.name,
          prefetch: "intent",
          className: ({ isActive }) => `w-full hover:underline p-3 rounded border border-slate-400 inline-block ${isActive ? "bg-slate-300 text-black font-bold border-2" : "text-blue-500 "} `,
          children: /* @__PURE__ */ jsxDEV6("div", { children: group.parent.name }, void 0, !1, {
            fileName: "app/routes/groups.$groupId.tsx",
            lineNumber: 44,
            columnNumber: 25
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/groups.$groupId.tsx",
          lineNumber: 34,
          columnNumber: 21
        },
        this
      ) : /* @__PURE__ */ jsxDEV6("p", { children: "No parent" }, void 0, !1, {
        fileName: "app/routes/groups.$groupId.tsx",
        lineNumber: 47,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/groups.$groupId.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/groups.$groupId.tsx",
    lineNumber: 27,
    columnNumber: 9
  }, this);
}

// app/routes/groups._index.tsx
var groups_index_exports = {};
__export(groups_index_exports, {
  default: () => GroupsIndex,
  loader: () => loader3,
  meta: () => meta4
});
import { Form as Form3, Link, Outlet as Outlet3, useLoaderData as useLoaderData3 } from "@remix-run/react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var meta4 = () => [
  { title: "Groups | List" }
], loader3 = async ({ request }) => {
  let name = new URL(request.url).searchParams.get("name");
  return await getAllGroups(name);
};
function GroupsIndex() {
  let groups = useLoaderData3();
  return /* @__PURE__ */ jsxDEV7("div", { children: /* @__PURE__ */ jsxDEV7("body", { children: [
    /* @__PURE__ */ jsxDEV7("div", { id: "sidebar", children: [
      /* @__PURE__ */ jsxDEV7("h1", { children: "People List" }, void 0, !1, {
        fileName: "app/routes/groups._index.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7("div", { children: [
        /* @__PURE__ */ jsxDEV7(Form3, { id: "search-form", role: "search", children: /* @__PURE__ */ jsxDEV7("label", { className: "font-bold", children: /* @__PURE__ */ jsxDEV7(
          "input",
          {
            type: "search",
            name: "name",
            placeholder: "Type a name...",
            className: "border-2 rounded py-2 px-3"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/groups._index.tsx",
            lineNumber: 31,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/groups._index.tsx",
          lineNumber: 30,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/groups._index.tsx",
          lineNumber: 29,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV7(Form3, { method: "post", children: /* @__PURE__ */ jsxDEV7("button", { type: "submit", children: "New" }, void 0, !1, {
          fileName: "app/routes/groups._index.tsx",
          lineNumber: 40,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/groups._index.tsx",
          lineNumber: 39,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/groups._index.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7("nav", { children: /* @__PURE__ */ jsxDEV7("ul", { children: groups.map((group) => /* @__PURE__ */ jsxDEV7("li", { children: /* @__PURE__ */ jsxDEV7(Link, { to: group._id, children: group.name }, void 0, !1, {
        fileName: "app/routes/groups._index.tsx",
        lineNumber: 47,
        columnNumber: 19
      }, this) }, group._id, !1, {
        fileName: "app/routes/groups._index.tsx",
        lineNumber: 46,
        columnNumber: 17
      }, this)) }, void 0, !1, {
        fileName: "app/routes/groups._index.tsx",
        lineNumber: 44,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/groups._index.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/groups._index.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV7("div", { id: "detail", children: /* @__PURE__ */ jsxDEV7(Outlet3, {}, void 0, !1, {
      fileName: "app/routes/groups._index.tsx",
      lineNumber: 54,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/groups._index.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/groups._index.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/groups._index.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/people._index.tsx
var people_index_exports = {};
__export(people_index_exports, {
  action: () => action2,
  default: () => PeopleIndex,
  loader: () => loader4,
  meta: () => meta5
});
import { json } from "@remix-run/node";
import { Form as Form4, Link as Link2, Outlet as Outlet4, useLoaderData as useLoaderData4 } from "@remix-run/react";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var meta5 = () => [
  { title: "People | List" }
], loader4 = async ({ request }) => {
  let name = new URL(request.url).searchParams.get("name");
  return await getAllPeople(name);
}, action2 = async () => {
  let contact = await createPerson();
  return json({ contact });
};
function PeopleIndex() {
  let people = useLoaderData4();
  return /* @__PURE__ */ jsxDEV8("div", { children: /* @__PURE__ */ jsxDEV8("body", { children: [
    /* @__PURE__ */ jsxDEV8("div", { id: "sidebar", children: [
      /* @__PURE__ */ jsxDEV8("h1", { children: "People List" }, void 0, !1, {
        fileName: "app/routes/people._index.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { children: [
        /* @__PURE__ */ jsxDEV8(Form4, { id: "search-form", role: "search", children: /* @__PURE__ */ jsxDEV8("label", { className: "font-bold", children: /* @__PURE__ */ jsxDEV8(
          "input",
          {
            type: "search",
            name: "name",
            placeholder: "Type a name...",
            className: "border-2 rounded py-2 px-3"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/people._index.tsx",
            lineNumber: 35,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/people._index.tsx",
          lineNumber: 34,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/people._index.tsx",
          lineNumber: 33,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV8(Form4, { method: "post", children: /* @__PURE__ */ jsxDEV8("button", { type: "submit", children: "New" }, void 0, !1, {
          fileName: "app/routes/people._index.tsx",
          lineNumber: 44,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/people._index.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/people._index.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV8("nav", { children: /* @__PURE__ */ jsxDEV8("ul", { children: people.map((person) => /* @__PURE__ */ jsxDEV8("li", { children: /* @__PURE__ */ jsxDEV8(Link2, { to: person._id, children: person.name ? person.name : /* @__PURE__ */ jsxDEV8("i", { children: "No Name" }, void 0, !1, {
        fileName: "app/routes/people._index.tsx",
        lineNumber: 54,
        columnNumber: 23
      }, this) }, void 0, !1, {
        fileName: "app/routes/people._index.tsx",
        lineNumber: 51,
        columnNumber: 19
      }, this) }, person._id, !1, {
        fileName: "app/routes/people._index.tsx",
        lineNumber: 50,
        columnNumber: 17
      }, this)) }, void 0, !1, {
        fileName: "app/routes/people._index.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/people._index.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/people._index.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { id: "detail", children: /* @__PURE__ */ jsxDEV8(Outlet4, {}, void 0, !1, {
      fileName: "app/routes/people._index.tsx",
      lineNumber: 62,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/people._index.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/people._index.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/people._index.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  links: () => links2,
  meta: () => meta6
});
import { NavLink as NavLink4 } from "@remix-run/react";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-26LF6BDL.css";

// app/routes/_index.tsx
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var meta6 = () => [
  { title: "People | Groups" }
], links2 = () => [{ rel: "stylesheet", href: tailwind_default }];
function Index() {
  return /* @__PURE__ */ jsxDEV9("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxDEV9(
      NavLink4,
      {
        to: "/people",
        className: "text-5xl font-bold text-center m-10",
        children: "People"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 17,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV9(
      NavLink4,
      {
        to: "/groups",
        className: "text-5xl font-bold text-center m-10",
        children: "Groups"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 23,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-YEIKNGSS.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-LLSFN2D5.js", "/build/_shared/chunk-ZYOVMMKZ.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-E334RBZH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-6H4CRSBE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/groups.$groupId": { id: "routes/groups.$groupId", parentId: "root", path: "groups/:groupId", index: void 0, caseSensitive: void 0, module: "/build/routes/groups.$groupId-FU3LXMKI.js", imports: ["/build/_shared/chunk-LRVF3ZA5.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/groups._index": { id: "routes/groups._index", parentId: "root", path: "groups", index: !0, caseSensitive: void 0, module: "/build/routes/groups._index-I4IF5RAY.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/people.$personId": { id: "routes/people.$personId", parentId: "root", path: "people/:personId", index: void 0, caseSensitive: void 0, module: "/build/routes/people.$personId-HFTMC5Q2.js", imports: ["/build/_shared/chunk-LRVF3ZA5.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/people._index": { id: "routes/people._index", parentId: "root", path: "people", index: !0, caseSensitive: void 0, module: "/build/routes/people._index-KDIH76Z7.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 } }, version: "74777257", hmr: { runtime: "/build/_shared\\chunk-ZYOVMMKZ.js", timestamp: 1698594636175 }, url: "/build/manifest-74777257.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = {}, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/people.$personId": {
    id: "routes/people.$personId",
    parentId: "root",
    path: "people/:personId",
    index: void 0,
    caseSensitive: void 0,
    module: people_personId_exports
  },
  "routes/groups.$groupId": {
    id: "routes/groups.$groupId",
    parentId: "root",
    path: "groups/:groupId",
    index: void 0,
    caseSensitive: void 0,
    module: groups_groupId_exports
  },
  "routes/groups._index": {
    id: "routes/groups._index",
    parentId: "root",
    path: "groups",
    index: !0,
    caseSensitive: void 0,
    module: groups_index_exports
  },
  "routes/people._index": {
    id: "routes/people._index",
    parentId: "root",
    path: "people",
    index: !0,
    caseSensitive: void 0,
    module: people_index_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
