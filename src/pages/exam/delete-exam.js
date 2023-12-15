import React, { useEffect } from "react";
import DashboardLayout from "../../layouts/Dashboard";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const DeleteExam = () => {
  const router = useRouter();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/auth/sign-in");
    }
  }, [router, isLoggedIn]);

  return <div>DeleteExam</div>;
};

DeleteExam.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default DeleteExam;
