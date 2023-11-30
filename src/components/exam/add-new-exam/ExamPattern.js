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

import UploadFileIcon from "@mui/icons-material/UploadFile";

const ExamPattern = () => {
  const [addMorePattern, setAddMorePattern] = useState([""]);
  return (
    <>
      <Container>
        <Grid container justifyContent={"space-between"}>
          <Typography variant="h5" gutterBottom>
            EXAM PATTERN
          </Typography>
          <label htmlFor="image-input">
            <Box
              border={1}
              borderColor="grey.500"
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
                <UploadFileIcon fontSize="small" color="primary" />
              </IconButton>
              Upload Excel
              {/* You can display the selected image here if needed */}
            </Box>
          </label>
        </Grid>

        {addMorePattern.map((data, index) => (
          <Grid mb={4} key={index}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography>Degree/ Branch</Typography>
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
              <Grid item xs={4}>
                <Typography>Mode of Examination</Typography>
                <FormControl fullWidth size="small">
                  <Select defaultValue={""}>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <Typography>Duration of Examination</Typography>
                <FormControl fullWidth size="small">
                  <Select defaultValue={""}>
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

            <Grid container spacing={2} mt={2}>
              <Grid item xs={4}>
                <Typography>Number Of Questions</Typography>
                <FormControl fullWidth size="small">
                  <Select defaultValue={""}>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <Typography>Total Marks</Typography>
                <FormControl fullWidth size="small">
                  <Select defaultValue={""}>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <Typography>
                  Medium of Paper (use ','to separate them)
                </Typography>
                <TextField size="small" fullWidth placeholder="Type Here" />
              </Grid>
            </Grid>
            <Grid container spacing={2} mt={2}>
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
              <Grid item xs={4}>
                <Grid mt={5}>
                  <Button variant="outlined" fullWidth>
                    + Add a Field
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}

        <Button
          variant="outlined"
          color="primary"
          onClick={() => setAddMorePattern([...addMorePattern, ""])}
        >
          + Add More Patterns
        </Button>
      </Container>
    </>
  );
};

export default ExamPattern;
