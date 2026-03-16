"use client";

import dynamic from "next/dynamic";

const GSAPCursor = dynamic(() => import("./GSAPCursor"), { ssr: false });

export default function GSAPCursorWrapper() {
  return <GSAPCursor />;
}
