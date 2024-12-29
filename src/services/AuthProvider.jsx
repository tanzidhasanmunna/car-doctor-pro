"use client";

import { SessionProvider } from "next-auth/react";
import { Suspense } from "react";

export default function AuthProvider({ children }) {
  return (
    <SessionProvider>
      <Suspense fallback={null}>{children}</Suspense>
    </SessionProvider>
  );
}
