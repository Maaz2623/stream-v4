import React from "react";
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
import { Link, redirect } from "react-router-dom";

const Alert = () => {
  return (
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
            Please make sure to suggest movies or other stuff that you think
            might make the website better. Will do best to make it a smooth
            experience for you and your family.🚀
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="border border-primary-500">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction className="bg-primary-500">
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Alert;
