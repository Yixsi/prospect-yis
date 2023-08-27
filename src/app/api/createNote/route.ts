import { supabase } from '../../../../utils/database'

export async function POST(req) {

    const data = await req.json()
    await supabase.from("Notes").insert([data])
    return Response.json({ message: "This Worked", success: true });
}
