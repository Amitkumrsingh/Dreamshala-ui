import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  IconButton,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import FileUploadIcon from "@mui/icons-material/FileUpload";

const Brochure = () => {
  const [image, setImage] = useState(null);
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  return (
    <>
      <Typography variant="h5" mb={4}>
        BROCHURE
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <label htmlFor="image-input">
            <Box
              border={1}
              borderColor="grey.500"
              borderRadius="4px"
              display="flex"
              flexDirection="column"
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
                <FileUploadIcon fontSize="large" color="primary" />
              </IconButton>
              Upload Brochure
            </Box>
          </label>
        </Grid>

        <Grid item xs={4}>
          <Grid>
            <Typography>Add Description to the Brochure</Typography>
            <TextField
              placeholder="Describe here"
              fullWidth
              multiline
              minRows={3}
              maxRows={3}
            />
          </Grid>
          <Grid mt={2}>
            <Typography>Links (if any)</Typography>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <TextField placeholder="Describe here" fullWidth size="small" />
              </Grid>
              <Grid item xs={2}>
                <Button variant="outlined">+</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid>
            <Typography>Enter keywords/ meta tags</Typography>
            <TextField
              placeholder="Describe here"
              fullWidth
              multiline
              minRows={3}
              maxRows={3}
            />
          </Grid>
          <Grid mt={2}>
            <Typography>Enter Exams who can refer</Typography>
            <FormControl fullWidth size="small">
              <Select defaultValue={""}>
                <MenuItem value="1"> 1</MenuItem>
                <MenuItem value="2"> 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Brochure;
