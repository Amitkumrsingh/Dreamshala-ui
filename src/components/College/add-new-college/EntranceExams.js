import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const EntranceExams = () => {
  const theme = useTheme();
  const secondaryColor = theme.palette.text.secondary;
  const primaryColor = theme.palette.text.primary;

  const buttonSelectedStyle = {
    color: primaryColor,
  };

  const buttonNotSelectedStyle = {
    color: secondaryColor,
    borderColor: secondaryColor,
  };

  const [checkboxes, setCheckboxes] = useState({
    design: [
      { exam: "CEED", selected: false },
      { exam: "ND", selected: false },
      { exam: "NATA", selected: false },
      { exam: "UCEED", selected: false },
    ],
    engineering: [
      { exam: "JEE Main", selected: false },
      { exam: "MHT CET", selected: false },
      { exam: "BITSAT", selected: false },
      { exam: "GATE", selected: false },
    ],
    medical: [
      { exam: "NEET", selected: false },
      { exam: "AFMC", selected: false },
      { exam: "AIIMS", selected: false },
      { exam: "CET", selected: false },
    ],
    law: [
      { exam: "CLAT", selected: false },
      { exam: "AILET", selected: false },
      { exam: "LSAT", selected: false },
      { exam: "AIBE", selected: false },
    ],
  });

  const [textInput, setTextInput] = useState("");

  // Function to handle checkbox changes
  const handleCheckboxChange = (field, index) => {
    if (field === 0) {
      const design = checkboxes.design;
      design[index].selected = !design[index].selected;
      setCheckboxes({ ...checkboxes, design });
    }
    if (field === 1) {
      const engineering = checkboxes.engineering;
      engineering[index].selected = !engineering[index].selected;
      setCheckboxes({ ...checkboxes, engineering });
    }
    if (field === 2) {
      const medical = checkboxes.medical;
      medical[index].selected = !medical[index].selected;
      setCheckboxes({ ...checkboxes, medical });
    }
    if (field === 3) {
      const law = checkboxes.law;
      law[index].selected = !law[index].selected;
      setCheckboxes({ ...checkboxes, law });
    }
  };

  // Function to handle text input change
  const handleTextInputChange = (e) => {
    setTextInput(e.target.value);
  };

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
            <strong>ENTRANCE EXAMS </strong>
          </em>
        </Typography>
      </Grid>
      <form>
        {/* First Row */}
        <Grid mt={6}>
          <Grid mb={4}>
            <Typography variant="p">
              Select all the exams through which students can get admission in
              your college/ institute
            </Typography>
          </Grid>
          <Grid container spacing={6}>
            <Grid item xs={4}>
              <Typography>Design</Typography>
              <Grid style={{ display: "flex" }}>
                {checkboxes.design.map(({ exam, selected }, index) => (
                  <Grid key={index} mr={1}>
                    <Button
                      variant={selected ? "contained" : "outlined"}
                      style={
                        selected ? buttonSelectedStyle : buttonNotSelectedStyle
                      }
                      onClick={() => handleCheckboxChange(0, index)}
                    >
                      {`${exam}`}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={4}>
              <Typography>Engineering</Typography>
              <Grid style={{ display: "flex" }}>
                {checkboxes.engineering.map(({ exam, selected }, index) => (
                  <Grid key={index} mr={1}>
                    <Button
                      variant={selected ? "contained" : "outlined"}
                      style={
                        selected ? buttonSelectedStyle : buttonNotSelectedStyle
                      }
                      onClick={() => handleCheckboxChange(1, index)}
                    >
                      {`${exam}`}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={4}>
              <Typography>Medical</Typography>
              <Grid style={{ display: "flex" }}>
                {checkboxes.medical.map(({ exam, selected }, index) => (
                  <Grid key={index} mr={1}>
                    <Button
                      variant={selected ? "contained" : "outlined"}
                      style={
                        selected ? buttonSelectedStyle : buttonNotSelectedStyle
                      }
                      onClick={() => handleCheckboxChange(2, index)}
                    >
                      {`${exam}`}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Second Row */}
        <Grid container spacing={6} mt={2}>
          <Grid item xs={4}>
            <Typography>Law</Typography>
            <Grid style={{ display: "flex" }}>
              {checkboxes.law.map(({ exam, selected }, index) => (
                <Grid key={index} mr={1}>
                  <Button
                    variant={selected ? "contained" : "outlined"}
                    style={
                      selected ? buttonSelectedStyle : buttonNotSelectedStyle
                    }
                    onClick={() => handleCheckboxChange(3, index)}
                  >
                    {`${exam}`}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={4}>
            <Typography>Engineering</Typography>
            <Grid style={{ display: "flex" }}>
              {checkboxes.engineering.map(({ exam, selected }, index) => (
                <Grid key={index} mr={1}>
                  <Button
                    variant={selected ? "contained" : "outlined"}
                    style={
                      selected ? buttonSelectedStyle : buttonNotSelectedStyle
                    }
                    onClick={() => handleCheckboxChange(1, index)}
                  >
                    {`${exam}`}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={4}>
            <Typography>Medical</Typography>
            <Grid style={{ display: "flex" }}>
              {checkboxes.medical.map(({ exam, selected }, index) => (
                <Grid key={index} mr={1}>
                  <Button
                    variant={selected ? "contained" : "outlined"}
                    style={
                      selected ? buttonSelectedStyle : buttonNotSelectedStyle
                    }
                    onClick={() => handleCheckboxChange(2, index)}
                  >
                    {`${exam}`}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Third Row */}
        <Grid container spacing={6} mt={2}>
          <Grid item xs={4}>
            <Typography>
              Other (If any entrance/criteria is not in the list)
            </Typography>
            <TextField
              placeholder="Type Here"
              fullWidth
              size="small"
              value={textInput}
              onChange={handleTextInputChange}
            />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default EntranceExams;
