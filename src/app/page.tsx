import Image from "next/image";
import "./Css/animation.css";
import {  PiUserBold } from 'react-icons/pi';
import { SiMonkeytie } from "react-icons/si";
import { HiArrowPath } from "react-icons/hi2";
import Link from "next/link";

export default function Home() {
  return (
             <div className=" min-h-screen relative flex flex-col items-center justify-center gap-y-20 overflow-hidden bg-gradient-to-b from-main_orange to-mainRed">
             <div className="w-full h-full absolute pattern opacity-[0.03]"></div>
             <Image src="/Images/wlogo.png"  className="relative z-1 floating" alt="pizza world" width={340} height={340}/>
             <div className="flex justify-center items-center relative z-1 gap-x-10  ">
                <Link href={'/home'} >
             <div className="flex flex-col items-center cursor-pointer justify-center">
                <div className="text-body rounded-full text-6xl p-3 bg-gradient-to-t to-mainRed from-main_orange ">
                  <PiUserBold/>
                </div>
                  <p className="text-body text-lg  font-semibold  my-2">
                    user
                  </p>

              </div>
                  </Link>
              <span className=" text-5xl text-body mb-8 rotate-90"> <svg width="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.54618 3.27793C7.71236 3.39789 7.98037 3.67345 7.98037 3.67345C9.02079 4.64858 10.5879 7.07394 11.0911 8.30444C11.1016 8.30444 11.4001 9.03608 11.4118 9.38409V9.43041C11.4118 9.96371 11.1133 10.4626 10.6335 10.7179C10.4357 10.8232 9.95456 10.9211 9.72244 10.9683C9.64556 10.984 9.59599 10.9941 9.59308 10.997C8.90727 11.1016 7.85514 11.1704 6.70003 11.1704C5.48757 11.1704 4.38981 11.1016 3.71453 10.9733C3.70282 10.9733 3.08606 10.8462 2.88009 10.7642C2.58282 10.6372 2.3312 10.4044 2.17087 10.1145C2.05618 9.88294 2 9.63827 2 9.38409C2.01053 9.11685 2.18257 8.618 2.26215 8.42083C2.76539 7.12026 4.41204 4.6367 5.41852 3.68532C5.52307 3.57922 5.64206 3.46806 5.72485 3.39071C5.76902 3.34945 5.8029 3.3178 5.81877 3.30169C6.07039 3.10452 6.37936 3 6.71173 3C7.00783 3 7.30509 3.09264 7.54618 3.27793ZM18.2286 10.1618C18.2286 10.6856 17.8108 11.1096 17.2947 11.1096C16.7786 11.1096 16.3608 10.6856 16.3608 10.1618L16.1033 5.58295C16.1033 4.91543 16.637 4.375 17.2947 4.375C17.9524 4.375 18.4849 4.91543 18.4849 5.58295L18.2286 10.1618ZM21.1199 13.2356C21.4172 13.3639 21.6688 13.5955 21.8291 13.8853C21.9438 14.1169 22 14.3616 22 14.617C21.9895 14.883 21.8174 15.3831 21.7367 15.5802C21.2346 16.8797 19.5868 19.3633 18.5815 20.3158C18.4787 20.4194 18.3619 20.5284 18.2793 20.6055L18.2792 20.6055C18.2331 20.6486 18.1976 20.6817 18.1812 20.6983C17.9284 20.8955 17.6206 21 17.2894 21C16.991 21 16.6937 20.9074 16.4538 20.7209C16.2876 20.6021 16.0196 20.3265 16.0196 20.3265C14.978 19.3526 13.4121 16.926 12.9089 15.6954C12.8972 15.6954 12.5999 14.965 12.5882 14.617V14.5706C12.5882 14.0361 12.8855 13.5373 13.3665 13.2819C13.5639 13.1777 14.0435 13.0796 14.2762 13.0319L14.2762 13.0319C14.3539 13.016 14.404 13.0058 14.4069 13.0028C15.0927 12.8983 16.1449 12.8294 17.3 12.8294C18.5124 12.8294 19.6102 12.8983 20.2855 13.0265C20.296 13.0265 20.9139 13.1536 21.1199 13.2356ZM6.70553 12.8905C6.18942 12.8905 5.77161 13.3146 5.77161 13.8383L5.51414 18.4171C5.51414 19.0846 6.04781 19.625 6.70553 19.625C7.36325 19.625 7.89575 19.0846 7.89575 18.4171L7.63945 13.8383C7.63945 13.3146 7.22165 12.8905 6.70553 12.8905Z" fill="currentColor"></path>                            </svg>                        </span>

              <Link href={'/Dashboard/orders'} >
              <div className="flex flex-col items-center">
                <div className="text-body rounded-full text-6xl p-3 bg-gradient-to-t to-mainRed from-main_orange  ">
                  <SiMonkeytie/>
                </div>
                  <p className="text-body text-lg  font-semibold  my-2">
                  Admin
                  </p>

              </div>
              </Link>

             </div>
             </div>
  );
}
