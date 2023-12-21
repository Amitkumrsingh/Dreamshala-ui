import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  IconButton,
  Container,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const MyForm = ({ setPhotos }) => {
  const theme = useTheme();
  const secondaryColor = theme.palette.text.secondary;
  const primaryColor = theme.palette.primary.main;

  const buttonSelectedStyle = {
    color: primaryColor,
    borderColor: primaryColor,
  };

  const buttonNotSelectedStyle = {
    color: secondaryColor,
    borderColor: secondaryColor,
  };

  const [addMorePhotos, setAddMorePhotos] = useState([""]);
  const [buttons, setButtons] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [selectedCategory, setSelectedCategory] = useState({
    category: "",
    index: -1,
  });

  const handleButtonChange = (item, index) => {
    if (item === selectedCategory.category) {
      setSelectedCategory({ category: "", index: -1 });
    } else {
      setSelectedCategory({ category: item, index: index });
      setFormData({ ...formData, photo_category: item });
    }
  };

  const [formData, setFormData] = useState({
    photo: null,
    photo_description: "",
    photo_keywords_meta_tags: "",
    photo_category: selectedCategory.category,
  });

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleFileChange = (event) => {
    setFormData({ ...formData, photo: event.target.files[0] });
  };

  useEffect(() => {
    setPhotos(formData);
  }, [formData, setPhotos, selectedCategory]);

  return (
    <Container>
      <Typography
        variant="h5"
        gutterBottom
        borderLeft={"4px solid " + theme.palette.primary.main}
        padding={1}
      >
        <em>
          <strong>PHOTOS </strong>
        </em>
      </Typography>
      <Typography mb={4} mt={8}>
        Photos to give a glimpse of your class
      </Typography>
      {addMorePhotos.map((d, index) => (
        <Grid key={index} container spacing={6} mb={6}>
          <Grid item xs={4}>
            {/* 1st Column - Image Input */}
            <label htmlFor="photo-input">
              <Box
                border={"2px dashed"}
                borderColor={secondaryColor}
                borderRadius="4px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                padding="20px"
                height={"100%"}
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                  id="photo-input"
                />

                {formData.photo ? (
                  formData.photo.name
                ) : (
                  <IconButton component="span">
                    <AddPhotoAlternateIcon
                      fontSize="large"
                      color={secondaryColor}
                    />
                  </IconButton>
                )}
                {/* You can display the selected image here if needed */}
              </Box>
            </label>
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={6}>
              <Grid xs={6} item>
                {/* 2nd Column - Text Input for Description */}

                <Typography variant="h6">
                  Add Description to the photo
                </Typography>
                <TextField
                  fullWidth
                  //   label="Describe here"
                  placeholder="Describe here"
                  variant="outlined"
                  value={formData.photo_description}
                  onChange={handleInputChange("photo_description")}
                  multiline
                  minRows={5}
                  maxRows={5}
                />
              </Grid>
              <Grid xs={6} item>
                {/* 3rd Column - Checkboxes as Buttons */}

                <Typography variant="h6">Photo Category</Typography>

                <Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} md={4} mb={2.5}>
                      <Button
                        variant={"outlined"}
                        style={
                          selectedCategory.index === 0
                            ? buttonSelectedStyle
                            : buttonNotSelectedStyle
                        }
                        onClick={() => handleButtonChange("Classroom", 0)}
                        fullWidth
                      >
                        Classroom
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <Button
                        variant={"outlined"}
                        style={
                          selectedCategory.index === 1
                            ? buttonSelectedStyle
                            : buttonNotSelectedStyle
                        }
                        // style={{ margin: "5px" }}
                        onClick={() => handleButtonChange("Infrastructure", 1)}
                        fullWidth
                      >
                        Infrastructure
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <Button
                        variant={"outlined"}
                        style={
                          selectedCategory.index === 2
                            ? buttonSelectedStyle
                            : buttonNotSelectedStyle
                        }
                        // style={{ margin: "5px" }}
                        onClick={() => handleButtonChange("Study Material", 2)}
                        fullWidth
                      >
                        Study Material
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} md={4} mb={2.5}>
                      <Button
                        variant={"outlined"}
                        style={
                          selectedCategory.index === 3
                            ? buttonSelectedStyle
                            : buttonNotSelectedStyle
                        }
                        // style={{ margin: "5px" }}
                        onClick={() => handleButtonChange("People", 3)}
                        fullWidth
                      >
                        People
                      </Button>
                    </Grid>

                    <Grid item xs={12} sm={4} md={4}>
                      <Button
                        variant={"outlined"}
                        style={
                          selectedCategory.index === 4
                            ? buttonSelectedStyle
                            : buttonNotSelectedStyle
                        }
                        // style={{ margin: "5px" }}
                        onClick={() => handleButtonChange("Events", 4)}
                        fullWidth
                      >
                        Events
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <Button
                        fullWidth
                        variant={"outlined"}
                        style={
                          selectedCategory.index === 5
                            ? buttonSelectedStyle
                            : buttonNotSelectedStyle
                        }
                        // style={{ margin: "5px" }}
                        onClick={() => handleButtonChange("Environment", 5)}
                      >
                        Environment
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} md={4}>
                      <Button
                        xs={4}
                        variant={"outlined"}
                        style={
                          selectedCategory.index === 6
                            ? buttonSelectedStyle
                            : buttonNotSelectedStyle
                        }
                        // style={{ margin: "5px" }}
                        onClick={() => handleButtonChange("Peer Learning", 6)}
                        fullWidth
                      >
                        Peer Learning
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <Button
                        xs={4}
                        variant={"outlined"}
                        style={
                          selectedCategory.index === 7
                            ? buttonSelectedStyle
                            : buttonNotSelectedStyle
                        }
                        // style={{ margin: "5px" }}
                        onClick={() => handleButtonChange("Other", 7)}
                        fullWidth
                      >
                        Other
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <TextField
                        variant="outlined"
                        placeholder="Type Your Own"
                        size="small"
                        disabled={selectedCategory.index !== -1}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid mt={6}>
              <Typography variant="h6">Enter keywords/ meta tags</Typography>
              <TextField
                fullWidth
                // label="Description"
                placeholder="Type here"
                variant="outlined"
                value={formData.photo_keywords_meta_tags}
                onChange={handleInputChange("photo_keywords_meta_tags")}
              />
            </Grid>
          </Grid>
        </Grid>
      ))}

      <Button
        m={2}
        variant="outlined"
        color="primary"
        onClick={() => setAddMorePhotos([...addMorePhotos, ""])}
      >
        + Add More Photos
      </Button>
    </Container>
  );
};

export default MyForm;
