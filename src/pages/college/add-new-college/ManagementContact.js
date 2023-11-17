import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";

const ManagementContact = () => {
  const [contacts, setContacts] = useState([
    { name: "", role: "", email: "" },
    { mobile: "", col2: "", col3: "" },
  ]);

  // Function to add a new set of contact fields
  const addContact = () => {
    setContacts([
      ...contacts,
      { name: "", role: "", email: "", mobile: "", col2: "", col3: "" },
    ]);
  };

  // Function to handle changes in the contact fields
  const handleContactChange = (index, field, value) => {
    const newContacts = [...contacts];
    newContacts[index][field] = value;
    setContacts(newContacts);
  };

  return (
    <form>
      <Typography variant="h5">
        MANAGEMENT CONTACT (For Office Use Only)
      </Typography>
      {/* First Row */}
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography>Name</Typography>
          <TextField
            // label="Name"
            placeholder="Type Here"
            fullWidth
            value={contacts[0].name}
            onChange={(e) => handleContactChange(0, "name", e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography>Role in the Institute</Typography>
          <TextField
            // label="Role in the Institute"
            placeholder="Type Here"
            fullWidth
            value={contacts[0].role}
            onChange={(e) => handleContactChange(0, "role", e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography>Email ID</Typography>
          <TextField
            // label="Email ID"
            placeholder="timesedu@gmail.com"
            fullWidth
            value={contacts[0].email}
            onChange={(e) => handleContactChange(0, "email", e.target.value)}
          />
        </Grid>
      </Grid>

      {/* Second Row */}
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography>Contact</Typography>
          <TextField
            // label="Mobile Number"
            placeholder="+91 00000 00000"
            fullWidth
            value={contacts[1].mobile}
            onChange={(e) => handleContactChange(1, "mobile", e.target.value)}
          />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
      </Grid>

      {/* Additional Contact Fields */}
      {contacts.slice(2).map((contact, index) => (
        <>
          <Grid container spacing={2} key={index}>
            <Grid item xs={4}>
              <Typography>Name</Typography>
              <TextField
                // label="Name"
                placeholder="Type Here"
                fullWidth
                value={contact.name}
                onChange={(e) =>
                  handleContactChange(index + 2, "name", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={4}>
              <Typography>Role in the Institute</Typography>
              <TextField
                // label="Role in the Institute"
                placeholder="Type Here"
                fullWidth
                value={contact.role}
                onChange={(e) =>
                  handleContactChange(index + 2, "role", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={4}>
              <Typography>Email ID</Typography>
              <TextField
                // label="Email ID"
                placeholder="timesedu@gmail.com"
                fullWidth
                value={contact.email}
                onChange={(e) =>
                  handleContactChange(index + 2, "email", e.target.value)
                }
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography>Contact</Typography>
              <TextField
                placeholder="+91 00000 00000"
                fullWidth
                value={contacts[1].mobile}
                onChange={(e) =>
                  handleContactChange(1, "mobile", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </>
      ))}

      {/* Button to add more contacts */}
      <Button variant="contained" color="primary" onClick={addContact}>
        Add More Contacts
      </Button>
    </form>
  );
};

export default ManagementContact;
