import React, { useState, useEffect } from "react";
import { TextField, Button, Grid, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  checkContact,
  checkEmail,
} from "../../../services/componentsFunctions";

const ManagementContact = ({ setManagementContact }) => {
  const theme = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email_mang: "",
    contact_number_mang: "",
  });

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  // useEffect(() => {
  //   setManagementContact(formData);
  // }, [formData, setManagementContact]);

  useEffect(() => {
    setManagementContact(formData);
  }, [formData, setManagementContact]);

  return (
    <Container>
      <Typography
        variant="h5"
        gutterBottom
        borderLeft={"4px solid " + theme.palette.primary.main}
        padding={1}
      >
        <em>
          <strong>MANAGEMENT CONTACT </strong>
        </em>
        <Typography variant="span">(For Office Use Only)</Typography>
      </Typography>
      {/* First Row */}
      <Grid container spacing={6} mt={2}>
        <Grid item xs={4}>
          <Typography>Name</Typography>
          <TextField
            // label="Name"
            placeholder="Type Here"
            size="small"
            name="name"
            fullWidth
            value={formData.name}
            onChange={handleInputChange("name")}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography>Role in the Institute</Typography>
          <TextField
            // label="Role in the Institute"
            placeholder="Type Here"
            size="small"
            fullWidth
            value={formData.role}
            onChange={handleInputChange("role")}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography>Email ID</Typography>
          <TextField
            // label="Email ID"
            placeholder="timesedu@gmail.com"
            size="small"
            fullWidth
            name="email"
            type="email"
            value={formData.email_mang}
            onChange={handleInputChange("email_mang")}
            error={
              formData.email_mang === ""
                ? false
                : !checkEmail(formData.email_mang)
            }
          />
        </Grid>
      </Grid>

      {/* Second Row */}
      <Grid container spacing={6} mt={2}>
        <Grid item xs={4}>
          <Typography>Contact</Typography>
          <TextField
            // label="Mobile Number"
            size="small"
            placeholder="+91 00000 00000"
            fullWidth
            type="tel"
            name="phone"
            value={formData.contact_number_mang}
            onChange={handleInputChange("contact_number_mang")}
            error={
              formData.contact_number_mang === ""
                ? false
                : !checkContact(formData.contact_number_mang)
            }
          />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
      </Grid>

      {/* Button to add more contacts */}
      <Grid mt={6}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => console.log("add new contact")}
        >
          Add More Contacts
        </Button>
      </Grid>
    </Container>
  );
};

export default ManagementContact;
