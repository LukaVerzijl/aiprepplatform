import React from "react";
import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
  const user = await getCurrentUser();
  return (
    <>
      <h3>Interview Maker</h3>

      <Agent
        userName={user?.name ?? "No user"}
        userId={user?.id}
        type={"generate"}
      />
    </>
  );
};
export default Page;
