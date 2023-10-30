import { ActionFunction, LinksFunction, redirect, type LoaderFunction } from "@remix-run/node";
import { Form, MetaFunction, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { deletePerson, getPersonById, type Person } from "~/api/people";
import GroupsList from "~/components/groupsList";
import appStylesHref from "../app.css";

export const meta: MetaFunction = () => {
    return [{ title: 'Person' }];
}

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: appStylesHref }
];

export const loader: LoaderFunction = async ({ params }) => {
    invariant(params.personId, "Missing person Id param");
    const person: Person = await getPersonById(params.personId);
    console.log('fetching person... -->', person.name);
    return person;
}

export const action: ActionFunction = async ({ params }) => {
    invariant(params.personId, "Missing person Id param");
    await deletePerson(params.personId);
    return redirect("/people");
}

export default function Person() {
    const person: Person = useLoaderData<typeof loader>();

    return (
        <div>
            <h1>{person.name} </h1>
            <div>
                <GroupsList groups={person.groups} name="Groups" />
            </div>
            <div id="editor">
                <Form
                    name="destroy"
                    method="post"
                    onSubmit={(event) => {
                        const response = confirm(
                            "Please confirm you want to delete this record."
                        );
                        if (!response) {
                            event.preventDefault();
                        }
                    }}>
                    <button
                        aria-label="delete"
                        name="_action"
                        className="inline-block"
                    >
                        Delete
                    </button>
                </Form>
                <Form action="edit">
                    <button type="submit">Edit</button>
                </Form>
            </div>
        </div >
    )
}