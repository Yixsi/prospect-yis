
import { Notes } from "./components/notes/Notes"
import SearchBar from "./components/SearchBar"
import { createClient } from "@supabase/supabase-js"
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

export const revalidate = 0
export default async function Home() {

  const {data, error} = await supabase
    .from("Notes").select()

  // console.log('Notes', data)

  return (
    <main className="flex flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Notes</h1>
      <SearchBar />
      <Notes data={data}/>
    </main>
  )
}
