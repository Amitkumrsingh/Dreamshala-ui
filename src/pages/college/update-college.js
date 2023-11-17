import React from "react";
import DashboardLayout from "../../layouts/Dashboard";

const UpdateCollege = () => {
  return <div>UpdateCollege</div>;
};

UpdateCollege.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default UpdateCollege;
