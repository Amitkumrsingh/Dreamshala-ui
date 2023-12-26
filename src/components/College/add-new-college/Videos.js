import React, { useState, useEffect } from "react";
import {
  IconButton,
  Box,
  Grid,
  TextField,
  Container,
  Typography,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { checkUrl } from "../../../services/componentsFunctions";

const Videos = ({ parentName, setVideos }) => {
  const theme = useTheme();
  const secondaryColor = theme.palette.text.secondary;

  const [addMoreVideos, setAddMoreVideos] = useState([" "]);
  const [formData, setFormData] = useState({
    video_link: "",
    // video_file: null,
    video_description: "",
    video_keywords_meta_tags: "",
    video_thumbnail: null,
  });

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleFileChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.files[0] });
  };

  useEffect(() => {
    setVideos(formData);
  }, [setVideos, formData]);
  return (
    <>
      <Container>
        <Grid mb={4}>
          <Typography
            variant="h5"
            gutterBottom
            borderLeft={"4px solid " + theme.palette.primary.main}
            padding={1}
            mb={6}
          >
            <em>
              <strong>VIDEOS </strong>
            </em>
          </Typography>
          <Typography>
            This section is to add videos about your {parentName}
          </Typography>
        </Grid>

        {addMoreVideos.map((data, index) => (
          <Grid mb={6} key={index}>
            <Grid container spacing={6}>
              <Grid item xs={4}>
                <Grid>
                  <Typography>Video Link</Typography>
                  <TextField
                    fullWidth
                    // label="Description"
                    placeholder="Type here"
                    variant="outlined"
                    size="small"
                    value={formData.video_link}
                    onChange={handleInputChange("video_link")}
                    // disabled={formData.video_file !== null}
                    error={
                      formData.video_link === ""
                        ? false
                        : !checkUrl(formData.video_link)
                    }
                  />
                </Grid>
                <Grid
                  alignItems={"center"}
                  container
                  justifyContent={"center"}
                  mt={5}
                >
                  <Typography variant="h5">
                    <em>OR</em>
                  </Typography>
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
                  minRows={3}
                  maxRows={3}
                  value={formData.video_description}
                  onChange={handleInputChange("video_description")}
                />
              </Grid>
            </Grid>

            <Grid container spacing={6}>
              <Grid item xs={4}>
                <Typography>Insert Video</Typography>
                <Grid>
                  <label
                    htmlFor="video-input"
                    disabled={formData.video_link !== ""}
                  >
                    <Box
                      border={"2px dashed"}
                      borderColor={secondaryColor}
                      borderRadius="4px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      padding="20px"
                      height={130}
                    >
                      <input
                        type="file"
                        accept="video/*"
                        // onChange={handleImageChange}
                        style={{ display: "none" }}
                        id="video-input"
                        onChange={handleFileChange("video_file")}
                        // disabled={formData.video_link !== ""}
                        disabled
                      />

                      {formData.video_file ? (
                        formData.video_file.name
                      ) : (
                        <IconButton component="span">
                          <VideoCallIcon
                            fontSize="large"
                            color={secondaryColor}
                          />
                        </IconButton>
                      )}
                      {/* You can display the selected image here if needed */}
                    </Box>
                  </label>
                </Grid>
              </Grid>

              <Grid item xs={8} container alignItems={"end"}>
                <Grid container spacing={6}>
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
                      value={formData.video_keywords_meta_tags}
                      onChange={handleInputChange("video_keywords_meta_tags")}
                    />
                  </Grid>
                  <Grid item>
                    <Typography>Upload thumbnail for video</Typography>
                    <label htmlFor="thumbnail-input">
                      <Box
                        border={1}
                        borderColor={secondaryColor}
                        borderRadius="4px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        paddingRight={"10px"}
                      >
                        <input
                          type="file"
                          accept="image/*"
                          //   onChange={handleImageChange}
                          style={{ display: "none" }}
                          id="thumbnail-input"
                          onChange={handleFileChange("video_thumbnail")}
                        />
                        {formData.video_thumbnail ? (
                          <Button disabled style={{ color: secondaryColor }}>
                            {formData.video_thumbnail.name}
                          </Button>
                        ) : (
                          <>
                            <IconButton component="span">
                              <FileUploadIcon
                                fontSize="small"
                                color={secondaryColor}
                              />
                            </IconButton>
                            Click here to Upload
                          </>
                        )}
                        {/* You can display the selected image here if needed */}
                      </Box>
                    </label>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}

        <Grid>
          <Button
            m={2}
            variant="outlined"
            color="primary"
            onClick={() => setAddMoreVideos([...addMoreVideos, ""])}
          >
            + Add More Videos
          </Button>
        </Grid>
      </Container>
    </>
  );
};

export default Videos;
