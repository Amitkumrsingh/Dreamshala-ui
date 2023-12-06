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

import UploadFileIcon from "@mui/icons-material/UploadFile";

const ExamPattern = () => {
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

        <label htmlFor="image-input">
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
              accept="file/*"
              //   onChange={handleImageChange}
              style={{ display: "none" }}
              id="image-input"
            />
            <IconButton component="span">
              <UploadFileIcon fontSize="small" color={secondaryColor} />
            </IconButton>
            Upload Excel
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
                  onChange={(e) => setDegreeBranch(e.target.value)}
                  value={degreeBranch}
                  displayEmpty
                  style={{
                    color: degreeBranch === "" && secondaryColor,
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
                  onChange={(e) => setModeOfExamination(e.target.value)}
                  value={modeOfExamination}
                  displayEmpty
                  style={{
                    color: modeOfExamination === "" && secondaryColor,
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
              <FormControl fullWidth size="small">
                <Select
                  onChange={(e) => setDurationOfExam(e.target.value)}
                  value={durationOfExam}
                  displayEmpty
                  style={{
                    color: durationOfExam === "" && secondaryColor,
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
              <Typography>
                Subjects/ Sections (use ','to separate them)
              </Typography>
              <TextField size="small" fullWidth placeholder="Type Here" />
            </Grid>
          </Grid>

          <Grid container spacing={6} item>
            <Grid item xs={4}>
              <Typography>Number Of Questions</Typography>
              <FormControl fullWidth size="small">
                <Select
                  onChange={(e) => setNumberOfQuestions(e.target.value)}
                  value={numberOfQuestions}
                  displayEmpty
                  style={{
                    color: numberOfQuestions === "" && secondaryColor,
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
                  onChange={(e) => setTotalMarks(e.target.value)}
                  value={totalMarks}
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
              <TextField size="small" fullWidth placeholder="Type Here" />
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
              />
            </Grid>
            <Grid item xs={4}>
              <Typography>Describe Marking Scheme</Typography>
              <TextField
                fullWidth
                placeholder="Type Here"
                multiline
                minRows={3}
              />
            </Grid>
            <Grid item xs={4} container spacing={6} flexDirection={"column"}>
              <Grid item>
                <Typography>12</Typography>
                <TextField placeholder="Field Name" fullWidth size="small" />
              </Grid>
              <Grid item>
                <TextField
                  placeholder="Describe Field Here"
                  fullWidth
                  size="small"
                />
              </Grid>
            </Grid>

            <Grid item xs={4}>
              <Grid mt={5}>
                <Button
                  variant="outlined"
                  fullWidth
                  style={buttonNotSelectedStyle}
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
