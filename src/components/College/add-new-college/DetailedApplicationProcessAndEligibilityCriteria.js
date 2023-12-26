import React, { useState, useEffect } from "react";
import { Container, Grid, TextField, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const DetailedApplicationProcessAndEligibilityCriteria = ({
  setDetailedApplicationProcessAndEligibilityCriteria,
}) => {
  const theme = useTheme();

  const [addMoreDegrees, setAddMoreDegrees] = useState([""]);

  const [formData, setFormData] = useState({
    degree_branch_application_process: "",
    application_process_description: "",
    eligibility_criteria_description: "",
  });

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  useEffect(() => {
    setDetailedApplicationProcessAndEligibilityCriteria(formData);
  }, [formData, setDetailedApplicationProcessAndEligibilityCriteria]);

  return (
    <>
      <Container>
        <Grid mb={4}>
          <Typography
            variant="h5"
            gutterBottom
            borderLeft={"4px solid " + theme.palette.primary.main}
            padding={1}
            mb={2}
          >
            <em>
              <strong>
                DETAILED APPLICATION PROCESS AND ELIGIBILITY CRITERIA
              </strong>
            </em>
          </Typography>
        </Grid>

        {addMoreDegrees.map((data, index) => (
          <Grid key={index} mb={6}>
            <Grid container>
              <Grid xs={4} item>
                <Typography>Degree/ Branch</Typography>
                <TextField
                  fullWidth
                  placeholder="Type here"
                  value={formData.degree_branch_application_process}
                  onChange={handleInputChange(
                    "degree_branch_application_process"
                  )}
                  size="small"
                />
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
                  value={formData.application_process_description}
                  onChange={handleInputChange(
                    "application_process_description"
                  )}
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
                  value={formData.eligibility_criteria_description}
                  onChange={handleInputChange(
                    "eligibility_criteria_description"
                  )}
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
