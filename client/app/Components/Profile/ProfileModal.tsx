"use client";
import { useTasks } from "@/context/taskContext";
import { useUserContext } from "@/context/userContext";
import useDetectOutside from "@/hooks/useDetectOutside";
import { badge, check, github, mail } from "@/utils/Icons";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function ProfileModal() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handlePassword =
    (type: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (type === "old") {
        setOldPassword(e.target.value);
      } else {
        setNewPassword(e.target.value);
      }
    };

  const { closeModal, profileModal } = useTasks();

  const {
    user,
    updateUser,
    userState,
    setUserState,
    handleUserInput,
    changePassword,
  } = useUserContext();

  const ref = React.useRef<HTMLFormElement>(
    null
  ) as React.RefObject<HTMLFormElement>;

  useDetectOutside({
    ref,
    callback: () => {
      if (profileModal) {
        closeModal();
      }
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateUser(e, {
      avatar: userState.photo,
      name: userState.name,
      email: userState.email,
    });
    closeModal();
  };

  const handleChangePassword = () => {
    changePassword(oldPassword, newPassword);
    setOldPassword("");
    setNewPassword("");
  };

  useEffect(() => {
    setUserState({
      avatar: user.photo,
      name: user.name,
      email: user.email,
    });
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 h-full w-full bg-[#33333330] overflow-hidden ">
      <form
        ref={ref}
        action=""
        onSubmit={(e) => handleSubmit(e)}
        className="py-5 px-6 max-w-[520px] w-full flex flex-col gap-3 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md   "
      >
        <h3 className="text-lg border-b-2 border-gray-200">Edit Profile</h3>

        <div className="flex flex-col gap-1 border-2 border-gray-500 p-3 rounded-md mx-4">
          <label htmlFor="avatar">Avatar</label>{" "}
          <input
            className="bg-[#efefef] p-2 rounded-md border"
            type="text"
            name="avatar"
            id="avatar"
            placeholder="photo.example.com"
            value={userState?.avatar}
            onChange={(e) => handleUserInput("avatar")(e)}
          />{" "}
          <Image
            src={user.photo}
            alt="avatar"
            width={120}
            height={120}
            className="h-[150px] w-[150px] rounded-full my-2 mx-auto "
          />
        </div>
        <div className="flex flex-col gap-1 border-t-2 border-gray-200">
          <label htmlFor="name">Name</label>
          <input
            className="bg-[#efefef] p-2 rounded-md border"
            type="text"
            name="name"
            id="name"
            placeholder="Your Name Here"
            value={userState?.name}
            onChange={(e) => handleUserInput("name")(e)}
          />
        </div>
        <div className="flex flex-col gap-1 border-t-2 pb-2 border-b-2 border-gray-200">
          <label htmlFor="email">Email</label>
          <input
            className="bg-[#efefef] p-2 rounded-md border"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={userState?.email}
            onChange={(e) => handleUserInput("email")(e)}
          />
        </div>
        <div className="flex flex-col gap-1 px-3 mx-4">
          <h4 className="font-bold">Change Password</h4>
          <label htmlFor="oldPassword">Password</label>
          <input
            className="bg-[#efefef] p-2 rounded-md border"
            type="password"
            name="oldPassword"
            id="oldPassword"
            placeholder="Password"
            value={oldPassword}
            onChange={handlePassword("old")}
          />
          <label htmlFor="newPassword">New Password</label>
          <input
            className="bg-[#efefef] p-2 rounded-md border"
            type="password"
            name="newPassword"
            id="newPassword"
            placeholder="New Password"
            value={newPassword}
            onChange={handlePassword("new")}
          />
          <div className="mx-auto mt-2 w-[60%]">
            <button
              onClick={() => handleChangePassword()}
              type="button"
              className="text-white text-sm py-2 rounded-md w-full bg-[#f75239] hover:opacity-70 transition duration-300 ease-in-out"
            >
              Change Password
            </button>
          </div>
        </div>

        <div className="mt-8 py-2 flex gap-2 border-t-2 border-gray-200">
          <button
            onClick={closeModal}
            type="button"
            className="text-black py-2 border-2 border-gray-200 rounded-md w-full bg-transparent hover:bg-[#f75239] hover:text-white transition duration-300 ease-in-out"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="text-white py-2 rounded-md w-full bg-[#3f71e3] hover:opacity-70 transition duration-300 ease-in-out"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileModal;
