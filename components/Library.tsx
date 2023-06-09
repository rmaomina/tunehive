"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

interface LibraryProps {}

const Library: React.FC<LibraryProps> = ({}) => {
  const onClick = () => {
    // handle upload later
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist
            size={26}
            className="text-neutral-400"
          />
          <p className="font-medium text-neutral-400 text-md">My Library</p>
        </div>
        <AiOutlinePlus
          size={28}
          onClick={onClick}
          className="p-1 transition border-2 border-transparent rounded-full cursor-pointer text-neutral-400 hover:text-white hover:border-white"
        />
      </div>
      <div className="flex flex-col px-3 mt-4 gap-y-2">List of Songs</div>
    </div>
  );
};

export default Library;
