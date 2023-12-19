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

const Reviews = ({ setReviews }) => {
  const theme = useTheme();
  const placeholderColor = theme.palette.text.secondary;

  const [addMoreReviews, setAddMoreReviews] = useState([""]);
  const [overall_rating, setOverall_rating] = useState(0);
  const [competitive_environment, setCompetitive_environment] = useState(0);
  const [faculty_rating, setFaculty_rating] = useState(0);
  const [infrastructure_rating, setInfrastructure_rating] = useState(0);
  const [peer_learning_rating, setPeer_learning_rating] = useState(0);
  const [study_material_rating, setStudy_material_rating] = useState(0);

  const [formData, setFormData] = useState({
    review_name: "",
    year_of_study: "",
    course_taken: "",
    competitive_environment: competitive_environment,
    faculty_rating: faculty_rating,
    infrastructure_rating: infrastructure_rating,
    overall_rating: overall_rating,
    peer_learning_rating: peer_learning_rating,
    study_material_rating: study_material_rating,
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
    setFormData({
      ...formData,
      competitive_environment: competitive_environment,
      faculty_rating: faculty_rating,
      infrastructure_rating: infrastructure_rating,
      overall_rating: overall_rating,
      peer_learning_rating: peer_learning_rating,
      study_material_rating: study_material_rating,
    });

    setReviews(formData);
  }, [
    competitive_environment,
    faculty_rating,
    formData,
    infrastructure_rating,
    overall_rating,
    peer_learning_rating,
    setReviews,
    study_material_rating,
  ]);

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
                    value={formData.course_taken}
                    onChange={handleInputChange("course_taken")}
                    displayEmpty
                    style={{
                      color: formData.course_taken === "" && placeholderColor,
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
                  <StarRating
                    title={"Overall Rating"}
                    setRating={setOverall_rating}
                  />
                </Grid>
                <Grid item>
                  <StarRating
                    title={"Infrastructure"}
                    setRating={setInfrastructure_rating}
                  />
                </Grid>
              </Grid>
              <Grid item xs={4} container flexDirection={"column"} spacing={6}>
                <Grid item>
                  <StarRating
                    title={"Competitive Environment"}
                    setRating={setCompetitive_environment}
                  />
                </Grid>
                <Grid item>
                  <StarRating
                    title={"Study Material"}
                    setRating={setStudy_material_rating}
                  />
                </Grid>
              </Grid>
              <Grid item xs={4} container flexDirection={"column"} spacing={6}>
                <Grid item>
                  <StarRating title={"Faculty"} setRating={setFaculty_rating} />
                </Grid>
                <Grid item>
                  <StarRating
                    title={"Peer Learning"}
                    setRating={setPeer_learning_rating}
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
