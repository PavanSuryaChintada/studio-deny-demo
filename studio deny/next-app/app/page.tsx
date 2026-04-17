"use client";

import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { AuthModal } from "@/components/auth/AuthModal";

export default function HomePage() {
  const { data: session, status } = useSession();
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <main className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center gap-10 px-6 py-16">
      <p className="text-center text-[11px] uppercase tracking-[0.35em] text-neutral-500">
        Studio Deny
      </p>
      <h1 className="text-center text-3xl font-light tracking-tight">Authentication</h1>

      <div className="flex min-h-[120px] flex-col items-center justify-center gap-4 text-center text-sm text-neutral-400">
        {status === "loading" ? (
          <span>Loading session…</span>
        ) : session?.user ? (
          <>
            <p>
              Signed in as{" "}
              <span className="text-white">
                {session.user.email ?? session.user.name ?? session.user.id}
              </span>
            </p>
            <p className="text-xs text-neutral-600">User id: {session.user.id}</p>
            <button
              type="button"
              onClick={() => signOut({ callbackUrl: "/" })}
              className="border border-neutral-700 px-6 py-2 text-xs uppercase tracking-[0.2em] text-neutral-300 transition hover:border-white hover:text-white"
            >
              Sign out
            </button>
          </>
        ) : (
          <>
            <p>You are not signed in.</p>
            <button
              type="button"
              onClick={() => setAuthOpen(true)}
              className="border border-white bg-white px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-black transition hover:bg-neutral-200"
            >
              Sign in
            </button>
          </>
        )}
      </div>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </main>
  );
}
