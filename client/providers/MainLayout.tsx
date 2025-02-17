"use client";
import Modal from "@/app/Components/Modal/Modal";
import ProfileModal from "@/app/Components/Profile/ProfileModal";
import { useTasks } from "@/context/taskContext";
import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  const { isEditing } = useTasks();

  return (
    <div className="homepage min-layout flex-1 border-2 border-[#efefef] dark:border-white rounded-[1.5rem] overflow-auto ">
      {children}
      {isEditing && <Modal />}
    </div>
  );
}

export default MainLayout;
