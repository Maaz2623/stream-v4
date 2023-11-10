import React from "react";
import './globals.css'
import { Route, Routes } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import { Home, Saved } from "./_root/pages";
import Suggest from "./_root/pages/Suggest";
import Search from "./_root/pages/Search";
import Movie from "./_root/pages/Movie";

const App = () => {
  return (
    <>
      <div className="fixed top-0 left-0 filter blur-[2px] brightness-[0.15] w-full h-full flex justify-center items-center z-[-1]">
        <img src="/assets/images/bg-left.jpg" height={100} width={500} />
        <img src="/assets/images/bg-center.jpg" height={100} width={500} />
        <img src="/assets/images/bg-right.jpg" height={100} width={500} />
      </div>

      <Routes>
        <Route element={<RootLayout/>}>
            <Route index element={<Home/>} />
            <Route path="/saved" element={<Saved/>} />
            <Route path="/suggest" element={<Suggest/>} />
            <Route path="/search" element={<Search/>} />
            <Route path="/movie/:slug" element={<Movie/>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
