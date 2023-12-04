import React, { useState } from "react";
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

const CoursesAndFees = () => {
  const theme = useTheme();
  const placeholderColor = theme.palette.text.secondary;

  const [exams, setExams] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [courseMode, setCourseMode] = useState("");
  const [studyMaterial, setStudyMaterial] = useState("");

  const [anotherCourse, setAnotherCourse] = useState([""]);
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
                  onChange={(e) => setExams(e.target.value)}
                  value={exams}
                  displayEmpty
                  style={{
                    color: exams === "" && placeholderColor,
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
                  onChange={(e) => setCourseDuration(e.target.value)}
                  value={courseDuration}
                  displayEmpty
                  style={{
                    color: courseDuration === "" && placeholderColor,
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
                {/* <InputLabel>Select/ Type Here</InputLabel> */}
                <Select
                  onChange={(e) => setCourseMode(e.target.value)}
                  value={courseMode}
                  displayEmpty
                  style={{
                    color: courseMode === "" && placeholderColor,
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
                label="Course Description"
                multiline
                minRows={4}
                maxRows={4}
              />
            </Grid>

            <Grid item xs={4} mt={2}>
              <Grid item>
                <Typography>Total Fees</Typography>
                <TextField fullWidth label="Type Here" size="small" />
              </Grid>
              <Grid item mt={4}>
                <Typography>Study Material included?</Typography>
                <FormControl fullWidth size="small">
                  {/* <InputLabel>Select/ Type Here</InputLabel> */}
                  <Select
                    onChange={(e) => setStudyMaterial(e.target.value)}
                    value={studyMaterial}
                    displayEmpty
                    style={{
                      color: studyMaterial === "" && placeholderColor,
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
                <TextField fullWidth label="Type Here" size="small" />
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
