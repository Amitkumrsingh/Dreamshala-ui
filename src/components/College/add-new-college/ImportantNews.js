import React, { useState } from "react";
import { Container, Grid, TextField, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ImportantNews = () => {
  const theme = useTheme();
  const secondaryColor = theme.palette.text.secondary;
  const primaryColor = theme.palette.text.primary;

  const buttonSelectedStyle = {
    color: primaryColor,
  };

  const buttonNotSelectedStyle = {
    color: secondaryColor,
    borderColor: secondaryColor,
  };

  const [addMoreNews, setAddMoreNews] = useState([""]);
  return (
    <>
      <Container>
        <Grid mb={4}>
          <Typography variant="h5">IMPORTANT NEWS</Typography>
        </Grid>

        {addMoreNews.map((data, index) => (
          <Grid container spacing={6} mb={6} key={index}>
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
                      <Button
                        variant="outlined"
                        fullWidth
                        style={buttonNotSelectedStyle}
                      >
                        Very Important
                      </Button>
                    </Grid>
                    <Grid>
                      <Button
                        variant="outlined"
                        fullWidth
                        style={buttonNotSelectedStyle}
                      >
                        Medium Important
                      </Button>
                    </Grid>
                  </Grid>

                  <Grid xs={6} item>
                    <Grid mb={2}>
                      <Button
                        variant="outlined"
                        fullWidth
                        style={buttonNotSelectedStyle}
                      >
                        Impotant
                      </Button>
                    </Grid>

                    <Grid>
                      <Button
                        variant="outlined"
                        fullWidth
                        style={buttonNotSelectedStyle}
                      >
                        Less Impotant
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}

        <Grid>
          <Button
            m={2}
            variant="outlined"
            color="primary"
            onClick={() => setAddMoreNews([...addMoreNews, ""])}
          >
            + Add More News
          </Button>
        </Grid>
      </Container>
    </>
  );
};

export default ImportantNews;
