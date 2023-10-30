import { ActionFunction, ActionFunctionArgs, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Form, redirect, useNavigate } from "react-router-dom";
import invariant from "tiny-invariant";
import { Person, getPersonById, updatePerson } from "~/api/people";

export const loader: LoaderFunction = async ({ params }) => {
    invariant(params.personId, "Missing personId param");
    const person: Person = await getPersonById(params.personId);
    if (!person) {
        throw new Response("Not Found", { status: 404 });
    }
    return person;
};

export const action: ActionFunction = async ({ params, request }: ActionFunctionArgs) => {
    invariant(params.personId, "Missing person Id param");
    const formData = await request.formData();
    // const updates = Object.fromEntries(formData);
    const name = String(formData.get('name'));
    await updatePerson(params.personId, name);
    return redirect(`/people/${params.personId}`);
}

export default function EditPerson() {
    const person: Person = useLoaderData<typeof loader>();
    const navigate = useNavigate();

    return (
        <Form id="contact-form" method="post">
            <p>
                <span>Name:</span>
                <input
                    defaultValue={person.name}
                    aria-label="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                />
            </p>
            <p>
                <button type="submit" name="cancel">Save</button>
                <button onClick={() => navigate(-1)} type="button">
                    Cancel
                </button>
            </p>
        </Form>
    )
}