import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signin = () => {
  const [signInWithPassword, setSignInWithPassword] = useState(false);
  const [showOtpBox, setShowOtpBox] = useState(false);

  return (
    <div className="w-screen overflow-y-auto grid lg:grid-cols-2 xl:gap-0 gap-5 place-items-center items-center h-screen">
      {/* images */}
      <div className="w-full relative lg:block hidden">
        <img
          src={require("../assets/images/bgImage.png")}
          alt=""
          className="w-full h-screen object-cover"
        />
        <img
          src={require("../assets/images/logoMain.png")}
          alt=""
          className="w-40 h-fit object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        />
        <img
          src={require("../assets/images/logoTitle.png")}
          alt=""
          className="w-40 h-fit object-cover absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        />
      </div>
      {/* form */}
      {!showOtpBox ? (
        <div className="lg:w-full w-screen bg-bgGray h-full p-3 flex items-center justify-center relative z-0">
          <img
            src={require("../assets/images/bgImage.png")}
            alt=""
            className="w-full h-screen fixed lg:hidden -z-10 object-cover"
          />

          <div className="bg-white relative text-[#000D23] space-y-4 rounded-lg md:p-10 p-4 shadow-lg">
            <img
              src={require("../assets/images/Logo.png")}
              alt=""
              className="w-fit h-fit object-cover lg:hidden absolute -top-16 left-1/2 -translate-x-1/2 z-10"
            />
            <p className="font-semibold  text-left text-2xl">Sign in</p>
            <div className="space-y-1">
              <label htmlFor="PhoneNumber" className="Label">
                Phone number
              </label>
              <input type="text" className="input_field" />
            </div>
            {!signInWithPassword && (
              <>
                <div className="space-y-1">
                  <div className="w-full flex items-center justify-between">
                    <label htmlFor="password" className="Label">
                      Password
                    </label>
                    <Link className="Label" to="/forgot-password">
                      Forgot your password?
                    </Link>
                  </div>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="input_field"
                  />
                </div>
                <p className="opacity-50">
                  8 characters with a mix of letters, numbers & symbols
                </p>
              </>
            )}

            <button className="green_button w-full">Sign in </button>
            <p
              onClick={() => setSignInWithPassword(!signInWithPassword)}
              className="text-center text-lg cursor-pointer font-semibold"
            >
              {signInWithPassword
                ? "Sign In with Password"
                : " Sign In with OTP"}
            </p>
            <div className="flex items-center gap-2 opacity-50 w-full">
              <hr className="flex-1" />
              <p className=" text-xs flex-1">OR SIGN-IN WITH</p>
              <hr className="flex-1" />
            </div>
            {/* social login */}
            <div className="w-full flex items-center justify-center gap-2">
              <button className="rounded-full w-12 h-12 border text-center">
                <FcGoogle className="text-xl mx-auto" />
              </button>
              <button className="rounded-full w-12 h-12 border text-center">
                <FaFacebookF className="text-xl mx-auto text-blue-500" />
              </button>
            </div>
            {/* sign up  url */}
            <p className=" text-sm text-center">
              Don’t have an account?{" "}
              <Link
                to="/sign-up"
                className="text-blue-500 font-semibold text-base opacity-100"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      ) : (
        <div className="lg:w-full w-screen bg-bgGray h-full p-3 flex items-center justify-center relative z-0">
          <img
            src={require("../assets/images/bgImage.png")}
            alt=""
            className="w-full h-full fixed lg:hidden -z-10 object-cover"
          />

          <div className="bg-white relative text-[#000D23] space-y-4 rounded-lg md:p-10 p-4 shadow-lg md:w-2/3 w-full">
            <img
              src={require("../assets/images/Logo.png")}
              alt=""
              className="w-fit h-fit object-cover lg:hidden absolute -top-16 left-1/2 -translate-x-1/2 z-10"
            />
            <p className="font-semibold  text-left text-2xl">
              Continue to your account
            </p>
            <p className="font-medium text-left text-base opacity-50">
              Enter the 4-digit code sent to you{" "}
            </p>
            <div className="flex w-full  items-center gap-2">
              <input
                type="text"
                className="border border-borderColor w-1/6 rounded-lg p-3 outline-none focus:border-green-500"
              />
              <input
                type="text"
                className="border border-borderColor w-1/6 rounded-lg p-3 outline-none focus:border-green-500"
              />
              <input
                type="text"
                className="border border-borderColor w-1/6 rounded-lg p-3 outline-none focus:border-green-500"
              />
              <input
                type="text"
                className="border border-borderColor w-1/6 rounded-lg p-3 outline-none focus:border-green-500"
              />
            </div>

            <button className="green_button w-full">Verify My Email</button>
            <p
              onClick={() => setSignInWithPassword(!signInWithPassword)}
              className="text-center text-lg cursor-pointer font-semibold"
            >
              {signInWithPassword
                ? "Sign In with Password"
                : " Sign In with OTP"}
            </p>
            <div className="text-center">
              <p className="text-xs">Resend code 0:57</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signin;
