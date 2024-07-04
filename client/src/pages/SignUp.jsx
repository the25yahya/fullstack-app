import React from "react";
import '../App.css'

function  SignUp(){
    return(
        <form id="Auth-form" className="flex-col bg-white w-fit rounded-md p-5 border-2 border-black">
            <h1 className="text-xl font-bold">Create Account</h1>
            <p className="text-sm font-bold text-zinc-600">Create an Account to start using our services</p>
           <div className="flex-col mt-5">
             <div className="flex-col">
                  <p className="font-bold text-md mb-1">username</p>
                  <input className="border border-black pr-5 pl-2 py-0.5 rounded-md mb-3 w-full" type="text" id="username" name="username" placeholder="username" required />
             </div>
             <div className="flex-col">
                  <p className="font-bold text-md mb-1">Email</p>
                   <input className="border border-black pr-5 pl-2 py-0.5 rounded-md mb-3 w-full"  type="email" id="email" placeholder="Email" name="email" required />
             </div>
             <div>
                  <p className="font-bold text-mdmb-1">Password</p>
                  <input className="border border-black pr-5 pl-2 py-0.5 rounded-md w-full"  type="password" id="password" name="password" placeholder="Password" required />
             </div>
           </div>
           <button className="bg-black text-white w-full mt-5 rounded-md py-1 cursor-pointer hover:bg-transparent hover:text-black transition">Sign Up</button>
           <div className="mt-2">
             <p>Have an Account already <strong className="cursor-pointer">? Sign in</strong></p>
           </div>
        </form>
    )
}


export default SignUp 