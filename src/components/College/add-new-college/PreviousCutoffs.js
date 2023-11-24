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

const PreviousCutoffs = () => {
  const [addMoreCutOffs, setAddMoreCutOffs] = useState([""]);
  return (
    <>
      <Container>
        <Grid mb={4}>
          <Typography variant="h5">PREVIOUS CUTOFFS</Typography>
        </Grid>

        {addMoreCutOffs.map((data, index) => (
          <Grid key={index} mb={4}>
            <Grid container>
              <Grid xs={4} item>
                <Typography>Degree/ Branch</Typography>
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

            <Grid container spacing={2} mt={2}>
              <Grid xs={6} item>
                <Typography>Describe the parameters of cutoffs</Typography>
                <TextField
                  fullWidth
                  placeholder="Describe here"
                  multiline
                  minRows={3.5}
                  maxRows={3.5}
                />
              </Grid>
              <Grid xs={6} item>
                <Grid container spacing={2}>
                  <Grid xs={6} item>
                    <Typography>Select Category</Typography>
                    <FormControl fullWidth size="small">
                      <Select defaultValue={""}>
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid xs={6} item>
                    <Typography>Overall Percentile</Typography>
                    <TextField placeholder="Type Here" size="small" fullWidth />
                  </Grid>
                  <Grid xs={6} item>
                    <Typography>Select Category</Typography>
                    <FormControl fullWidth size="small">
                      <Select defaultValue={""}>
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid xs={6} item>
                    <Typography>Overall Percentile</Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={10}>
                        <TextField
                          placeholder="Type Here"
                          size="small"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={2}>
                        <Button variant="outlined">+</Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid mt={4}>
              <Grid>
                <Typography variant="subtitle2">Subject Wise Cutoff</Typography>
              </Grid>
              <Grid container spacing={2} mt={2}>
                <Grid item xs={4}>
                  <Typography>Select Subject</Typography>
                  <FormControl fullWidth size="small">
                    <Select defaultValue={""}>
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <Typography>Select Category</Typography>
                  <FormControl fullWidth size="small">
                    <Select defaultValue={""}>
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <Typography>Cutoff Percentile</Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={10}>
                      <TextField
                        placeholder="Type Here"
                        size="small"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Button variant="outlined">+</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}

        <Button
          m={2}
          variant="contained"
          color="primary"
          onClick={() => setAddMoreCutOffs([...addMoreCutOffs, ""])}
        >
          + Add More Courses
        </Button>
      </Container>
    </>
  );
};

export default PreviousCutoffs;
