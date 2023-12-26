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
import FileUploadIcon from "@mui/icons-material/FileUpload";
import StarRating from "../../other/StarRating";
import { useTheme } from "@mui/material/styles";
import {
  checkUrl,
  generateYearsArray,
} from "../../../services/componentsFunctions";

const Reviews = ({ setReviews }) => {
  const theme = useTheme();
  const placeholderColor = theme.palette.text.secondary;

  const [addMoreReviews, setAddMoreReviews] = useState([""]);

  const [formData, setFormData] = useState({
    review_name: "",
    year_of_study: "",
    course_taken: "",
    competitive_environment: 1,
    faculty_rating: 1,
    infrastructure_rating: 1,
    overall_rating: 1,
    peer_learning_rating: 1,
    study_material_rating: 1,
    review_description: "",
    review_links: "",
    review_photo_or_video: null,
  });

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleFileChange = (event) => {
    setFormData({ ...formData, review_photo_or_video: event.target.files[0] });
  };

  useEffect(() => {
    setReviews(formData);
  }, [formData, setReviews]);

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
                  value={formData.review_name}
                  onChange={handleInputChange("review_name")}
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

            <Grid mt={6} mb={4}>
              <Typography>
                <b>Rate the coaching class on the following factors</b>
              </Typography>
            </Grid>

            <Grid container spacing={6}>
              <Grid item xs={4} container flexDirection={"column"} spacing={6}>
                <Grid item>
                  <StarRating
                    title={"Overall Rating"}
                    fieldName="overall_rating"
                    formData={formData}
                    setFormData={setFormData}
                  />
                </Grid>
                <Grid item>
                  <StarRating
                    title={"Infrastructure"}
                    fieldName="infrastructure_rating"
                    formData={formData}
                    setFormData={setFormData}
                  />
                </Grid>
              </Grid>
              <Grid item xs={4} container flexDirection={"column"} spacing={6}>
                <Grid item>
                  <StarRating
                    title={"Competitive Environment"}
                    fieldName="competitive_environment"
                    formData={formData}
                    setFormData={setFormData}
                  />
                </Grid>
                <Grid item>
                  <StarRating
                    title={"Study Material"}
                    fieldName="study_material_rating"
                    formData={formData}
                    setFormData={setFormData}
                  />
                </Grid>
              </Grid>
              <Grid item xs={4} container flexDirection={"column"} spacing={6}>
                <Grid item>
                  <StarRating
                    title={"Faculty"}
                    fieldName="faculty_rating"
                    formData={formData}
                    setFormData={setFormData}
                  />
                </Grid>
                <Grid item>
                  <StarRating
                    title={"Peer Learning"}
                    fieldName="peer_learning_rating"
                    formData={formData}
                    setFormData={setFormData}
                  />
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
                  value={formData.review_description}
                  onChange={handleInputChange("review_description")}
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
                    value={formData.review_links}
                    onChange={handleInputChange("review_links")}
                    error={
                      formData.review_links === ""
                        ? false
                        : !checkUrl(formData.review_links)
                    }
                  />
                </Grid>
                <Grid>
                  <Typography variant="h6">Upload Photo/ Video</Typography>
                  <label htmlFor="reviews-image-input">
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
                        id="reviews-image-input"
                        onChange={handleFileChange}
                      />
                      {formData.review_photo_or_video ? (
                        <Button disabled style={{ color: placeholderColor }}>
                          {formData.review_photo_or_video.name}
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
