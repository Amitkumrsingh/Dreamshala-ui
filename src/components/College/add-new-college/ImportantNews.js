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
            />
          </Grid>

          <Grid xs={4}>
            <Button>Very Important</Button>
            <Button>Important</Button>
            <Button>Medium Important</Button>
            <Button>Less Important</Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ImportantNews;
