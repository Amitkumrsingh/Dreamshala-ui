import React, { useState, useEffect } from "react";
import {
  IconButton,
  Box,
  Button,
  Grid,
  TextField,
  Container,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { checkUrl } from "../../../services/componentsFunctions";

const Faculties = ({ setFaculties }) => {
  const theme = useTheme();
  const secondaryColor = theme.palette.text.secondary;

  const [addMoreFaculties, setAddMoreFaculties] = useState([""]);
  const [formData, setFormData] = useState({
    faculty_photo: null,
    faculty_name: "",
    specialization: "",
    background: "",
    experience: "",
    base_city_faculty: "",
    faculty_links: "",
  });

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleFileChange = (event) => {
    setFormData({ ...formData, faculty_photo: event.target.files[0] });
  };

  useEffect(() => {
    setFaculties(formData);
  }, [setFaculties, formData]);

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
              <strong>FACULTIES </strong>
            </em>
          </Typography>
        </Grid>

        {addMoreFaculties.map((d, index) => (
          <Grid container spacing={6} key={index} mb={6}>
            <Grid item xs={2}>
              Add Photo
              <label
                htmlFor="faculty-image"
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
                  mt={4}
                >
                  <input
                    accept="image/*"
                    style={{ display: "none" }}
                    id="faculty-image"
                    type="file"
                    onChange={handleFileChange}
                  />
                  {formData.faculty_photo ? (
                    formData.faculty_photo.name
                  ) : (
                    <IconButton component="span">
                      <AddPhotoAlternateIcon
                        fontSize="medium"
                        color={secondaryColor}
                      />
                    </IconButton>
                  )}
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
                    value={formData.faculty_name}
                    onChange={handleInputChange("faculty_name")}
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
                    value={formData.experience}
                    onChange={handleInputChange("experience")}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={10 / 3}>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  <Typography>Specialisation</Typography>
                  <TextField
                    fullWidth
                    // label="Description"
                    placeholder="Type here"
                    variant="outlined"
                    size="small"
                    value={formData.specialization}
                    onChange={handleInputChange("specialization")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>Base City</Typography>
                  <TextField
                    fullWidth
                    // label="Description"
                    placeholder="Type here"
                    variant="outlined"
                    size="small"
                    value={formData.base_city_faculty}
                    onChange={handleInputChange("base_city_faculty")}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={10 / 3}>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  <Typography>Background</Typography>
                  <TextField
                    fullWidth
                    // label="Description"
                    placeholder="Type here"
                    variant="outlined"
                    size="small"
                    value={formData.background}
                    onChange={handleInputChange("background")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>Links (if any)</Typography>
                  <TextField
                    fullWidth
                    // label="Description"
                    placeholder="Type here"
                    variant="outlined"
                    size="small"
                    value={formData.faculty_links}
                    onChange={handleInputChange("faculty_links")}
                    error={
                      formData.faculty_links === ""
                        ? false
                        : !checkUrl(formData.faculty_links)
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
            + Add More Faculty
          </Button>
        </Grid>
      </Container>
    </>
  );
};

export default Faculties;
