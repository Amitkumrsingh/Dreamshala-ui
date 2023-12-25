import React, { useEffect } from "react";
import DashboardLayout from "../../layouts/Dashboard";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const DeleteCoaching = () => {
  const router = useRouter();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/auth/sign-in");
    }
  }, [router, isLoggedIn]);
  console.log("delete coaching");

  return <div>DeleteCoaching</div>;
};

DeleteCoaching.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default DeleteCoaching;
