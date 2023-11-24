import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Typography,
  Button,
} from "@mui/material";

const ImportantNews = () => {
  return (
    <>
      <Container>
        <Grid mb={4}>
          <Typography variant="h5">IMPORTANT NEWS</Typography>
        </Grid>

        <Grid container spacing={2} mb={4}>
          <Grid item xs={8}>
            <Typography>Post a news</Typography>
            <TextField
              placeholder="Describe Here"
              type="text"
              multiline
              minRows={2}
              fullWidth
            />
          </Grid>

          <Grid xs={4}>
            <Typography>News Category</Typography>
            <Grid>
              <Grid container>
                <Grid item xs={12} sm={4} md={4}>
                  <Button variant="contained">Very Important</Button>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <Button variant="contained">Important</Button>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12} sm={4} md={4}>
                  <Button variant="contained">Medium Important</Button>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <Button variant="contained">Less Important</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ImportantNews;
