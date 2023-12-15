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
import { coachingStep1FormSubmit } from "../../services/coachingServices";
import { unstable_gridTabIndexColumnHeaderFilterSelector } from "@mui/x-data-grid";

const steps = [
  "Basic Details",
  "Courses Offered and Its Details",
  "Additional Details",
]; // Add more steps as needed

const AddNewCoaching = () => {
  const router = useRouter();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [about, setAbout] = useState();
  const [contactDetails, setContactDetails] = useState();
  const [managementContact, setManagementContact] = useState();
  const [coachingDetails, setCoachingDetails] = useState();
  const [location, setLocation] = useState();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/auth/sign-in");
    }
  }, [router, isLoggedIn]);

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = async () => {
    switch (activeStep) {
      case 0:
        const data = await coachingStep1FormSubmit({
          ...about,
          ...contactDetails,
          ...managementContact,
          ...coachingDetails,
          ...location,
        });

        if (data.response === 201) console.log("form Submitted 1");

        const obj = await data.json();
        console.log(obj);

        // console.log(coachingDetails);
        break;

      case 1:
        console.log("stpe 2");
        break;

      case 2:
        console.log("step 3");
        break;
    }
    // setActiveStep(activeStep + 1);
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
                    <About setAbout={setAbout} />
                  </Grid>
                  <Grid item mt={6}>
                    <ContactDetails setContactDetails={setContactDetails} />
                  </Grid>
                  <Grid item mt={6}>
                    <ManagementContact
                      setManagementContact={setManagementContact}
                    />
                  </Grid>
                  <Grid item mt={6}>
                    <CoachingDetails setCoachingDetails={setCoachingDetails} />
                  </Grid>
                  <Grid item mt={6}>
                    <Location setLocation={setLocation} />
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
