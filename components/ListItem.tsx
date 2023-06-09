"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
  const router = useRouter();
  const onClick = () => {
    // Add authentication before push
    router.push(href);
  };

  return (
    <button className="relative flex items-center pr-4 overflow-hidden transition rounded-md reletive group gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20">
      <div className="relative min-h-[80px] min-w-[80px]">
        <Image
          onClick={onClick}
          className="object-cover"
          fill
          src={image}
          alt={`${name} image`}
        />
        <p className="py-5 font-medium truncate">{name}</p>
      </div>
      <div className="absolute flex items-center justify-center p-4 transition rounded-full opacity-0 bg-tunehive-900 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110">
        <FaPlay className="text-black mr-[-2px] ml-[2px]" />
      </div>
    </button>
  );
};

export default ListItem;
