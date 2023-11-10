import React, { useState } from "react";
import { Home, Saved } from "./pages";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/shared/Sidebar";
import Bottombar from "@/components/shared/Bottombar";
import Topbar from "@/components/shared/Topbar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const RootLayout = () => {

  const [landed, setLanded] = useState(true);

  return (
    <>
      {!landed ? (
        <div className="flex justify-center items-center h-screen">
          <AlertDialog>
            <AlertDialogTrigger className="bg-dark-2 border-2 border-primary-500 p-3 rounded-lg text-white shadow-xl font-bold">
              Watch
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-dark-2 border border-primary-500">
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Welcome kanka, Enjoy your time here 😊
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Please make sure to suggest movies or other stuff that you
                  think might make the website better. Some features are still being developed, Thank you for your patience. Will do best to make it a
                  smooth experience for you and your family.🚀
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="border border-primary-500">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction className="bg-primary-500" onClick={() => setLanded(true)}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      ) : (
        <div className="w-full md:flex">
          <Sidebar />
          <Topbar />
          <section className="flex flex-1 h-full">
            <Outlet />
          </section>
          <Bottombar />
        </div>
      )}
    </>
  );
};

export default RootLayout;
