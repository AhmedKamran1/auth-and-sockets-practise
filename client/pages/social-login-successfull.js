import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "@/store/user/userSlice";

const SocialLoginSuccess = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const { token, id, name, email, joinedRoom } = router.query;

    console.log(router.query);

    if (token) {
      localStorage.setItem("token", token);
      dispatch(
        userActions.login({
          id,
          name,
          email,
          joinedRoom,
        })
      );

      router.push("/chat", null, { shallow: true });
    }
  }, [router.query]);

  return <h1>Social Login Successfull.</h1>;
};

export default SocialLoginSuccess;
