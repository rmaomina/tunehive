import getSongs from "@/actions/getSongs";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import PageContent from "./components/PageContent";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

// this page will not be cached, the data on it is always up to date.
export const revalidate = 0;

export default async function Home() {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const songs = await getSongs();
  const greeting = session ? "Welcome back" : "Please login";

  return (
    <div className="w-full h-full overflow-hidden overflow-y-auto rounded bg-neutral-900">
      <Header className="">
        <div className="mb-2">
          <h1 className="text-3xl font-semibold text-white">{greeting}</h1>
          {greeting && (
            <div className="grid grid-cols-1 gap-3 mt-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              <ListItem
                image="/images/liked.jpg"
                name="Liked Songs"
                href="liked"
              />
            </div>
          )}
        </div>
      </Header>
      <div className="px-6 mt-2 mb-7">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-white">Newest Songs</h1>
        </div>
        <PageContent songs={songs} />
      </div>
    </div>
  );
}
