import React, { useState } from "react";
import {
  IconButton,
  Box,
  Grid,
  TextField,
  Container,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@mui/material";

const Location = () => {
  const [addMoreLocation, setAddMoreLocation] = useState([" "]);
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
          <Typography variant="h5" gutterBottom>
            LOCATION
          </Typography>
          <Typography>
            This section is to add all the location where your services are
            available
          </Typography>
        </Grid>

        {/* This is main Location container */}
        {addMoreLocation.map((data, index) => (
          <Grid container mt={4} mb={4} key={index} spacing={2}>
            <Grid item xs={8}>
              <Grid container>
                <Grid xs={6} pr={2}>
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
                <Grid xs={6}>
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
              <Grid container mt={4}>
                <Grid xs={6} pr={2}>
                  <Typography>Address Line 1</Typography>
                  <TextField
                    fullWidth
                    // label="Description"
                    placeholder="Type Here"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid xs={6}>
                  <Typography>Address Line 2</Typography>
                  <TextField
                    fullWidth
                    // label="Description"
                    placeholder="Type Here"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
              </Grid>

              <Grid container fullWidth justifyContent={"space-between"} mt={4}>
                <Grid>
                  <Typography>Landmark/ Locality</Typography>
                  <TextField
                    fullWidth
                    // label="Description"
                    placeholder="Type Here"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid>
                  <Typography>Pincode</Typography>
                  <TextField
                    fullWidth
                    // label="Description"
                    placeholder="Type Here"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid>
                  <Typography>Name of Branch</Typography>
                  <TextField
                    fullWidth
                    // label="Description"
                    placeholder="Type Here"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              {/* <Grid mt={5}> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7613.422063208642!2d78.449477!3d17.42565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9734d5af1441%3A0x888e3aafdd74f605!2sMAD%20SCHOOL%20Hyderabad%20-%20NIFT%2C%20NID%2C%20NATA%2C%20UCEED%20Coaching%20Centre!5e0!3m2!1sen!2sin!4v1701170248797!5m2!1sen!2sin"
                fullWidth
                height="100%"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              {/* </Grid> */}
            </Grid>
          </Grid>
        ))}

        <Button
          m={2}
          variant="contained"
          color="primary"
          onClick={() => setAddMoreLocation([...addMoreLocation, ""])}
        >
          + Add More Location
        </Button>
      </Container>
    </>
  );
};

export default Location;
