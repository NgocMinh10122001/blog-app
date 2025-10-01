"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const { status } = useSession();

  const router = useRouter();

   useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="">Loading...</div>;
  }

  return (
    <div className="flex mt-[60px] items-center justify-center">
      <div className="{styles.wrapper} p-[30px] sm:px-[100px] sm:py-[50px] bg-[var(--softBg)] md:px-[200px] md:py-[150px] flex flex-col gap-[50px] rounded-[10px]">
        <div className="max-sm:font-light max-sm:text-[14px] {styles.socialButton} p-5 rounded-[5px] border-none font-bold cursor-pointer flex items-center justify-center text-white bg-[#ff5555]" onClick={() => signIn("google")}>
          Sign in with Google
        </div>
        <div className="{max-sm:font-light max-sm:text-[14px] styles.socialButton} p-5 rounded-[5px] border-none font-bold cursor-pointer flex items-center justify-center text-white bg-[#111]" onClick={() => signIn("github")}>Sign in with Github</div>
      </div>
    </div>
  );
};

export default LoginPage;