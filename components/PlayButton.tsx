import { FaPlay } from "react-icons/fa";

interface PlayButtonProps {}

const PlayButton: React.FC<PlayButtonProps> = ({}) => {
  return (
    <button className="flex items-center p-4 transition rounded-full opacity-0 bg-tunehive-900 drop-shadow-md translate translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110">
      <FaPlay className="text-black" />
    </button>
  );
};

export default PlayButton;
