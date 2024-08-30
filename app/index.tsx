import React from "react";
import { Redirect } from "expo-router";
import useSession from "@/hooks/useSession";

export default function index() {
  const session = useSession();

  console.log(session);

  if (session) {
    return <Redirect href={"/(tabs)/home"}/>;
  }

  return <Redirect href={"/(onboarding)/welcome"} />;
}
