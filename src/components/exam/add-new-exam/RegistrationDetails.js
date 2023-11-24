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

const RegistrationDetails = () => {
  return (
    <>
      <Container>
        <Grid mb={4}>
          <Typography variant="h5">REGISTRATION DETAILS</Typography>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography>Website for registration</Typography>
            <TextField
              type="text"
              placeholder="Type Here"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <Typography>Registration Mode</Typography>
            <FormControl fullWidth size="small">
              <Select defaultValue={""}>
                <MenuItem value="1"> 1</MenuItem>
                <MenuItem value="2"> 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <Typography>Payment Modes Available</Typography>
            <FormControl fullWidth size="small">
              <Select defaultValue={""}>
                <MenuItem value="1"> 1</MenuItem>
                <MenuItem value="2"> 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid mt={4}>
          <Grid>
            <Typography variant="h6">Registration</Typography>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Grid container spacing={2} mt={2}>
                <Grid item xs={6}>
                  <Typography>Category</Typography>
                  <FormControl fullWidth size="small">
                    <Select defaultValue={""}>
                      <MenuItem value="1"> 1</MenuItem>
                      <MenuItem value="2"> 2</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <Typography>Fees</Typography>
                  <TextField placeholder="Type Here" size="small" fullWidth />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid container spacing={2} mt={2}>
                <Grid item xs={6}>
                  <Typography>Category</Typography>
                  <FormControl fullWidth size="small">
                    <Select defaultValue={""}>
                      <MenuItem value="1"> 1</MenuItem>
                      <MenuItem value="2"> 2</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <Typography>Fees</Typography>
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

            <Grid item xs={4}></Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default RegistrationDetails;
