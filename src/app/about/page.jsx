import Image from "next/image";

export const metadata = {
  title: "About page",
  description: "Next.js starter app",
};
const About = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap">
        <div className="w-full md:w-6/12 border border-rose-600 flex flex-col flex-wrap text-white mb-5 md:mb-0">
          <div className="my-12">
            <h3 className="text-4xl text-center md:text-start text-light-blue">
              About Agency
            </h3>
          </div>
          <div className="mb-12">
            <h2 className="text-5xl font-semibold text-center md:text-start">
              We create digital ideas that are bigger , bolder , braver and
              better.
            </h2>
          </div>
          <div className="text-center md:text-start mb-12">
            <p className="font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              quasi velit expedita. Qui, quasi consequatur adipisci dignissimos
              inventore dolorem ullam fuga eaque explicabo quo iusto voluptate
              officiis quae veritatis iure.
            </p>
          </div>
          <div className="flex flex-wrap flex-row border border-green-600">
            <div className="flex-grow text-center md:text-start">
              <h3 className="text-2xl text-light-blue font-bold">10 k+</h3>
              <p className="text-sm pt-2">Year of exprience</p>
            </div>
            <div className="flex-grow text-center md:text-start">
              <h3 className="text-2xl text-light-blue font-bold">234 k+</h3>
              <p className="text-sm pt-2">People reached</p>
            </div>
            <div className="flex-grow text-center md:text-start">
              <h3 className="text-2xl text-light-blue font-bold">5 k+</h3>
              <p className="text-sm pt-2">Services and plugins</p>
            </div>
          </div>
        </div>
        <div className="md:w-6/12 w-full border border-rose-600">
          <div className="w-full relative min-h-[400px] md:h-full">
            <Image src={"/about.png"} alt="about" fill />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
