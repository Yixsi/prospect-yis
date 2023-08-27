import { supabase } from '../../../../utils/database'

export async function POST(req) {

    const data = await req.json()
    const result = await supabase.from("Notes").insert([data])
    console.log(result)
    return Response.json({ message: "This Worked", success: true });
}
