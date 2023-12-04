import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
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
  const theme = useTheme();
  const secondaryColor = theme.palette.text.secondary;

  const [examFrequency, setExamFrequency] = useState("");
  const [examMode, setExamMode] = useState("");
  const [statesApplicable, setStatesApplicable] = useState("");

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
      <Typography
        variant="h5"
        gutterBottom
        borderLeft={"4px solid " + theme.palette.primary.main}
        padding={1}
      >
        <em>
          <strong>ABOUT</strong>
        </em>
      </Typography>
      <Grid container spacing={6} mt={2}>
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
              borderColor={secondaryColor}
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
              <Typography variant="inherit" color={secondaryColor}>
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
        <Grid item xs={12}>
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
        <Grid item xs={12}>
          <Grid container spacing={6}>
            <Grid item xs={4}>
              <Typography>Exam Frequency</Typography>
              <FormControl fullWidth size="small">
                <Select
                  onChange={(e) => setExamFrequency(e.target.value)}
                  value={examFrequency}
                  displayEmpty
                  style={{
                    color: examFrequency === "" && secondaryColor,
                  }}
                >
                  <MenuItem value={""} disabled>
                    Select/ Type Here
                  </MenuItem>
                  <MenuItem value="1"> 1</MenuItem>
                  <MenuItem value="2"> 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <Typography>Exam Mode</Typography>
              <FormControl fullWidth size="small">
                <Select
                  onChange={(e) => setExamMode(e.target.value)}
                  value={examMode}
                  displayEmpty
                  style={{
                    color: examMode === "" && secondaryColor,
                  }}
                >
                  <MenuItem value={""} disabled>
                    Select/ Type Here
                  </MenuItem>
                  <MenuItem value="1"> 1</MenuItem>
                  <MenuItem value="2"> 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <Typography>States Applicable</Typography>
              <FormControl fullWidth size="small">
                <Select
                  onChange={(e) => setStatesApplicable(e.target.value)}
                  value={statesApplicable}
                  displayEmpty
                  style={{
                    color: statesApplicable === "" && secondaryColor,
                  }}
                >
                  <MenuItem value={""} disabled>
                    Select/ Type Here
                  </MenuItem>
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
