import React from "react";
import { Container, Grid, TextField, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ImportantDates = () => {
  const theme = useTheme();
  const secondaryColor = theme.palette.text.secondary;

  const buttonNotSelectedStyle = {
    color: secondaryColor,
    borderColor: secondaryColor,
  };

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
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography>Ends At</Typography>
                  <TextField
                    fullWidth
                    // placeholder="Select Here"
                    type="date"
                    size="small"
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
              />
            </Grid>

            <Grid item xs={4}>
              <Typography mb={5}>Result Date</Typography>
              <TextField type="date" size="small" fullWidth />
            </Grid>
          </Grid>

          <Grid item container spacing={6}>
            <Grid item xs={4}>
              <Typography>Exam Dates</Typography>
              <Grid container spacing={2}>
                <Grid item xs={10}>
                  <TextField type="date" fullWidth size="small" />
                </Grid>
                <Grid item xs={2}>
                  <Button variant="outlined" style={buttonNotSelectedStyle}>
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
