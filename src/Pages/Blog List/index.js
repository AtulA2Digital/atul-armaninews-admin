/** @format */

import React from "react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import AdminLayout from "../../Layout";
import BlogImage from "../../Images/login-banner.webp";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import VisibilityIcon from "@mui/icons-material/Visibility";

const BlogList = () => {
  const blogList = [
    {
      title:
        "Williamson to guide as a captain for New Zealand team at ICC T20 World Cup 2024",
      date: "April 29, 2024",
      desc: "Captain Williamson to lead the team in the upcoming sixth Twenty20 World Cup in June",
    },
    {
      title:
        "In the IPL 2024 match between DC and GT, Shubman Gill smashes Virat Kohli’s record and achieves a unique milestone",
      date: "April 29, 2024",
      desc: "Captain Williamson to lead the team in the upcoming sixth Twenty20 World Cup in June",
    },
    {
      title: "Asian U-20 Javelin Champion grabbed by Deepanshu",
      date: "April 29, 2024",
      desc: "Captain Williamson to lead the team in the upcoming sixth Twenty20 World Cup in June",
    },
    {
      title:
        "Leeds’ Promotion Push Back On Track After Seven-Goal Thriller At Middlesbrough",
      date: "April 29, 2024",
      desc: "Captain Williamson to lead the team in the upcoming sixth Twenty20 World Cup in June",
    },
    {
      title:
        "In the IPL 2024 match between DC and GT, Shubman Gill smashes Virat Kohli’s record and achieves a unique milestone",
      date: "April 29, 2024",
      desc: "Captain Williamson to lead the team in the upcoming sixth Twenty20 World Cup in June",
    },
    {
      title: "Asian U-20 Javelin Champion grabbed by Deepanshu",
      date: "April 29, 2024",
      desc: "Captain Williamson to lead the team in the upcoming sixth Twenty20 World Cup in June",
    },
  ];
  return (
    <AdminLayout>
      <Box className="my-5 px-md-4">
        <Typography
          variant="h2"
          gutterBottom
          className="text-black bg-boxShadow px-md-5 px-3 py-3 mb-4"
        >
          Blog List
        </Typography>
        <Box className="bg-boxShadow px-md-5 px-3 py-5 overflow-lg-hidden overflow-md-scroll">
          <Box className="blog-list-wrapper">
            <Grid container gap={1} className="blog-list-head mb-4">
              <Grid item xs={1.5}>
                <Typography variant="h3" className="">
                  Post Image
                </Typography>
              </Grid>
              <Grid item xs={5.5}>
                <Typography variant="h3" className="">
                  Post Name
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h3" className="">
                  Publish Date
                </Typography>
              </Grid>
              <Grid item xs={1.5}>
                <Typography variant="h3" className="">
                  Category
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography variant="h3" className="">
                  Actions
                </Typography>
              </Grid>
            </Grid>
            {/* <Grid container gap={2} className="blog-list-body pt-5 ">
              <Grid item xs={12}>
                <Typography variant="h5" className="">
                  No Data Found
                </Typography>
              </Grid>
            </Grid> */}
            {blogList.map((blog, ind) => {
              return (
                <Grid container gap={1} className="blog-list-head mb-4">
                  <Grid item xs={1.5}>
                    <Box className="d-flex align-items-center h-100">
                      <img
                        src={BlogImage}
                        alt="blog image"
                        className="blog-image"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={5.5}>
                    <Typography variant="h5" className="font-600">
                      {blog.title}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="h6" className="">
                      {blog.date}
                    </Typography>
                  </Grid>
                  <Grid item xs={1.5}>
                    <Typography variant="h6" className="">
                      Sports
                    </Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Box className="actions-wrapper d-flex justify-content-between align-items-center">
                      <IconButton>
                        <VisibilityIcon
                          style={{ color: "#000" }}
                          fontSize="medium"
                        />
                      </IconButton>
                      <IconButton>
                        <DeleteForeverIcon
                          style={{ color: "red" }}
                          fontSize="medium"
                        />
                      </IconButton>
                    </Box>
                  </Grid>
                </Grid>
              );
            })}
          </Box>
        </Box>
      </Box>
    </AdminLayout>
  );
};

export default BlogList;
