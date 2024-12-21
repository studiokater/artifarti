"use client";

// Hooks
import { useState } from "react";

// Components
import { SignUpForm } from "./SignUpForm/SignUpForm";
import { LoginForm } from "./LoginForm/LoginForm";
import { ImageSlider } from "@/components/ui";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn/ui";

export type AuthFormType = "login" | "signup";

export function AuthForm() {
  const [authFormType, setAuthFormType] = useState<AuthFormType>("login");

  return (
    <section className="flex flex-1 items-center justify-center">
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            {authFormType === "signup" ? (
              <SignUpForm setFormType={setAuthFormType} />
            ) : (
              <LoginForm setFormType={setAuthFormType} />
            )}
          </div>
        </div>
        {/* <div className="hidden bg-muted lg:block"> */}
        <ImageSlider />
        {/* </div> */}
      </div>
    </section>
  );
}
