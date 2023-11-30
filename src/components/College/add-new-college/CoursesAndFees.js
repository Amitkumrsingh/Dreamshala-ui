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

  const [anotherCourse, setAnotherCourse] = useState([""]);
  const [batchStrength, setBatchStrength] = useState("");
  const [exams, setExams] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [degreeOffered, setDegreeOffered] = useState("");
  const [totalFees, setTotalFees] = useState("");
  const [courseMode, setCourseMode] = useState("");
  const [eligibiligyCriteria, setEligibiligyCriteria] = useState("");

  return (
    <Container>
      <Grid>
        <Typography variant="h5" gutterBottom>
          COURSES AND FEES
        </Typography>
      </Grid>

      <form>
        {anotherCourse.map((data, index) => (
          <Grid container spacing={2} mt={2} key={index} mb={4}>
            {/* First Row */}
            <Grid item xs={4} mt={2}>
              <Typography>Select Exam for the course</Typography>
              <FormControl fullWidth size="small">
                {/* <InputLabel>Select/ Type Here</InputLabel> */}
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
                {/* <InputLabel>Select/ Type Here</InputLabel> */}
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
              <Typography>Degree Offered</Typography>
              <FormControl fullWidth size="small">
                {/* <InputLabel>Select/ Type Here</InputLabel> */}
                <Select
                  onChange={(e) => setDegreeOffered(e.target.value)}
                  value={degreeOffered}
                  displayEmpty
                  style={{
                    color: degreeOffered === "" && placeholderColor,
                  }}
                >
                  <MenuItem value={""} disabled>
                    Select/ Type Here
                  </MenuItem>
                  <MenuItem value="degree1">Degree 1</MenuItem>
                  <MenuItem value="degree2">Degree 2</MenuItem>
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
                <FormControl fullWidth size="small">
                  {/* <InputLabel>Select/ Type Here</InputLabel> */}
                  <Select
                    onChange={(e) => setTotalFees(e.target.value)}
                    value={totalFees}
                    displayEmpty
                    style={{
                      color: totalFees === "" && placeholderColor,
                    }}
                  >
                    <MenuItem value={""} disabled>
                      Select/ Type Here
                    </MenuItem>
                    <MenuItem value="fees1">Fees 1</MenuItem>
                    <MenuItem value="fees2">Fees 2</MenuItem>
                    {/* Add more fees options as needed */}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item mt={4}>
                <Typography>Eligibility Criteria</Typography>
                <FormControl fullWidth size="small">
                  {/* <InputLabel>Select/ Type Here</InputLabel> */}
                  <Select
                    onChange={(e) => setEligibiligyCriteria(e.target.value)}
                    value={eligibiligyCriteria}
                    displayEmpty
                    style={{
                      color: eligibiligyCriteria === "" && placeholderColor,
                    }}
                  >
                    <MenuItem value={""} disabled>
                      Select/ Type Here
                    </MenuItem>
                    <MenuItem value="criteria1">Criteria 1</MenuItem>
                    <MenuItem value="criteria2">Criteria 2</MenuItem>
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
                    <MenuItem value="onlin">Online</MenuItem>
                    <MenuItem value="offline">Off-Line</MenuItem>
                    {/* Add more fees options as needed */}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item mt={4}>
                <Typography>Batch Strength</Typography>
                <FormControl fullWidth size="small">
                  {/* <InputLabel>Select/ Type Here</InputLabel> */}
                  <Select
                    onChange={(e) => setBatchStrength(e.target.value)}
                    value={batchStrength}
                    displayEmpty
                    style={{
                      color: batchStrength === "" && placeholderColor,
                    }}
                  >
                    <MenuItem value={""} disabled>
                      Select/ Type Here
                    </MenuItem>
                    <MenuItem value="criteria1"> 1</MenuItem>
                    <MenuItem value="criteria2"> 2</MenuItem>
                    {/* Add more eligibility criteria options as needed */}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        ))}

        <Button
          m={2}
          variant="outlined"
          color="primary"
          onClick={() => setAnotherCourse([...anotherCourse, ""])}
        >
          + Add More Courses
        </Button>
      </form>
    </Container>
  );
};

export default CoursesAndFees;
