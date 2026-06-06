import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { User, Phone, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui-kit/kit";
import { Field } from "./login";
import { useApp } from "@/store/app";

export const Route = createFileRoute("/register")({
  head: () => ({ meta: [{ title: "Create account — MyDesignGhar" }] }),
  component: Register,
});

function Register() {
  const navigate = useNavigate();
  const login = useApp((s) => s.login);
  const [f, setF] = useState({ name: "", phone: "", email: "", pwd: "" });
  const [err, setErr] = useState("");
  const set = (k: keyof typeof f) => (v: string) => setF({ ...f, [k]: v });

  const submit = () => {
    if (f.name.trim().length < 2) return setErr("Please enter your name.");
    if (!/^\d{10}$/.test(f.phone)) return setErr("Enter a valid 10-digit phone number.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) return setErr("Enter a valid email address.");
    if (f.pwd.length < 4) return setErr("Password must be at least 4 characters.");
    setErr("");
    login(f.name.trim());
    navigate({ to: "/otp" });
  };

  return (
    <div className="flex h-full flex-col px-6 pt-[max(2rem,env(safe-area-inset-top))]">
      <div className="mb-7">
        <h1 className="font-display text-3xl font-extrabold text-foreground">Create account</h1>
        <p className="mt-1 text-muted-foreground">Join thousands designing smarter homes.</p>
      </div>

      <div className="space-y-4">
        <Field icon={<User className="h-5 w-5" />} placeholder="Full name" value={f.name} onChange={set("name")} />
        <Field icon={<Phone className="h-5 w-5" />} placeholder="Phone number" value={f.phone} onChange={set("phone")} inputMode="numeric" maxLength={10} />
        <Field icon={<Mail className="h-5 w-5" />} placeholder="Email address" value={f.email} onChange={set("email")} inputMode="email" />
        <Field icon={<Lock className="h-5 w-5" />} placeholder="Password" value={f.pwd} onChange={set("pwd")} type="password" />
      </div>

      {err && <p className="mt-3 text-sm font-medium text-destructive">{err}</p>}

      <Button full size="lg" className="mt-6" onClick={submit}>
        Create Account
      </Button>

      <p className="mt-auto pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-6 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link to="/login" className="font-semibold text-primary">
          Log in
        </Link>
      </p>
    </div>
  );
}
