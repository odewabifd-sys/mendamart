import Link from "next/link";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

export default function Nav() {
  const supabase = useSupabaseClient();
  const user = useUser();
  const router = useRouter();

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/");
  }

  return (
    <nav className="w-full bg-white shadow py-3 px-6 flex justify-between items-center">
      <Link href="/" className="text-lg font-bold text-blue-600">
        MENDAMART
      </Link>

      <div className="flex gap-4 items-center">
        {!user && (
          <>
            <Link href="/auth/login" className="text-sm text-blue-500">
              Login
            </Link>
            <Link href="/auth/signup?role=customer" className="text-sm text-green-600">
              Signup
            </Link>
          </>
        )}

        {user && (
          <>
            <Link href="/dashboard/customer" className="text-sm text-blue-500">
              Customer Dashboard
            </Link>
            <Link href="/dashboard/artisan" className="text-sm text-blue-500">
              Artisan Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}