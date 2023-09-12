import SignInButton from "@/components/tools/SignInButton";
export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-start justify-center lg:p-24 p-8 gap-4">
      <h1 className="text-6xl font-bold text-accent-600">Liz Inventory</h1>
      <SignInButton />
    </main>
  );
}
