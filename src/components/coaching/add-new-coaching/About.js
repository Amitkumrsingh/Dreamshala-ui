import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Grid,
  TextField,
  Container,
  Typography,
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

// const InpubLabelTextStyling = {
//   color: "#000",
//   fontFamily: "Inter",
//   fontSize: "14px",
//   fontStyle: "normal",
//   fontWeight: 400,
//   lineHeight: "18px",
// };

// const AboutHeadingTextStyle = {
//   color: "#263238",
//   fontFamily: "Inter",
//   fontSize: "16px",
//   fontStyle: "italic",
//   fontWeight: 900,
//   lineHeight: "45px",
//   letterSpacing: "-0.32px",
// };

const About = () => {
  const theme = useTheme();
  const secondaryColor = theme.palette.text.secondary;
  const primaryColor = theme.palette.text.primary;

  const buttonSelectedStyle = {
    color: primaryColor,
    textAlign: "center",
    margin: "5px",
    border: "1px solid",
    borderRadius: "4px",
  };

  const buttonNotSelectedStyle = {
    color: secondaryColor,
    borderColor: secondaryColor,
    textAlign: "center",
    margin: "5px",
    border: "1px solid",
    borderRadius: "4px",
  };

  const [selectedDays, setSelectedDays] = useState([]);

  const toggleDay = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(
        selectedDays.filter((selectedDay) => selectedDay !== day)
      );
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const selectAllDays = () => {
    setSelectedDays(daysOfWeek);
  };

  const isAllSelected = selectedDays.length === daysOfWeek.length;

  const [formData, setFormData] = useState({
    image: null,
    textField1: "",
    textField2: "",
    dayOfWeek: "",
    startTime: "08:00",
    endTime: "14:00",
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
              <Typography variant="inherit" color={secondaryColor}>
                + Add Logo
              </Typography>
            </Box>
          </label>
        </Grid>

        <Grid item xs={12} sm={10}>
          <Typography>
            Add short 2 line description about your coaching class
          </Typography>
          <TextField
            fullWidth
            placeholder="Decribe here"
            value={formData.textField1}
            onChange={handleInputChange("textField1")}
          />
        </Grid>
        {/* Row 2 */}
        <Grid item xs={12} mt={4}>
          <Typography>
            Add detailed description about your coaching class
          </Typography>
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

        <Grid item xs={12} sm={6} mt={4}>
          <Typography>Days of Operation</Typography>
          <Grid mt={2}>
            <ButtonGroup
              style={{
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <Button
                onClick={selectAllDays}
                disabled={isAllSelected}
                style={
                  isAllSelected ? buttonSelectedStyle : buttonNotSelectedStyle
                }
              >
                Select All
              </Button>
              {daysOfWeek.map((day) => (
                <Checkbox
                  key={day}
                  checked={selectedDays.includes(day)}
                  onChange={() => toggleDay(day)}
                  inputProps={{ "aria-label": day }}
                  style={{ display: "none" }} // Hide the actual checkbox input
                />
              ))}
              {daysOfWeek.map((day, index) => (
                <Button
                  key={day}
                  variant={
                    selectedDays.includes(day) ? "contained" : "outlined"
                  }
                  onClick={() => toggleDay(day)}
                  style={
                    selectedDays.includes(day)
                      ? buttonSelectedStyle
                      : buttonNotSelectedStyle
                  }
                >
                  {day}
                </Button>
              ))}
            </ButtonGroup>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} mt={4}>
          <Typography>Hours of Operation</Typography>
          <Grid container spacing={4}>
            {/* <Typography>Open</Typography> */}
            <Grid item xs={2.5} mt={2}>
              <Typography>Opens</Typography>
              <TextField
                fullWidth
                size="small"
                // label="Open"
                type="time"
                value={formData.startTime}
                onChange={handleInputChange("startTime")}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={2.5} mt={2}>
              <Typography>Closes</Typography>
              <TextField
                fullWidth
                size="small"
                // label="Close"
                type="time"
                value={formData.endTime}
                onChange={handleInputChange("endTime")}
                InputLabelProps={{
                  shrink: true,
                }}
              />
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
