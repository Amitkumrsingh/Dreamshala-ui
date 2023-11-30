import React, { useState } from "react";
import {
  IconButton,
  Box,
  Grid,
  TextField,
  Container,
  Typography,
  FormControl,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import StarRating from "../../other/StarRating";

const Reviews = () => {
  const theme = useTheme();
  const placeholderColor = theme.palette.text.secondary;

  const [addMoreReviews, setAddMoreReviews] = useState([""]);
  const [yearOfStudy, setYearOfStudy] = useState("");
  const [courseTaken, setCourseTaken] = useState("");
  return (
    <>
      <Container>
        <Grid container mb={4}>
          <Typography variant="h5" gutterBottom>
            REVIEWS
          </Typography>
        </Grid>

        {addMoreReviews.map((data, index) => (
          <Grid key={index} mb={4}>
            <Grid container spacing={2} mb={4}>
              <Grid item xs={4}>
                <Typography>Name</Typography>
                <TextField
                  fullWidth
                  // label="Description"
                  placeholder="Type here"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={4}>
                <Typography>Year of Your Study</Typography>
                <FormControl fullWidth size="small">
                  {/* <InputLabel>Select/ Type Here</InputLabel> */}
                  <Select
                    onChange={(e) => setYearOfStudy(e.target.value)}
                    value={yearOfStudy}
                    displayEmpty
                    style={{
                      color: yearOfStudy === "" && placeholderColor,
                    }}
                  >
                    <MenuItem value={""} disabled>
                      Select/ Type Here
                    </MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="6">6</MenuItem>
                    {/* Add more exam options as needed */}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <Typography>Course Taken</Typography>
                <FormControl fullWidth size="small">
                  {/* <InputLabel>Select/ Type Here</InputLabel> */}
                  <Select
                    onChange={(e) => setCourseTaken(e.target.value)}
                    value={courseTaken}
                    displayEmpty
                    style={{
                      color: courseTaken === "" && placeholderColor,
                    }}
                  >
                    <MenuItem value={""} disabled>
                      Select/ Type Here
                    </MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="6">6</MenuItem>
                    {/* Add more exam options as needed */}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Grid container mb={2}>
              <Typography>
                <b>Rate the College on the following factors</b>
              </Typography>
            </Grid>

            <Grid container spacing={2} mb={2}>
              <Grid item xs={4}>
                <StarRating title={"Overall Rating"} />
                <StarRating title={"Infrastructure"} />
                <StarRating title={"Social Life"} />
              </Grid>
              <Grid item xs={4}>
                <StarRating title={"Academics"} />
                <StarRating title={"Accommodation"} />
              </Grid>
              <Grid item xs={4}>
                <StarRating title={"Faculty"} />
                <StarRating title={"Placement"} />
              </Grid>
            </Grid>

            <Grid container spacing={2} mt={2}>
              <Grid item xs={8}>
                <Typography variant="h6">Detailed Description</Typography>
                <TextField
                  fullWidth
                  placeholder="Describe here"
                  variant="outlined"
                  multiline
                  minRows={4}
                  maxRows={4}
                />
              </Grid>
              <Grid item xs={4}>
                <Grid mb={4}>
                  <Typography variant="h6">Links (if any)</Typography>
                  <TextField
                    fullWidth
                    placeholder="Describe here"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid>
                  <Typography variant="h6">Upload Photo/ Video</Typography>
                  <label htmlFor="image-input">
                    <Box
                      border={1}
                      borderColor="grey.500"
                      borderRadius="4px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      width={"fit-containt"}
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
          variant="outlined"
          color="primary"
          onClick={() => setAddMoreReviews([...addMoreReviews, ""])}
        >
          + Add More Reviews
        </Button>
      </Container>
    </>
  );
};

export default Reviews;
