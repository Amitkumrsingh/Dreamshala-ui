import {
  ManagementContact,
  Faculties,
  Videos,
  Location,
  CheckList,
  FAQ,
  Photos,
} from "../../components/College/add-new-college";

import {
  About,
  StudyMaterial,
  Results,
  ContactDetails,
  EntranceExams,
  CoursesAndFees,
  Reviews,
  CoachingDetails,
} from "../../components/coaching/add-new-coaching";

import DashboardLayout from "../../layouts/Dashboard";
import React, { useState } from "react";
import {
  Button,
  Container,
  Stepper,
  Step,
  StepLabel,
  Grid,
} from "@mui/material";

const steps = [
  "Basic Details",
  "Courses Offered and Its Details",
  "Additional Details",
]; // Add more steps as needed

const AddNewCoaching = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleToStep = (step) => {
    setActiveStep(step);
  };

  return (
    <Container>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        style={{ marginBottom: "20px" }}
      >
        {steps.map((label, index) => (
          <Step key={index} onClick={() => handleToStep(index)}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid>
        {activeStep === steps.length ? (
          <Grid>
            <p>All steps completed - you're finished</p>
          </Grid>
        ) : (
          <Grid
            container
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <Grid>
              {/* Render the current step form */}
              {activeStep === 0 && (
                <Grid container flexDirection={"column"} spacing={6}>
                  <Grid item>
                    <About />
                  </Grid>
                  <Grid item mt={6}>
                    <ContactDetails />
                  </Grid>
                  <Grid item mt={6}>
                    <ManagementContact />
                  </Grid>
                  <Grid item mt={6}>
                    <CoachingDetails />
                  </Grid>
                  <Grid item mt={6}>
                    <Location />
                  </Grid>
                </Grid>
              )}
              {activeStep === 1 && (
                <Grid container flexDirection={"column"} spacing={6}>
                  <Grid item>
                    <EntranceExams />
                  </Grid>
                  <Grid item mt={6}>
                    <CoursesAndFees />
                  </Grid>
                  <Grid item mt={6}>
                    <StudyMaterial />
                  </Grid>
                  <Grid item mt={6}>
                    <Results />
                  </Grid>
                  <Grid item mt={6}>
                    <Faculties />
                  </Grid>
                </Grid>
              )}
              {activeStep === 2 && (
                <Grid container flexDirection={"column"} spacing={6}>
                  <Grid item>
                    <Photos />
                  </Grid>
                  <Grid item mt={6}>
                    <Videos />
                  </Grid>
                  <Grid item mt={6}>
                    <Reviews />
                  </Grid>
                  <Grid item mt={6}>
                    <CheckList />
                  </Grid>
                  <Grid item mt={6}>
                    <FAQ />
                  </Grid>
                </Grid>
              )}
            </Grid>

            <Grid container justifyContent={"end"} mt={20}>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

AddNewCoaching.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default AddNewCoaching;
