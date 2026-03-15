"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import authImg from "../../assets/auth.png";
import logo from "../../assets/logo.png";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 bg-cover bg-center relative" style={{backgroundImage: `url(${authImg.src})`}}>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 bg-background">
        <div className="w-full max-w-md">
          <Link href="/" className="inline-flex items-center text-foreground/60 hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="text-sm">Back</span>
          </Link>

          <div className="flex items-center justify-center mb-8">
            <Image src={logo} alt="logo" width={400} height={400} className="w-62.5" />
          </div>

          <h2 className="text-3xl font-bold text-foreground mb-2">Create your account</h2>
          <p className="text-foreground/60 mb-8">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline font-medium">Sign in</Link>
          </p>

          <div className="mb-6">
            <label className="block text-sm font-medium text-foreground mb-2">Email</label>
            <Input type="email" placeholder="Enter your email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className="w-full" />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-foreground mb-2">Password</label>
            <div className="relative">
              <Input type={showPassword ? "text" : "password"} placeholder="••••••••" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} className="w-full pr-10" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-foreground transition-colors">
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-foreground mb-2">Confirm Password</label>
            <div className="relative">
              <Input type={showConfirmPassword ? "text" : "password"} placeholder="••••••••" value={confirmPassword} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)} className="w-full pr-10" />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-foreground transition-colors">
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <Button onClick={() => router.push("/")} className="w-full h-11 text-base bg-primary hover:bg-primary/90 text-white mb-6">
            Sign Up
          </Button>

          <p className="text-xs text-foreground/60 text-center">
            By joining, you agree to the{" "}
            <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link>{" "}
            and Please read our{" "}
            <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>{" "}
            to learn how we use your personal data.
          </p>
        </div>
      </div>

      <div className="lg:hidden absolute inset-0 -z-10 bg-cover bg-center opacity-30" style={{backgroundImage: `url(${authImg.src})`}} />
    </div>
  );
}
