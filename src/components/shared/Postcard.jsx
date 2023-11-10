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

const Postcard = ({poster, slug, title}) => {
  return (
    <Link to={`/movie/${slug}`} className="flex flex-col justify-start items-center">
      <Card className="overflow-hidden sm:w-[200px] shadow-2xl h-full hover:cursor-pointer hover:opacity-80 transition-all">
        <div className="h-full">
          <img
            src={poster}
            alt=""
            className="h-full"
          />
        </div>
      </Card>
    </Link>
  );
};

export default Postcard;
