"use client";
import React, { useState } from "react";
import Links from "../links/links";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./header.module.css";
const Header = () => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  const route = useRouter();
  const session = true;
  const isAdmin = true;
  const menuHandler = () => {
    setOpen((prev) => !prev);
  };
 
  return (
    <header className="flex flex-row flex-wrap items-center h-24 justify-between text-white py-4s border-4s border-green-600s z-50 relatives ">
      <div>
        <Link
          className="text-2xl cursor-pointer font-bold text-white"
          href={"/"}
        >
          Logo
        </Link>
      </div>
      <div className="flex flex-row items-center border border-rose-600">
        <div
          className={`fixed right-0 top-0 w-6/12 sm:w-7/12 h-screen bg-purple md:relative md:bg-inherit md:h-auto md:translate-x-0 border-2 border-rose-600 ${
            styles["sidebar-nav"]
          } ${
            open ? "translate-x-0" : "translate-x-full"
          } transition ease-linear duration-200  border border-green-600`}
          // style={{ top: "100px" }}
        >
          <div className="md:hidden">
            <span className="material-symbols-outlined hover:bg-rose-600 p-2" onClick={menuHandler}>close</span>
          </div>
          <Links open={open} />
        </div>
        <div>
          {session ? (
            isAdmin && (
              <>
                <Link
                  href={"/admin"}
                  className={`min-w-24 inline-block rounded-3xl p-2 text-center font-semibold text-sm ${
                    pathName === "/admin" ? "bg-text text-black" : "text-text"
                  }`}
                >
                  Admin
                </Link>
                <button className="p-2 rounded-lg bg-rose-600 font-semibold text-sm">
                  Logout
                </button>
              </>
            )
          ) : (
            <Link
              href={"/login"}
              className={` ${
                pathName === "/login" ? "bg-green-600 text-black" : ""
              }`}
            >
              Login
            </Link>
          )}
        </div>
        <div className="px-3 md:hidden">
          <span
            className="material-symbols-outlined cursor-pointer hover:text-rose-600"
            onClick={menuHandler}
          >
            menu
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
