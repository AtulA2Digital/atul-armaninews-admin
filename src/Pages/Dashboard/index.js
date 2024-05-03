/** @format */

import React from "react";
import { Box, Typography } from "@mui/material";
import AdminLayout from "../../Layout";

const Dashboard = () => {
  return (
    <AdminLayout>
      <Box className="my-5 px-md-4">
        <Typography
          variant="h2"
          gutterBottom
          className="text-black bg-boxShadow px-md-5 px-3 py-3 mb-4"
        >
          Dashboard
        </Typography>
      </Box>
    </AdminLayout>
  );
};

export default Dashboard;
