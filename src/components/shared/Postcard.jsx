import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Postcard = ({ poster, slug, title }) => {
  return (
    <Link
      to={`/movie/${slug}`}
    >
      <Card className="overflow-hidden sm:w-[200px] shadow-2xl h-full hover:cursor-pointer hover:opacity-80 transition-all border-none">
        <motion.div
          className="h-full"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.25,
            ease: "easeInOut",
            duration: 0.5,
          }}
          viewport={{ amount: 0 }}
        >
          <img src={poster} alt="" className="h-full" />
        </motion.div>
      </Card>
    </Link>
  );
};

export default Postcard;
