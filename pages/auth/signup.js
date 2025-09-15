import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Signup() {
  const { isLoading, session, supabaseClient } = useSessionContext();
  const router = useRouter();
  const { role } = router.query;

  useEffect(() => {
    if (!isLoading && session) {
      if (role) {
        // Redirect to a specific role-based dashboard after signup
        router.push(`/dashboard/${role}`);
      } else {
        router.push("/");
      }
    }
  }, [session, isLoading, router, role]);

  return (
    <div className="w-full h-screen flex justify-center items-center p-4">
      <div className="w-full h-full max-w-sm">
        <Auth
          supabaseClient={supabaseClient}
          providers={["github", "google"]}
          magicLink={true}
          appearance={{ theme: ThemeSupa }}
          theme="light"
        />
      </div>
    </div>
  );
}