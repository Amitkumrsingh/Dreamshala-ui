import React, { useState } from "react";
import DashboardLayout from "../../../layouts/Dashboard";
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

const ButtonStyling = {
  color: "#8C8C8C",
  textAlign: "center",
  fontFamily: "Inter",
  fontSize: "11px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "20px",
  letterSpacing: "-0.22px",
  margin: "5px",
  border: "1px solid",
  borderRadius: 0,
};

const InpubLabelTextStyling = {
  color: "#000",
  fontFamily: "Inter",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "18px",
};

const AboutHeadingTextStyle = {
  color: "#263238",
  fontFamily: "Inter",
  fontSize: "16px",
  fontStyle: "italic",
  fontWeight: 900,
  lineHeight: "45px",
  letterSpacing: "-0.32px",
};

const About = () => {
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
      <Typography variant="h5" gutterBottom style={AboutHeadingTextStyle}>
        About
      </Typography>
      <Grid container spacing={2}>
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
          <Typography style={InpubLabelTextStyling}>
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
        <Grid item xs={12}>
          <Typography style={InpubLabelTextStyling}>
            Add detailed description about your coaching class
          </Typography>
          <TextField
            fullWidth
            placeholder="Decribe here"
            value={formData.textField2}
            onChange={handleInputChange("textField2")}
          />
        </Grid>

        {/* Row 3 */}

        <Grid item xs={12} sm={6}>
          <ButtonGroup
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Button
              onClick={selectAllDays}
              disabled={isAllSelected}
              style={ButtonStyling}
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
                variant={selectedDays.includes(day) ? "contained" : "outlined"}
                onClick={() => toggleDay(day)}
                style={ButtonStyling}
              >
                {day}
              </Button>
            ))}
          </ButtonGroup>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>Hours of Operation</Typography>
          <Grid container spacing={2}>
            {/* <Typography>Open</Typography> */}
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Open"
                type="time"
                value={formData.startTime}
                onChange={handleInputChange("startTime")}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              {/* <Typography>Close</Typography> */}
              <TextField
                fullWidth
                label="Close"
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

About.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default About;
