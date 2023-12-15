import { FAQ, ImportantNews } from "../../components/College/add-new-college";

import {
  ContactDetails,
  About,
  ImportantDates,
  RegistrationDetails,
  Brochure,
  ExamPattern,
  StudyMaterial,
  PreviousYearQuestionPaper,
} from "../../components/exam/add-new-exam";

import DashboardLayout from "../../layouts/Dashboard";
import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Stepper,
  Step,
  StepLabel,
  Grid,
} from "@mui/material";

import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const steps = ["Basic Details", "Important Updates", "Preparation Material"]; // Add more steps as needed

const AddNewExam = () => {
  const router = useRouter();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/auth/sign-in");
    }
  }, [router, isLoggedIn]);

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
            <Grid mt={4}>
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
                    <Brochure />
                  </Grid>
                  <Grid item mt={6}>
                    <RegistrationDetails />
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
                    <ExamPattern />
                  </Grid>
                  <Grid item mt={6}>
                    <StudyMaterial />
                  </Grid>
                  <Grid item mt={6}>
                    <PreviousYearQuestionPaper />
                  </Grid>
                  <Grid item mt={6}>
                    <FAQ />
                  </Grid>
                </Grid>
              )}
              {/* Add more steps as needed */}
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

AddNewExam.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default AddNewExam;
