import { Suspense } from "react";
import RegisterForm from "./RegisterForm";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#3a3a3a] to-[#000000] px-4 py-16">
      <Suspense fallback={<div className="text-white">Loading...</div>}>
        <RegisterForm />
      </Suspense>
    </main>
  );
}
