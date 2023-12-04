import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";

import { Button, Grid, TextField, Container, Typography } from "@mui/material";

const FAQ = () => {
  const theme = useTheme();

  const [addMoreFAQ, setAddMoreFAQ] = useState([""]);
  return (
    <Container>
      <Grid>
        <Typography
          variant="h5"
          gutterBottom
          borderLeft={"4px solid " + theme.palette.primary.main}
          padding={1}
        >
          <em>
            <strong>FREQUENTLY ASKED QUESTIONS </strong>
          </em>
        </Typography>
      </Grid>

      {addMoreFAQ.map((data, index) => (
        <Grid key={index} container spacing={6} mt={2} flexDirection={"column"}>
          <Grid item>
            <Typography>Questions</Typography>
            <TextField
              fullWidth
              placeholder="Type Here"
              type="text"
              size="small"
            />
          </Grid>

          <Grid item>
            <Typography>Answer</Typography>
            <TextField
              fullWidth
              placeholder="Type Here"
              type="text"
              multiline
              minRows={4}
            />
          </Grid>
        </Grid>
      ))}
      <Grid mt={6}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setAddMoreFAQ([...addMoreFAQ, ""])}
        >
          + Add More
        </Button>
      </Grid>
    </Container>
  );
};

export default FAQ;
