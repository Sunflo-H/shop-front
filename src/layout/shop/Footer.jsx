import React from "react";
import { BsGithub, BsInstagram, BsTwitter, BsPinterest } from "react-icons/bs";
import { HiPhone } from "react-icons/hi";
import { GrMail, GrLinkedinOption } from "react-icons/gr";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import List from "../../components/shop/footer/List";

export default function Footer() {
  const etcList = [
    [
      "Help",
      "Customer Service",
      "Track Order",
      "Returns & Exchanges",
      "Shipping",
      "International Orders",
      "Contact Us",
    ],
    [
      "Quick Links",
      "Find a Store",
      "Size Charts",
      "Refer a Friend",
      "Offers & Promotions",
      "My Favorites",
    ],
    [
      "About Adonis",
      "Our Story",
      "Careers",
      "Social Responsibility",
      "California Transparency Act/Modern Slavery Act",
      "Investor Relations",
      "Terms of Use",
      "Privacy Policy",
      "California Do Not Sell My Personal Information",
      "Diversity, Equity and Inclusion at J.Crew Group",
    ],
  ];
  return (
    <footer className="border-t border-gray-300 ">
      <div className="max-w-screen-2xl m-auto hidden md:block ">
        <ul className="flex justify-center items-center p-4 gap-10 text-lg font-bold ">
          <li className="flex items-center ">
            <BsGithub className="mr-2 text-2xl" />
            <span>Sunflo-H</span>
          </li>
          <li className="flex items-center">
            <HiPhone className="mr-2 text-2xl" />
            <span>010-6315-1065</span>
          </li>
          <li className="flex items-center">
            <GrMail className="mr-2 text-2xl" />
            <span>sunflo0524@gmail.com</span>
          </li>
        </ul>
      </div>
      <div className="bg-gray-100 pb-10">
        <div
          className=" flex  justify-between max-w-screen-xl text-sm  m-auto
                     flex-col-reverse md:flex-row md:pt-14"
        >
          <div className="">
            <div
              className="flex 
                        flex-wrap md:flex-nowrap gap-4 md:gap-0 p-8 md:p-0"
            >
              {etcList.map((list, i) => (
                <List list={list} key={i} />
              ))}
            </div>
            <div className="px-8 md:p-0">
              <div className="flex items-center gap-4 mb-8">
                <BsInstagram className="text-2xl" />
                <FaFacebookF className="text-2xl" />
                <BsTwitter className="text-2xl" />
                <GrLinkedinOption className="text-2xl" />
                <BsPinterest className="text-2xl" />
                <FaYoutube className="text-2xl" />
              </div>
              <p className="px-2 mb-4 underline text-sm font-bold">
                South Korea
              </p>
              <p className="font-bold px-2">© 2025 Adonis</p>
            </div>
          </div>
          <div className="p-8 ">
            <h1 className="mb-2">Like Being First?</h1>
            <p className="text-gray-400 font-semibold mb-2">
              Get can't-miss style news, before everybody else.
            </p>
            <div className="flex items-center">
              <input
                className="p-2 grow"
                type="text"
                placeholder="Enter your email."
              />
              <button className="bg-black text-white px-4 py-2 font-bold">
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
