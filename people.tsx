import { ActionFunctionArgs, json, redirect, type ActionFunction, type LoaderFunction, type MetaFunction } from "@remix-run/node";
import { Form, Link, Outlet, useLoaderData } from "@remix-run/react";
import { createPerson, deletePerson, getAllPeople, type Person } from "~/api/people";

export const meta: MetaFunction = () => {
  return [
    { title: "People | List" },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const name = url.searchParams.get('name');
  const people: Person[] = await getAllPeople(name);
  return people;
}

export const action: ActionFunction = async ({ request }: ActionFunctionArgs) => {
  const contact = await createPerson();
  return json({ contact });
};

export default function PeopleIndex() {
  const people = useLoaderData<Person[]>();

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
            {people.map((person) => (
              <li key={person._id}>
                <Link to={person._id}>
                  {person.name ?
                    person.name :
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

