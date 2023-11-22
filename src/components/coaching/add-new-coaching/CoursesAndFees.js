import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Button,
} from "@mui/material";

const CoursesAndFees = () => {
  const [anotherCourse, setAnotherCourse] = useState([""]);
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
                <Select defaultValue={""}>
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
                <Select defaultValue={""}>
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
                <Select defaultValue={""}>
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
                  <Select defaultValue={""}>
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

        <Button
          m={2}
          variant="contained"
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
