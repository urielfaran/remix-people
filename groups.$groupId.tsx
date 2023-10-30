import { ActionFunction, LinksFunction, redirect, type LoaderFunction } from "@remix-run/node";
import { Form, MetaFunction, NavLink, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { deleteGroup, getGroupById, type Group } from "~/api/groups";
import GroupsList from "~/components/groupsList";
import PeopleList from "~/components/peopleList";
import appStylesHref from "../app.css";

export const meta: MetaFunction = () => {
    return [{ title: 'Group' }];
}

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: appStylesHref }
];

export const loader: LoaderFunction = async ({ params }) => {
    invariant(params.groupId, "Missing group Id param");
    const group: Group = await getGroupById(params.groupId);
    console.log('fetching group... -->', group.name);
    return group;
}

export const action: ActionFunction = async ({ params }) => {
    invariant(params.groupId, "Missing person Id param");
    await deleteGroup(params.groupId);
    return redirect("/groups");
}

export default function Group() {
    const group: Group = useLoaderData<typeof loader>();

    return (
        <div>
            <h1>{group.name} </h1>
            <div>
                <GroupsList groups={group.child_groups} name="Child Groups" />
                <PeopleList people={group.people} name="Children" />
                <h3 className="text-3xl">Parent:</h3>
                {group.parent ?
                    <NavLink
                        id="listLink"
                        to={'/' + 'groups/' + group.parent._id}
                        title={group.parent.name}
                        prefetch="intent"
                    >
                        <div>{group.parent.name}</div>
                    </NavLink>
                    :
                    <p>No parent</p>
                }
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