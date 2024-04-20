import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Contact page",
  description: "Next.js starter app",
};

const Contact = () => {
   
  const inputs =  [

    { name: 'name', value: 'daniel' },
    { name: 'email', value: 'dannymohammadi1377@gmail.com' },
    { name: 'number', value: '09122598501' },
    { name: 'textArea', value: 'asdgsag' }
  ]

  console.log('fromEntities',Object.entries(inputs))

  const serverActionFunc = async (formData) => {
    "use server";
    // const name = formData.get('name')
    console.log(formData)
  };
  return (
    <>
      <div className="flex flex-wrap flex-row">
        <div className="sm:w-6/12 sm:block relative hidden sm:h-[400px]">
          <Image
            className="sm:block hidden"
            src={"/contact.png"}
            alt="contact"
            fill
          />
        </div>
        <div className="sm:w-6/12 w-full">
          <form action={serverActionFunc} className="flex flex-col ">
            <input
              name="name"
              type="text"
              className="mb-5 p-3 h-10 rounded-md bg-bgSoft outline-none border-0 text-white text-sm"
              placeholder="Name and Surname"
            />
            <input
              name="email"
              type="email"
              className="mb-5 p-3 h-10 rounded-md bg-bgSoft outline-none border-0 text-white  text-sm"
              placeholder="Email Address"
            />
            <input
              name="number"
              type="number"
              className="mb-5 p-3 rounded-md bg-bgSoft outline-none border-0 text-white text-sm"
              placeholder="Phone Number (Optional)"
            />
            <textarea
              name="textArea"
              cols={30}
              rows={10}
              className="mb-5 p-3 rounded-md bg-bgSoft outline-none border-0 text-white text-sm"
              placeholder="Message"
            />
            <div className="text-center">
              <button
                type="submit"
                className="bg-light-blue rounded-md w-4/12 py-1 font-semibold"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
