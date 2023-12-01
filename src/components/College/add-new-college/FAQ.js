import React, { useState } from "react";

import { Button, Grid, TextField, Container, Typography } from "@mui/material";

const FAQ = () => {
  const [addMoreFAQ, setAddMoreFAQ] = useState([""]);
  return (
    <>
      <Container>
        <Grid>
          <Typography variant="h5">FREQUENTLY ASKED QUESTIONS</Typography>
        </Grid>

        {addMoreFAQ.map((data, index) => (
          <Grid
            key={index}
            container
            spacing={6}
            mt={2}
            flexDirection={"column"}
            mb={6}
          >
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
        <Grid>
          <Button
            m={2}
            variant="outlined"
            color="primary"
            onClick={() => setAddMoreFAQ([...addMoreFAQ, ""])}
          >
            + Add More
          </Button>
        </Grid>
      </Container>
    </>
  );
};

export default FAQ;
