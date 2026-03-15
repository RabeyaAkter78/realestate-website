/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import authImg from "../../../assets/auth.png";
import logo from "../../../assets/logo.png";

export default function ForgetPasswordPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 bg-cover bg-center relative" style={{backgroundImage: `url(${authImg.src})`}}>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 bg-background">
        <div className="w-full max-w-md">
          <Link href="/login" className="inline-flex items-center text-foreground/60 hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="text-sm">Back</span>
          </Link>

          <div className="flex items-center justify-center mb-8">
            <Image src={logo} alt="logo" width={400} height={400} className="w-62.5" />
          </div>

          <h2 className="text-3xl font-bold text-foreground mb-2">Forget Password</h2>
          <p className="text-foreground/60 mb-8">Enter your email address and we'll send you a link to reset your password.</p>

          <div className="mb-6">
            <label className="block text-sm font-medium text-foreground mb-2">Email</label>
            <Input type="email" placeholder="Enter your email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className="w-full" />
          </div>

          <Button onClick={() => router.push("/otp-verification")} className="w-full h-11 text-base bg-primary hover:bg-primary/90 text-white mb-6">
            Send Reset Link
          </Button>

          <p className="text-center text-sm text-foreground/60">
            Remember your password?{" "}
            <Link href="/login" className="text-primary hover:underline font-medium">Back to login</Link>
          </p>
        </div>
      </div>

      <div className="lg:hidden absolute inset-0 -z-10 bg-cover bg-center opacity-30" style={{backgroundImage: `url(${authImg.src})`}} />
    </div>
  );
}
