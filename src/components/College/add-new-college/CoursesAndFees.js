import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Typography,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const CoursesAndFees = ({ setCoursesAndFees }) => {
  const theme = useTheme();
  const placeholderColor = theme.palette.text.secondary;

  const [anotherCourse, setAnotherCourse] = useState([""]);
  const [formData, setFormData] = useState({
    course: "",
    course_duration: "",
    degree_offered: "",
    course_description: "",
    total_fees: "",
    course_mode: "",
    eligibility_criteria: "",
    batch_strength: "",
  });
  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  useEffect(() => {
    setCoursesAndFees(formData);
  }, [setCoursesAndFees, formData]);

  return (
    <Container>
      <Grid>
        <Typography
          variant="h5"
          gutterBottom
          borderLeft={"4px solid " + theme.palette.primary.main}
          padding={1}
          mb={2}
        >
          <em>
            <strong>COURSES AND FEES </strong>
          </em>
        </Typography>
      </Grid>

      <form>
        {anotherCourse.map((data, index) => (
          <Grid mt={2} key={index} mb={6}>
            {/* First Row */}
            <Grid container spacing={6} mt={2}>
              <Grid item xs={4}>
                <Typography>Course Name</Typography>
                <TextField
                  fullWidth
                  placeholder="Type here"
                  size="small"
                  value={formData.course}
                  onChange={handleInputChange("course")}
                />
              </Grid>
              <Grid item xs={4}>
                <Typography>Course Duration</Typography>
                <FormControl fullWidth size="small">
                  {/* <InputLabel>Select/ Type Here</InputLabel> */}
                  <Select
                    value={formData.course_duration}
                    onChange={handleInputChange("course_duration")}
                    displayEmpty
                    style={{
                      color:
                        formData.course_duration === "" && placeholderColor,
                    }}
                  >
                    <MenuItem value={""} disabled>
                      Select/ Type Here
                    </MenuItem>
                    {/* <MenuItem value="1">1 Year</MenuItem>
                    <MenuItem value="2">2 Years</MenuItem> */}
                    {/* Add more duration options as needed */}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <Typography>Degree Offered</Typography>
                <TextField
                  fullWidth
                  placeholder="Type here"
                  size="small"
                  value={formData.degree_offered}
                  onChange={handleInputChange("degree_offered")}
                />
              </Grid>
            </Grid>

            {/* Second Row */}
            <Grid container spacing={6} mt={2}>
              <Grid item xs={4}>
                <Typography>Course Description</Typography>
                <TextField
                  fullWidth
                  placeholder="Describe Here"
                  multiline
                  minRows={4.4}
                  maxRows={4.4}
                  value={formData.course_description}
                  onChange={handleInputChange("course_description")}
                />
              </Grid>

              <Grid item xs={4} mt={2}>
                <Grid item>
                  <Typography>Total Fees</Typography>
                  <TextField
                    fullWidth
                    placeholder="Type here"
                    value={formData.total_fees}
                    onChange={handleInputChange("total_fees")}
                    type="number"
                    size="small"
                  />
                </Grid>
                <Grid item mt={4}>
                  <Typography>Eligibility Criteria</Typography>
                  <FormControl fullWidth size="small">
                    {/* <InputLabel>Select/ Type Here</InputLabel> */}
                    <Select
                      value={formData.eligibility_criteria}
                      onChange={handleInputChange("eligibility_criteria")}
                      displayEmpty
                      style={{
                        color:
                          formData.eligibility_criteria === "" &&
                          placeholderColor,
                      }}
                    >
                      <MenuItem value={""} disabled>
                        Select/ Type Here
                      </MenuItem>
                      {/* <MenuItem value="criteria1">Criteria 1</MenuItem>
                      <MenuItem value="criteria2">Criteria 2</MenuItem> */}
                      {/* Add more eligibility criteria options as needed */}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <Grid item xs={4} mt={2}>
                <Grid item>
                  <Typography>Course Mode</Typography>
                  <FormControl fullWidth size="small">
                    {/* <InputLabel>Select/ Type Here</InputLabel> */}
                    <Select
                      value={formData.course_mode}
                      onChange={handleInputChange("course_mode")}
                      displayEmpty
                      style={{
                        color: formData.course_mode === "" && placeholderColor,
                      }}
                    >
                      <MenuItem value={""} disabled>
                        Select/ Type Here
                      </MenuItem>
                      <MenuItem value="online">Online</MenuItem>
                      <MenuItem value="offline">Offline</MenuItem>
                      {/* Add more fees options as needed */}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item mt={4}>
                  <Typography>Batch Strength</Typography>
                  <TextField
                    fullWidth
                    placeholder="Type here"
                    type="number"
                    value={formData.batch_strength}
                    onChange={handleInputChange("batch_strength")}
                    size="small"
                  />
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
            onClick={() => setAnotherCourse([...anotherCourse, ""])}
          >
            + Add More Courses
          </Button>
        </Grid>
      </form>
    </Container>
  );
};

export default CoursesAndFees;
