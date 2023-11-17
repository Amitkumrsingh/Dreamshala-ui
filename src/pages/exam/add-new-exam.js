import React from "react";
import DashboardLayout from "../../layouts/Dashboard";

function AddNewExam() {
  return <div>AddNewExam</div>;
}

AddNewExam.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default AddNewExam;
