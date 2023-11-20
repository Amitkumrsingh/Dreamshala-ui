import React from "react";
import {
  IconButton,
  Box,
  Button,
  Grid,
  TextField,
  Container,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
// import UploadFileIcon from "@mui/icons-material/UploadFile";

const CompanyDetails = () => {
  const indianStatesAndUTs = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
  ];
  return (
    <>
      <Container>
        <Grid>
          <Typography variant="h5">
            COMPANY DETAILS (For Office Use Only)
          </Typography>
        </Grid>

        <Grid container spacing={2} mt={2} mb={2}>
          <Grid item xs={4}>
            <Typography>Company Name</Typography>
            <TextField
              fullWidth
              // label="Description"
              placeholder="Type here"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={4}>
            <Typography>Company GSTIN</Typography>
            <TextField
              fullWidth
              // label="Description"
              placeholder="Type here"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={4}>
            <Typography>Year of Establishment</Typography>
            <FormControl fullWidth size="small">
              <InputLabel>Select/ Type Here</InputLabel>
              <Select defaultValue={""}>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                {/* Add more exam options as needed */}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid mt={4} mb={2}>
          <Typography variant="h5">Company Registered Address</Typography>
        </Grid>

        <Grid container>
          <Grid xs={8}>
            <Grid container spacing={2} mb={4}>
              <Grid item xs={4}>
                <Typography>Address Line 1</Typography>
                <TextField
                  fullWidth
                  // label="Description"
                  placeholder="Type here"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={4}>
                <Typography>Address Line 2</Typography>
                <TextField
                  fullWidth
                  // label="Description"
                  placeholder="Type here"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={4}>
                <Typography>Landmark/Locality</Typography>
                <TextField
                  fullWidth
                  // label="Description"
                  placeholder="Type here"
                  variant="outlined"
                  size="small"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} mb={4}>
              <Grid item xs={4}>
                <Typography>Pincode</Typography>
                <TextField
                  //   type="number"
                  fullWidth
                  // label="Description"
                  placeholder="Type here"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={4}>
                <Typography>Select State</Typography>
                <FormControl fullWidth size="small">
                  <InputLabel>Select/ Type Here</InputLabel>
                  <Select defaultValue={""}>
                    {indianStatesAndUTs.map((data, index) => (
                      <MenuItem value={data} key={index}>
                        {data}
                      </MenuItem>
                    ))}

                    {/* Add more exam options as needed */}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <Typography>Select City</Typography>
                <FormControl fullWidth size="small">
                  <InputLabel>Select/ Type Here</InputLabel>
                  <Select defaultValue={""}>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    {/* Add more exam options as needed */}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={4}>This is for location</Grid>
        </Grid>

        <Grid container pr={2}>
          <Grid item xs={6} pr={2}>
            <Typography>PAN Card No.</Typography>
            <TextField
              fullWidth
              // label="Description"
              placeholder="Type here"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid>
            <Typography>Upload PAN Card</Typography>
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
                  <FileUploadIcon fontSize="small" color="primary" />
                </IconButton>
                Click here to Upload
                {/* You can display the selected image here if needed */}
              </Box>
            </label>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CompanyDetails;
