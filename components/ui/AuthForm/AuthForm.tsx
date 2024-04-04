"use client";

import { useState } from "react";
import { SignUpForm } from "./SignUpForm/SignUpForm";
import { LoginForm } from "./LoginForm/LoginForm";

export type FormType = "login" | "signup";

export function AuthForm() {
  const [formType, setForm] = useState<FormType>("login");

  return (
    <section className="flex flex-1 items-center justify-center">
      {formType === "signup" ? (
        <SignUpForm setFormType={setForm} />
      ) : (
        <LoginForm setFormType={setForm} />
      )}
    </section>
  );
}
