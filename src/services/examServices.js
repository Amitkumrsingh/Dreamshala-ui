import { API_BASE_URL } from "../config";

export const addNewExamForms = async ({ data, urlEndpoint }) => {
  try {
    const response = await fetch(API_BASE_URL + urlEndpoint, {
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
