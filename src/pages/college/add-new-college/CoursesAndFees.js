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
  const [anotherCourse, setAnotherCourse] = useState([]);
  return (
    <Container>
      <form>
        <Grid container spacing={3}>
          {/* First Row */}
          <Grid item xs={4}>
            <Typography>Select Exam for the course</Typography>
            <FormControl fullWidth>
              <InputLabel>Select/ Type Here</InputLabel>
              <Select defaultValue={""}>
                <MenuItem value="exam1">Exam 1</MenuItem>
                <MenuItem value="exam2">Exam 2</MenuItem>
                {/* Add more exam options as needed */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <Typography>Course Duration</Typography>
            <FormControl fullWidth>
              <InputLabel>Select/ Type Here</InputLabel>
              <Select defaultValue={""}>
                <MenuItem value="1">1 Year</MenuItem>
                <MenuItem value="2">2 Years</MenuItem>
                {/* Add more duration options as needed */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <Typography>Degree Offered</Typography>
            <FormControl fullWidth>
              <InputLabel>Select/ Type Here</InputLabel>
              <Select defaultValue={""}>
                <MenuItem value="degree1">Degree 1</MenuItem>
                <MenuItem value="degree2">Degree 2</MenuItem>
                {/* Add more degree options as needed */}
              </Select>
            </FormControl>
          </Grid>

          {/* Second Row */}
          <Grid item xs={4}>
            <Typography>Course Description</Typography>
            <TextField
              fullWidth
              label="Course Description"
              multiline
              rows={2}
            />
          </Grid>

          <Grid item xs={4}>
            <Grid item>
              <Typography>Total Fees</Typography>
              <FormControl fullWidth>
                <InputLabel>Select/ Type Here</InputLabel>
                <Select defaultValue={""}>
                  <MenuItem value="fees1">Fees 1</MenuItem>
                  <MenuItem value="fees2">Fees 2</MenuItem>
                  {/* Add more fees options as needed */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <Typography>Eligibility Criteria</Typography>
              <FormControl fullWidth>
                <InputLabel>Select/ Type Here</InputLabel>
                <Select defaultValue={""}>
                  <MenuItem value="criteria1">Criteria 1</MenuItem>
                  <MenuItem value="criteria2">Criteria 2</MenuItem>
                  {/* Add more eligibility criteria options as needed */}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid item xs={4}>
            <Grid item>
              <Typography>Total Fees</Typography>
              <FormControl fullWidth>
                <InputLabel>Select/ Type Here</InputLabel>
                <Select defaultValue={""}>
                  <MenuItem value="fees1">Fees 1</MenuItem>
                  <MenuItem value="fees2">Fees 2</MenuItem>
                  {/* Add more fees options as needed */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <Typography>Eligibility Criteria</Typography>
              <FormControl fullWidth>
                <InputLabel>Select/ Type Here</InputLabel>
                <Select defaultValue={""}>
                  <MenuItem value="criteria1">Criteria 1</MenuItem>
                  <MenuItem value="criteria2">Criteria 2</MenuItem>
                  {/* Add more eligibility criteria options as needed */}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>

        {anotherCourse.map((data, index) => (
          <Grid container spacing={3} key={index}>
            {/* First Row */}
            <Grid item xs={4}>
              <Typography>Select Exam for the course</Typography>
              <FormControl fullWidth>
                <InputLabel>Select/ Type Here</InputLabel>
                <Select defaultValue={""}>
                  <MenuItem value="exam1">Exam 1</MenuItem>
                  <MenuItem value="exam2">Exam 2</MenuItem>
                  {/* Add more exam options as needed */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <Typography>Course Duration</Typography>
              <FormControl fullWidth>
                <InputLabel>Select/ Type Here</InputLabel>
                <Select defaultValue={""}>
                  <MenuItem value="1">1 Year</MenuItem>
                  <MenuItem value="2">2 Years</MenuItem>
                  {/* Add more duration options as needed */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <Typography>Degree Offered</Typography>
              <FormControl fullWidth>
                <InputLabel>Select/ Type Here</InputLabel>
                <Select defaultValue={""}>
                  <MenuItem value="degree1">Degree 1</MenuItem>
                  <MenuItem value="degree2">Degree 2</MenuItem>
                  {/* Add more degree options as needed */}
                </Select>
              </FormControl>
            </Grid>

            {/* Second Row */}
            <Grid item xs={4}>
              <Typography>Course Description</Typography>
              <TextField
                fullWidth
                label="Course Description"
                multiline
                rows={2}
              />
            </Grid>

            <Grid item xs={4}>
              <Grid item>
                <Typography>Total Fees</Typography>
                <FormControl fullWidth>
                  <InputLabel>Select/ Type Here</InputLabel>
                  <Select defaultValue={""}>
                    <MenuItem value="fees1">Fees 1</MenuItem>
                    <MenuItem value="fees2">Fees 2</MenuItem>
                    {/* Add more fees options as needed */}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <Typography>Eligibility Criteria</Typography>
                <FormControl fullWidth>
                  <InputLabel>Select/ Type Here</InputLabel>
                  <Select defaultValue={""}>
                    <MenuItem value="criteria1">Criteria 1</MenuItem>
                    <MenuItem value="criteria2">Criteria 2</MenuItem>
                    {/* Add more eligibility criteria options as needed */}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Grid item xs={4}>
              <Grid item>
                <Typography>Total Fees</Typography>
                <FormControl fullWidth>
                  <InputLabel>Select/ Type Here</InputLabel>
                  <Select defaultValue={""}>
                    <MenuItem value="fees1">Fees 1</MenuItem>
                    <MenuItem value="fees2">Fees 2</MenuItem>
                    {/* Add more fees options as needed */}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <Typography>Eligibility Criteria</Typography>
                <FormControl fullWidth>
                  <InputLabel>Select/ Type Here</InputLabel>
                  <Select defaultValue={""}>
                    <MenuItem value="criteria1">Criteria 1</MenuItem>
                    <MenuItem value="criteria2">Criteria 2</MenuItem>
                    {/* Add more eligibility criteria options as needed */}
                  </Select>
                </FormControl>
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
