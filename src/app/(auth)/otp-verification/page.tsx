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

export default function OTPVerificationPage() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const router = useRouter();

  const handleInputChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`) as HTMLInputElement;
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`) as HTMLInputElement;
      prevInput?.focus();
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 bg-cover bg-center relative" style={{backgroundImage: `url(${authImg.src})`}}>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 bg-background">
        <div className="w-full max-w-md">
          <Link href="/forget-password" className="inline-flex items-center text-foreground/60 hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="text-sm">Back</span>
          </Link>

          <div className="flex items-center justify-center mb-8">
            <Image src={logo} alt="logo" width={400} height={400} className="w-62.5" />
          </div>

          <h2 className="text-3xl font-bold text-foreground mb-2">OTP Verification</h2>
          <p className="text-foreground/60 mb-8">Enter the 6-digit code sent to your email address.</p>

          <div className="flex justify-center gap-2 mb-8">
            {otp.map((value, index) => (
              <Input key={index} id={`otp-${index}`} type="text" maxLength={1} value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(index, e.target.value)} onKeyDown={(e) => handleKeyDown(index, e)} className="w-12 h-12 text-center text-lg font-semibold" />
            ))}
          </div>

          <Button onClick={() => router.push("/reset-password")} className="w-full h-11 text-base bg-primary hover:bg-primary/90 text-white mb-6">
            Verify
          </Button>

          <p className="text-center text-sm text-foreground/60">
            Didn't receive the code?{" "}
            <button className="text-primary hover:underline font-medium">Resend</button>
          </p>
        </div>
      </div>

      <div className="lg:hidden absolute inset-0 -z-10 bg-cover bg-center opacity-30" style={{backgroundImage: `url(${authImg.src})`}} />
    </div>
  );
}
