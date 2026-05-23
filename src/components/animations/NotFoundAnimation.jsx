"use client";

import Lottie from "lottie-react";
import notFound from "@/animation/notfound.json";

const NotFoundAnimation = () => {
    return (
        <div>
              <Lottie animationData={notFound} loop />
        </div>
    );
};

export default NotFoundAnimation;