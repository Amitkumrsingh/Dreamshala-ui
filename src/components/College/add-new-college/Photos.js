import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const MyForm = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [addMorePhotos, setAddMorePhotos] = useState([""]);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleButtonToggle = () => {
    console.log("hello");
  };

  return (
    <>
      <Typography variant="h5" mb={4}>
        PHOTOS
      </Typography>
      <Typography mb={2}>Photos to give a glimpse of your class</Typography>
      {addMorePhotos.map((d, index) => (
        <Grid key={index} container spacing={2} mb={2}>
          <Grid item xs={4}>
            {/* 1st Column - Image Input */}
            <label htmlFor="image-input">
              <Box
                border={1}
                borderColor="grey.500"
                borderRadius="4px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                padding="20px"
                height={"100%"}
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                  id="image-input"
                />

                <IconButton component="span">
                  <AddPhotoAlternateIcon fontSize="large" color="primary" />
                </IconButton>
                {/* You can display the selected image here if needed */}
              </Box>
            </label>
          </Grid>
          <Grid item xs={8}>
            <Grid container>
              <Grid xs={6} item>
                {/* 2nd Column - Text Input for Description */}

                <Typography variant="h6">
                  Add Description to the photo
                </Typography>
                <TextField
                  fullWidth
                  //   label="Describe here"
                  placeholder="Describe here"
                  variant="outlined"
                  value={description}
                  onChange={handleDescriptionChange}
                  multiline
                  minRows={5}
                  maxRows={5}
                />
              </Grid>
              <Grid xs={6} item>
                {/* 3rd Column - Checkboxes as Buttons */}

                <Typography variant="h6">Photo Category</Typography>

                <Grid container>
                  <Grid item xs={12}>
                    <Button
                      xs={4}
                      variant={false ? "contained" : "outlined"}
                      color="primary"
                      style={{ margin: "5px" }}
                      onClick={() => handleButtonToggle(index)}
                    >
                      Classrom
                    </Button>
                    <Button
                      xs={4}
                      variant={false ? "contained" : "outlined"}
                      color="primary"
                      style={{ margin: "5px" }}
                      onClick={() => handleButtonToggle(index)}
                    >
                      Infrastructure
                    </Button>
                    <Button
                      xs={4}
                      variant={false ? "contained" : "outlined"}
                      color="primary"
                      style={{ margin: "5px" }}
                      onClick={() => handleButtonToggle(index)}
                    >
                      Study Material
                    </Button>
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      variant={false ? "contained" : "outlined"}
                      color="primary"
                      style={{ margin: "5px" }}
                      onClick={() => handleButtonToggle(index)}
                    >
                      People
                    </Button>
                    <Button
                      variant={false ? "contained" : "outlined"}
                      color="primary"
                      style={{ margin: "5px" }}
                      onClick={() => handleButtonToggle(index)}
                    >
                      Events
                    </Button>
                    <Button
                      variant={false ? "contained" : "outlined"}
                      color="primary"
                      style={{ margin: "5px" }}
                      onClick={() => handleButtonToggle(index)}
                    >
                      Environment
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      xs={4}
                      variant={false ? "contained" : "outlined"}
                      color="primary"
                      style={{ margin: "5px" }}
                      onClick={() => handleButtonToggle(index)}
                    >
                      Peer Learning
                    </Button>
                    <Button
                      xs={4}
                      variant={false ? "contained" : "outlined"}
                      color="primary"
                      style={{ margin: "5px" }}
                      onClick={() => handleButtonToggle(index)}
                    >
                      Other
                    </Button>
                    <TextField
                      variant="outlined"
                      placeholder="Type Your Own"
                      size="small"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid>
              <Typography variant="h6">Enter keywords/ meta tags</Typography>
              <TextField
                fullWidth
                // label="Description"
                placeholder="Type here"
                variant="outlined"
                value={description}
                onChange={handleDescriptionChange}
              />
            </Grid>
          </Grid>
        </Grid>
      ))}

      <Button
        m={2}
        variant="contained"
        color="primary"
        onClick={() => setAddMorePhotos([...addMorePhotos, ""])}
      >
        + Add More Photos
      </Button>
    </>
  );
};

export default MyForm;
