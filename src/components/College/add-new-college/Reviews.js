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
  const [overall_rating, setOverall_rating] = useState(1);
  const [academics_rating, setAcademics_rating] = useState(1);
  const [faculty_rating, setFaculty_rating] = useState(1);
  const [infrastructure_rating, setInfrastructure_rating] = useState(1);
  const [accommodation_rating, setAccommodation_rating] = useState(1);
  const [placement_rating, setPlacement_rating] = useState(1);
  const [social_life_rating, setSocial_life_rating] = useState(1);
  const [addMoreReviews, setAddMoreReviews] = useState([""]);
  const [formData, setFormData] = useState({
    name: "",
    year_of_study: "",
    course_taken: "",
    overall_rating: 1,
    academics_rating: 1,
    faculty_rating: 1,
    infrastructure_rating: 1,
    accommodation_rating: 1,
    placement_rating: 1,
    social_life_rating: 1,
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
    setReviews(formData);
  }, [formData, setReviews]);

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
                  fieldName="overall_rating"
                  formData={formData}
                  setFormData={setFormData}
                />
                <StarRating
                  title={"Infrastructure"}
                  fieldName="infrastructure_rating"
                  formData={formData}
                  setFormData={setFormData}
                />
                <StarRating
                  title={"Social Life"}
                  fieldName="social_life_rating"
                  formData={formData}
                  setFormData={setFormData}
                />
              </Grid>
              <Grid item xs={4}>
                <StarRating
                  title={"Academics"}
                  fieldName="academics_rating"
                  formData={formData}
                  setFormData={setFormData}
                />
                <StarRating
                  title={"Accommodation"}
                  fieldName="accommodation_rating"
                  formData={formData}
                  setFormData={setFormData}
                />
              </Grid>
              <Grid item xs={4}>
                <StarRating
                  title={"Faculty"}
                  fieldName="faculty_rating"
                  formData={formData}
                  setFormData={setFormData}
                />
                <StarRating
                  title={"Placement"}
                  fieldName="placement_rating"
                  formData={formData}
                  setFormData={setFormData}
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
