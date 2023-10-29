import { Form, NavLink } from "@remix-run/react";
import { Person } from "~/api/people";

type PeopleListProps = {
    people?: Person[];
    name?: string
};

export default function PeopleList({ people, name }: PeopleListProps) {
    return (
        <div className="flex-1 max-w-md m-20">
            <h3 className="text-3xl">{name ? name + ":" : ""}</h3>
            <ul className="flex flex-col space-y-3 my-3">
                {people?.[0] ?
                    people?.map((person) => (
                        <li>
                            <NavLink
                                to={'/' + 'people/' + person._id}
                                prefetch="intent"
                                className={({ isActive }) =>
                                    `w-full hover:underline p-3 rounded border border-slate-400 max-w-[10] inline-block ${isActive
                                        ? 'bg-slate-300 text-black font-bold border-2'
                                        : 'text-blue-500 '
                                    } `
                                }
                            >
                                {person.name}
                            </NavLink>
                        </li>
                    )) :
                    <p className="text-2xl">No {name}</p>
                }
            </ul>
        </div>
    );
}