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
import { useTheme } from "@mui/material/styles";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const Faculties = () => {
  const theme = useTheme();
  const secondaryColor = theme.palette.text.secondary;
  const primaryColor = theme.palette.text.primary;

  const [addMoreFaculties, setAddMoreFaculties] = useState([""]);
  const [background, setBackground] = useState("");
  const [experience, setExperience] = useState("");
  const [specialisation, setSpecialisation] = useState("");
  const [baseCity, setBaseCity] = useState("");

  return (
    <>
      <Container>
        <Grid container justifyContent={"space-between"} mb={4}>
          <Typography variant="h5" gutterBottom>
            FACULTIES
          </Typography>
        </Grid>

        {addMoreFaculties.map((d, index) => (
          <Grid container spacing={6} key={index} mb={6}>
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
                  border={"2px dashed"}
                  borderColor={secondaryColor}
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
                      color={secondaryColor}
                    />
                  </IconButton>
                </Box>
              </label>
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
                        color: experience === "" && secondaryColor,
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
                  <Typography>Specialisation</Typography>
                  <FormControl fullWidth size="small">
                    {/* <InputLabel>Select/ Type Here</InputLabel> */}
                    <Select
                      onChange={(e) => setSpecialisation(e.target.value)}
                      value={specialisation}
                      displayEmpty
                      style={{
                        color: specialisation === "" && secondaryColor,
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
                  <Typography>Base City</Typography>
                  <FormControl fullWidth size="small">
                    {/* <InputLabel>Select/ Type Here</InputLabel> */}
                    <Select
                      onChange={(e) => setBaseCity(e.target.value)}
                      value={baseCity}
                      displayEmpty
                      style={{
                        color: baseCity === "" && secondaryColor,
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
                  <Typography>Background</Typography>
                  <FormControl fullWidth size="small">
                    {/* <InputLabel>Select/ Type Here</InputLabel> */}
                    <Select
                      onChange={(e) => setBackground(e.target.value)}
                      value={background}
                      displayEmpty
                      style={{
                        color: background === "" && secondaryColor,
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
            + Add More Faculty
          </Button>
        </Grid>
      </Container>
    </>
  );
};

export default Faculties;
