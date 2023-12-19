import React, { useState, useEffect } from "react";
import { TextField, Button, Grid, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ContactDetails = ({ setContactDetails }) => {
  const theme = useTheme();
  const secondaryColor = theme.palette.text.secondary;

  const buttonNotSelectedStyle = {
    color: secondaryColor,
    borderColor: secondaryColor,
  };

  const [addMoreContact, setAddMoreContact] = useState([""]);
  const [addMoreWebsiteLink, setAddMoreWebsiteLink] = useState([]);

  const [formData, setFormData] = useState({
    exam_official_website: "",
    contact_number: "",
    email: "",
    other_links: "",
  });

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  useEffect(() => {
    setContactDetails(formData);
  }, [setContactDetails, formData]);

  return (
    <Container>
      <Typography
        variant="h5"
        gutterBottom
        borderLeft={"4px solid " + theme.palette.primary.main}
        padding={1}
        mb={2}
      >
        <em>
          <strong>CONTACT DETAILS </strong>
        </em>
      </Typography>

      {addMoreContact.map((data, index) => (
        <Grid key={index}>
          {/* First Row */}
          <Grid container spacing={6} mt={2}>
            <Grid item xs={4}>
              <Typography>Exam official website</Typography>
              <TextField
                // label="Name"
                placeholder="Type Here"
                size="small"
                fullWidth
                value={formData.exam_official_website}
                onChange={handleInputChange("exam_official_website")}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography>Contact</Typography>
              <TextField
                // label="Mobile Number"
                size="small"
                placeholder="+91 00000 00000"
                name="contactNumber"
                type="tel"
                fullWidth
                value={formData.contact_number}
                onChange={handleInputChange("contact_number")}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography>Email ID</Typography>
              <TextField
                // label="Email ID"
                placeholder="timesedu@gmail.com"
                size="small"
                name="email"
                type="email"
                fullWidth
                value={formData.email}
                onChange={handleInputChange("email")}
              />
            </Grid>
          </Grid>

          {/* Second Row */}
          <Grid container spacing={6} mt={2}>
            {addMoreWebsiteLink.map((data, index) => (
              <Grid key={index} item xs={4}>
                <Typography>Other websites/impotant links</Typography>
                <TextField
                  placeholder={"Type Here"}
                  size="small"
                  fullWidth
                  value={formData.other_links}
                  onChange={handleInputChange("other_links")}
                />
              </Grid>
            ))}

            <Grid item xs={4}>
              <Typography>Other websites/impotant links</Typography>
              <Grid container spacing={2}>
                <Grid item xs={10}>
                  <TextField placeholder={"Type Here"} size="small" fullWidth />
                </Grid>
                <Grid item xs={2}>
                  <Button
                    fullWidth
                    variant="outlined"
                    style={buttonNotSelectedStyle}
                    onClick={() =>
                      setAddMoreWebsiteLink([...addMoreWebsiteLink, ""])
                    }
                  >
                    +
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}

      {/* Button to add more contacts */}
      <Grid mt={6}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setAddMoreContact([...addMoreContact, ""])}
        >
          Add More Contacts
        </Button>
      </Grid>
    </Container>
  );
};

export default ContactDetails;
