import React, { useState } from "react";
import { Container, Grid, TextField, Typography, Button } from "@mui/material";

const ImportantNews = () => {
  const [addMoreNews, setAddMoreNews] = useState([""]);
  return (
    <>
      <Container>
        <Grid mb={4}>
          <Typography variant="h5">IMPORTANT NEWS</Typography>
        </Grid>

        {addMoreNews.map((data, index) => (
          <Grid container spacing={2} mb={4} key={index}>
            <Grid item xs={8}>
              <Typography>Post a news</Typography>
              <TextField
                placeholder="Describe Here"
                type="text"
                multiline
                minRows={2.5}
                fullWidth
              />
            </Grid>

            <Grid xs={4} item>
              <Typography>News Category</Typography>
              <Grid>
                <Grid container spacing={2}>
                  <Grid xs={6} item>
                    <Grid mb={2}>
                      <Button variant="outlined" fullWidth>
                        Very Important
                      </Button>
                    </Grid>
                    <Grid>
                      <Button variant="outlined" fullWidth>
                        Medium Important
                      </Button>
                    </Grid>
                  </Grid>

                  <Grid xs={6} item>
                    <Grid mb={2}>
                      <Button variant="outlined" fullWidth>
                        Impotant
                      </Button>
                    </Grid>

                    <Grid>
                      <Button variant="outlined" fullWidth>
                        Less Impotant
                      </Button>
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
          onClick={() => setAddMoreNews([...addMoreNews, ""])}
        >
          + Add More News
        </Button>
      </Container>
    </>
  );
};

export default ImportantNews;
