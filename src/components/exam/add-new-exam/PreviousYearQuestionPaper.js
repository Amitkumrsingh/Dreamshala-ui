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

const PreviousYearQuestionPaper = () => {
  const theme = useTheme();
  const secondaryColor = theme.palette.text.secondary;

  const buttonNotSelectedStyle = {
    color: secondaryColor,
    borderColor: secondaryColor,
  };

  const [exams, setExams] = useState("");
  const [yearOfPaper, setYearOfPaper] = useState("");
  const [modeOfPaper, setModeOfPaper] = useState("");

  const [addMoreStudyMaterial, setAddMoreStudyMaterial] = useState([""]);

  return (
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
            <strong>PREVIOUS YEAR QUESTION PAPER</strong>
          </em>
        </Typography>
        <Typography>This section is to add all previous year papers</Typography>
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
                Upload PDFs of question <br /> papers and answer keys
                {/* You can display the selected image here if needed */}
              </Box>
            </label>
          </Grid>

          <Grid item xs={8} container flexDirection={"column"} spacing={6}>
            <Grid container spacing={6} item>
              <Grid item xs={6}>
                <Typography>Enter Exam</Typography>
                <FormControl fullWidth size="small">
                  <Select
                    onChange={(e) => setExams(e.target.value)}
                    value={exams}
                    displayEmpty
                    style={{
                      color: exams === "" && secondaryColor,
                    }}
                  >
                    <MenuItem value={""} disabled>
                      Select/ Type Here
                    </MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <Typography>Year of Paper</Typography>
                <FormControl fullWidth size="small">
                  <Select
                    onChange={(e) => setYearOfPaper(e.target.value)}
                    value={yearOfPaper}
                    displayEmpty
                    style={{
                      color: yearOfPaper === "" && secondaryColor,
                    }}
                  >
                    <MenuItem value={""} disabled>
                      Select/ Type Here
                    </MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Grid container spacing={6} item>
              <Grid item xs={6}>
                <Typography>Date of Paper</Typography>
                <TextField type="date" fullWidth size="small" />
              </Grid>
              <Grid item xs={6}>
                <Typography>Mode of Paper</Typography>
                <FormControl fullWidth size="small">
                  <Select
                    onChange={(e) => setModeOfPaper(e.target.value)}
                    value={modeOfPaper}
                    displayEmpty
                    style={{
                      color: modeOfPaper === "" && secondaryColor,
                    }}
                  >
                    <MenuItem value={""} disabled>
                      Select/ Type Here
                    </MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Grid container spacing={6} item>
              <Grid item xs={6}>
                <Typography>Links (if any)</Typography>
                <Grid container spacing={2}>
                  <Grid item>
                    <TextField
                      // fullWidth
                      // label="Description"
                      //   style={{ width: "78%", marginRight: 5 }}
                      placeholder="Type here"
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" style={buttonNotSelectedStyle}>
                      +
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Typography>Add Description to the paper</Typography>
                <TextField size="small" placeholder="Describe here" fullWidth />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}

      <Grid mt={6}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setAddMoreStudyMaterial([...addMoreStudyMaterial, ""])}
        >
          + Add More Material
        </Button>
      </Grid>
    </Container>
  );
};

export default PreviousYearQuestionPaper;
