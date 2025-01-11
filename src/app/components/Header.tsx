"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import burgerMenu from "@/app/assets/menu.jpg";
import menuCross from "@/app/assets/menucross.png";

function Header() {
  const [mobileHeader, setmobileHeader] = useState("hidden");

  function headerHandler() {
    mobileHeader === "hidden"
      ? setmobileHeader("absolute")
      : setmobileHeader("hidden");
  }

  return (
    <>
      {/* Mobile header */}

      <div
        className={`${mobileHeader} top-12 bg-[#0a0a0a] py-12 h-[80vh] w-full z-50`}
      >
        <ul className="flex gap-10 flex-col justify-center  items-center ">
          <li className="text-xl font-bold hover:underline hover:decoration-white ">
            <Link onClick={headerHandler} href="/">
              Home
            </Link>
          </li>
          <li className="text-xl font-bold hover:underline hover:decoration-white ">
            <Link onClick={headerHandler} href="/blogs">
              {" "}
              Blogs{" "}
            </Link>
          </li>
          <li className="text-xl font-bold hover:underline hover:decoration-white ">
            <Link onClick={headerHandler} href="/aboutus">
              {" "}
              About Us{" "}
            </Link>
          </li>
          <li className="text-xl font-bold hover:underline hover:decoration-white ">
            <Link onClick={headerHandler} href="/contactus">
              {" "}
              Contact Us{" "}
            </Link>
          </li>
        </ul>
      </div>
      {/* large devices header */}
      <div className="relative y-2 md:py-3 px-2 flex justify-between md:px-12 items-center ">
        <Link href="/">
          <Image
            src="https://cdn.prod.website-files.com/5e0a5d9d743608d0f3ea6753/5f1d8b1b9c7814aae6b69044_Daily%20Full%20logo.svg"
            alt="Daily Dev"
            width={200}
            height={200}
          />
        </Link>
        <div className="hidden md:block">
          <ul className="flex gap-4 font-bold">
            <li className="hover:text-gray-500 hover:underline hover:decoration-white ">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-gray-500 hover:underline hover:decoration-white ">
              <Link href="/blogs"> Blogs </Link>
            </li>
            <li className="hover:text-gray-500 hover:underline hover:decoration-white ">
              <Link href="/aboutus"> About Us </Link>
            </li>
            <li className="hover:text-gray-500 hover:underline hover:decoration-white ">
              <Link href="/contactus"> Contact Us </Link>
            </li>
          </ul>
        </div>
        <Image
          src={mobileHeader === "hidden" ? burgerMenu : menuCross}
          alt="Daily Dev"
          width={50}
          height={50}
          className="block md:hidden"
          onClick={headerHandler}
        />
      </div>
    </>
  );
}

export default Header;
