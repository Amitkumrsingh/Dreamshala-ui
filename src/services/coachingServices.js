import { API_BASE_URL } from "../config";

export const addNewCoachingForms = async ({ data, urlEndpoint }) => {
  try {
    const formData = new FormData();

    // Loop through the object and append each key-value pair to the formData
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if (data[key] !== null) formData.append(key, data[key]);
      }
    }

    console.log(formData);

    const response = await fetch(API_BASE_URL + urlEndpoint, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    return response;
  } catch (error) {
    return { error };
  }
};
