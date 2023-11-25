import React from "react";
import { sidebarLinks } from "@/constants";
import { Link, useLocation, NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const Sidebar = () => {
  const { pathname } = useLocation();

  const variants = {
    hidden: {opacity: 0},
    visible: {opacity: 1}
  }

  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="/assets/images/logo.png"
            alt="logo"
            width={30}
            height={30}
          />
          <p className="w-full flex justify-start text-2xl font-semibold items-center">
            Stream
          </p>
        </Link>

        <ul className="flex flex-col gap-6">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.route;

            return (
              <motion.li
                key={link.label}
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{
                  delay: link.index * 0.25,
                  ease: "easeInOut",
                  duration: 0.5,
                }}
                viewport={{ amount: 0 }}
                className={`leftsidebar-link group ${
                  isActive && "bg-primary-500"
                }`}
              >
                <NavLink
                  to={link.route}
                  className="flex gap-4 items-center p-4"
                >
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={`group-hover:invert-white ${
                      isActive && "invert-white"
                    }`}
                  />
                  {link.label}
                </NavLink>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
