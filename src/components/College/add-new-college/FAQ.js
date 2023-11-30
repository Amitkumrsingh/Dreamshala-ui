import React, { useState } from "react";

import { Button, Grid, TextField, Container, Typography } from "@mui/material";

const FAQ = () => {
  const [addMoreFAQ, setAddMoreFAQ] = useState([""]);
  return (
    <>
      <Container>
        <Grid mb={4}>
          <Typography variant="h5">FREQUENTLY ASKED QUESTIONS</Typography>
        </Grid>

        {addMoreFAQ.map((data, index) => (
          <Grid key={index}>
            <Grid mb={4}>
              <Typography>Questions</Typography>
              <TextField
                fullWidth
                placeholder="Type Here"
                type="text"
                size="small"
              />
            </Grid>

            <Grid mb={4}>
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

        <Button
          m={2}
          variant="outlined"
          color="primary"
          onClick={() => setAddMoreFAQ([...addMoreFAQ, ""])}
        >
          + Add More
        </Button>
      </Container>
    </>
  );
};

export default FAQ;
