"use client";
import React, { useEffect } from "react";
import { useUserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import RegisterForm from "../Components/auth/RegisterForm/RegisterForm";

function page() {
  const { user } = useUserContext();

  const router = useRouter();

  useEffect(() => {
    // redirect to home if user is logged in
    if (user && user._id) {
      router.push("/");
    }
  }, [user, router]);

  if (user && user._id) {
    return null;
  }

  return (
    <div className="auth-page w-full h-full flex justify-center items-center">
      <RegisterForm />
    </div>
  );
}

export default page;
