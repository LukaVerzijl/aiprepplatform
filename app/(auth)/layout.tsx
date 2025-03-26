import { ReactNode } from "react";
import { isLoggedIn } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const isSigedIn = await isLoggedIn();
  if (isSigedIn) {
    redirect("/");
  }
  return <div className={"auth-layout"}>{children}</div>;
};
export default AuthLayout;
