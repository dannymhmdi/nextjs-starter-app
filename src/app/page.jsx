"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
const Home = () => {
  // throw new Error('error ocurred');
  const [showDiv, setShowDiv] = useState(true);
  const [version, setVersion] = useState(false);
  console.log("rendered");
  const router = useRouter();
  const handleClick = () => {
    console.log("router", router);
    setShowDiv(true);
    // router.push("/blog");
    //  router.reload('/')
  };

  const divRef = useRef(null);
  console.log("divRef", divRef);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!divRef.current?.contains(event.target)) {
        // Clicked outside the div, perform your close action here
        setShowDiv(false);
        console.log("Clicked outside the div.");
        // Close the div or perform any other desired action
      }
    };

    window.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  

  return (
    <>
      <div className="flex flex-row flex-wrap  border-rose-600">
        <div className="w-full md:w-6/12 border border-rose-600 flex flex-col flex-wrap text-white">
          <div className="my-12">
            <h3 className="text-4xl md:text-7xl text-center md:text-start">
              Creative Thoughts Agency.
            </h3>
          </div>
          <div className="mb-12">
            <p className="md:text-xl text-sm text-center md:text-start">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              fugiat tempora dolorem facere cum recusandae eum quae, corrupti
              accusantium vel laboriosam. In, dolor. Placeat illum rem,
              exercitationem voluptates harum eveniet.
            </p>
          </div>
          <div className="text-center md:text-start mb-12">
            <button className="min-w-28 bg-white text-black font-semibold p-3 me-5 rounded-md cursor-pointer hover:bg-teal-500 hover:text-white transition ease-in duration-100">
              Learn More
            </button>
            <button className="min-w-28 bg-white text-black font-semibold p-3 me-5 rounded-md cursor-pointer hover:bg-teal-500 hover:text-white transition ease-in duration-100">
              Contact
            </button>
          </div>
          <div className="relative h-14 text-center mb-12 border-4 border-rose-600">
            <Image
              src={"/brands.png"}
              className="grayscale ps-12 md:ps-0"
              alt="brands"
              fill
            />
          </div>
        </div>
        <div className="md:w-6/12 w-full border border-rose-600">
          <div className="w-full relative min-h-[400px] md:h-full">
            <Image src={"/hero.gif"} alt="about" fill />
          </div>
        </div>
        <button onClick={handleClick} className="bg-white">
          click Me
        </button>
      </div>
      {showDiv && (
        <div
          className="w-6/12 border-2 text-white bg-green-600 p-3"
          ref={divRef}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          eos. Facere doloribus officiis, nam voluptas ullam totam! Minus rerum
          commodi cumque asperiores voluptate blanditiis repellat ab
          voluptatibus! Veniam, numquam eos?
        </div>
      )}
    </>
  );
};

export default Home;
