import React, { useState } from "react";
import {
  IconButton,
  Box,
  Grid,
  TextField,
  Container,
  Typography,
  Button,
} from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import VideoCallIcon from "@mui/icons-material/VideoCall";

const Videos = ({ parentName }) => {
  const [addMoreVideos, setAddMoreVideos] = useState([" "]);
  return (
    <>
      <Container>
        <Grid>
          <Typography variant="h5" gutterBottom>
            VIDEOS
          </Typography>
          <Typography>
            This section is to add videos about your {parentName}
          </Typography>
        </Grid>

        {addMoreVideos.map((data, index) => (
          <Grid mt={4} mb={4} key={index}>
            <Grid container spacing={4}>
              <Grid item xs={4}>
                <Grid>
                  <Typography>Video Link</Typography>
                  <TextField
                    fullWidth
                    // label="Description"
                    placeholder="Type here"
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  alignItems={"center"}
                  container
                  justifyContent={"center"}
                  mt={4}
                >
                  <Typography variant="h5">OR</Typography>
                </Grid>
              </Grid>

              <Grid item xs={8}>
                <Typography>Add Description to the video</Typography>
                <TextField
                  fullWidth
                  // label="Description"
                  placeholder="Describe here"
                  variant="outlined"
                  multiline
                  minRows={4}
                  maxRows={4}
                />
              </Grid>
            </Grid>

            <Grid container spacing={4}>
              <Grid item xs={4}>
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
                      // onChange={handleImageChange}
                      style={{ display: "none" }}
                      id="image-input"
                    />

                    <IconButton component="span">
                      <VideoCallIcon fontSize="large" color="primary" />
                    </IconButton>
                    {/* You can display the selected image here if needed */}
                  </Box>
                </label>
              </Grid>

              <Grid container spacing={4} item xs={8} mt={4}>
                <Grid xs={6} item>
                  <Typography>Enter Keywords/ meta tags</Typography>
                  <TextField
                    fullWidth
                    // label="Description"
                    placeholder="Type here"
                    variant="outlined"
                    multiline
                    minRows={2}
                    maxRows={2}
                  />
                </Grid>
                <Grid item>
                  <Typography>Upload thumbnail for video</Typography>
                  <label htmlFor="image-input">
                    <Box
                      border={1}
                      borderColor="grey.500"
                      borderRadius="4px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      paddingRight={"10px"}
                    >
                      <input
                        type="file"
                        accept="file/*"
                        //   onChange={handleImageChange}
                        style={{ display: "none" }}
                        id="image-input"
                      />
                      <IconButton component="span">
                        <FileUploadIcon fontSize="small" color="primary" />
                      </IconButton>
                      Click here to Upload
                      {/* You can display the selected image here if needed */}
                    </Box>
                  </label>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}

        <Button
          m={2}
          variant="contained"
          color="primary"
          onClick={() => setAddMoreVideos([...addMoreVideos, ""])}
        >
          + Add More Videos
        </Button>
      </Container>
    </>
  );
};

export default Videos;
