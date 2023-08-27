import Notes from "./components/notes/Notes";
import { supabase } from "../../utils/database";

export const revalidate = 0;
export default async function Home() {
  const { data, error } = await supabase.from("Notes").select();

  // console.log('Notes', data)

  return (
    <main className="p-24">
      <Notes data={data} />
    </main>
  );
}
