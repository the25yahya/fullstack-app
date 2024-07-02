import React from "react";
import '../App.css'
import { IoHomeOutline, IoDiamondOutline, IoSunny } from "react-icons/io5";
import { FaAngleDown, FaAngleUp, FaRegMoon } from "react-icons/fa";
import { CiCirclePlus,CiShop } from "react-icons/ci";
import { GiReceiveMoney } from "react-icons/gi";
import { FaStairs } from "react-icons/fa6";
import { BsQuestionCircle } from "react-icons/bs";



const Navbar = () =>{
    return(
        <nav className="rounded-md bg-white p-5 h w-max h-full m-3 flex-col justify-between">
          <section className="">
            <div>
                <img
                className="w-9"
                src="../public/dashboard.png"/>
            </div>
            <div className="flex-col my-10 mb-60">
             <div className="flex items-center my-3">
                <span className="mr-2"><IoHomeOutline/></span>
                <p>Home</p>
             </div>
             <div className="flex items-center justify-between my-3">
                <div className="flex items-center">
                  <span className="mr-2"><IoDiamondOutline/></span>
                   <p>Products</p></div>
                <div className="flex">
                  <span><CiCirclePlus/></span>
                  <span><FaAngleDown/></span>
               </div>
              </div>
            <div className="flex items-center my-3">
                <span className="mr-2"><CiShop /></span>
                <p>Shop</p>
            </div>
            <div className="flex items-center my-3">
                <span className="mr-2"><GiReceiveMoney /></span>
                <p>Income</p>
            </div>
            <div className="flex items-center my-3">
                <span className="mr-2"><FaStairs/></span>
                <p>Promote </p>
            </div>
            </div>
          </section>
          <section>
            <div className="border-t-2 w-full">
                <div className="flex items-center my-5">
                    <span className="mr-2"><BsQuestionCircle /></span>
                    <p>Help & getting started</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center cursor-pointer">
                     <span className="mr-2 text-xl"><IoSunny/></span>
                     <p>Light</p>
                    </div>
                    <div className="flex items-center cursor-pointer">
                    <span className="mr-2 text-xl"><FaRegMoon/></span>
                     <p>Dark</p>
                    </div>
                </div>
            </div>
            </section>
        </nav>
    )
}

export default Navbar