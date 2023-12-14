const userServices = {
  isLogedIn: () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("reduxState") !== null ? true : false;
    }
  },
};

export default userServices;
