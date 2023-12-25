import React, { useEffect } from "react";
import DashboardLayout from "../../layouts/Dashboard";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const UpdateCoaching = () => {
  const router = useRouter();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/auth/sign-in");
    }
  }, [router, isLoggedIn]);
  console.log("update coaching");

  return <div>UpdateCoaching</div>;
};

UpdateCoaching.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default UpdateCoaching;
