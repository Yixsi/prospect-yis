import { supabase } from '../../../../../utils/database'

export async function DELETE(req, { params }) {
    await supabase.from("Notes").delete().eq("id", params.id)
    return Response.json({ message: "Note successfully deleted", success: true });
}