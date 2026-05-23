"use client";

import Lottie from "lottie-react";
import loadingAnimation from "@/animation/loading.json";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">

      <div className="w-64">
        <Lottie animationData={loadingAnimation} loop />
      </div>

    </div>
  );
}