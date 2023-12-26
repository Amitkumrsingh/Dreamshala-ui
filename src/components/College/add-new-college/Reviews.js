import React, { useState, useEffect } from "react";
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
import {
  generateYearsArray,
  checkUrl,
} from "../../../services/componentsFunctions";

const Reviews = ({ setReviews }) => {
  const theme = useTheme();
  const placeholderColor = theme.palette.text.secondary;
  const [overall_rating, setOverall_rating] = useState(null);
  const [academics_rating, setAcademics_rating] = useState(null);
  const [faculty_rating, setFaculty_rating] = useState(null);
  const [infrastructure_rating, setInfrastructure_rating] = useState(null);
  const [accommodation_rating, setAccommodation_rating] = useState(null);
  const [placement_rating, setPlacement_rating] = useState(null);
  const [social_life_rating, setSocial_life_rating] = useState(null);
  const [addMoreReviews, setAddMoreReviews] = useState([""]);
  const [formData, setFormData] = useState({
    name: "",
    year_of_study: "",
    course_taken: "",
    overall_rating: overall_rating,
    academics_rating: academics_rating,
    faculty_rating: faculty_rating,
    infrastructure_rating: infrastructure_rating,
    accommodation_rating: accommodation_rating,
    placement_rating: placement_rating,
    social_life_rating: social_life_rating,
    detailed_description: "",
    links: "",
    photo_video: null,
  });

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleFileChange = (event) => {
    setFormData({ ...formData, photo_video: event.target.files[0] });
  };

  useEffect(() => {
    setFormData({
      ...formData,
      overall_rating: overall_rating,
      academics_rating: academics_rating,
      faculty_rating: faculty_rating,
      infrastructure_rating: infrastructure_rating,
      accommodation_rating: accommodation_rating,
      placement_rating: placement_rating,
      social_life_rating: social_life_rating,
    });

    setReviews(formData);
  }, [
    formData,
    overall_rating,
    academics_rating,
    faculty_rating,
    infrastructure_rating,
    accommodation_rating,
    placement_rating,
    social_life_rating,
    setReviews,
  ]);

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
                  value={formData.name}
                  onChange={handleInputChange("name")}
                />
              </Grid>
              <Grid item xs={4}>
                <Typography>Year of Your Study</Typography>
                <FormControl fullWidth size="small">
                  {/* <InputLabel>Select/ Type Here</InputLabel> */}
                  <Select
                    value={formData.year_of_study}
                    onChange={handleInputChange("year_of_study")}
                    displayEmpty
                    style={{
                      color: formData.year_of_study === "" && placeholderColor,
                    }}
                  >
                    <MenuItem value={""} disabled>
                      Select/ Type Here
                    </MenuItem>
                    {generateYearsArray(1980, 2023).map((year) => (
                      <MenuItem key={year} value={year}>
                        {year}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <Typography>Course Taken</Typography>
                <TextField
                  fullWidth
                  // label="Description"
                  placeholder="Type here"
                  variant="outlined"
                  size="small"
                  value={formData.course_taken}
                  onChange={handleInputChange("course_taken")}
                />
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
                  value={formData.detailed_description}
                  onChange={handleInputChange("detailed_description")}
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
                    value={formData.links}
                    onChange={handleInputChange("links")}
                    error={
                      formData.links === "" ? false : !checkUrl(formData.links)
                    }
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
                        onChange={handleFileChange}
                      />
                      {formData.photo_video ? (
                        <Button disabled size="small">
                          {formData.photo_video.name}
                        </Button>
                      ) : (
                        <>
                          <IconButton component="span">
                            <FileUploadIcon
                              fontSize="small"
                              color={placeholderColor}
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
