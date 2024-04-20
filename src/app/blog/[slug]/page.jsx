import Image from "next/image";
import React, { Suspense } from "react";

const SinglePostPage = async ({ params }) => {
  console.log("params in singlepost", params);
  const { slug } = params;
  const getData = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${slug}`
    );

    if (!response.ok) {
      throw new Error("new error has happened");
    }
    return response.json();
  };

  const post = await getData();
  const getSingleUser = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${post?.userId}`
    );
    if (!response.ok) {
      throw new Error("new error in getting userid");
    }
    return response.json();
  };
  console.log("user", post);
  const singleUser = await getSingleUser();
  console.log("singleUser", singleUser);
  return (
    <div className="flex flex-col sm:flex-row text-white border-4 border-green-600">
      <div className="relative h-screen sm:w-7/12 md:w-4/12">
        <Image
          src={`/siglepost.jpeg`}
          alt="nature"
          fill
          className="p-2 rounded-2xl"
        />
      </div>
      <div className="flex flex-col border-4 border-rose-600 sm:w-5/12 md:w-8/12 px-4 pt-4 ">
        <Suspense fallback={<div>Loading...</div>}>
          <h1 className="text-4xl font-semibold sm:text-[64px] sm:mb-10 mb-5">
            {singleUser?.name}
          </h1>
        </Suspense>
        <div className="flex flex-row text-textSoft border border-rose-600 sm:mb-10 mb-5">
          <Image
            src={`/avatar.jpeg`}
            alt="personAvatar"
            width={70}
            height={50}
            className="rounded-[50%]"
          />
          <div className="px-4">
            <h3 className="leading-10">Author</h3>
            <h3>{singleUser?.email}</h3>
          </div>
          <div className="px-4">
            <h3 className="leading-10">Published</h3>
            <h3>01.01.2024</h3>
          </div>
        </div>
        <div>
          <h3>{post?.id}</h3>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
