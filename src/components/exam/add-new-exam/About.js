import React, { useState, useEffect } from "react";
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

const About = ({ setAbout }) => {
  const theme = useTheme();
  const secondaryColor = theme.palette.text.secondary;
  const indianStatesAndUTs = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
  ];

  const [formData, setFormData] = useState({
    logo: null,
    short_description: "",
    detailed_description: "",
    exam_frequency: "",
    exam_mode: "",
    states_applicable: "",
  });

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleFileChange = (event) => {
    setFormData({ ...formData, logo: event.target.files[0] });
  };

  useEffect(() => {
    setAbout(formData);
  }, [formData, setAbout]);

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
              border={"2px dashed"}
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
              {formData.logo ? (
                formData.logo.name
              ) : (
                <Typography variant="inherit" color={secondaryColor}>
                  + Add Logo
                </Typography>
              )}
            </Box>
          </label>
        </Grid>

        <Grid item xs={12} sm={10}>
          <Typography>Add short 2 line description about the exam</Typography>
          <TextField
            fullWidth
            placeholder="Decribe here"
            value={formData.short_description}
            onChange={handleInputChange("short_description")}
          />
        </Grid>
        {/* Row 2 */}
        <Grid item xs={12}>
          <Typography>Add detailed description about the exam</Typography>
          <TextField
            fullWidth
            placeholder="Decribe here"
            value={formData.detailed_description}
            onChange={handleInputChange("detailed_description")}
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
                  value={formData.exam_frequency}
                  onChange={handleInputChange("exam_frequency")}
                  displayEmpty
                  style={{
                    color: formData.exam_frequency === "" && secondaryColor,
                  }}
                >
                  <MenuItem value={""} disabled>
                    Number/Yearly
                  </MenuItem>
                  <MenuItem value="Yearly"> Yearly</MenuItem>
                  <MenuItem value="Quaterly"> Quaterly</MenuItem>
                  <MenuItem value="Biannual"> Biannual</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <Typography>Exam Mode</Typography>
              <FormControl fullWidth size="small">
                <Select
                  value={formData.exam_mode}
                  onChange={handleInputChange("exam_mode")}
                  displayEmpty
                  style={{
                    color: formData.exam_mode === "" && secondaryColor,
                  }}
                >
                  <MenuItem value={""} disabled>
                    Select/ Type Here
                  </MenuItem>
                  <MenuItem value="Online"> Online</MenuItem>
                  <MenuItem value="Offline"> Offline</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <Typography>States Applicable</Typography>
              <FormControl fullWidth size="small">
                <Select
                  value={formData.states_applicable}
                  onChange={handleInputChange("states_applicable")}
                  displayEmpty
                  style={{
                    color: formData.states_applicable === "" && secondaryColor,
                  }}
                >
                  <MenuItem value={""} disabled>
                    Select/ Type Here
                  </MenuItem>
                  {indianStatesAndUTs.map((data, index) => (
                    <MenuItem value={data} key={index}>
                      {data}
                    </MenuItem>
                  ))}
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
