import { supabase } from '../../../../utils/database'

// update this code to handle errors

export async function PATCH(req) {
    const data = await req.json()
    console.log(data)
    const result = await supabase.from("Notes").update(data).match({ id: data.id })
    console.log(result)
    return Response.json({ message: "Note successfully updated", success: true });
}