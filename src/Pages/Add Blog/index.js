/** @format */

import React, { useState, useRef } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import AdminLayout from "../../Layout";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import UploadIcon from "@mui/icons-material/Upload";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const { register, handleSubmit } = useForm();
  const [description, setDescription] = useState("");
  const [fileName, setFileName] = useState("No file chosen");
  const [bodyFileName, setBodyFileName] = useState("No file chosen");
  const Navigate = useNavigate();

  const fileInputRef = useRef(null);
  const bodyFileInputRef = useRef(null);

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const handleBodyFileInputClick = () => {
    bodyFileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("No file chosen");
    }
  };

  const handleBodyFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setBodyFileName(file.name);
    } else {
      setBodyFileName("No file chosen");
    }
  };

  return (
    <AdminLayout>
      <Box className="my-5 px-md-4">
        <Typography
          variant="h2"
          gutterBottom
          className="text-black bg-boxShadow px-md-5 px-3 py-3 mb-4"
        >
          Add New Post
        </Typography>
        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          className="bg-boxShadow py-5 px-md-5 px-3"
        >
          <Grid container spacing={3} className="">
            <Grid item sm={6} xs={12}>
              <Typography variant="h3" className="mb-3 text-black">
                Blog Title:
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Blog Title"
                {...register("title")}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <Typography variant="h3" className="mb-3 text-black">
                Blog Image:
              </Typography>
              <Box display="flex" alignItems="center">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                <IconButton
                  onClick={handleFileInputClick}
                  color="primary"
                  style={{ border: "1px solid #617b22" }}
                >
                  <UploadIcon style={{ color: "#617b22" }} />
                </IconButton>
                <Typography
                  variant="body1"
                  sx={{ marginLeft: 2 }}
                  className="text-black"
                >
                  {fileName}
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Typography variant="h3" className="mb-3 text-black">
                Body Content:
              </Typography>
              <ReactQuill
                theme="snow"
                value={description}
                onChange={setDescription}
                className="blog-editor"
                style={{ color: "#000" }}
                placeholder="Body Content..."
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <Typography
                variant="h3"
                className="mb-3 text-black"
                gutterBottom
                var
              >
                Body Image:
              </Typography>
              <Box display="flex" alignItems="center">
                <input
                  type="file"
                  ref={bodyFileInputRef}
                  onChange={handleBodyFileChange}
                  style={{ display: "none" }}
                />
                <IconButton
                  onClick={handleBodyFileInputClick}
                  color="primary"
                  style={{ border: "1px solid #617b22" }}
                >
                  <UploadIcon style={{ color: "#617b22" }} />
                </IconButton>
                <Typography
                  variant="body1"
                  sx={{ marginLeft: 2 }}
                  className="text-black"
                >
                  {bodyFileName}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                // fullWidth
                type="submit"
                sx={{
                  border: "0",
                  color: "#fff",
                  backgroundColor: "#617b22", // Background color on hover
                  fontWeight: 600,
                  "&:hover": {
                    transition: "all .3s",
                    border: "0",
                    backgroundColor: "#000",
                    color: "#B6FF00",
                  },
                }}
                className="py-2"
                onClick={() => {
                  Navigate("/blog-list");
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </AdminLayout>
  );
};

export default AddBlog;
