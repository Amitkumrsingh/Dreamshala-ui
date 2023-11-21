import React from "react";
import {
  IconButton,
  Box,
  Button,
  Grid,
  TextField,
  Container,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const Results = () => {
  const [addMoreResults, setAddMoreResults] = React.useState([""]);
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

        {addMoreResults.map((d, index) => (
          <Grid container spacing={2} key={index}>
            <Grid item xs={3}>
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

            <Grid item xs={3}>
              <Grid>
                <Typography>Name</Typography>
                <TextField
                  fullWidth
                  // label="Description"
                  placeholder="Type here"
                  variant="outlined"
                />
              </Grid>
              <Grid>
                <Typography>All India Rank</Typography>
                <FormControl fullWidth>
                  {/* <InputLabel>Select/ Type Here</InputLabel> */}
                  <Select defaultValue={""}>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="6">6</MenuItem>
                    {/* Add more exam options as needed */}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Grid item xs={3}>
              <Grid>
                <Typography>College secured</Typography>
                <FormControl fullWidth>
                  {/* <InputLabel>Select/ Type Here</InputLabel> */}
                  <Select defaultValue={""}>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="6">6</MenuItem>
                    {/* Add more exam options as needed */}
                  </Select>
                </FormControl>
              </Grid>
              <Grid>
                <Typography>Base City</Typography>
                <FormControl fullWidth>
                  {/* <InputLabel>Select/ Type Here</InputLabel> */}
                  <Select defaultValue={""}>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="6">6</MenuItem>
                    {/* Add more exam options as needed */}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid>
                <Typography>Exam Cracked</Typography>
                <FormControl fullWidth>
                  {/* <InputLabel>Select/ Type Here</InputLabel> */}
                  <Select defaultValue={""}>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="6">6</MenuItem>
                    {/* Add more exam options as needed */}
                  </Select>
                </FormControl>
              </Grid>
              <Typography>Testimonial by Student (if any)</Typography>
              <TextField
                fullWidth
                // label="Description"
                placeholder="Type here"
                variant="outlined"
              />
            </Grid>
          </Grid>
        ))}

        <Button
          m={2}
          variant="contained"
          color="primary"
          onClick={() => setAddMoreResults([...addMoreResults, ""])}
        >
          + Add More Results
        </Button>
      </Container>
    </>
  );
};

export default Results;
