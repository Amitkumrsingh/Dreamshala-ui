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

const DetailedApplicationProcessAndEligibilityCriteria = () => {
  const theme = useTheme();
  const placeholderColor = theme.palette.text.secondary;

  const [addMoreDegrees, setAddMoreDegrees] = useState([""]);
  const [degreeBranch, setDegreeBranch] = useState("");
  return (
    <>
      <Container>
        <Grid mb={4}>
          <Typography variant="h5">
            DETAILED APPLICATION PROCESS AND ELIGIBILITY CRITERIA
          </Typography>
        </Grid>

        {addMoreDegrees.map((data, index) => (
          <Grid key={index} mb={6}>
            <Grid container>
              <Grid xs={4}>
                <Typography>Degree/ Branch</Typography>
                <FormControl fullWidth size="small">
                  {/* <InputLabel>Select/ Type Here</InputLabel> */}
                  <Select
                    onChange={(e) => setDegreeBranch(e.target.value)}
                    value={degreeBranch}
                    displayEmpty
                    style={{
                      color: degreeBranch === "" && placeholderColor,
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

            <Grid container spacing={6} mt={2}>
              <Grid xs={6} item>
                <Typography>
                  Add detailed description about your application process
                </Typography>
                <TextField
                  fullWidth
                  //   label="Describe here"
                  placeholder="Describe here"
                  variant="outlined"
                  multiline
                  minRows={4}
                  maxRows={4}
                />
              </Grid>
              <Grid xs={6} item>
                <Typography>
                  Add detailed description about your eligibility criteria
                </Typography>
                <TextField
                  fullWidth
                  //   label="Describe here"
                  placeholder="Describe here"
                  variant="outlined"
                  multiline
                  minRows={4}
                  maxRows={4}
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
            onClick={() => setAddMoreDegrees([...addMoreDegrees, ""])}
          >
            + Add More Courses
          </Button>
        </Grid>
      </Container>
    </>
  );
};

export default DetailedApplicationProcessAndEligibilityCriteria;
