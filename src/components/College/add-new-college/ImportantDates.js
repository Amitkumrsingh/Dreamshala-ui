import React, { useState } from "react";
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
  const [addMoreDates, setAddMoreDates] = useState([""]);
  return (
    <>
      <Container>
        <Grid mb={4}>
          <Typography variant="h5">IMPORTANT DATES</Typography>
        </Grid>

        {addMoreDates.map((data, index) => (
          <Grid mb={4} key={index}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography>Date Description</Typography>
                <FormControl fullWidth size="small">
                  {/* <InputLabel>Select/ Type Here</InputLabel> */}
                  <Select defaultValue={""}>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    {/* Add more exam options as needed */}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={2}>
                <Typography>Starts From</Typography>
                <TextField fullWidth size="small" type="date" />
              </Grid>
              <Grid item xs={2}>
                <Typography>Ends At</Typography>
                <TextField fullWidth size="small" type="date" />
                <Typography
                  variant="subtitle2"
                  style={{ textDecoration: "underline" }}
                >
                  Same as Start Date
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>Event Description (if any)</Typography>
                <FormControl fullWidth size="small">
                  {/* <InputLabel>Select/ Type Here</InputLabel> */}
                  <Select defaultValue={""}>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    {/* Add more exam options as needed */}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        ))}

        <Button
          m={2}
          variant="contained"
          color="primary"
          onClick={() => setAddMoreDates([...addMoreDates, ""])}
        >
          + Add More Courses
        </Button>
      </Container>
    </>
  );
};

export default ImportantDates;
