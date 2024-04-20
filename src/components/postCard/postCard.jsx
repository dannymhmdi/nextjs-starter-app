import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostCard = ({ body, title ,params }) => {
  return (
    <div className="w-full md:w-4/12 border-2s border-rose-600s px-2 mb-3">
      <div className="border h-full border-bgSoft text-white  hover:bg-Purple-300 hover:text-black transition-all ease-linear duration-200  rounded-xl shadow">
        {/* <Link href="/blog/fd"> */}
          <div className="relative h-[300px] w-[90%]s">
            <Image src={`/siglepost.jpeg`} alt="nova" fill className="object-cover"/>
          </div>
        
        {/* </Link> */}
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {body}
          </p>
          <Link
            href={`/blog/${params}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-light-blue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
