import React from "react";
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
} from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
// import UploadFileIcon from "@mui/icons-material/UploadFile";

const CoachingDetails = () => {
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
            COACHING DETAILS (For Office Use Only)
          </Typography>
        </Grid>

        <Grid container spacing={2} mt={2} mb={2}>
          <Grid item xs={4}>
            <Typography>Coaching Name</Typography>
            <TextField
              fullWidth
              // label="Description"
              placeholder="Type here"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={4}>
            <Typography>Coaching GSTIN</Typography>
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
              {/* <InputLabel>Select/ Type Here</InputLabel> */}
              <Select defaultValue={""}>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                {/* Add more exam options as needed */}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid mt={4} mb={4}>
          <Typography variant="h5">Coaching Registered Address</Typography>
        </Grid>

        <Grid container spacing={2}>
          <Grid xs={8} item>
            <Grid container spacing={2} mb={6}>
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
            <Grid container spacing={2}>
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
                  {/* <InputLabel>Select/ Type Here</InputLabel> */}
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
                  {/* <InputLabel>Select/ Type Here</InputLabel> */}
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
          <Grid xs={4} item>
            <Grid mt={5} height={"65%"}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7613.422063208642!2d78.449477!3d17.42565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9734d5af1441%3A0x888e3aafdd74f605!2sMAD%20SCHOOL%20Hyderabad%20-%20NIFT%2C%20NID%2C%20NATA%2C%20UCEED%20Coaching%20Centre!5e0!3m2!1sen!2sin!4v1701170248797!5m2!1sen!2sin"
                width={"100%"}
                style={{ border: 0 }}
                height={"100%"}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Grid>
          </Grid>
        </Grid>

        <Grid container pr={2} spacing={2}>
          <Grid item xs={16.2 / 3}>
            <Typography>PAN Card No.</Typography>
            <TextField
              fullWidth
              // label="Description"
              placeholder="Type here"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={2}>
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

export default CoachingDetails;
