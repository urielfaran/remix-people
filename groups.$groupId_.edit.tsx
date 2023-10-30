import { ActionFunction, ActionFunctionArgs, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Form, redirect, useNavigate } from "react-router-dom";
import invariant from "tiny-invariant";
import { Group, getGroupById, updateGroup } from "~/api/groups";

export const loader: LoaderFunction = async ({ params }) => {
    invariant(params.groupId, "Missing groupId param");
    const person: Group = await getGroupById(params.groupId);
    if (!person) {
        throw new Response("Not Found", { status: 404 });
    }
    return person;
};

export const action: ActionFunction = async ({ params, request }: ActionFunctionArgs) => {
    invariant(params.groupId, "Missing groupId param");
    const formData = await request.formData();
    // const updates = Object.fromEntries(formData);
    const name = String(formData.get('name'));
    await updateGroup(params.groupId, name);
    return redirect(`/groups/${params.groupId}`);
}

export default function EditGroup() {
    const group: Group = useLoaderData<typeof loader>();
    const navigate = useNavigate();

    return (
        <Form id="contact-form" method="post">
            <p>
                <span>Name</span>
                <input
                    defaultValue={group.name}
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