import React, { useState } from "react";
// import DashboardLayout from "../../../layouts/Dashboard";
import {
  Box,
  Grid,
  TextField,
  Container,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const About = () => {
  const [formData, setFormData] = useState({
    image: null,
    textField1: "",
    textField2: "",
    dayOfWeek: "",
    startTime: "",
    endTime: "",
  });

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleFileChange = (event) => {
    setFormData({ ...formData, image: event.target.files[0] });
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        About
      </Typography>
      <Grid container spacing={2} mt={4}>
        {/* Row 1 */}
        <Grid item xs={12} sm={2}>
          <label
            htmlFor="image"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              border={1}
              borderColor="primary.main"
              borderRadius="50%"
              p={2}
              textAlign="center"
              width={90}
              height={90}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
            >
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="image"
                type="file"
                onChange={handleFileChange}
              />
              <Typography variant="inherit" color="primary">
                + Add Logo
              </Typography>
            </Box>
          </label>
        </Grid>

        <Grid item xs={12} sm={10}>
          <Typography>Add short 2 line description about the exam</Typography>
          <TextField
            fullWidth
            placeholder="Decribe here"
            value={formData.textField1}
            onChange={handleInputChange("textField1")}
          />
        </Grid>
        {/* Row 2 */}
        <Grid item xs={12} mt={2}>
          <Typography>Add detailed description about the exam</Typography>
          <TextField
            fullWidth
            placeholder="Decribe here"
            value={formData.textField2}
            onChange={handleInputChange("textField2")}
            multiline
            minRows={4}
          />
        </Grid>

        {/* Row 3 */}
        <Grid item xs={12} mt={2}>
          <Grid container spacing={2} mt={2}>
            <Grid item xs={4}>
              <Typography>Exam Frequency</Typography>
              <FormControl fullWidth size="small">
                <Select defaultValue={""}>
                  <MenuItem value="1"> 1</MenuItem>
                  <MenuItem value="2"> 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <Typography>Exam Mode</Typography>
              <FormControl fullWidth size="small">
                <Select defaultValue={""}>
                  <MenuItem value="1"> 1</MenuItem>
                  <MenuItem value="2"> 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <Typography>States Applicable</Typography>
              <FormControl fullWidth size="small">
                <Select defaultValue={""}>
                  <MenuItem value="1"> 1</MenuItem>
                  <MenuItem value="2"> 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

// About.getLayout = function getLayout(page) {
//   return <DashboardLayout>{page}</DashboardLayout>;
// };

export default About;
