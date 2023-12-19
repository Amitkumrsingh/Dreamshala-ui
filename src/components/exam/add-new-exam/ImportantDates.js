import React, { useState, useEffect } from "react";
import { Container, Grid, TextField, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ImportantDates = ({ setImportantDates }) => {
  const theme = useTheme();
  const secondaryColor = theme.palette.text.secondary;

  const buttonNotSelectedStyle = {
    color: secondaryColor,
    borderColor: secondaryColor,
  };
  const [formData, setFormData] = useState({
    registration_start_date: "",
    registration_end_date: "",
    admit_card_release_date: "",
    result_date: "",
    exam_dates: "",
  });

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  useEffect(() => {
    setImportantDates(formData);
  }, [formData, setImportantDates]);

  const [addMoreExamDate, setAddMoreExamDate] = useState([]);

  return (
    <>
      <Container>
        <Grid mb={2}>
          <Typography
            variant="h5"
            gutterBottom
            borderLeft={"4px solid " + theme.palette.primary.main}
            padding={1}
            mb={2}
          >
            <em>
              <strong>IMPORTANT DATES </strong>
            </em>
          </Typography>
        </Grid>

        <Grid mb={6} container flexDirection={"column"} mt={2} spacing={6}>
          <Grid item container spacing={6}>
            <Grid item xs={4}>
              <Typography>Registration Date</Typography>
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <Typography>Starts From</Typography>
                  <TextField
                    fullWidth
                    // placeholder="Select Here"
                    type="date"
                    size="small"
                    value={formData.registration_start_date}
                    onChange={handleInputChange("registration_start_date")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography>Ends At</Typography>
                  <TextField
                    fullWidth
                    // placeholder="Select Here"
                    type="date"
                    size="small"
                    value={formData.registration_end_date}
                    onChange={handleInputChange("registration_end_date")}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={4}>
              <Typography mb={5}>Admid Card Release Date</Typography>
              <TextField
                fullWidth
                // placeholder="Select Here"
                type="date"
                size="small"
                value={formData.admit_card_release_date}
                onChange={handleInputChange("admit_card_release_date")}
              />
            </Grid>

            <Grid item xs={4}>
              <Typography mb={5}>Result Date</Typography>
              <TextField
                type="date"
                size="small"
                fullWidth
                value={formData.result_date}
                onChange={handleInputChange("result_date")}
              />
            </Grid>
          </Grid>

          <Grid item container spacing={6}>
            {addMoreExamDate.map((data, index) => (
              <Grid item xs={4} key={index}>
                <Typography>Exam Date {index + 1}</Typography>
                <TextField
                  type="date"
                  fullWidth
                  size="small"
                  value={formData.exam_dates}
                  onChange={handleInputChange("exam_dates")}
                />
              </Grid>
            ))}

            <Grid item xs={4}>
              <Typography>Exam Date {addMoreExamDate.length + 1}</Typography>
              <Grid container spacing={2}>
                <Grid item xs={10}>
                  <TextField
                    type="date"
                    fullWidth
                    size="small"
                    value={formData.exam_dates}
                    onChange={handleInputChange("exam_dates")}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Button
                    variant="outlined"
                    style={buttonNotSelectedStyle}
                    onClick={() => setAddMoreExamDate([...addMoreExamDate, ""])}
                  >
                    +
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ImportantDates;
