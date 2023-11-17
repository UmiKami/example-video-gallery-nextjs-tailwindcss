import React from "react";
import Link from "next/link";

const Navbar = () => {
    const navItems = ["Gallery", "Pricing" ,"About Us"]



    return (
        <nav className="py-5 flex justify-between">
            <Link
                href="/"
                className="logo w-[15%] flex items-center justify-start"
            >
                <img src="/next.svg" alt="next logo" className="w-[45%]" />
            </Link>
            <ul className="nav-items gap-5 flex">
                {navItems.map((item, idx) => (
                    <li className=" no-underline" key={idx}>
                        <Link href={`/${item.replace(" ", "").toLowerCase()}`}>
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
