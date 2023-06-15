import getLikedSongs from "@/actions/getLikedSongs";
import Header from "@/components/Header";
import Image from "next/image";
import LikedContent from "./components/LikedContent";

export const revalidate = 0;

const Liked = async () => {
  const songs = await getLikedSongs();

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="from-bg-neutral-900">
        <div className="mt-10">
          <div className="flex flex-col items-center gap-x-5">
            <div className="relative h-32 w-32 lg:h-44 lg:w-44 rounded-full overflow-hidden">
              <Image
                alt="Playlist"
                fill
                src={`/images/liked.jpg`}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-y-2 mt-4 items-center">
              <h1 className="text-white text-4xl sm:text-7xl font-bold">
                Liked Songs
              </h1>
              <p className="mt-2 font-semibold text-sm text-tunehive-900">
                Playlist
              </p>
            </div>
          </div>
        </div>
      </Header>
      <LikedContent songs={songs} />
    </div>
  );
};

export default Liked;
