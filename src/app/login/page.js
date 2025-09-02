import React from "react";
import image1 from "../../../public/images/talon-one.png";
import nextarrow from "../../../public/images/next-arrow.png";
import Image from "next/image";

const Login = () => {
  return (
    <div className="w-full max-w-[1800px] mx-auto flex flex-col justify-evenly items-center  min-h-[100vh]">
      <div>
        <Image src={image1} />
      </div>
      <div className="login-form min-h-[500px] flex flex-col justify-end pb-3">
       
          <div className=" text-right mt-[17px] mr-[20px]">
            Forget password?
          </div>

          <h1 className="font-main-color text-center text-[#545685] mb-auto">Login</h1>

          <div class="px-20 w-[400px] input-item mb-auto">
            <div className="text-purple-900 pb-1">Username</div>
            <div className="font-size-14 w-full">
              <div className="">
                <input
                  maxlength="15"
                  step=""
                  enterkeyhint="done"
                  autocomplete="off"
                  type=""
                  className="uni-input-input py-3 px-2 rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="px-20 input-item w-[400px] mb-20 ">
            <div className="text-purple-900 pb-1">Password</div>

            <div className="w-full">
              <div class="">
                <div className=" text-white"></div>
                <input
                  maxlength="15"
                  step=""
                  enterkeyhint="done"
                  autocomplete="off"
                  type="password"
                  className="uni-input-input py-3 px-2 rounded-lg"
                />
              </div>
            </div>
            <div className="mt-2  font-main-color text-[14px] text-center ">
            Don't have an account ?
          </div>

          </div>

        



<div className="w-full flex flex-row justify-center">
            <div>
              <Image src={nextarrow} className="w-[80px]" width={"80px"} />
            </div>
          </div>

  


     
      </div>

      <div class="text-center text-[14px] ">
        © 2023 Talon.One GmbH. All rights reserved.
      </div>
    </div>
  );
};

export default Login;
