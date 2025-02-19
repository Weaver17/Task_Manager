"use client";
import { useUserContext } from "@/context/userContext";
import React from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function LoginForm() {
  const { loginUser, userState, handleUserInput } = useUserContext();
  const { email, password } = userState;
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <form
      onSubmit={loginUser}
      className="relative m-[2rem] px-10 py-14 rounded-lg bg-white w-full max-w-[520px]"
    >
      <div className="relative z-10">
        <h1 className="mb-2 text-center text-[1.35rem] font-medium">
          Login to Your Account
        </h1>
        <p className="mb-8 px-[2rem] text-center text-[#999] text-[14px]">
          Don't have an account?{" "}
          <a
            href="/register"
            className="font-bold text-[#3f71e3] hover:text-[#3055ab] transition-all duration-300"
          >
            Register here
          </a>
        </p>

        <div className="mt-[1rem] flex flex-col">
          <label htmlFor="email" className="mb-1 text-[#999]">
            Email
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => handleUserInput("email")(e)}
            name="email"
            className="px-4 py-3 border-[2px] rounded-md outline-[#3f71e3] text-gray-800"
            placeholder="johndoe@gmail.com"
          />
        </div>
        <div className="relative mt-[1rem] flex flex-col">
          <label htmlFor="password" className="mb-1 text-[#999]">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => handleUserInput("password")(e)}
            name="password"
            className="px-4 py-3 border-[2px] rounded-md outline-[#3f71e3] text-gray-800"
            placeholder="***************"
          />
          <button
            type="button"
            className="absolute p-1 right-4 top-[48%] z-100 text-[22px] text-[#999] opacity-45"
          >
            {showPassword ? (
              <FaRegEye onClick={togglePassword} />
            ) : (
              <FaRegEyeSlash onClick={togglePassword} />
            )}
          </button>
        </div>
        <div className="mt-4 flex justify-end">
          <a
            href="/forgot-password"
            className="font-bold text-[#3f71e3] text-[14px] hover:text-[#3055ab] transition-all duration-300"
          >
            Forgot password?
          </a>
        </div>
        <div className="flex">
          <button
            type="submit"
            disabled={!email || !password}
            className="mt-[1.5rem] flex-1 px-4 py-3 font-bold bg-[#3f71e3] text-white rounded-md hover:bg-[#3055ab] transition-colors"
          >
            Login Now
          </button>
        </div>
      </div>
      <img src="/flurry.png" alt="" />
    </form>
  );
}

export default LoginForm;
