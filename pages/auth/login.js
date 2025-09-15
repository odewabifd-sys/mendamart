import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

export default function Login() {
  const { isLoading, session, supabaseClient } = useSessionContext();
  const router = useRouter();

  if (!isLoading && session) {
    router.push("/");
  }

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