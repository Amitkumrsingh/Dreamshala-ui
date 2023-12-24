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
import {
  checkUrl,
  generateYearsArray,
} from "../../../services/componentsFunctions";

const PreviousYearQuestionPaper = ({ setPreviousYearQuestionPaper }) => {
  const theme = useTheme();
  const secondaryColor = theme.palette.text.secondary;

  const buttonNotSelectedStyle = {
    color: secondaryColor,
    borderColor: secondaryColor,
  };

  // for generating years
  const years = [];

  for (let year = 1990; year <= 2023; year++) {
    years.push(year.toString());
  }

  const [addMoreStudyMaterial, setAddMoreStudyMaterial] = useState([""]);
  const [formData, setFormData] = useState({
    question_paper_files: null,
    question_paper_exam: "",
    question_paper_year: "",
    question_paper_date: "",
    question_paper_mode: "",
    question_paper_description: "",
    question_paper_links: "",
  });

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleFileChange = (event) => {
    setFormData({ ...formData, question_paper_files: event.target.files[0] });
  };

  useEffect(() => {
    setPreviousYearQuestionPaper(formData);
  }, [setPreviousYearQuestionPaper, formData]);

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
            <label htmlFor="question-paper-input">
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
                  accept="file/*"
                  // onChange={handleImageChange}
                  style={{ display: "none" }}
                  id="question-paper-input"
                  onChange={handleFileChange}
                />
                {formData.question_paper_files ? (
                  formData.question_paper_files.name
                ) : (
                  <>
                    <IconButton component="span">
                      <FileUploadIcon fontSize="large" color={secondaryColor} />
                    </IconButton>
                    Upload PDFs of question <br /> papers and answer keys
                  </>
                )}
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
                    value={formData.question_paper_exam}
                    onChange={handleInputChange("question_paper_exam")}
                    displayEmpty
                    style={{
                      color:
                        formData.question_paper_exam === "" && secondaryColor,
                    }}
                  >
                    <MenuItem value={""} disabled>
                      Select/ Type Here
                    </MenuItem>
                    {/* <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem> */}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <Typography>Year of Paper</Typography>
                <FormControl fullWidth size="small">
                  <Select
                    value={formData.question_paper_year}
                    onChange={handleInputChange("question_paper_year")}
                    displayEmpty
                    style={{
                      color:
                        formData.question_paper_year === "" && secondaryColor,
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
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Grid container spacing={6} item>
              <Grid item xs={6}>
                <Typography>Date of Paper</Typography>
                <TextField
                  type="date"
                  fullWidth
                  size="small"
                  value={formData.question_paper_date}
                  onChange={handleInputChange("question_paper_date")}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography>Mode of Paper</Typography>
                <FormControl fullWidth size="small">
                  <Select
                    value={formData.question_paper_mode}
                    onChange={handleInputChange("question_paper_mode")}
                    displayEmpty
                    style={{
                      color:
                        formData.question_paper_mode === "" && secondaryColor,
                    }}
                  >
                    <MenuItem value={""} disabled>
                      Select/ Type Here
                    </MenuItem>
                    <MenuItem value="online">Online</MenuItem>
                    <MenuItem value="offline">Offline</MenuItem>
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
                      value={formData.question_paper_links}
                      onChange={handleInputChange("question_paper_links")}
                      placeholder="Type here"
                      variant="outlined"
                      size="small"
                      error={
                        formData.question_paper_links === ""
                          ? false
                          : !checkUrl(formData.question_paper_links)
                      }
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
                <TextField
                  size="small"
                  placeholder="Describe here"
                  fullWidth
                  value={formData.question_paper_description}
                  onChange={handleInputChange("question_paper_description")}
                />
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
