import React from "react";
import {
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

const ImportantDates = () => {
  return (
    <>
      <Container>
        <Grid mb={4}>
          <Typography variant="h5">IMPORTANT DATES</Typography>
        </Grid>

        <Grid mb={4}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography>Registration Date</Typography>
              <Grid container spacing={2}>
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

          <Grid container spacing={2} mt={2}>
            <Grid item xs={4}>
              <Typography>Exam Dates</Typography>
              <Grid container spacing={2}>
                <Grid item xs={10}>
                  <TextField type="date" fullWidth size="small" />
                </Grid>
                <Grid item xs={2}>
                  <Button variant="outlined">+</Button>
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
