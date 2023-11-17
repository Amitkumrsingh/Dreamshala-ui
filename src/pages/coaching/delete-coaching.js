import React from "react";
import DashboardLayout from "../../layouts/Dashboard";

const DeleteCoaching = () => {
  return <div>DeleteCoaching</div>;
};

DeleteCoaching.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default DeleteCoaching;
