import React, { useState } from "react";
import {
  IconButton,
  Box,
  Button,
  Grid,
  TextField,
  Container,
  Typography,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const Alumni = () => {
  const [addMoreFaculties, setAddMoreFaculties] = useState([""]);
  const [experience, setExperience] = useState("");
  const [degree, setDegree] = useState("");
  const [yearOfGraduation, setYearOfGraduation] = useState("");
  const [latestPosition, setLatestPosition] = useState("");
  return (
    <>
      <Container>
        <Grid container justifyContent={"space-between"} mb={4}>
          <Typography variant="h5" gutterBottom>
            ALUMNI
          </Typography>
        </Grid>

        {addMoreFaculties.map((d, index) => (
          <Grid container spacing={2} key={index} mb={4}>
            <Grid item xs={2}>
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

            <Grid item xs={10 / 3}>
              <Grid>
                <Typography>Name</Typography>
                <TextField
                  fullWidth
                  // label="Description"
                  placeholder="Type here"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid mt={2}>
                <Typography>Experience</Typography>
                <FormControl fullWidth size="small">
                  {/* <InputLabel>Select/ Type Here</InputLabel> */}
                  <Select
                    onChange={(e) => setExperience(e.target.value)}
                    value={experience}
                    displayEmpty
                  >
                    <MenuItem value={""} disabled>
                      Select/ Type Here
                    </MenuItem>
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

            <Grid item xs={10 / 3}>
              <Grid>
                <Typography>Degree</Typography>
                <FormControl fullWidth size="small">
                  {/* <InputLabel>Select/ Type Here</InputLabel> */}
                  <Select
                    onChange={(e) => setDegree(e.target.value)}
                    value={degree}
                    displayEmpty
                  >
                    <MenuItem value={""} disabled>
                      Select/ Type Here
                    </MenuItem>
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
              <Grid mt={2}>
                <Typography>Latest Position/ Achievement</Typography>
                <FormControl fullWidth size="small">
                  {/* <InputLabel>Select/ Type Here</InputLabel> */}
                  <Select
                    onChange={(e) => setLatestPosition(e.target.value)}
                    value={latestPosition}
                    displayEmpty
                  >
                    <MenuItem value={""} disabled>
                      Select/ Type Here
                    </MenuItem>
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
            <Grid item xs={10 / 3}>
              <Grid>
                <Typography>Year of Graduation</Typography>
                <FormControl fullWidth size="small">
                  {/* <InputLabel>Select/ Type Here</InputLabel> */}
                  <Select
                    onChange={(e) => setYearOfGraduation(e.target.value)}
                    value={yearOfGraduation}
                    displayEmpty
                  >
                    <MenuItem value={""} disabled>
                      Select/ Type Here
                    </MenuItem>
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
              <Grid mt={2}>
                <Typography>Links (if any)</Typography>
                <TextField
                  fullWidth
                  // label="Description"
                  placeholder="Type here"
                  variant="outlined"
                  size="small"
                />
              </Grid>
            </Grid>
          </Grid>
        ))}

        <Button
          m={2}
          variant="contained"
          color="primary"
          onClick={() => setAddMoreFaculties([...addMoreFaculties, ""])}
        >
          + Add More Alumni
        </Button>
      </Container>
    </>
  );
};

export default Alumni;
