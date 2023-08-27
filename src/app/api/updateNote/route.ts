import { supabase } from '../../../../utils/database'

export async function PATCH(req) {
    const data = await req.json()
    await supabase.from("Notes").update(data).match({ id: data.id })
    return Response.json({ message: "Note successfully updated", success: true });
}