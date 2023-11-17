import React from "react";
import DashboardLayout from "../../layouts/Dashboard";

const UpdateCoaching = () => {
  return <div>UpdateCoaching</div>;
};

UpdateCoaching.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default UpdateCoaching;
