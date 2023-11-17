import React from "react";
import DashboardLayout from "../../layouts/Dashboard";

const DeleteExam = () => {
  return <div>DeleteExam</div>;
};

DeleteExam.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default DeleteExam;
