import type { LoaderFunction } from "@remix-run/node";
import { NavLink, Outlet, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { Group, getGroupById } from "~/api/groups";
import { type Person } from "~/api/people";
import GroupsList from "~/components/groupsList";
import PeopleList from "~/components/peopleList";


export const meta = (data: Person) => {
    return [
        { title: data.name },
    ];
};

export const loader: LoaderFunction = async ({ params }) => {
    invariant(params.groupId, "Missing group Id param");
    const group: Group = await getGroupById(params.groupId);
    console.log('fetching group... -->', group.name);
    return group;
}

export default function $Group() {
    const group: Group = useLoaderData<typeof loader>();

    return (
        <div>
            <h1 className="text-3xl mb-20 text-center ">{group.name} </h1>
            <GroupsList groups={group.child_groups} name="Child Groups" />
            <PeopleList people={group.people} name="Children" />
            <div className="text-xl m-20 max-w-md">
                <h3 className="text-3xl">Parent:</h3>
                {group.parent ?
                    <NavLink
                        to={'/' + 'groups/' + group.parent._id}
                        title={group.parent.name}
                        prefetch="intent"
                        className={({ isActive }) =>
                            `w-full hover:underline p-3 rounded border border-slate-400 inline-block ${isActive
                                ? 'bg-slate-300 text-black font-bold border-2'
                                : 'text-blue-500 '
                            } `
                        }>
                        <div>{group.parent.name}</div>
                    </NavLink>
                    :
                    <p>No parent</p>
                }
            </div>
        </div >
    )
}