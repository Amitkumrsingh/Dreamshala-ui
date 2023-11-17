import React from "react";
import DashboardLayout from "../../layouts/Dashboard";

const UpdateExam = () => {
  return <div>UpdateExam</div>;
};

UpdateExam.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default UpdateExam;
