"use client";
import Link from "next/dist/client/link";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { LiaBarsSolid } from "react-icons/lia";
import { FaPhone } from "react-icons/fa6";
import Logo from "../public/assets/Logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full">
      <div className="bg-gray-700 text-white flex py-1 px-10">
        {/* Announcement */}
        <span className="text-center flex-1 text-sm md:text-base">
          Скидка по 10% промокоду "ZAMOK" на все заказы до 10.09
        </span>
        <span className="underline underline-offset-2 text-base hidden md:block">
          Обратный звонок
        </span>
      </div>
      {/* NavLinks */}
      <div className="flex justify-between items-center py-5 border-b-2 border-gray-300">
        <div className="flex justify-between text-stone-500">
          <Link href="/" className="px-14 md:block hidden">
            <Image src={Logo} alt="Logo" width={35} height={30} />
          </Link>
          <span
            className="md:hidden px-7"
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            {isOpen ? (
              <IoCloseOutline className="h-8 w-8" />
            ) : (
              <LiaBarsSolid className="h-7 w-7" />
            )}
          </span>
          <div className="md:flex gap-x-8 hidden">
            <Link href="/" className="hover:text-sky-500">
              Главная
            </Link>
            <Link href="/catalogue" className="hover:text-sky-500">
              Каталог
            </Link>
            <Link href="/sales" className="hover:text-sky-500">
              Оптовая продажа
            </Link>
            <Link href="/about" className="hover:text-sky-500">
              O нас
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center text-stone-500">
          <Link
            href="/contact"
            className="hidden md:flex gap-x-3 items-center hover:text-sky-500"
          >
            <FaPhone className="text-sky-500" /> +7 (966) 55 88 499
          </Link>
          <div className="flex px-6 gap-x-4 md:px-10">
            <Link href="/liked" className="relative">
              <IoIosHeartEmpty className="text-[30px]" />
              <span className="absolute top-0 right-0 text-[12px] bg-sky-500 text-white text-center w-[18px] rounded-full">
                1
              </span>
            </Link>
            <Link href="/cart" className="relative">
              <CiShoppingCart className="text-[30px]" />
              <span className="text-sm absolute top-0 right-0 text-[12px] bg-sky-500 text-white text-center w-[18px] rounded-full">
                1
              </span>
            </Link>
          </div>
        </div>
      </div>
      {/* MOBILE NAVIGATION */}
      <div
        className={
          isOpen
            ? "md:hidden h-[calc(100vh-140px)] w-full p-4 z-[100] bg-white absolute flex flex-col justify-between text-stone-500"
            : "hidden"
        }
      >
        <div className="flex flex-col gap-y-2">
          <Link
            href="/"
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            className="pb-3 border-b-2 hover:text-sky-500 border-gray-300"
          >
            Главная
          </Link>
          <Link
            href="/catalogue"
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            className="pb-3 hover:text-sky-500 border-b-2 border-gray-300"
          >
            Каталог
          </Link>
          <Link
            href="/sales"
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            className="pb-3 border-b-2 hover:text-sky-500 border-gray-300"
          >
            Оптовая продажа
          </Link>
          <Link
            href="/about"
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            className="pb-3 border-b-2 hover:text-sky-500 border-gray-300"
          >
            O нас
          </Link>
        </div>
        {/* NAV FOOTER */}
        <div className="flex justify-between pb-2">
          <Link
            href="/contact"
            className="flex gap-x-3 items-center hover:text-sky-500"
          >
            <FaPhone className="text-sky-500" /> +7 (966) 55 88 499
          </Link>
          <span className="underline text-sky-500 underline-offset-2 text-base">
            Обратный звонок
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
