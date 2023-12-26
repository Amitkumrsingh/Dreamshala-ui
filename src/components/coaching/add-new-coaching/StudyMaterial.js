import React, { useState, useEffect } from "react";
import {
  IconButton,
  Box,
  Grid,
  TextField,
  Container,
  Typography,
  FormControl,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { checkUrl } from "../../../services/componentsFunctions";

const StudyMaterial = ({ setStudyMaterial }) => {
  const theme = useTheme();
  const secondaryColor = theme.palette.text.secondary;
  // const primaryColor = theme.palette.text.primary;

  const buttonNotSelectedStyle = {
    color: secondaryColor,
    borderColor: secondaryColor,
  };

  const [addMoreStudyMaterial, setAddMoreStudyMaterial] = useState([""]);
  const [linkInputs, setLinkInputs] = useState([""]);
  const [formData, setFormData] = useState({
    material_file: null,
    material_description: "",
    links: "",
    exams_who_can_refer: "",
    keywords_meta_tags: "",
  });

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleFileChange = (event) => {
    setFormData({ ...formData, material_file: event.target.files[0] });
  };

  useEffect(() => {
    setStudyMaterial(formData);
  }, [formData, setStudyMaterial]);

  return (
    <>
      <Container>
        <Grid>
          <Typography
            variant="h5"
            gutterBottom
            borderLeft={"4px solid " + theme.palette.primary.main}
            padding={1}
            mb={2}
          >
            <em>
              <strong>STUDY MATERIAL </strong>
            </em>
          </Typography>
          <Typography>
            This section is to add all the free study material for students
          </Typography>
        </Grid>

        {addMoreStudyMaterial.map((data, index) => (
          <Grid container mt={2} mb={6} spacing={6} key={index}>
            <Grid item xs={4}>
              <label htmlFor="image-input">
                <Box
                  border={1}
                  borderColor={secondaryColor}
                  borderRadius="4px"
                  display="flex"
                  flexDirection={"column"}
                  alignItems="center"
                  justifyContent="center"
                  height={"100%"}
                >
                  <input
                    type="file"
                    // accept="image/*"
                    // onChange={handleImageChange}
                    style={{ display: "none" }}
                    id="image-input"
                    onChange={handleFileChange}
                  />
                  <IconButton component="span">
                    <FileUploadIcon fontSize="large" color={secondaryColor} />
                  </IconButton>
                  {formData.material_file
                    ? formData.material_file.name
                    : "Upload photos, Videos, PDF's"}
                  {/* You can display the selected image here if needed */}
                </Box>
              </label>
            </Grid>

            <Grid item xs={8}>
              <Grid container spacing={6}>
                <Grid item xs={6}>
                  <Typography>Add Description to the material</Typography>
                  <TextField
                    fullWidth
                    // label="Description"
                    placeholder="Describe here"
                    variant="outlined"
                    multiline
                    minRows={2}
                    maxRows={3}
                    value={formData.material_description}
                    onChange={handleInputChange("material_description")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography>Enter Keywords/ meta tags</Typography>
                  <TextField
                    fullWidth
                    // label="Description"
                    placeholder="Type here"
                    variant="outlined"
                    multiline
                    minRows={2}
                    maxRows={3}
                    value={formData.keywords_meta_tags}
                    onChange={handleInputChange("keywords_meta_tags")}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={6} mt={2}>
                <Grid item xs={6}>
                  <Typography>Links (if any)</Typography>
                  <Grid container alignItems={"end"} spacing={2}>
                    <Grid xs={10} item>
                      {linkInputs.map((link, index) => (
                        <Grid
                          key={index}
                          mb={index + 1 !== linkInputs.length ? 2 : 0}
                        >
                          <TextField
                            key={index}
                            placeholder={`Link ${index + 1}`}
                            size="small"
                            margin="none"
                            fullWidth
                            value={formData.links}
                            onChange={handleInputChange("links")}
                            error={
                              formData.links === ""
                                ? false
                                : !checkUrl(formData.links)
                            }
                          />
                        </Grid>
                      ))}
                    </Grid>

                    <Grid xs={2} mb={0} item>
                      <Button
                        variant="outlined"
                        style={buttonNotSelectedStyle}
                        onClick={() => setLinkInputs([...linkInputs, ""])}
                      >
                        +
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Typography>Enter Exams who can refer</Typography>
                  <FormControl fullWidth size="small">
                    {/* <InputLabel>Select/ Type Here</InputLabel> */}
                    <Select
                      value={formData.exams_who_can_refer}
                      onChange={handleInputChange("exams_who_can_refer")}
                      displayEmpty
                      style={{
                        color:
                          formData.exams_who_can_refer === "" && secondaryColor,
                      }}
                    >
                      <MenuItem value={""} disabled>
                        Select/ Type Here
                      </MenuItem>
                      {/* <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                      <MenuItem value="3">3</MenuItem> */}
                      {/* Add more exam options as needed */}
                    </Select>
                  </FormControl>
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
            onClick={() =>
              setAddMoreStudyMaterial([...addMoreStudyMaterial, ""])
            }
          >
            + Add More Material
          </Button>
        </Grid>
      </Container>
    </>
  );
};

export default StudyMaterial;
