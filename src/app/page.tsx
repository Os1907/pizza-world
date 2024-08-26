import Image from "next/image";
import "./Css/animation.css";
import {  PiUserBold } from 'react-icons/pi';
import { SiMonkeytie } from "react-icons/si";
import { HiArrowPath } from "react-icons/hi2";
import Link from "next/link";

export default function Home() {
  return (
             <div className=" min-h-screen relative flex flex-col items-center overflow-hidden">
             <div className="w-full h-full absolute pattern opacity-[0.03]"></div>
             <Image src="/Images/logo.png"  className="relative z-1 floating" alt="pizza world" width={500} height={500}/>
             <div className="flex justify-center items-center relative z-1 gap-x-10 ">
                <Link href={'/home'} >
             <div className="flex flex-col items-center cursor-pointer justify-center">
                <div className="text-white rounded-full text-6xl p-3 bg-gradient-to-t from-main to-main2 ">
                  <PiUserBold/>
                </div>
                  <p className="text-main text-lg  font-semibold  my-2">
                    user
                  </p>

              </div>
                  </Link>
              <span className=" text-5xl text-main mb-8"> <HiArrowPath/></span>

              <Link href={'/Dashboard/orders'} >
              <div className="flex flex-col items-center">
                <div className="text-white rounded-full text-6xl p-3 bg-gradient-to-t from-main to-main2 ">
                  <SiMonkeytie/>
                </div>
                  <p className="text-main text-lg  font-semibold  my-2">
                  Dashboard
                  </p>

              </div>
              </Link>

             </div>
             </div>
  );
}
