import { g as getSupabaseAdmin } from '../../chunks/supabase_Cpv12DNi.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async ({ request, cookies }) => {
  try {
    const session = cookies.get("admin_session");
    if (!session || session.value !== "authenticated") {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const url = new URL(request.url);
    const read = url.searchParams.get("read");
    const limit = parseInt(url.searchParams.get("limit") || "50");
    const supabase = getSupabaseAdmin();
    let query = supabase.from("contact_messages").select("*").order("created_at", { ascending: false }).limit(limit);
    if (read !== null) {
      query = query.eq("read", read === "true");
    }
    const { data: messages, error } = await query;
    if (error) {
      console.error("Database error:", error);
      return new Response(
        JSON.stringify({ error: "Mesajlar yüklenemedi" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    return new Response(
      JSON.stringify({ success: true, messages }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("API error:", error);
    return new Response(
      JSON.stringify({ error: "Bir hata oluştu" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
