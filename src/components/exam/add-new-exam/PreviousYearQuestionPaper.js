import React, { useState } from "react";
import {
  IconButton,
  Box,
  Grid,
  TextField,
  Container,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";

const PreviousYearQuestionPaper = () => {
  const [addMoreStudyMaterial, setAddMoreStudyMaterial] = useState([""]);

  return (
    <>
      <Container>
        <Grid>
          <Typography variant="h5" gutterBottom>
            PREVIOUS YEAR QUESTION PAPER
          </Typography>
          <Typography>
            This section is to add all previous year papers
          </Typography>
        </Grid>

        {addMoreStudyMaterial.map((data, index) => (
          <Grid container mt={4} mb={4} spacing={2} key={index}>
            <Grid item xs={4}>
              <label htmlFor="image-input">
                <Box
                  border={1}
                  borderColor="grey.500"
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
                    <FileUploadIcon fontSize="large" color="primary" />
                  </IconButton>
                  Upload PDFs of question <br /> papers and answer keys
                  {/* You can display the selected image here if needed */}
                </Box>
              </label>
            </Grid>

            <Grid item xs={8}>
              <Grid container spacing={2} mb={4}>
                <Grid item xs={6}>
                  <Typography>Enter Exam</Typography>
                  <FormControl fullWidth size="small">
                    <Select defaultValue={""}>
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                      <MenuItem value="3">3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <Typography>Year of Paper</Typography>
                  <FormControl fullWidth size="small">
                    <Select defaultValue={""}>
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                      <MenuItem value="3">3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container spacing={2} mb={4}>
                <Grid item xs={6}>
                  <Typography>Date of Paper</Typography>
                  <TextField type="date" fullWidth size="small" />
                </Grid>
                <Grid item xs={6}>
                  <Typography>Mode of Paper</Typography>
                  <FormControl fullWidth size="small">
                    <Select defaultValue={""}>
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                      <MenuItem value="3">3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container spacing={2} mt={2}>
                <Grid item xs={6}>
                  <Typography>Links (if any)</Typography>
                  <Grid container>
                    <TextField
                      // fullWidth
                      // label="Description"
                      //   style={{ width: "78%", marginRight: 5 }}
                      placeholder="Type here"
                      variant="outlined"
                      size="small"
                    />
                    <Button variant="outlined">+</Button>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Typography>Add Description to the paper</Typography>
                  <TextField
                    size="small"
                    placeholder="Describe here"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}

        <Button
          m={2}
          variant="outlined"
          color="primary"
          onClick={() => setAddMoreStudyMaterial([...addMoreStudyMaterial, ""])}
        >
          + Add More Material
        </Button>
      </Container>
    </>
  );
};

export default PreviousYearQuestionPaper;
