"use client";
import Link from "next/link";
import { useState } from "react";

const Layout = ({children})=>{
    const [toggle, setToggle] = useState("hidden");
    const [menu, setMenu] = useState("bx-menu-alt-right");
    return(
        <>
            <nav className="sticky top-0 z-50 bg-gradient-to-bl from-purple-500 to-rose-300 py-2.5 px-8 shadow-lg flex justify-between ">
                <div className="brand flex items-center w-fit gap-4">
                    <img src="/v-logo.png" alt="logo" width="30" />
                    <Link href={"/"} className="capitalize font-semibold text-2xl text-white drop-shadow-lg">vikash kumar</Link>
                </div>
                {/* main menu starts*/}
                <ul className=" capitalize gap-6 font-semibold text-lg w-fit ml-auto items-center lg:inline-flex hidden  ">

                    <li>
                        <Link href={"/"} className="hover:bg-lime-100 hover:rounded-md hover:shadow-lg p-2 text-white hover:text-pink-950 duration-500">home</Link>
                    </li>

                    <li>
                        <Link href={"/about"} className="hover:bg-lime-100 hover:rounded-md hover:shadow-lg p-2 text-white hover:text-pink-950 duration-500">about</Link>
                    </li>

                    <li>
                        <Link href={"/project"} className="hover:bg-lime-100 hover:rounded-md hover:shadow-lg p-2 text-white hover:text-pink-950 duration-500">project</Link>
                    </li>

                    <li>
                        <Link href={"/contact"} className="hover:bg-lime-100 hover:rounded-md hover:shadow-lg p-2 text-white hover:text-pink-950 duration-500">contact us</Link>
                    </li>
                </ul>
                {/* main menu ends*/}
                {/* popup menu icon*/}
                <div>
                    <i className={`bx ${menu} text-3xl inline-flex lg:hidden font-bold`} onClick={()=>toggle === "hidden" ? (setToggle("block"), setMenu("bx-x")) : (setToggle("hidden") , setMenu("bx-menu-alt-right"))}></i>
                </div>

            </nav>
            {/* popup menu starts */}
            <ul id="popMenu" className={`flex flex-col flex-start gap-4 p-4 text-md rounded-md  right-1 absolute bg-zinc-200 font-semibold border capitalize shadow-lg  z-[9999] lg:hidden ${toggle} w-[220px]`}>
                <li>
                    <Link href={"/"}>home</Link>
                </li>

                <li>
                    <Link href={"/project"}>project</Link>
                </li>

                <li>
                    <Link href={"/about"}>about us</Link>
                </li>

                <li>
                    <Link href={"/contact"}>contact us</Link>
                </li>
            </ul> 
            {/* popup menu ends */}
            <div>
                {children}
            </div>
            <footer>
                
                <div className="body p-5 bg-slate-400 grid grid-flow-row gap-6 sm:grid-flow-col  sm:justify-around">
                    <div className="flex flex-col gap-y-4">
                        <div className="flex items-center gap-x-3">
                            <Link href={'/'}>
                                <img src="./v-logo.png" alt="v-letter" width={40} className="drop-shadow-lg shadow-black" />
                            </Link>
                            <Link href={'/'}>
                                <p className="font-bold text-2xl font-mono cursor-pointer capitalize">vikash kumar</p> 
                            </Link> 
                        </div> 
                        <p className="text-justify text-blue-600 drop-shadow-md max-w-[400px]">Hello ,this is vikash an emmerging webdeveloper. I'm a smartworking , eager to learn and punctual towards my duties. I'm currently getting experienced on react.js and node.js . </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="capitalize text-lg font-semibold">explore</h1>
                        <div className="flex flex-col gap-1 tracking-wider text-base capitalize">
                            <Link href={"/"} className="hover:text-blue-700 ">home</Link>
                            <Link href={"/project"} className="hover:text-blue-700 ">project</Link>
                            <Link href={"/about"} className="hover:text-blue-700 ">about</Link>
                            <Link href={"/contact"} className="hover:text-blue-700 ">contact</Link>
                        </div>
                    </div>
                    <div className=" sm:p-5 bg-slate-400 grid  gap-4 grid-flow-row">
                    <h1 className="capitalize text-xl font-bold">connect on</h1>
                    <div id="icons" className="text-2xl grid grid-cols-3 w-fit gap-4">
                        <i className='bx bxl-github cursor-pointer bg-white p-1 rounded-lg hover:bg-blue-500 hover:text-white duration-700' ></i>
                        <i className='bx bxl-linkedin cursor-pointer bg-white p-1 rounded-lg hover:bg-blue-500 hover:text-white duration-700' ></i>
                        <i className='bx bxl-twitter cursor-pointer bg-white p-1 rounded-lg hover:bg-blue-500 hover:text-white duration-700' ></i>
                        <i className='bx bxl-facebook-circle cursor-pointer bg-white p-1 rounded-lg hover:bg-blue-500 hover:text-white duration-700'></i>
                        <i className='bx bxl-gmail cursor-pointer bg-white p-1 rounded-lg hover:bg-blue-500 hover:text-white duration-700' ></i>
                        <i className='bx bxl-instagram cursor-pointer bg-white p-1 rounded-lg hover:bg-blue-500 hover:text-white duration-700'></i>
                    </div>
                    </div> 
                </div>
                <div className="foot grid grid-flow-col gap-2 justify-center items-center p-2 sm:p-4 bg-violet-500 text-zinc-300">
                    <h1 className="text-xs sm:text-base">&copy; All rights reserved : </h1>
                    <h1 className="capitalize text-xs sm:text-base">dev vikusaku</h1>
                </div>
            </footer> 
        </>
    )
}

export default Layout