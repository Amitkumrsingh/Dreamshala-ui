import React, { useState } from "react";
import {
  IconButton,
  Box,
  Grid,
  TextField,
  Container,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import StarRating from "../../../components/College/StarRating";
import FileUploadIcon from "@mui/icons-material/FileUpload";

const Reviews = () => {
  const [addMoreReviews, setAddMoreReviews] = useState([""]);
  return (
    <>
      <Container>
        <Grid container>
          <Typography variant="h5" gutterBottom>
            REVIEWS
          </Typography>
        </Grid>

        {addMoreReviews.map((data, index) => (
          <div key={index}>
            <Grid container spacing={2} mb={2}>
              <Grid item xs={4}>
                <Typography>Name</Typography>
                <TextField
                  fullWidth
                  // label="Description"
                  placeholder="Type here"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <Typography>Year of Your Study</Typography>
                <FormControl fullWidth>
                  {/* <InputLabel>Select/ Type Here</InputLabel> */}
                  <Select defaultValue={""}>
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
                <FormControl fullWidth>
                  {/* <InputLabel>Select/ Type Here</InputLabel> */}
                  <Select defaultValue={""}>
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

            <Grid container>
              <Typography gutterBottom>
                <b>Rate the coaching class on the following factors</b>
              </Typography>
            </Grid>

            <Grid container spacing={2} mb={2}>
              <Grid item xs={4}>
                <StarRating title={"Overall Rating"} />
                <StarRating title={"Infrastructure"} />
              </Grid>
              <Grid item xs={4}>
                <StarRating title={"Competitive Environment"} />
                <StarRating title={"Study Material"} />
              </Grid>
              <Grid item xs={4}>
                <StarRating title={"Faculty"} />
                <StarRating title={"Peer Learning"} />
              </Grid>
            </Grid>

            <Grid container spacing={2} mb={2}>
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
          </div>
        ))}

        <Button
          m={2}
          variant="contained"
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
