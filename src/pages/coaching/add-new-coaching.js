import {
  Faculties,
  Videos,
  Location,
  CheckList,
  FAQ,
} from "../../components/College/add-new-college";

import {
  Photos,
  ManagementContact,
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
import { addNewCoachingForms } from "../../services/coachingServices";

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
  const [entranceExams, setEntranceExams] = useState();
  const [coursesAndFees, setCoursesAndFees] = useState();
  const [studyMaterial, setStudyMaterial] = useState();
  const [results, setResults] = useState();
  const [faculties, setFaculties] = useState();
  const [photos, setPhotos] = useState();
  const [videos, setVideos] = useState();
  const [reviews, setReviews] = useState();
  const [checkList, setCheckList] = useState();
  const [faq, setFaq] = useState();

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
        data = await addNewCoachingForms({
          data: {
            ...about,
            ...contactDetails,
            ...managementContact,
            ...coachingDetails,
            ...location,
          },
          urlEndpoint: "/coaching/Step1/",
        });

        // if (data.response === 201) console.log("form Submitted 1");

        obj = await data.json();
        console.log(obj);
        break;

      case 1:
        data = await addNewCoachingForms({
          data: {
            ...entranceExams,
            ...coursesAndFees,
            ...studyMaterial,
            ...results,
            ...faculties,
          },
          urlEndpoint: "/coaching/Step2/",
        });

        // if (data.response === 201) console.log("form Submitted 2");

        obj = await data.json();
        console.log(obj);
        break;

      case 2:
        data = await addNewCoachingForms({
          data: {
            ...photos,
            ...videos,
            ...reviews,
            ...checkList,
            ...faq,
          },
          urlEndpoint: "/coaching/Step3/",
        });

        // if (data.response === 201) console.log("form Submitted 2");

        obj = await data.json();
        console.log(obj);
        break;
    }
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
                    <EntranceExams setEntranceExams={setEntranceExams} />
                  </Grid>
                  <Grid item mt={6}>
                    <CoursesAndFees setCoursesAndFees={setCoursesAndFees} />
                  </Grid>
                  <Grid item mt={6}>
                    <StudyMaterial setStudyMaterial={setStudyMaterial} />
                  </Grid>
                  <Grid item mt={6}>
                    <Results setResults={setResults} />
                  </Grid>
                  <Grid item mt={6}>
                    <Faculties setFaculties={setFaculties} />
                  </Grid>
                </Grid>
              )}
              {activeStep === 2 && (
                <Grid container flexDirection={"column"} spacing={6}>
                  <Grid item>
                    <Photos setPhotos={setPhotos} />
                  </Grid>
                  <Grid item mt={6}>
                    <Videos setVideos={setVideos} parentName="coaching" />
                  </Grid>
                  <Grid item mt={6}>
                    <Reviews setReviews={setReviews} />
                  </Grid>
                  <Grid item mt={6}>
                    <CheckList setCheckList={setCheckList} />
                  </Grid>
                  <Grid item mt={6}>
                    <FAQ setFaq={setFaq} />
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
