import Nav from "../../components/Nav";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

export default function ArtisanDashboard() {
  const { isLoading, session } = useSessionContext();
  const router = useRouter();

  if (isLoading) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  if (!session) {
    router.push("/auth/login");
    return null;
  }

  return (
    <div>
      <Nav />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mt-10">
          Artisan Dashboard
        </h1>
        <p className="text-center mt-4">
          Welcome to your artisan dashboard.
        </p>
      </main>
    </div>
  );
}