import { LinksFunction } from "@remix-run/node";
import { NavLink, MetaFunction } from "@remix-run/react";
import style from '../tailwind.css';

export const meta: MetaFunction = () => {
    return [
        { title: "People | Groups" },
    ];
};
export const links: LinksFunction = () => [
    { rel: "stylesheet", href: style },
];

export default function Index() {
    return (
        <div>
            <body className="flex h-screen justify-center items-center text-center bg-[#f7f7f7]">
                <NavLink
                    to={'/people'}
                    className="relative block px-[0] py-[4px] [font:700_3rem_Raleway,_sans-serif] m-4"
                >
                    People
                </NavLink>

                <NavLink
                    to={'/groups'}
                    className="relative block px-[0] py-[4px] [font:700_3rem_Raleway,_sans-serif] m-4"
                >
                    Groups
                </NavLink>
            </body>
        </div >
    )
}