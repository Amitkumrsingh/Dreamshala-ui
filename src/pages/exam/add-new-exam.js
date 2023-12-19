import { FAQ, ImportantNews } from "../../components/College/add-new-college";
import { addNewExamForms } from "../../services/examServices";

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
  const [faq, setFaq] = useState();
  const [about, setAbout] = useState();
  const [contactDetails, setContactDetails] = useState();
  const [brochure, setBrochure] = useState();
  const [registrationDetails, setRegistrationDetails] = useState();
  const [importantNews, setImportantNews] = useState();
  const [importantDates, setImportantDates] = useState();
  const [examPattern, setExamPattern] = useState();
  const [studyMaterial, setStudyMaterial] = useState();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/auth/sign-in");
    }
  }, [router, isLoggedIn]);

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = async () => {
    let data, obj;
    switch (activeStep) {
      case 0:
        data = await addNewExamForms({
          data: {
            ...about,
            ...contactDetails,
            ...brochure,
            ...registrationDetails,
          },
          urlEndpoint: "/exam/step1/",
        });

        // if (data.response === 201) console.log("form Submitted 1");

        obj = await data.json();
        console.log(obj);
        break;

      case 1:
        data = await addNewExamForms({
          data: {
            ...importantNews,
            ...importantDates,
          },
          urlEndpoint: "/exam/step2/",
        });

        // if (data.response === 201) console.log("form Submitted 1");

        obj = await data.json();
        console.log(obj);
        break;

      case 2:
        console.log(examPattern, studyMaterial);
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
                    <Brochure setBrochure={setBrochure} />
                  </Grid>
                  <Grid item mt={6}>
                    <RegistrationDetails
                      setRegistrationDetails={setRegistrationDetails}
                    />
                  </Grid>
                </Grid>
              )}
              {activeStep === 1 && (
                <Grid container flexDirection={"column"} spacing={6}>
                  <Grid item>
                    <ImportantNews setImportantNews={setImportantNews} />
                  </Grid>
                  <Grid item mt={6}>
                    <ImportantDates setImportantDates={setImportantDates} />
                  </Grid>
                </Grid>
              )}
              {activeStep === 2 && (
                <Grid container flexDirection={"column"} spacing={6}>
                  <Grid item>
                    <ExamPattern setExamPattern={setExamPattern} />
                  </Grid>
                  <Grid item mt={6}>
                    <StudyMaterial setStudyMaterial={setStudyMaterial} />
                  </Grid>
                  <Grid item mt={6}>
                    <PreviousYearQuestionPaper />
                  </Grid>
                  <Grid item mt={6}>
                    <FAQ setFaq={setFaq} />
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
