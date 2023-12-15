import React, { useState, useEffect } from "react";
import {
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

const Location = ({ setLocation }) => {
  const theme = useTheme();
  const placeholderColor = theme.palette.text.secondary;
  const [addMoreLocation, setAddMoreLocation] = useState([" "]);
  const [formData, setFormData] = useState({
    state: "",
    city: "",
    address_line_1_loc: "",
    address_line_2_loc: "",
    landmark: "",
    pincode: "",
    branch_name: "",
    latitude: "",
    longitude: "",
  });

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  useEffect(() => {
    setLocation({ ...formData });
  }, [formData, setLocation]);

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
          <Typography
            variant="h5"
            gutterBottom
            borderLeft={"4px solid " + theme.palette.primary.main}
            padding={1}
          >
            <em>
              <strong>LOCATION</strong>
            </em>
          </Typography>
          <Typography mt={4}>
            This section is to add all the location where your services are
            available
          </Typography>
        </Grid>

        {/* This is main Location container */}
        {addMoreLocation.map((data, index) => (
          <Grid container mt={1} mb={6} key={index} spacing={6}>
            <Grid item xs={8} container flexDirection={"column"} spacing={6}>
              <Grid container spacing={6} item>
                <Grid xs={6} item>
                  <Typography>Select State</Typography>
                  <FormControl fullWidth size="small">
                    {/* <InputLabel>Select/ Type Here</InputLabel> */}
                    <Select
                      value={formData.state}
                      onChange={handleInputChange("state")}
                      displayEmpty
                      name="state"
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
                <Grid xs={6} item>
                  <Typography>Select City</Typography>
                  <FormControl fullWidth size="small">
                    {/* <InputLabel>Select/ Type Here</InputLabel> */}
                    <Select
                      value={formData.city}
                      onChange={handleInputChange("city")}
                      name="city"
                      style={{
                        color: formData.city === "" && placeholderColor,
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
              <Grid container spacing={6} item>
                <Grid xs={6} item>
                  <Typography>Address Line 1</Typography>
                  <TextField
                    fullWidth
                    // label="Description"
                    placeholder="Type Here"
                    variant="outlined"
                    size="small"
                    name="address"
                    value={formData.address_line_1_loc}
                    onChange={handleInputChange("address_line_1_loc")}
                  />
                </Grid>
                <Grid xs={6} item>
                  <Typography>Address Line 2</Typography>
                  <TextField
                    fullWidth
                    // label="Description"
                    placeholder="Type Here"
                    variant="outlined"
                    size="small"
                    value={formData.address_line_2_loc}
                    onChange={handleInputChange("address_line_2_loc")}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={6} item>
                <Grid item xs={3.5}>
                  <Typography>Landmark/ Locality</Typography>
                  <TextField
                    fullWidth
                    // label="Description"
                    placeholder="Type Here"
                    variant="outlined"
                    size="small"
                    name="landmark"
                    value={formData.landmark}
                    onChange={handleInputChange("landmark")}
                  />
                </Grid>
                <Grid item xs={3.5}>
                  <Typography>Pincode</Typography>
                  <TextField
                    fullWidth
                    // label="Description"
                    placeholder="Type Here"
                    variant="outlined"
                    size="small"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange("pincode")}
                  />
                </Grid>
                <Grid item xs={5}>
                  <Typography>Name of Branch</Typography>
                  <TextField
                    fullWidth
                    // label="Description"
                    placeholder="Type Here"
                    variant="outlined"
                    size="small"
                    value={formData.branch_name}
                    onChange={handleInputChange("branch_name")}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid mt={5} height={"90%"}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7613.422063208642!2d78.449477!3d17.42565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9734d5af1441%3A0x888e3aafdd74f605!2sMAD%20SCHOOL%20Hyderabad%20-%20NIFT%2C%20NID%2C%20NATA%2C%20UCEED%20Coaching%20Centre!5e0!3m2!1sen!2sin!4v1701170248797!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  referrerPolicy="no-referrer"
                  style={{ border: 0 }}
                  // allowfullscreen=""
                  loading="lazy"
                  // referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </Grid>
            </Grid>
          </Grid>
        ))}

        <Grid>
          <Button
            m={2}
            variant="outlined"
            color="primary"
            onClick={() => setAddMoreLocation([...addMoreLocation, ""])}
          >
            + Add More Location
          </Button>
        </Grid>
      </Container>
    </>
  );
};

export default Location;
