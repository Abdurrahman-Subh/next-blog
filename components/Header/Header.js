import { useEffect, useRef, useState } from "react";
import Icon from "../UI/Icon/Icon";
import Image from "next/image";
import Link from "next/link";
import cn from "@/utils/cn";

export default function Header() {
  const headerRef = useRef(null);
  return (
    <header
      ref={headerRef}
      className="flex bg-white border-b w-full items-center justify-between px-6 z-10 sticky top-0 rounded-md rounded-bl-none rounded-br-none"
    >
      <div className="flex items-center">
        <img
          src="https://static.vecteezy.com/system/resources/previews/022/998/891/original/cute-frog-free-png.png"
          alt=""
          className="w-20 h-20"
        />
        <h1 className="font-bold text-2xl">Why not frog?</h1>
      </div>
      <nav className="flex justify-center">
        <ul className="flex gap-10">
          <li className="font-medium">
            <Link href="/">Home</Link>
          </li>
          <li className="font-medium">
            <Link href="/about">About</Link>
          </li>
          <li className="font-medium">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-4 items-center">
        <form className="w-[65%] px-4">
          <div className="relative">
            <Icon
              icon="icon-search"
              className="absolute top-2 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full py-1.5 border-2 border-gray-400 bg-white pl-12 pr-2 text-gray-500 rounded-md outline-none focus:bg-white focus:border-indigo-600"
            />
          </div>
        </form>
        <span className="font-extralight text-gray-500 text-2xl">|</span>
        <div className="flex gap-3">
          <button>
            <Image
              src="https://www.ggmgastro.com/assets/flags/1x1/en.svg"
              className="w-6 h-6 text-gray-400"
              width={24}
              height={24}
            />
          </button>
          <button>
            <Image
              src="https://www.ggmgastro.com/assets/flags/1x1/tr.svg"
              className="w-6 h-6 text-gray-400"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
