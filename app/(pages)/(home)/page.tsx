import SignInButton from "@/components/tools/SignInButton";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session?.user) redirect("/dashboard");
  return (
    <main className="flex flex-1 flex-col items-start justify-center lg:p-24 p-8 gap-4">
      <h1 className="text-6xl font-bold text-accent-600">Liz Inventory</h1>
      <SignInButton />
    </main>
  );
}
