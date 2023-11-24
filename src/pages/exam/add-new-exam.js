import {
  ManagementContact,
  CoursesAndFees,
  EntranceExams,
  Faculties,
  Reviews,
  Videos,
  StudyMaterial,
  Location,
  CompanyDetails,
  CheckList,
  FAQ,
  Results,
  Photos,
  ImportantNews,
} from "../../components/College/add-new-college";

import {
  ContactDetails,
  About,
  ImportantDates,
  RegistrationDetails,
  Brochure,
  ExamPattern,
} from "../../components/exam/add-new-exam";

import DashboardLayout from "../../layouts/Dashboard";
import React, { useState } from "react";
import { Button, Container, Stepper, Step, StepLabel } from "@mui/material";

const steps = [
  "About",
  "Contact Details",
  "Important News",
  "Important Dates",
  "Registration Details",
  "Brochure",
  "Exam Pattern",
  "Study Material",
  "Previous Year Question Papers",
  "Frequently Asked Questions",
]; // Add more steps as needed

const AddNewExam = () => {
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
      <div>
        {activeStep === steps.length ? (
          <div>
            <p>All steps completed - you're finished</p>
          </div>
        ) : (
          <div>
            {/* Render the current step form */}
            {activeStep === 0 && <About />}
            {activeStep === 1 && <ContactDetails />}
            {activeStep === 2 && <ImportantNews />}
            {activeStep === 3 && <ImportantDates />}
            {activeStep === 4 && <RegistrationDetails />}
            {activeStep === 5 && <Brochure />}
            {activeStep === 6 && <ExamPattern />}
            {activeStep === 7 && <Faculties />}
            {activeStep === 8 && <Reviews />}
            {activeStep === 9 && <FAQ />}
            {/* Add more steps as needed */}
            <div style={{ marginTop: "10px" }}>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

const Alumni = () => <div>Alumni Content</div>;

AddNewExam.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default AddNewExam;
