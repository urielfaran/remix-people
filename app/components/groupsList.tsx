import { NavLink } from "@remix-run/react";
import { Group } from "~/api/groups";

type GroupsListProps = {
    groups?: Group[];
    name: string
};
export default function GroupsList({ groups, name }: GroupsListProps) {
    return (
        <div className="flex-1 max-w-md m-20">
            <h3 className="text-3xl">{name}:</h3>
            <ul className="flex flex-col space-y-3 my-3">
                {groups?.[0] ?
                    groups?.map((group) => (
                        <li>
                            <NavLink
                                to={'/' + 'groups/' + group._id}
                                prefetch="intent"
                                className={({ isActive }) =>
                                    `w-full hover:underline p-3 rounded border border-slate-400 inline-block ${isActive
                                        ? 'bg-slate-300 text-black font-bold border-2'
                                        : 'text-blue-500 '
                                    } `
                                }
                            >
                                {group.name}
                            </NavLink>
                        </li>
                    )) :
                    <p className="text-2xl">No {name}</p>
                }
            </ul>
        </div>
    );
}