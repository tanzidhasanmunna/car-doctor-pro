"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function SocialSignin() {
  const router = useRouter();
  const session = useSession();
  const searchParams = useSearchParams();
  const pathname = searchParams.get("redirect");

  const handleSocialSignin = (provider) => {
    const resp = signIn(provider, { redirect: true, callbackUrl: pathname });
    if (session.status === "authenticated") {
      router.push("/");
    }
  };

  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/");
    }
  }, [session]);

  return (
    <div className="flex justify-center space-x-4">
      <button
        onClick={() => handleSocialSignin("facebook")}
        className="text-blue-600"
        href="#"
      >
        <i className="fab fa-facebook-f"></i>
      </button>
      <a className="text-blue-500" href="#">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <button
        onClick={() => handleSocialSignin("google")}
        className="text-primary"
        href="#"
      >
        <i className="fab fa-google"></i>
      </button>
    </div>
  );
}
