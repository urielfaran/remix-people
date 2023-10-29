import { LinksFunction } from "@remix-run/node";
import { MetaFunction, NavLink } from "@remix-run/react";
import styles from '../tailwind.css';

export const meta: MetaFunction = () => {
    return [
        { title: "People | Groups" },
    ];
};
export const links: LinksFunction = () => {
    return [{ rel: 'stylesheet', href: styles }];
  }
  
export default function Index() {
    return (
        <div className="text-center">
            <NavLink
                to={'/people'}
                className="text-5xl font-bold text-center m-10"
            >
                People
            </NavLink>
            <NavLink
                to={'/groups'}
                className="text-5xl font-bold text-center m-10"
            >
                Groups
            </NavLink>
        </div>
    )
}