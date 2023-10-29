import { ActionFunction, ActionFunctionArgs, redirect, type LoaderFunction } from "@remix-run/node";
import { Form, MetaFunction, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { deletePerson, getPersonById, type Person } from "~/api/people";
import GroupsList from "~/components/groupsList";


export const meta: MetaFunction = () => {
    return [{ title: 'Person' }];
}

export const loader: LoaderFunction = async ({ params }) => {
    invariant(params.personId, "Missing person Id param");
    const person: Person = await getPersonById(params.personId);
    console.log('fetching person... -->', person.name);
    return person;
}

export const action: ActionFunction = async ({ params }: ActionFunctionArgs) => {
    invariant(params.personId, "Missing contactId param");
    await deletePerson(params.personId);
    return redirect("/people");
};


export default function Person() {
    const person: Person = useLoaderData<typeof loader>();

    return (
        <div>
            <h1 className="text-3xl mb-20 text-center ">{person.name} </h1>
            <div className="flex py-5 space-x-5">
                <GroupsList groups={person.groups} name="Groups" />
            </div>
            <Form
                method="post"
                onSubmit={(event) => {
                    const response = confirm(
                        "Please confirm you want to delete this record."
                    );
                    if (!response) {
                        event.preventDefault();
                    }
                }}
            >
                <button type="submit" className="text-[red] m-20">Delete</button>
            </Form>
        </div >
    )
}