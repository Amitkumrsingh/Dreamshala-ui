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
  const placeholderColor = theme.palette.text.secondary;
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

            <Grid item xs={10 / 3}>
              <Grid>
                <Typography>Specialisation</Typography>
                <FormControl fullWidth size="small">
                  {/* <InputLabel>Select/ Type Here</InputLabel> */}
                  <Select
                    onChange={(e) => setSpecialisation(e.target.value)}
                    value={specialisation}
                    displayEmpty
                    style={{
                      color: specialisation === "" && placeholderColor,
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
              <Grid mt={2}>
                <Typography>Base City</Typography>
                <FormControl fullWidth size="small">
                  {/* <InputLabel>Select/ Type Here</InputLabel> */}
                  <Select
                    onChange={(e) => setBaseCity(e.target.value)}
                    value={baseCity}
                    displayEmpty
                    style={{
                      color: baseCity === "" && placeholderColor,
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
            <Grid item xs={10 / 3}>
              <Grid>
                <Typography>Background</Typography>
                <FormControl fullWidth size="small">
                  {/* <InputLabel>Select/ Type Here</InputLabel> */}
                  <Select
                    onChange={(e) => setBackground(e.target.value)}
                    value={background}
                    displayEmpty
                    style={{
                      color: background === "" && placeholderColor,
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
          + Add More Faculty
        </Button>
      </Container>
    </>
  );
};

export default Faculties;
