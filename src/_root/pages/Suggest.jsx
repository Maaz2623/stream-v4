import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createSuggestion, getSuggestions } from "@/lib/appwrite";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Suggest = () => {
  const [suggestionsList, setSuggestionsList] = useState([]);

  const [values, setValues] = useState({
    title: "",
    releaseYear: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createSuggestion({title: values.title, releaseYear: values.releaseYear});
      fetchSuggestions()
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSuggestions = async () => {
    try {
      const res = await getSuggestions();
      setSuggestionsList(res);
    } catch (error) {
      console.log(error);
    }
  };

  if (suggestionsList.length === 0) {
    fetchSuggestions();
  }

  return (
    <div className="w-full">
      <div className="text-center text-2xl justify-center items-center py-4 font-semibold md:text-center md:text-4xl md:font-bold md:py-4">
        <p>Suggest a movie</p>
      </div>

      {/* form  */}

      <div className="text-black font-semibold mt-3 bg-dark-3 rounded-xl mx-2 border-2 border-primary-500">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-5 py-3 md:flex-row md:px-4"
        >
          <Input
            placeholder="Enter the title"
            className="w-1/2"
            onChange={(e) => setValues({...values,  title: e.target.value })}
          />
          <Input
            placeholder="Enter the year of release"
            className="w-1/2"
            onChange={(e) => setValues({...values, releaseYear: e.target.value })}
          />
          <Button className="bg-primary-500 text-white" type="submit">
            Submit
          </Button>
        </form>
      </div>

      {/* old and updated suggestions */}

      <div className="bg-dark-4 m-4 rounded-md shadow-lg p-5">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-lg">Suggested On</TableHead>
              <TableHead className="text-lg" >Title</TableHead>
              <TableHead className="text-lg">Release Year</TableHead>
              <TableHead className="text-right text-lg">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {suggestionsList.map((suggestion) => {
              return (
                <TableRow>
                  <TableCell className="font-medium">{suggestion.$createdAt.split('T')[0]}</TableCell>
                  <TableCell>{suggestion.title}</TableCell>
                  <TableCell>{suggestion.releaseYear}</TableCell>
                  <TableCell className="text-right">{suggestion.implemented===false ? "Pending" : "Uploaded"}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Suggest;
