import { API_BASE_URL } from "../config";

export const coachingStep1FormSubmit = async (data) => {
  try {
    const response = await fetch(API_BASE_URL + "/coaching/Step1/", {
      method: "POST",
      body: JSON.stringify({ ...data }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error) {
    return { error };
  }
};
