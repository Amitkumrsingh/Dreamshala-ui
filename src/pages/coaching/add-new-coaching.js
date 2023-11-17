import React from "react";
import DashboardLayout from "../../layouts/Dashboard";

function AddNewCoaching() {
  return <div>AddNewCoaching</div>;
}

AddNewCoaching.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default AddNewCoaching;
