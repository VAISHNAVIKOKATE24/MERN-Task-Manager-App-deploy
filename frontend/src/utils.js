// utils.js
// Use the deployed backend API
//export const API_URL = "https://mern-task-manager-app-deploy-api.vercel.app";

// Local (if running backend locally, uncomment this)
 export const API_URL = "http://localhost:5000";

import { toast } from "react-toastify";

export const notify = (message, type) => {
  if (type === "success") {
    toast.success(message);
  } else {
    toast.error(message);
  }
};
