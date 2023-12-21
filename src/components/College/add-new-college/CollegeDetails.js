import React, { useEffect, useState } from "react";
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
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useTheme } from "@mui/material/styles";
// import UploadFileIcon from "@mui/icons-material/UploadFile";

const CollegeDetails = ({ setCollegeDetails }) => {
  const theme = useTheme();
  const placeholderColor = theme.palette.text.secondary;
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

  const [formData, setFormData] = useState({
    GSTIN: "",
    establishment_year: "",
    pan_card_number: "",
    pan_card_upload: null,
    address_line_1: "",
    address_line_2: "",
    landmark_locality: "",
    pincode: "",
    state: "",
    city: "",
    latitude: "0",
    longitude: "0",
    name: "",
  });

  const handleFileChange = (event) => {
    setFormData({ ...formData, pan_card_upload: event.target.files[0] });
  };

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  useEffect(() => {
    setCollegeDetails(formData);
  }, [formData, setCollegeDetails]);

  return (
    <>
      <Container>
        <Grid>
          <Typography
            variant="h5"
            gutterBottom
            borderLeft={"4px solid " + theme.palette.primary.main}
            padding={1}
          >
            <em>
              <strong>COLLEGE DETAILS </strong>
            </em>
            <Typography variant="span">(For Office Use Only)</Typography>
          </Typography>
        </Grid>

        <Grid container spacing={6} mt={2}>
          <Grid item xs={4}>
            <Typography>College Name</Typography>
            <TextField
              fullWidth
              // label="Description"
              placeholder="Type here"
              variant="outlined"
              size="small"
              value={formData.name}
              onChange={handleInputChange("name")}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography>College GSTIN</Typography>
            <TextField
              fullWidth
              // label="Description"
              placeholder="Type here"
              variant="outlined"
              size="small"
              value={formData.GSTIN}
              onChange={handleInputChange("GSTIN")}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography>Year of Establishment</Typography>
            <FormControl fullWidth size="small">
              {/* <InputLabel>Select/ Type Here</InputLabel> */}
              <Select
                value={formData.establishment_year}
                onChange={handleInputChange("establishment_year")}
                displayEmpty
                style={{
                  color: formData.establishment_year === "" && placeholderColor,
                }}
              >
                <MenuItem value={""} disabled>
                  Select/ Type Here
                </MenuItem>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                {/* Add more exam options as needed */}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid mt={6} mb={4}>
          <Typography variant="h5">College Registered Address</Typography>
        </Grid>

        <Grid container spacing={6}>
          <Grid xs={8} item>
            <Grid container spacing={6}>
              <Grid item xs={4}>
                <Typography>Address Line 1</Typography>
                <TextField
                  fullWidth
                  // label="Description"
                  placeholder="Type here"
                  variant="outlined"
                  size="small"
                  value={formData.address_line_1}
                  onChange={handleInputChange("address_line_1")}
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
                  value={formData.address_line_2}
                  onChange={handleInputChange("address_line_2")}
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
                  value={formData.landmark_locality}
                  onChange={handleInputChange("landmark_locality")}
                />
              </Grid>
            </Grid>
            <Grid container spacing={6} mt={1}>
              <Grid item xs={4}>
                <Typography>Pincode</Typography>
                <TextField
                  //   type="number"
                  fullWidth
                  // label="Description"
                  placeholder="Type here"
                  variant="outlined"
                  size="small"
                  type="number"
                  pattern="\d+"
                  value={formData.pincode}
                  onChange={handleInputChange("pincode")}
                />
              </Grid>
              <Grid item xs={4}>
                <Typography>Select State</Typography>
                <FormControl fullWidth size="small">
                  {/* <InputLabel>Select/ Type Here</InputLabel> */}
                  <Select
                    value={formData.state}
                    onChange={handleInputChange("state")}
                    displayEmpty
                    style={{
                      color: formData.state === "" && placeholderColor,
                    }}
                  >
                    <MenuItem value={""} disabled>
                      Select/ Type Here
                    </MenuItem>
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
                <Typography>Type City</Typography>
                <TextField
                  fullWidth
                  // label="Description"
                  placeholder="Type here"
                  variant="outlined"
                  size="small"
                  value={formData.city}
                  onChange={handleInputChange("city")}
                />
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
                referrerPolicy="no-referrer"
                // allowfullscreen=""
                loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={6}>
          <Grid item xs={16 / 3}>
            <Typography>PAN Card No.</Typography>
            <TextField
              fullWidth
              // label="Description"
              placeholder="Type here"
              variant="outlined"
              size="small"
              value={formData.pan_card_number}
              onChange={handleInputChange("pan_card_number")}
            />
          </Grid>
          <Grid item xs={2}>
            <Typography>Upload PAN Card</Typography>
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
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                  id="image-input"
                />
                {formData.pan_card_upload ? (
                  <Button disabled>{formData.pan_card_upload.name}</Button>
                ) : (
                  <>
                    <IconButton component="span">
                      <FileUploadIcon
                        fontSize="small"
                        color={placeholderColor}
                      />
                    </IconButton>
                    Click here to Upload
                  </>
                )}
                {/* You can display the selected image here if needed */}
              </Box>
            </label>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CollegeDetails;
