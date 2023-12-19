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
import { useTheme } from "@mui/material/styles";

import UploadFileIcon from "@mui/icons-material/UploadFile";

const ExamPattern = ({ setExamPattern }) => {
  const theme = useTheme();
  const secondaryColor = theme.palette.text.secondary;
  // const primaryColor = theme.palette.text.primary;

  const buttonNotSelectedStyle = {
    color: secondaryColor,
    borderColor: secondaryColor,
  };

  const [degreeBranch, setDegreeBranch] = useState("");
  const [modeOfExamination, setModeOfExamination] = useState("");
  const [durationOfExam, setDurationOfExam] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState("");
  const [totalMarks, setTotalMarks] = useState("");
  const [addMoreField, setAddMoreField] = useState([]);

  const [addMorePattern, setAddMorePattern] = useState([""]);

  const [formData, setFormData] = useState({
    excel_file: null,
    pattern_degree_branch: "",
    pattern_mode: "",
    pattern_duration: "",
    pattern_questions: "",
    pattern_total_marks: "",
    pattern_subjects_sections: "",
    pattern_medium: "",
    pattern_type_of_questions: "",
    pattern_marking_scheme: "",
  });

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleFileChange = (event) => {
    setFormData({ ...formData, excel_file: event.target.files[0] });
  };

  useEffect(() => {
    setExamPattern(formData);
  }, [formData, setExamPattern]);

  return (
    <Container>
      <Grid container justifyContent={"space-between"}>
        <Typography
          variant="h5"
          gutterBottom
          borderLeft={"4px solid " + theme.palette.primary.main}
          padding={1}
          mb={2}
        >
          <em>
            <strong>EXAM PATTERN </strong>
          </em>
        </Typography>

        <label htmlFor="exam-pattern-file-input">
          <Box
            border={1}
            borderColor={secondaryColor}
            borderRadius="4px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            paddingRight={"10px"}
          >
            <input
              type="file"
              accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              //   onChange={handleImageChange}
              style={{ display: "none" }}
              id="exam-pattern-file-input"
              onChange={handleFileChange}
            />
            {formData.excel_file ? (
              <Button disabled>{formData.excel_file.name}</Button>
            ) : (
              <>
                <IconButton component="span">
                  <UploadFileIcon fontSize="small" color={secondaryColor} />
                </IconButton>
                Upload Excel
              </>
            )}
            {/* You can display the selected image here if needed */}
          </Box>
        </label>
      </Grid>

      {addMorePattern.map((data, index) => (
        <Grid key={index} container flexDirection={"column"} spacing={6} mt={2}>
          <Grid container spacing={6} item>
            <Grid item xs={4}>
              <Typography>Degree/ Branch</Typography>
              <FormControl fullWidth size="small">
                <Select
                  value={formData.pattern_degree_branch}
                  onChange={handleInputChange("pattern_degree_branch")}
                  displayEmpty
                  style={{
                    color:
                      formData.pattern_degree_branch === "" && secondaryColor,
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
            <Grid item xs={4}>
              <Typography>Mode of Examination</Typography>
              <FormControl fullWidth size="small">
                <Select
                  value={formData.pattern_mode}
                  onChange={handleInputChange("pattern_mode")}
                  displayEmpty
                  style={{
                    color: formData.pattern_mode === "" && secondaryColor,
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
            <Grid item xs={4}>
              <Typography>Duration of Examination</Typography>
              <TextField
                size="small"
                fullWidth
                placeholder="Type Here"
                value={formData.pattern_duration}
                onChange={handleInputChange("pattern_duration")}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography>
                Subjects/ Sections (use ','to separate them)
              </Typography>
              <TextField
                size="small"
                fullWidth
                placeholder="Type Here"
                value={formData.pattern_subjects_sections}
                onChange={handleInputChange("pattern_subjects_sections")}
              />
            </Grid>
          </Grid>

          <Grid container spacing={6} item>
            <Grid item xs={4}>
              <Typography>Number Of Questions</Typography>
              <FormControl fullWidth size="small">
                <Select
                  value={formData.pattern_questions}
                  onChange={handleInputChange("pattern_questions")}
                  displayEmpty
                  style={{
                    color: formData.pattern_questions === "" && secondaryColor,
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
            <Grid item xs={4}>
              <Typography>Total Marks</Typography>
              <FormControl fullWidth size="small">
                <Select
                  value={formData.pattern_total_marks}
                  onChange={handleInputChange("pattern_total_marks")}
                  displayEmpty
                  style={{
                    color: totalMarks === "" && secondaryColor,
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
            <Grid item xs={4}>
              <Typography>Medium of Paper (use ','to separate them)</Typography>
              <TextField
                size="small"
                fullWidth
                placeholder="Type Here"
                value={formData.pattern_medium}
                onChange={handleInputChange("pattern_medium")}
              />
            </Grid>
          </Grid>

          <Grid container spacing={6} item>
            <Grid item xs={4}>
              <Typography>Describe type of Questions</Typography>
              <TextField
                fullWidth
                placeholder="Type Here"
                multiline
                minRows={3}
                value={formData.pattern_type_of_questions}
                onChange={handleInputChange("pattern_type_of_questions")}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography>Describe Marking Scheme</Typography>
              <TextField
                fullWidth
                placeholder="Type Here"
                multiline
                minRows={3}
                value={formData.pattern_marking_scheme}
                onChange={handleInputChange("pattern_marking_scheme")}
              />
            </Grid>
            <Grid item xs={4} container spacing={6} flexDirection={"column"}>
              <Grid item>
                <Typography style={{ visibility: "hidden" }}>12</Typography>
                <TextField
                  placeholder="Field Name"
                  fullWidth
                  size="small"
                  disabled
                />
              </Grid>
              <Grid item>
                <TextField
                  placeholder="Describe Field Here"
                  fullWidth
                  size="small"
                  disabled
                />
              </Grid>
            </Grid>

            <Grid item xs={4}>
              <Grid mt={5}>
                <Button
                  variant="outlined"
                  fullWidth
                  style={buttonNotSelectedStyle}
                  disabled
                >
                  + Add a Field
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}

      <Grid mt={6}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setAddMorePattern([...addMorePattern, ""])}
        >
          + Add More Patterns
        </Button>
      </Grid>
    </Container>
  );
};

export default ExamPattern;
