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
import FileUploadIcon from "@mui/icons-material/FileUpload";
import StarRating from "../../other/StarRating";
import { useTheme } from "@mui/material/styles";

const Reviews = () => {
  const theme = useTheme();
  const placeholderColor = theme.palette.text.secondary;

  const [addMoreReviews, setAddMoreReviews] = useState([""]);
  const [yearOfStudy, setYearOfStudy] = useState("");
  const [courseTaken, setCourseTaken] = useState("");
  return (
    <>
      <Container>
        <Grid>
          <Typography
            variant="h5"
            gutterBottom
            borderLeft={"4px solid " + theme.palette.primary.main}
            padding={1}
          >
            <em>
              <strong>REVIEWS </strong>
            </em>
          </Typography>
        </Grid>

        {addMoreReviews.map((data, index) => (
          <Grid key={index}>
            <Grid container spacing={6} mt={2}>
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

            <Grid mt={6} mb={4}>
              <Typography>
                <b>Rate the coaching class on the following factors</b>
              </Typography>
            </Grid>

            <Grid container spacing={6}>
              <Grid item xs={4} container flexDirection={"column"} spacing={6}>
                <Grid item>
                  <StarRating title={"Overall Rating"} />
                </Grid>
                <Grid item>
                  <StarRating title={"Infrastructure"} />
                </Grid>
              </Grid>
              <Grid item xs={4} container flexDirection={"column"} spacing={6}>
                <Grid item>
                  <StarRating title={"Competitive Environment"} />
                </Grid>
                <Grid item>
                  <StarRating title={"Study Material"} />
                </Grid>
              </Grid>
              <Grid item xs={4} container flexDirection={"column"} spacing={6}>
                <Grid item>
                  <StarRating title={"Faculty"} />
                </Grid>
                <Grid item>
                  <StarRating title={"Peer Learning"} />
                </Grid>
              </Grid>
            </Grid>

            <Grid container spacing={6} mt={2}>
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
                      borderColor={placeholderColor}
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
                        <FileUploadIcon
                          fontSize="small"
                          color={placeholderColor}
                        />
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

        <Grid mt={6}>
          <Button
            m={2}
            variant="outlined"
            color="primary"
            onClick={() => setAddMoreReviews([...addMoreReviews, ""])}
          >
            + Add More Reviews
          </Button>
        </Grid>
      </Container>
    </>
  );
};

export default Reviews;
