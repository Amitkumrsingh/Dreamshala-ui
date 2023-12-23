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
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { useTheme } from "@mui/material/styles";

const Results = ({ setResults }) => {
  const theme = useTheme();
  const secondaryColor = theme.palette.text.secondary;

  const [addMoreResults, setAddMoreResults] = useState([""]);
  const [formData, setFormData] = useState({
    excel_file: null,
    result_photo: null,
    result_name: "",
    college_secured: "",
    exam_cracked: "",
    all_india_rank: "",
    base_city_result: "",
    testimonial: "",
  });

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleFileChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.files[0] });
  };

  useEffect(() => {
    setResults(formData);
  }, [formData, setResults]);

  return (
    <>
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
              <strong>RESULTS </strong>
            </em>
          </Typography>

          <label htmlFor="excel-input">
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
                id="excel-input"
                onChange={handleFileChange("excel_file")}
              />
              <IconButton component="span">
                <UploadFileIcon fontSize="small" color={secondaryColor} />
              </IconButton>
              {formData.excel_file ? formData.excel_file.name : "Upload Excel"}
              {/* You can display the selected image here if needed */}
            </Box>
          </label>
        </Grid>

        {addMoreResults.map((d, index) => (
          <Grid container spacing={6} mt={2} key={index} mb={4}>
            <Grid item xs={2}>
              Add Photo
              <label
                htmlFor="image"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  border={1}
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
                    id="image"
                    type="file"
                    onChange={handleFileChange("result_photo")}
                  />
                  {formData.result_photo ? (
                    formData.result_photo.name
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

            <Grid
              item
              xs={10 / 3}
              container
              spacing={6}
              flexDirection={"column"}
            >
              <Grid item>
                <Typography>Name</Typography>
                <TextField
                  fullWidth
                  // label="Description"
                  placeholder="Type here"
                  variant="outlined"
                  size="small"
                  value={formData.result_name}
                  onChange={handleInputChange("result_name")}
                />
              </Grid>
              <Grid item>
                <Typography>All India Rank</Typography>
                <TextField
                  fullWidth
                  // label="Description"
                  placeholder="Type here"
                  variant="outlined"
                  size="small"
                  type="number"
                  inputProps={{ min: 0 }}
                  value={formData.all_india_rank}
                  onChange={handleInputChange("all_india_rank")}
                />
              </Grid>
            </Grid>

            <Grid
              item
              xs={10 / 3}
              container
              spacing={6}
              flexDirection={"column"}
            >
              <Grid item>
                <Typography>College secured</Typography>
                <TextField
                  fullWidth
                  // label="Description"
                  placeholder="Type here"
                  variant="outlined"
                  size="small"
                  value={formData.college_secured}
                  onChange={handleInputChange("college_secured")}
                />
              </Grid>
              <Grid item>
                <Typography>Base City</Typography>
                <TextField
                  fullWidth
                  // label="Description"
                  placeholder="Type here"
                  variant="outlined"
                  size="small"
                  value={formData.base_city_result}
                  onChange={handleInputChange("base_city_result")}
                />
              </Grid>
            </Grid>
            <Grid
              item
              xs={10 / 3}
              container
              spacing={6}
              flexDirection={"column"}
            >
              <Grid item>
                <Typography>Exam Cracked</Typography>
                <FormControl fullWidth size="small">
                  {/* <InputLabel>Select/ Type Here</InputLabel> */}
                  <Select
                    value={formData.exam_cracked}
                    onChange={handleInputChange("exam_cracked")}
                    displayEmpty
                    style={{
                      color: formData.exam_cracked === "" && secondaryColor,
                    }}
                  >
                    <MenuItem value={""} disabled>
                      Select/ Type Here
                    </MenuItem>
                    {/* <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="6">6</MenuItem> */}
                    {/* Add more exam options as needed */}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <Typography>Testimonial by Student (if any)</Typography>
                <TextField
                  fullWidth
                  // label="Description"
                  placeholder="Type here"
                  variant="outlined"
                  size="small"
                  value={formData.testimonial}
                  onChange={handleInputChange("testimonial")}
                />
              </Grid>
            </Grid>
          </Grid>
        ))}

        <Grid mt={6}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setAddMoreResults([...addMoreResults, ""])}
          >
            + Add More Results
          </Button>
        </Grid>
      </Container>
    </>
  );
};

export default Results;
