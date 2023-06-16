"use client";

import Box from "@/components/Box";
import { BiErrorCircle } from "react-icons/bi";

const Error = () => {
  return (
    <Box className="h-full flex flex-col items-center justify-center">
      <div className="mb-2">
        <BiErrorCircle size={60} />
      </div>
      <div className="text-neutral-400">Somgthing went wrong.</div>
    </Box>
  );
};

export default Error;
