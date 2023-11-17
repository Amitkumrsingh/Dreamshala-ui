import React from "react";
import DashboardLayout from "../../layouts/Dashboard";

const DeleteCollege = () => {
  return <div>DeleteCollege</div>;
};

DeleteCollege.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default DeleteCollege;
