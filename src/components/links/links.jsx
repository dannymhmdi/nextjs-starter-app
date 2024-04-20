"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Links = () => {
  const routes = [
    { title: "about", path: "/about" },
    { title: "blog", path: "/blog" },
    { title: "contact", path: "/contact" },
  ];
  const pathName = usePathname();

  return (

     <div className="flex flex-col md:flex-row items-center  border-2s border-green-600s">
      {routes.map((route, index) => {
        return (
          <Link
            href={route.path}
            key={index}
            className={`w-24 inline-block rounded-3xl p-2 text-center font-semibold text-sm  ${
              pathName === route.path ? "bg-text text-black" : "text-text"
            }`}
          >
            {route.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Links;
