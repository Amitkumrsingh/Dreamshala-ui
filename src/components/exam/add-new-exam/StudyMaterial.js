import React, { useState } from "react";
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

const StudyMaterial = () => {
  const theme = useTheme();
  const secondaryColor = theme.palette.text.secondary;
  // const primaryColor = theme.palette.text.primary;

  const buttonNotSelectedStyle = {
    color: secondaryColor,
    borderColor: secondaryColor,
  };

  const [addMoreStudyMaterial, setAddMoreStudyMaterial] = useState([""]);
  const [examsWhoCanRefer, setExamsWhoCanRefer] = useState("");

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
          <Grid container mt={2} spacing={6} key={index}>
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
                    accept="image/*"
                    // onChange={handleImageChange}
                    style={{ display: "none" }}
                    id="image-input"
                  />
                  <IconButton component="span">
                    <FileUploadIcon fontSize="large" color={secondaryColor} />
                  </IconButton>
                  Upload photos, Videos, PDF's
                  {/* You can display the selected image here if needed */}
                </Box>
              </label>
            </Grid>

            <Grid item xs={8} container spacing={6}>
              <Grid container spacing={6} item>
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
                  />
                </Grid>
              </Grid>

              <Grid container spacing={6} item>
                <Grid item xs={6}>
                  <Typography>Material Category</Typography>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Button
                        variant="outlined"
                        size="small"
                        style={buttonNotSelectedStyle}
                      >
                        Books
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="outlined"
                        size="small"
                        style={buttonNotSelectedStyle}
                      >
                        Mock Tests
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="outlined"
                        size="small"
                        style={buttonNotSelectedStyle}
                      >
                        Articles
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="outlined"
                        size="small"
                        style={buttonNotSelectedStyle}
                      >
                        Research Papers
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Typography>Enter Exams who can refer</Typography>
                  <FormControl fullWidth size="small">
                    {/* <InputLabel>Select/ Type Here</InputLabel> */}
                    <Select
                      onChange={(e) => setExamsWhoCanRefer(e.target.value)}
                      value={examsWhoCanRefer}
                      displayEmpty
                      style={{
                        color: examsWhoCanRefer === "" && secondaryColor,
                      }}
                    >
                      <MenuItem value={""} disabled>
                        Select/ Type Here
                      </MenuItem>
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                      <MenuItem value="3">3</MenuItem>
                      {/* Add more exam options as needed */}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={6} item>
                <Grid item xs={6}>
                  <Typography>Links (if any)</Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={10}>
                      <TextField
                        placeholder="Type here"
                        variant="outlined"
                        size="small"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Button
                        variant="outlined"
                        style={buttonNotSelectedStyle}
                        fullWidth
                      >
                        +
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}></Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}

        <Grid mt={6}>
          <Button
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
