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
  const [overall_rating, setOverall_rating] = useState(0);
  const [academics_rating, setAcademics_rating] = useState(0);
  const [faculty_rating, setFaculty_rating] = useState(0);
  const [infrastructure_rating, setInfrastructure_rating] = useState(0);
  const [accommodation_rating, setAccommodation_rating] = useState(0);
  const [placement_rating, setPlacement_rating] = useState(0);
  const [social_life_rating, setSocial_life_rating] = useState(0);

  const [addMoreReviews, setAddMoreReviews] = useState([""]);
  const [yearOfStudy, setYearOfStudy] = useState("");
  const [courseTaken, setCourseTaken] = useState("");
  return (
    <>
      <Container>
        <Grid container mb={6}>
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
          <Grid key={index} mb={6}>
            <Grid container spacing={6}>
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

            <Grid container mb={2} mt={6}>
              <Typography>
                <b>Rate the College on the following factors</b>
              </Typography>
            </Grid>

            <Grid container spacing={6}>
              <Grid item xs={4}>
                <StarRating
                  title={"Overall Rating"}
                  setRating={setOverall_rating}
                />
                <StarRating
                  title={"Infrastructure"}
                  setRating={setInfrastructure_rating}
                />
                <StarRating
                  title={"Social Life"}
                  setRating={setSocial_life_rating}
                />
              </Grid>
              <Grid item xs={4}>
                <StarRating
                  title={"Academics"}
                  setRating={setAcademics_rating}
                />
                <StarRating
                  title={"Accommodation"}
                  setRating={setAccommodation_rating}
                />
              </Grid>
              <Grid item xs={4}>
                <StarRating title={"Faculty"} setRating={setFaculty_rating} />
                <StarRating
                  title={"Placement"}
                  setRating={setPlacement_rating}
                />
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

        <Grid>
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
