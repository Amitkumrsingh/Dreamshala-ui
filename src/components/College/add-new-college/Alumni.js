import React, { useState, useEffect } from "react";
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
import {
  checkUrl,
  generateYearsArray,
} from "../../../services/componentsFunctions";

const Alumni = ({ setAlumni }) => {
  const theme = useTheme();
  const placeholderColor = theme.palette.text.secondary;

  const [addMoreFaculties, setAddMoreFaculties] = useState([""]);

  const [formData, setFormData] = useState({
    photo: null,
    degree: "",
    year_of_graduation: "",
    latest_position_achievement: "",
    links: "",
    name: "",
    almuni_experience: "",
  });

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleFileChange = (event) => {
    setFormData({ ...formData, photo: event.target.files[0] });
  };

  useEffect(() => {
    setAlumni(formData);
  }, [formData, setAlumni]);

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
                  htmlFor="alumni-image"
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
                      id="alumni-image"
                      type="file"
                      onChange={handleFileChange}
                    />
                    {formData.photo ? (
                      formData.photo.name
                    ) : (
                      <IconButton component="span">
                        <AddPhotoAlternateIcon
                          fontSize="medium"
                          color={placeholderColor}
                        />
                      </IconButton>
                    )}
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
                    value={formData.name}
                    onChange={handleInputChange("name")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>Experience</Typography>
                  <TextField
                    fullWidth
                    // label="Description"
                    placeholder="Type here"
                    variant="outlined"
                    size="small"
                    type="number"
                    InputProps={{ inputProps: { min: 0 } }}
                    value={formData.almuni_experience}
                    onChange={handleInputChange("almuni_experience")}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={10 / 3}>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  <Typography>Degree</Typography>
                  <TextField
                    fullWidth
                    // label="Description"
                    placeholder="Type here"
                    variant="outlined"
                    size="small"
                    value={formData.degree}
                    onChange={handleInputChange("degree")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>Latest Position/ Achievement</Typography>
                  <TextField
                    fullWidth
                    // label="Description"
                    placeholder="Type here"
                    variant="outlined"
                    size="small"
                    value={formData.latest_position_achievement}
                    onChange={handleInputChange("latest_position_achievement")}
                  />
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
                      value={formData.year_of_graduation}
                      onChange={handleInputChange("year_of_graduation")}
                      displayEmpty
                      style={{
                        color:
                          formData.year_of_graduation === "" &&
                          placeholderColor,
                      }}
                    >
                      <MenuItem value={""} disabled>
                        Select/ Type Here
                      </MenuItem>
                      {generateYearsArray(1980, 2023).map((year) => (
                        <MenuItem key={year} value={year}>
                          {year}
                        </MenuItem>
                      ))}

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
                    value={formData.links}
                    onChange={handleInputChange("links")}
                    error={
                      formData.links === "" ? false : !checkUrl(formData.links)
                    }
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
