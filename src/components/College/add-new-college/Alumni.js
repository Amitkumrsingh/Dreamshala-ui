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
import { useTheme } from "@mui/material/styles";

const Alumni = () => {
  const theme = useTheme();
  const placeholderColor = theme.palette.text.secondary;

  const [addMoreFaculties, setAddMoreFaculties] = useState([""]);
  const [experience, setExperience] = useState("");
  const [degree, setDegree] = useState("");
  const [yearOfGraduation, setYearOfGraduation] = useState("");
  const [latestPosition, setLatestPosition] = useState("");
  return (
    <>
      <Container>
        <Grid container justifyContent={"space-between"} mb={4}>
          <Typography
            variant="h5"
            gutterBottom
            borderLeft={"4px solid " + theme.palette.primary.main}
            padding={1}
          >
            <em>
              <strong>ALUMNI </strong>
            </em>
          </Typography>
        </Grid>

        {addMoreFaculties.map((d, index) => (
          <Grid container spacing={6} key={index} mb={6}>
            <Grid item xs={2}>
              <Typography>Add Photo</Typography>
              <Grid
                container
                alignItems={"center"}
                justifyContent={"center"}
                mt={4}
              >
                <label
                  htmlFor="image"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    border={"2px dashed"}
                    borderColor={placeholderColor}
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
                      <AddPhotoAlternateIcon
                        fontSize="medium"
                        color={placeholderColor}
                      />
                    </IconButton>
                  </Box>
                </label>
              </Grid>
            </Grid>

            <Grid item xs={10 / 3}>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  <Typography>Name</Typography>
                  <TextField
                    fullWidth
                    // label="Description"
                    placeholder="Type here"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>Experience</Typography>
                  <FormControl fullWidth size="small">
                    {/* <InputLabel>Select/ Type Here</InputLabel> */}
                    <Select
                      onChange={(e) => setExperience(e.target.value)}
                      value={experience}
                      displayEmpty
                      style={{
                        color: experience === "" && placeholderColor,
                      }}
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
            </Grid>

            <Grid item xs={10 / 3}>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  <Typography>Degree</Typography>
                  <FormControl fullWidth size="small">
                    {/* <InputLabel>Select/ Type Here</InputLabel> */}
                    <Select
                      onChange={(e) => setDegree(e.target.value)}
                      value={degree}
                      displayEmpty
                      style={{
                        color: degree === "" && placeholderColor,
                      }}
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
                <Grid item xs={12}>
                  <Typography>Latest Position/ Achievement</Typography>
                  <FormControl fullWidth size="small">
                    {/* <InputLabel>Select/ Type Here</InputLabel> */}
                    <Select
                      onChange={(e) => setLatestPosition(e.target.value)}
                      value={latestPosition}
                      displayEmpty
                      style={{
                        color: latestPosition === "" && placeholderColor,
                      }}
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
            </Grid>
            <Grid item xs={10 / 3}>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  <Typography>Year of Graduation</Typography>
                  <FormControl fullWidth size="small">
                    {/* <InputLabel>Select/ Type Here</InputLabel> */}
                    <Select
                      onChange={(e) => setYearOfGraduation(e.target.value)}
                      value={yearOfGraduation}
                      displayEmpty
                      style={{
                        color: yearOfGraduation === "" && placeholderColor,
                      }}
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
                <Grid item xs={12}>
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
          </Grid>
        ))}

        <Grid>
          <Button
            m={2}
            variant="outlined"
            color="primary"
            onClick={() => setAddMoreFaculties([...addMoreFaculties, ""])}
          >
            + Add More Alumni
          </Button>
        </Grid>
      </Container>
    </>
  );
};

export default Alumni;
