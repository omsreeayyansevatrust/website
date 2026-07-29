"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function login(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      router.push("/admin/dashboard");
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-orange-100 to-orange-50">

      <form
        onSubmit={login}
        className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md"
      >

        <h1 className="text-3xl font-bold text-center mb-8">
          Admin Login
        </h1>

        <input
          className="border w-full p-3 rounded-lg mb-4"
          placeholder="Email"
          type="email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          className="border w-full p-3 rounded-lg mb-6"
          placeholder="Password"
          type="password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          disabled={loading}
          className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg"
        >
          {loading ? "Signing In..." : "Login"}
        </button>

      </form>

    </div>
  );
}