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

const CoursesAndFees = ({setCoursesAndFees}) => {
  const theme = useTheme();
  const placeholderColor = theme.palette.text.secondary;

  const [anotherCourse, setAnotherCourse] = useState([""]);
  const [formData, setFormData] = useState({
    course_for_exam: "",
    course_duration: "",
    course_mode: "",
    course_description: "",
    total_fee: "",
    discount: "",
    study_material_included: "",
  })

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  useEffect(() => {
    setCoursesAndFees(formData)
  }, [formData, setCoursesAndFees])

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
          <Grid container spacing={6} mt={2} key={index} mb={4}>
            {/* First Row */}
            <Grid item xs={4} mt={2}>
              <Typography>Select Exam for the course</Typography>
              <FormControl fullWidth size="small">
                <Select
                  onChange={handleInputChange("course_for_exam")}
                  value={formData.course_for_exam}
                  displayEmpty
                  style={{
                    color: formData.course_for_exam === "" && placeholderColor,
                  }}
                >
                  <MenuItem value={""} disabled>
                    Select/ Type Here
                  </MenuItem>
                  <MenuItem value="exam1">Exam 1</MenuItem>
                  <MenuItem value="exam2">Exam 2</MenuItem>
                  {/* Add more exam options as needed */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4} mt={2}>
              <Typography>Course Duration</Typography>
              <FormControl fullWidth size="small">
                <Select
                  onChange={handleInputChange("course_duration")}
                  value={formData.course_duration}
                  displayEmpty
                  style={{
                    color: formData.course_duration === "" && placeholderColor,
                  }}
                >
                  <MenuItem value={""} disabled>
                    Select/ Type Here
                  </MenuItem>
                  <MenuItem value="1">1 Year</MenuItem>
                  <MenuItem value="2">2 Years</MenuItem>
                  {/* Add more duration options as needed */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4} mt={2}>
              <Typography>Course Mode</Typography>
              <FormControl fullWidth size="small">
                {/* <Inputplaceholder>Select/ Type Here</Inputplaceholder> */}
                <Select
                  onChange={handleInputChange("course_mode")}
                  value={formData.course_mode}
                  displayEmpty
                  style={{
                    color: formData.course_mode === "" && placeholderColor,
                  }}
                >
                  <MenuItem value={""} disabled>
                    Select/ Type Here
                  </MenuItem>
                  <MenuItem value="degree1">Online</MenuItem>
                  <MenuItem value="degree2">Off Line</MenuItem>
                  <MenuItem value="degree2">Hybrid</MenuItem>
                  {/* Add more degree options as needed */}
                </Select>
              </FormControl>
            </Grid>

            {/* Second Row */}
            <Grid item xs={4} mt={2}>
              <Typography>Course Description</Typography>
              <TextField
                fullWidth
                placeholder="Course Description"
                multiline
                minRows={4}
                maxRows={4}
                value={formData.course_description}
                onChange={handleInputChange("course_description")}
              />
            </Grid>

            <Grid item xs={4} mt={2}>
              <Grid item>
                <Typography>Total Fees</Typography>
                <TextField fullWidth placeholder="Type Here" size="small" onChange={handleInputChange("total_fee")} value={formData.total_fee} />
              </Grid>
              <Grid item mt={4}>
                <Typography>Study Material included?</Typography>
                <FormControl fullWidth size="small">
                  {/* <Inputplaceholder>Select/ Type Here</Inputplaceholder> */}
                  <Select
                    onChange={handleInputChange("study_material_included")}
                    value={formData.study_material_included}
                    displayEmpty
                    style={{
                      color: formData.study_material_included === "" && placeholderColor,
                    }}
                  >
                    <MenuItem value={""} disabled>
                      Select/ Type Here
                    </MenuItem>
                    <MenuItem value="criteria1">Yes</MenuItem>
                    <MenuItem value="criteria2">No</MenuItem>
                    {/* Add more eligibility criteria options as needed */}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Grid item xs={4} mt={2}>
              <Grid item>
                <Typography>Discount Offered (if any)</Typography>
                <TextField fullWidth placeholder="Type Here" size="small" value={formData.discount} onChange={handleInputChange("discount")} />
              </Grid>
              <Grid item mt={4}>
                {/* <Typography>Eligibility Criteria</Typography>
                <FormControl fullWidth size="small">
                  <Select defaultValue={""}>
                    <MenuItem value="criteria1">Criteria 1</MenuItem>
                    <MenuItem value="criteria2">Criteria 2</MenuItem>
                  </Select>
                </FormControl> */}
              </Grid>
            </Grid>
          </Grid>
        ))}

        <Grid mt={6}>
          <Button
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
