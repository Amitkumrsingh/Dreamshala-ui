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
import { useTheme } from "@mui/material/styles";

const PlacementDetails = () => {
  const theme = useTheme();
  const placeholderColor = theme.palette.text.secondary;

  const buttonNotSelectedStyle = {
    color: placeholderColor,
    borderColor: placeholderColor,
  };

  const [addMorePlacement, setAddMorePlacement] = useState([""]);
  const [degreeBranch, setDegreeBranch] = useState("");
  const [numberOfRecruiters, setNumberOfRecruiters] = useState("");
  const [numberOfOffers, setNumberOfOffers] = useState("");
  const [numberOfInternationalOffers, setNumberOfInternationalOffers] =
    useState("");
  const [topRecruiters, setTopRecruiters] = useState("");
  const [highestPackage, setHighestPackage] = useState("");
  const [averagePackage, setAveragePackage] = useState("");
  const [addMoreFields, setAddMoreFields] = useState([]);

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
          <label htmlFor="image-input">
            <Box
              border={1}
              borderColor={placeholderColor}
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
                <UploadFileIcon fontSize="small" color={placeholderColor} />
              </IconButton>
              Upload Excel
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
                <FormControl fullWidth size="small">
                  <Select
                    onChange={(e) => setDegreeBranch(e.target.value)}
                    value={degreeBranch}
                    displayEmpty
                    style={{
                      color: degreeBranch === "" && placeholderColor,
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
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <Grid container spacing={6} flexDirection={"column"}>
                  <Grid item>
                    <Typography>Number of Recruiters</Typography>
                    <FormControl fullWidth size="small">
                      <Select
                        onChange={(e) => setNumberOfRecruiters(e.target.value)}
                        value={numberOfRecruiters}
                        displayEmpty
                        style={{
                          color: numberOfRecruiters === "" && placeholderColor,
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
                  <Grid item>
                    <Typography>Number of International Offers</Typography>
                    <FormControl fullWidth size="small">
                      <Select
                        onChange={(e) =>
                          setNumberOfInternationalOffers(e.target.value)
                        }
                        value={numberOfInternationalOffers}
                        displayEmpty
                        style={{
                          color:
                            numberOfInternationalOffers === "" &&
                            placeholderColor,
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
                </Grid>
              </Grid>

              <Grid item xs={4}>
                <Grid container spacing={6} flexDirection={"column"}>
                  <Grid item>
                    <Typography>Number of Offers</Typography>
                    <FormControl fullWidth size="small">
                      <Select
                        onChange={(e) => setNumberOfOffers(e.target.value)}
                        value={numberOfOffers}
                        displayEmpty
                        style={{
                          color: numberOfOffers === "" && placeholderColor,
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
                  <Grid item>
                    <Typography>
                      Top Recruiters (use ','to separate them)
                    </Typography>
                    <FormControl fullWidth size="small">
                      <Select
                        onChange={(e) => setTopRecruiters(e.target.value)}
                        value={topRecruiters}
                        displayEmpty
                        style={{
                          color: topRecruiters === "" && placeholderColor,
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
                </Grid>
              </Grid>
            </Grid>

            <Grid container spacing={6} item>
              <Grid item xs={4}>
                <Typography>Highest Package</Typography>
                <FormControl fullWidth size="small">
                  <Select
                    onChange={(e) => setHighestPackage(e.target.value)}
                    value={highestPackage}
                    displayEmpty
                    style={{
                      color: highestPackage === "" && placeholderColor,
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
                    onChange={(e) => setAveragePackage(e.target.value)}
                    value={averagePackage}
                    displayEmpty
                    style={{
                      color: averagePackage === "" && placeholderColor,
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
