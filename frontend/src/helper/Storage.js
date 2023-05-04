export const setAuthUser = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
  }
  export const setAuthmeds = (data) => {
    localStorage.setItem("meds", JSON.stringify(data));
  }
  export const setmeds = (data) => {
    localStorage.setItem("medcine", JSON.stringify(data));
  }
  export const getAuthUser = () => {
    if (localStorage.getItem("user")) {
      return JSON.parse(localStorage.getItem("user"));
    }
    return null;
  }
  export const getAuthmeds = () => {
    if (localStorage.getItem("meds")) {
      return JSON.parse(localStorage.getItem("meds"));
    }
    return null;
  }
  export const getmeds = () => {
    if (localStorage.getItem("medcine")) {
      return JSON.parse(localStorage.getItem("medcine"));
    }
    return null;
  }
  export const removeAuthUser = () => {
    if (localStorage.getItem("user")) {
      localStorage.removeItem("user");
    }
  }
  export const removeAuthmeds = () => {
    if (localStorage.getItem("meds")) {
      localStorage.removeItem("meds");
    }
  }
  export const removecat1 = () => {
    if (localStorage.getItem("cat")) {
      localStorage.removeItem("cat");
    }
  }
  ///////////////////////////////////////
  export const setcat1 = (data) => {
    localStorage.setItem("cat", JSON.stringify(data));
  }
  export const getcat1 = () => {
    if (localStorage.getItem("cat")) {
      return JSON.parse(localStorage.getItem("cat"));
    }
    return null;
  }