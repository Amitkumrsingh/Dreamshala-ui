import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ImportantDates = ({ setImportantDates }) => {
  const theme = useTheme();
  const placeholderColor = theme.palette.text.secondary;

  const [addMoreDates, setAddMoreDates] = useState([""]);
  const [formData, setFormData] = useState({
    date_description: "",
    starts_from: "",
    ends_at: "",
    event_description: "",
  });

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  useEffect(() => {
    setImportantDates(formData);
  }, [setImportantDates, formData]);
  return (
    <>
      <Container>
        <Grid mb={6}>
          <Typography
            variant="h5"
            gutterBottom
            borderLeft={"4px solid " + theme.palette.primary.main}
            padding={1}
          >
            <em>
              <strong>IMPORTANT DATES </strong>
            </em>
          </Typography>
        </Grid>

        {addMoreDates.map((data, index) => (
          <Grid mb={6} key={index}>
            <Grid container spacing={6}>
              <Grid item xs={4}>
                <Typography>Date Description</Typography>
                <TextField
                  fullWidth
                  placeholder="Decribe here"
                  value={formData.date_description}
                  onChange={handleInputChange("date_description")}
                  size="small"
                />
              </Grid>
              <Grid item xs={2}>
                <Typography>Starts From</Typography>
                <TextField
                  fullWidth
                  size="small"
                  type="date"
                  value={formData.starts_from}
                  onChange={handleInputChange("starts_from")}
                />
              </Grid>
              <Grid item xs={2}>
                <Typography>Ends At</Typography>
                <TextField
                  fullWidth
                  size="small"
                  type="date"
                  value={formData.ends_at}
                  onChange={handleInputChange("ends_at")}
                />
                {/* <Link> */}
                <Typography
                  variant="subtitle2"
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                  onClick={() =>
                    setFormData({ ...formData, ends_at: formData.starts_from })
                  }
                >
                  Same as Start Date
                </Typography>
                {/* </Link> */}
              </Grid>
              <Grid item xs={4}>
                <Typography>Event Description (if any)</Typography>
                <TextField
                  fullWidth
                  placeholder="Decribe here"
                  size="small"
                  value={formData.event_description}
                  onChange={handleInputChange("event_description")}
                />
              </Grid>
            </Grid>
          </Grid>
        ))}

        <Grid>
          <Button
            m={2}
            variant="outlined"
            color="primary"
            onClick={() => setAddMoreDates([...addMoreDates, ""])}
          >
            + Add More Courses
          </Button>
        </Grid>
      </Container>
    </>
  );
};

export default ImportantDates;
