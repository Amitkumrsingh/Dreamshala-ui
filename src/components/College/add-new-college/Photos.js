import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const MyForm = () => {
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

  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
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

  const handleButtonChange = (item) => {
    const preButtons = buttons;
    preButtons[item] = !preButtons[item];
    setButtons(preButtons);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <>
      <Typography variant="h5" mb={4}>
        PHOTOS
      </Typography>
      <Typography mb={2}>Photos to give a glimpse of your class</Typography>
      {addMorePhotos.map((d, index) => (
        <Grid key={index} container spacing={6} mb={6}>
          <Grid item xs={4}>
            {/* 1st Column - Image Input */}
            <label htmlFor="image-input">
              <Box
                border={"2px dashed"}
                borderColor="grey.500"
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
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                  id="image-input"
                />

                <IconButton component="span">
                  <AddPhotoAlternateIcon fontSize="large" color="primary" />
                </IconButton>
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
                  value={description}
                  onChange={handleDescriptionChange}
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
                        variant={false ? "contained" : "outlined"}
                        color="primary"
                        style={buttonNotSelectedStyle}
                        onClick={() => handleButtonChange(0)}
                        fullWidth
                      >
                        Classrom
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <Button
                        variant={false ? "contained" : "outlined"}
                        color="primary"
                        style={buttonNotSelectedStyle}
                        // style={{ margin: "5px" }}
                        onClick={() => handleButtonChange(1)}
                        fullWidth
                      >
                        Infrastructure
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <Button
                        variant={false ? "contained" : "outlined"}
                        color="primary"
                        style={buttonNotSelectedStyle}
                        // style={{ margin: "5px" }}
                        onClick={() => handleButtonChange(2)}
                        fullWidth
                      >
                        Study Material
                      </Button>
                    </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} md={4} mb={2.5}>
                      <Button
                        variant={false ? "contained" : "outlined"}
                        color="primary"
                        style={buttonNotSelectedStyle}
                        // style={{ margin: "5px" }}
                        onClick={() => handleButtonChange(3)}
                        fullWidth
                      >
                        People
                      </Button>
                    </Grid>

                    <Grid item xs={12} sm={4} md={4}>
                      <Button
                        variant={false ? "contained" : "outlined"}
                        color="primary"
                        style={buttonNotSelectedStyle}
                        // style={{ margin: "5px" }}
                        onClick={() => handleButtonChange(4)}
                        fullWidth
                      >
                        Events
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <Button
                        fullWidth
                        variant={false ? "contained" : "outlined"}
                        color="primary"
                        style={buttonNotSelectedStyle}
                        // style={{ margin: "5px" }}
                        onClick={() => handleButtonChange(5)}
                      >
                        Environment
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} md={4}>
                      <Button
                        xs={4}
                        variant={false ? "contained" : "outlined"}
                        color="primary"
                        style={buttonNotSelectedStyle}
                        // style={{ margin: "5px" }}
                        onClick={() => handleButtonChange(6)}
                        fullWidth
                      >
                        Peer Learning
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <Button
                        xs={4}
                        variant={buttons[7] ? "contained" : "outlined"}
                        color="primary"
                        style={buttonNotSelectedStyle}
                        // style={{ margin: "5px" }}
                        onClick={() => handleButtonChange(7)}
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
                value={description}
                onChange={handleDescriptionChange}
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
    </>
  );
};

export default MyForm;
