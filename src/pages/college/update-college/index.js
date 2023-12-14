import {
  About,
  ContactDetails,
  ManagementContact,
  CoursesAndFees,
  EntranceExams,
  Faculties,
  Reviews,
  Videos,
  Location,
  CollegeDetails,
  CheckList,
  FAQ,
  Photos,
  ImportantNews,
  ImportantDates,
  DetailedApplicationProcessAndEligibilityCriteria,
  Alumni,
  PreviousCutoffs,
  PlacementDetails,
} from "../../../components/College/add-new-college";

import DashboardLayout from "../../../layouts/Dashboard";
import React, { useState } from "react";
import {
  Button,
  Container,
  Stepper,
  Step,
  StepLabel,
  Grid,
} from "@mui/material";
// import { Checklist } from "@mui/icons-material";

const steps = [
  "Basic Details",
  "Important Updates",
  "Courses Offered and its Details",
  "People",
  "Additional Details",
];

const AddNewCollege = () => {
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
                    <CollegeDetails />
                  </Grid>
                  <Grid item mt={6}>
                    <Location />
                  </Grid>
                  <Grid item mt={6}>
                    <ManagementContact />
                  </Grid>
                </Grid>
              )}
              {activeStep === 1 && (
                <Grid container flexDirection={"column"} spacing={6}>
                  <Grid item>
                    <ImportantNews />
                  </Grid>
                  <Grid item mt={6}>
                    <ImportantDates />
                  </Grid>
                </Grid>
              )}

              {activeStep === 2 && (
                <Grid container flexDirection={"column"} spacing={6}>
                  <Grid item>
                    <EntranceExams />
                  </Grid>
                  <Grid item mt={6}>
                    <CoursesAndFees />
                  </Grid>
                  <Grid item mt={6}>
                    <DetailedApplicationProcessAndEligibilityCriteria />
                  </Grid>
                  <Grid item mt={6}>
                    <PreviousCutoffs />
                  </Grid>
                </Grid>
              )}
              {activeStep === 3 && (
                <Grid container flexDirection={"column"} spacing={6}>
                  <Grid item>
                    <Alumni />
                  </Grid>
                  <Grid item mt={6}>
                    <Faculties />
                  </Grid>
                  <Grid item mt={6}></Grid>
                </Grid>
              )}
              {activeStep === 4 && (
                <Grid container flexDirection={"column"} spacing={6}>
                  <Grid item>
                    <PlacementDetails />
                  </Grid>
                  <Grid item mt={6}>
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
              {/* Add more steps as needed */}
            </Grid>

            <Grid
              container
              // alignItems={"right"}
              justifyContent={"end"}
              mt={20}
            >
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

AddNewCollege.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default AddNewCollege;
