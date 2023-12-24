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
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { useTheme } from "@mui/material/styles";

const PlacementDetails = ({ setPlacementDetails }) => {
  const theme = useTheme();
  const placeholderColor = theme.palette.text.secondary;

  const buttonNotSelectedStyle = {
    color: placeholderColor,
    borderColor: placeholderColor,
  };

  const [addMorePlacement, setAddMorePlacement] = useState([""]);
  const [addMoreFields, setAddMoreFields] = useState([]);
  const [formData, setFormData] = useState({
    degree_branch: "",
    overall_placement_description: "",
    number_of_recruiters: "",
    number_of_offers: "",
    number_of_international_offers: "",
    to_recruiters: "",
    highest_package: "",
    average_package: "",
    excel_file: null,
  });

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleFileChange = (event) => {
    setFormData({ ...formData, excel_file: event.target.files[0] });
  };

  useEffect(() => {
    setPlacementDetails(formData);
  }, [formData, setPlacementDetails]);

  return (
    <>
      <Container>
        <Grid container justifyContent={"space-between"}>
          <Typography
            variant="h5"
            gutterBottom
            borderLeft={"4px solid " + theme.palette.primary.main}
            padding={1}
          >
            <em>
              <strong>PLACEMENT DETAILS </strong>
            </em>
          </Typography>
          <label
            htmlFor="upload-excel-file-placement"
            // style={{ border: "1px solid red" }}
          >
            <Box
              border={1}
              borderColor={placeholderColor}
              borderRadius="4px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              paddingRight={"10px"}
              cursor="pointer"
            >
              <input
                type="file"
                accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                //   onChange={handleImageChange}
                style={{ display: "none" }}
                id="upload-excel-file-placement"
                onChange={handleFileChange}
              />
              {formData.excel_file ? (
                <Button disabled>{formData.excel_file.name}</Button>
              ) : (
                <>
                  <IconButton component="span">
                    <UploadFileIcon fontSize="small" color={placeholderColor} />
                  </IconButton>
                  Upload Excel
                </>
              )}
              {/* You can display the selected image here if needed */}
            </Box>
          </label>
        </Grid>

        {addMorePlacement.map((data, index) => (
          <Grid
            mb={6}
            key={index}
            container
            flexDirection={"column"}
            spacing={6}
            mt={2}
          >
            <Grid container spacing={6} item>
              <Grid item xs={4}>
                <Typography>Degree/ Branch</Typography>

                <TextField
                  placeholder="Type Here"
                  size="small"
                  fullWidth
                  value={formData.degree_branch}
                  onChange={handleInputChange("degree_branch")}
                />
              </Grid>
            </Grid>

            <Grid container spacing={6} item>
              <Grid item xs={4}>
                <Grid container spacing={6} flexDirection={"column"}>
                  <Grid item>
                    <Typography>Describe the overall placement</Typography>
                    <TextField
                      placeholder="Describe here"
                      multiline
                      fullWidth
                      minRows={4}
                      maxRows={4}
                      value={formData.overall_placement_description}
                      onChange={handleInputChange(
                        "overall_placement_description"
                      )}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <Grid container spacing={6} flexDirection={"column"}>
                  <Grid item>
                    <Typography>Number of Recruiters</Typography>
                    <TextField
                      placeholder="Type here"
                      value={formData.number_of_recruiters}
                      onChange={handleInputChange("number_of_recruiters")}
                      type="number"
                      InputProps={{ inputProps: { min: 0 } }}
                      size="small"
                      fullWidth
                    />
                  </Grid>
                  <Grid item>
                    <Typography>Number of International Offers</Typography>
                    <TextField
                      placeholder="Type here"
                      value={formData.number_of_international_offers}
                      onChange={handleInputChange(
                        "number_of_international_offers"
                      )}
                      type="number"
                      InputProps={{ inputProps: { min: 0 } }}
                      size="small"
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={4}>
                <Grid container spacing={6} flexDirection={"column"}>
                  <Grid item>
                    <Typography>Number of Offers</Typography>
                    <TextField
                      placeholder="Type here"
                      value={formData.number_of_offers}
                      onChange={handleInputChange("number_of_offers")}
                      type="number"
                      InputProps={{ inputProps: { min: 0 } }}
                      size="small"
                      fullWidth
                    />
                  </Grid>
                  <Grid item>
                    <Typography>
                      Top Recruiters (use ','to separate them)
                    </Typography>
                    <TextField
                      placeholder="Type Here"
                      size="small"
                      fullWidth
                      value={formData.to_recruiters}
                      onChange={handleInputChange("to_recruiters")}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid container spacing={6} item>
              <Grid item xs={4}>
                <Typography>Highest Package</Typography>
                <FormControl fullWidth size="small">
                  <Select
                    value={formData.highest_package}
                    onChange={handleInputChange("highest_package")}
                    displayEmpty
                    style={{
                      color:
                        formData.highest_package === "" && placeholderColor,
                    }}
                  >
                    <MenuItem value={""} disabled>
                      Select/ Type Here
                    </MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <Typography>Average Package</Typography>
                <FormControl fullWidth size="small">
                  <Select
                    value={formData.average_package}
                    onChange={handleInputChange("average_package")}
                    displayEmpty
                    style={{
                      color:
                        formData.average_package === "" && placeholderColor,
                    }}
                  >
                    <MenuItem value={""} disabled>
                      Select/ Type Here
                    </MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {addMoreFields.map((data, index) => (
                <Grid item xs={4} key={index}>
                  <Typography style={{ visibility: "hidden" }}>.</Typography>
                  <Grid>
                    <TextField
                      placeholder="+ Add a Field"
                      fullWidth
                      size="small"
                      variant="outlined"
                      style={buttonNotSelectedStyle}
                    />
                  </Grid>
                </Grid>
              ))}

              <Grid item xs={4}>
                <Typography style={{ visibility: "hidden" }}>.</Typography>
                <Grid>
                  <Button
                    fullWidth
                    variant="outlined"
                    style={buttonNotSelectedStyle}
                    onClick={() => setAddMoreFields([...addMoreFields, ""])}
                  >
                    + Add a Field
                  </Button>
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
            onClick={() => setAddMorePlacement([...addMorePlacement, ""])}
          >
            + Add More Details
          </Button>
        </Grid>
      </Container>
    </>
  );
};

export default PlacementDetails;
