"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

type AuthModalProps = {
  open: boolean;
  onClose: () => void;
};

export function AuthModal({ open, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<"signin" | "register">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  if (!open) return null;

  async function handleCredentials(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    setLoading(true);
    try {
      if (mode === "register") {
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password, name: name || undefined }),
        });
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        if (!res.ok) {
          setMessage(data.error ?? "Could not create account.");
          return;
        }
      }

      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setMessage("Invalid email or password.");
        return;
      }

      onClose();
      setEmail("");
      setPassword("");
      setName("");
      setMode("signin");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div
        className="absolute inset-0"
        aria-hidden
        onClick={() => !loading && onClose()}
      />
      <div className="relative w-full max-w-md border border-neutral-800 bg-black text-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-neutral-800 px-6 py-4">
          <h2 className="text-sm font-medium tracking-[0.2em] uppercase">
            {mode === "signin" ? "Sign in" : "Create account"}
          </h2>
          <button
            type="button"
            onClick={() => !loading && onClose()}
            className="text-neutral-500 transition hover:text-white"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="space-y-6 px-6 py-8">
          <button
            type="button"
            disabled={loading}
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="flex w-full items-center justify-center gap-2 border border-white bg-white px-4 py-3 text-sm font-medium tracking-wide text-black transition hover:bg-neutral-200 disabled:opacity-50"
          >
            Continue with Google
          </button>

          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-neutral-800" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">or</span>
            <div className="h-px flex-1 bg-neutral-800" />
          </div>

          <form onSubmit={handleCredentials} className="space-y-4">
            {mode === "register" && (
              <div>
                <label className="mb-1 block text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-neutral-800 bg-transparent px-3 py-2 text-sm outline-none focus:border-neutral-500"
                  autoComplete="name"
                />
              </div>
            )}
            <div>
              <label className="mb-1 block text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-neutral-800 bg-transparent px-3 py-2 text-sm outline-none focus:border-neutral-500"
                autoComplete="email"
              />
            </div>
            <div>
              <label className="mb-1 block text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-neutral-800 bg-transparent px-3 py-2 text-sm outline-none focus:border-neutral-500"
                autoComplete={mode === "register" ? "new-password" : "current-password"}
                minLength={mode === "register" ? 6 : undefined}
              />
            </div>

            {message ? <p className="text-xs text-red-400">{message}</p> : null}

            <button
              type="submit"
              disabled={loading}
              className="w-full border border-white bg-transparent px-4 py-3 text-sm font-medium uppercase tracking-[0.15em] text-white transition hover:bg-white hover:text-black disabled:opacity-50"
            >
              {loading ? "…" : mode === "signin" ? "Sign in" : "Create account"}
            </button>
          </form>

          <button
            type="button"
            onClick={() => {
              setMode(mode === "signin" ? "register" : "signin");
              setMessage(null);
            }}
            className="w-full text-center text-xs text-neutral-500 underline-offset-4 hover:text-neutral-300 hover:underline"
          >
            {mode === "signin" ? "Need an account? Register" : "Have an account? Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
}
