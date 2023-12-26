import React, { useState, useEffect } from "react";
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

const About = ({ setAbout }) => {
  const theme = useTheme();
  const secondaryColor = theme.palette.text.secondary;

  const buttonSelectedStyle = {
    textAlign: "center",
    margin: "5px",
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

  const isAllSelected = selectedDays.length === daysOfWeek.length;

  const [formData, setFormData] = useState({
    logo: null,
    short_description: "",
    detailed_description: "",
    days_of_operation: "",
    opens: "08:00",
    closes: "14:00",
  });

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleFileChange = (event) => {
    setFormData({ ...formData, logo: event.target.files[0] });
  };

  const toggleDay = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(
        selectedDays.filter((selectedDay) => selectedDay !== day)
      );
    } else {
      setSelectedDays([...selectedDays, day]);
    }

    if (selectedDays.length === 0)
      setFormData({ ...formData, days_of_operation: "" });
    else
      setFormData({ ...formData, days_of_operation: selectedDays.join(", ") });
  };

  const selectAllDays = () => {
    setSelectedDays(daysOfWeek);
    setFormData({ ...formData, days_of_operation: daysOfWeek.join(", ") });
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
              <Typography variant="inherit" color={secondaryColor}>
                {formData.logo ? formData.logo.name : "+ Add Logo"}
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
            value={formData.short_description}
            onChange={handleInputChange("short_description")}
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
            value={formData.detailed_description}
            onChange={handleInputChange("detailed_description")}
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
            <Grid item xs={3} mt={2}>
              <Typography>Opens</Typography>
              <TextField
                fullWidth
                size="small"
                // label="Open"
                type="time"
                value={formData.opens}
                onChange={handleInputChange("opens")}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={3} mt={2}>
              <Typography>Closes</Typography>
              <TextField
                fullWidth
                size="small"
                // label="Close"
                type="time"
                value={formData.closes}
                onChange={handleInputChange("closes")}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* <Button onClick={() => console.log(formData)}>Log</Button> */}
    </Container>
  );
};

export default About;
