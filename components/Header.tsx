"use client";

import { toast } from "react-hot-toast";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";

import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import Button from "./Button";
import { useUser } from "@/hooks/useUser";
import useAuthModal from "@/hooks/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import usePlayer from "@/hooks/usePlayer";

interface HeaderProps {
  children: React.ReactNode;
  className: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  const authModal = useAuthModal();
  const player = usePlayer();

  const supabaseClient = useSupabaseClient();
  const { user, subscription } = useUser();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    player.reset();

    router.refresh();

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Logged out!");
    }
  };

  return (
    <div
      className={twMerge(
        `h-fit bg-gradient-to-b from-tunehive-800 p-6`,
        className,
      )}
    >
      <div className="flex items-center justify-between w-full mb-4">
        <div className="items-center hidden md:flex gap-x-2">
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center transition bg-black rounded-full hover:opacity-75"
          >
            <RxCaretLeft
              size={34}
              className="text-white"
            />
          </button>
          <button
            onClick={() => router.forward()}
            className="flex items-center justify-center transition bg-black rounded-full hover:opacity-75"
          >
            <RxCaretRight
              size={34}
              className="text-white"
            />
          </button>
        </div>
        <div className="flex items-center md:hidden gap-x-2">
          <button className="flex items-center justify-center p-2 transition bg-white rounded-full hover:opacity-75">
            <HiHome
              size={20}
              className="text-black"
            />
          </button>
          <button className="flex items-center justify-center p-2 transition bg-white rounded-full hover:opacity-75">
            <BiSearch
              size={20}
              className="text-black"
            />
          </button>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          {user ? (
            <div className="flex items-center gap-x-4">
              <Button
                onClick={handleLogout}
                className="px-6 py-2 bg-white"
              >
                Logout
              </Button>
              <Button
                onClick={() => router.push("/account")}
                className="bg-white"
              >
                <FaUserAlt />
              </Button>
            </div>
          ) : (
            <>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className="font-medium text-white bg-transparent"
                >
                  Sign up
                </Button>
              </div>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className="px-6 py-2 bg-white"
                >
                  Log in
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
