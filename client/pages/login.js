import React, { useEffect } from "react";
import Login from "@/components/login/login";
import { useSelector } from "react-redux";
import { selectUserState } from "@/store/user/userSlice";
import { useRouter } from "next/router";

const LoginPage = () => {
  const user = useSelector(selectUserState);
  const router = useRouter();

  useEffect(() => {
    if (user.id) router.push("/chat");
  }, [user.id]);

  return <Login />;
};

export default LoginPage;
