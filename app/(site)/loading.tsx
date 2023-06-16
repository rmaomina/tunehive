"use client";

import Box from "@/components/Box";
import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <Box className="h-full flex flex-col items-center justify-center">
      <div className="mb-2">
        <ClipLoader
          color="#21d061"
          size={40}
        />
      </div>
      <div className="text-neutral-400">Loading...</div>
    </Box>
  );
};

export default Loading;
