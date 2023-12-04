import React, { useState } from "react";
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

const ImportantDates = () => {
  const theme = useTheme();
  const placeholderColor = theme.palette.text.secondary;

  const [addMoreDates, setAddMoreDates] = useState([""]);
  const [dateDiscription, setDateDiscription] = useState("");
  const [eventDiscription, setEventDiscription] = useState("");
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
                <FormControl fullWidth size="small">
                  {/* <InputLabel>Select/ Type Here</InputLabel> */}
                  <Select
                    onChange={(e) => setDateDiscription(e.target.value)}
                    value={dateDiscription}
                    displayEmpty
                    style={{
                      color: dateDiscription === "" && placeholderColor,
                    }}
                  >
                    <MenuItem value={""} disabled>
                      Select/ Type Here
                    </MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    {/* Add more exam options as needed */}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={2}>
                <Typography>Starts From</Typography>
                <TextField fullWidth size="small" type="date" />
              </Grid>
              <Grid item xs={2}>
                <Typography>Ends At</Typography>
                <TextField fullWidth size="small" type="date" />
                {/* <Link> */}
                <Typography
                  variant="subtitle2"
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                >
                  Same as Start Date
                </Typography>
                {/* </Link> */}
              </Grid>
              <Grid item xs={4}>
                <Typography>Event Description (if any)</Typography>
                <FormControl fullWidth size="small">
                  {/* <InputLabel>Select/ Type Here</InputLabel> */}
                  <Select
                    onChange={(e) => setEventDiscription(e.target.value)}
                    value={eventDiscription}
                    displayEmpty
                    style={{
                      color: eventDiscription === "" && placeholderColor,
                    }}
                  >
                    <MenuItem value={""} disabled>
                      Select/ Type Here
                    </MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    {/* Add more exam options as needed */}
                  </Select>
                </FormControl>
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
