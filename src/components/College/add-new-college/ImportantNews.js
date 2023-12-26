import React, { useState, useEffect } from "react";
import { Container, Grid, TextField, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ImportantNews = ({ setImportantNews }) => {
  const theme = useTheme();
  const secondaryColor = theme.palette.text.secondary;
  const primaryColor = theme.palette.text.primary;

  const buttonSelectedStyle = {
    borderColor: primaryColor,
  };

  const handleButtonClick = (item) => {
    if (formData.news_category === item) {
      setFormData({ ...formData, news_category: "" });
    } else {
      setFormData({ ...formData, news_category: item });
    }
  };

  const buttonNotSelectedStyle = {
    color: secondaryColor,
    borderColor: secondaryColor,
  };

  const [formData, setFormData] = useState({
    important_news: "",
    news_category: "",
  });

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  useEffect(() => {
    setImportantNews(formData);
  }, [setImportantNews, formData]);

  const [addMoreNews, setAddMoreNews] = useState([""]);
  return (
    <>
      <Container>
        <Grid mb={4}>
          <Typography
            variant="h5"
            gutterBottom
            borderLeft={"4px solid " + theme.palette.primary.main}
            padding={1}
          >
            <em>
              <strong>IMPORTANT NEWS </strong>
            </em>
          </Typography>
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
                value={formData.important_news}
                onChange={handleInputChange("important_news")}
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
                        style={
                          formData.news_category === "very_imp"
                            ? {}
                            : buttonNotSelectedStyle
                        }
                        onClick={() => handleButtonClick("very_imp")}
                      >
                        Very Important
                      </Button>
                    </Grid>
                    <Grid>
                      <Button
                        variant="outlined"
                        fullWidth
                        style={
                          formData.news_category === "medium_imp"
                            ? {}
                            : buttonNotSelectedStyle
                        }
                        onClick={() => handleButtonClick("medium_imp")}
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
                        style={
                          formData.news_category === "imp"
                            ? {}
                            : buttonNotSelectedStyle
                        }
                        onClick={() => handleButtonClick("imp")}
                      >
                        Impotant
                      </Button>
                    </Grid>

                    <Grid>
                      <Button
                        variant="outlined"
                        fullWidth
                        style={
                          formData.news_category === "less_imp"
                            ? {}
                            : buttonNotSelectedStyle
                        }
                        onClick={() => handleButtonClick("less_imp")}
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
