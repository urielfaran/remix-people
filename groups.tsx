import { json, type ActionFunction, type ActionFunctionArgs, type LoaderFunction, type MetaFunction, redirect } from "@remix-run/node";
import { Form, Link, Outlet, useLoaderData } from "@remix-run/react";
import { createGroup, deleteGroup, getAllGroups, type Group } from "~/api/groups";


export const meta: MetaFunction = () => {
  return [
    { title: "Groups | List" },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const name = url.searchParams.get('name');
  const groups: Group[] = await getAllGroups(name);
  return groups;
}

export const action: ActionFunction = async ({ request }: ActionFunctionArgs) => {
  const contact = await createGroup();
  return json({ contact });
};

export default function GroupsIndex() {
  const groups = useLoaderData<Group[]>();

  return (
    <body>
      <div id="sidebar">
        <h1>People List</h1>
        <div>
          <Form id="search-form" role="search">
            <label className="font-bold">
              <input
                type="search"
                name="name"
                placeholder="Type a name..."
                className="border-2 rounded py-2 px-3"
              />
            </label>
          </Form>
          <Form method="post">
            <button
              type="submit"
              name="_action"
              value="create"
            >
              New
            </button>
          </Form>
        </div>
        <nav>
          <ul>
            {groups.map((group) => (
              <li key={group._id}>
                <Link to={group._id}>
                  {group.name ?
                    group.name :
                    <i>No Name</i>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
      <Link to={"/"}>Back</Link>
    </body>
  );
}





