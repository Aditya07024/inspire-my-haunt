import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Lock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui-kit/kit";
import { useApp } from "@/store/app";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Log in — MyDesignGhar" }] }),
  component: Login,
});

function Login() {
  const navigate = useNavigate();
  const login = useApp((s) => s.login);
  const [phone, setPhone] = useState("");
  const [pwd, setPwd] = useState("");
  const [err, setErr] = useState("");

  const submit = () => {
    if (!/^\d{10}$/.test(phone)) return setErr("Enter a valid 10-digit phone number.");
    if (pwd.length < 4) return setErr("Password must be at least 4 characters.");
    setErr("");
    navigate({ to: "/otp" });
  };

  return (
    <div className="flex h-full flex-col px-6 pt-[max(2rem,env(safe-area-inset-top))]">
      <div className="mb-8">
        <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl gradient-primary shadow-glow">
          <Sparkles className="h-7 w-7 text-primary-foreground" />
        </div>
        <h1 className="font-display text-3xl font-extrabold text-foreground">Welcome back</h1>
        <p className="mt-1 text-muted-foreground">Log in to continue redesigning your home.</p>
      </div>

      <div className="space-y-4">
        <Field icon={<Phone className="h-5 w-5" />} placeholder="Phone number" value={phone} onChange={setPhone} inputMode="numeric" maxLength={10} />
        <Field icon={<Lock className="h-5 w-5" />} placeholder="Password" value={pwd} onChange={setPwd} type="password" />
      </div>

      <div className="mt-2 flex justify-end">
        <Link to="/forgot-password" className="text-sm font-medium text-primary">
          Forgot password?
        </Link>
      </div>

      {err && <p className="mt-3 text-sm font-medium text-destructive">{err}</p>}

      <Button full size="lg" className="mt-6" onClick={submit}>
        Log In
      </Button>

      <button
        onClick={() => {
          login();
          navigate({ to: "/home" });
        }}
        className="mt-3 text-center text-sm text-muted-foreground"
      >
        Continue as guest →
      </button>

      <p className="mt-auto pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-6 text-center text-sm text-muted-foreground">
        New here?{" "}
        <Link to="/register" className="font-semibold text-primary">
          Create an account
        </Link>
      </p>
    </div>
  );
}

export function Field({
  icon,
  placeholder,
  value,
  onChange,
  type = "text",
  inputMode,
  maxLength,
}: {
  icon: React.ReactNode;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  inputMode?: "numeric" | "text" | "email" | "tel";
  maxLength?: number;
}) {
  return (
    <label className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3.5 focus-within:border-primary">
      <span className="text-muted-foreground">{icon}</span>
      <input
        className="w-full bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
        placeholder={placeholder}
        value={value}
        type={type}
        inputMode={inputMode}
        maxLength={maxLength}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
