import React from "react";
import {
  IconButton,
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Grid,
  TextField,
  Container,
  Typography,
  Input,
  InputAdornment,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const Results = () => {
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    // Handle the selected file here
    console.log("Selected file:", selectedFile);
  };
  return (
    <>
      <Container>
        <Grid container justifyContent={"space-between"}>
          <Typography variant="h5" gutterBottom>
            RESULTS
          </Typography>
          <label htmlFor="image-input">
            <Box
              border={1}
              borderColor="grey.500"
              borderRadius="4px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              paddingRight={"10px"}
            >
              <input
                type="file"
                accept="file/*"
                //   onChange={handleImageChange}
                style={{ display: "none" }}
                id="image-input"
              />
              <IconButton component="span">
                <UploadFileIcon fontSize="small" color="primary" />
              </IconButton>
              Upload Excel
              {/* You can display the selected image here if needed */}
            </Box>
          </label>
        </Grid>
        <Grid container spacing={2}>
          {/* Row 1 */}
          <Grid item xs={12} sm={2}>
            Add Photo
            <label
              htmlFor="image"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                border={1}
                borderColor="primary.main"
                borderRadius="50%"
                p={2}
                textAlign="center"
                width={90}
                height={90}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                cursor="pointer"
              >
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="image"
                  type="file"
                  //   onChange={handleFileChange}
                />
                <IconButton component="span">
                  <AddPhotoAlternateIcon fontSize="medium" color="primary" />
                </IconButton>
              </Box>
            </label>
          </Grid>

          <Grid item>
            <Grid>1</Grid>
            <Grid>2</Grid>
          </Grid>
          <Grid item>
            <Grid>3</Grid>
            <Grid>4</Grid>
          </Grid>
          <Grid item>
            <Grid>5</Grid>
            <Grid>6</Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Results;
