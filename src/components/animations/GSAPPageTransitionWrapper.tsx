"use client";

import dynamic from "next/dynamic";

const GSAPPageTransition = dynamic(() => import("./GSAPPageTransition"), { ssr: false });

export default function GSAPPageTransitionWrapper() {
  return <GSAPPageTransition />;
}
