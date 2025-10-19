import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
    const categories = use(categoryPromise);

    return (
        <div>
            <ul className="menu  w-full pl-8 text-gray-500  text-xl rounded-box shadow dropdown-content">
                {categories.map((el) => (
                    <li key={el.id} className="">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active-link" : ""
                            }
                            to={`/categories/${el.id}`}
                        >
                            {el.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
