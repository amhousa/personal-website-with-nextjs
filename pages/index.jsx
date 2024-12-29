import { useEffect } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";

import Contact from "@/components/Contact";
import Experience from "@/components/Experience";

import { BsArrowUpRight } from "react-icons/bs";

import Avatar_Black from "@/public/Avatar-black.svg";
import Avatar_White from "@/public/Avatar-white.svg";
import Link from "next/link";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    console.clear();
    console.log.apply(console, [
      "%c Designed and Developed by Amirhossein Salmani %c %c⚔️ %c\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
      "color: #fff; background: #242424; padding:5px 0 5px 5px;",
      "background: #242424; padding:5px 0",
      "background: #242424; padding:5px 5px 5px 0",
    ]);
    console.log.apply(console, [
      "%c Thanks for stopping by, I’m currently looking to a new team of creative designers and developers.\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
    ]);
  }, []);

  return (
    <>
      <Head>
        <title>Amirhossein Salmani ⚔️ Node.js developer</title>
        <link rel="icon" href="/Avatar-white.svg" />
      </Head>
      <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
        <div className="lg:h-screen 2xl:h-max max-w-[90rem] mx-auto">
          <div className="flex flex-row justify-start items-center mt-20">
            <Image
              src={currentTheme === "dark" ? Avatar_White : Avatar_Black}
              alt="pranjal"
              width="80"
              height="80"
            />
            <div className="flex flex-col ml-4">
              <h1 className="flex sm:text-2xl md:text-2xl lg:text-2xl">
                <span className="font-semibold">Amirhossein Salmani</span>
              </h1>
              <h2>
                <Link
                  href={"https://www.linkedin.com/in/amirhosseinsalmani/"}
                  target="_blank"
                  className="text-[#717171bb] flex items-center"
                >
                  <p>@amhousa</p>
                  <BsArrowUpRight className="stroke-1 h-3" />
                </Link>
              </h2>
            </div>
          </div>
          <div className="mt-12 text-base md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">
            <p className="sm:leading-6 md:leading-6 lg:leading-8">
              Hello, I am Amirhossein Salmani, a professional Full Stack Developer based in Iran.
              I am proud to say that despite all the challenges in Iran, I have managed to lead a creative and innovative team in the field of web development and online businesses.
              If you have a project or collaboration proposal, feel free to get in touch through the "Contact" section. ✨💻🚀
            </p>
          </div>
        </div>
        <div className="mt-28 mx-auto">
          <Experience />
        </div>
        <div className="mt-28 mx-auto ">
          <Contact />
        </div>
      </div>
    </>
  );
}
