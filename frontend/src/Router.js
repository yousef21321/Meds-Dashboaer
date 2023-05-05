import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./login.js";
import SignUp from "./sign/signup.js";
import App from "./App";
import Patient from "./components/Patient";
import About from "./components/About";
import Dashboard from "./Admin/Dashboard.js";
import Form1 from "./Admin/Dashboard copy.js";
import Update from "./Admin/update.js";
import Form2 from "./Admin/medicine/Add.js";
import Update1 from "./Admin/medicine/update1.js";
import Form3 from "./Admin/Categ_Meds/Addcat.js";
import Updatecat from "./Admin/Categ_Meds/updatecat.js";
import Delete2 from "./Admin/Categ_Meds/dashboard.js";
import History from "./Admin/historyPatient.js";
import Dashboard3 from "./patient/Dashboardpatient.js";
import Dashboard1 from "./Admin/medicine/Dashboardmedicine.js";
import Requestpatient from "./patient/requestmeds.js";
import Request_list from "./Admin/List_patient.js";
import SignUp2 from "./sign/signup2.js";
import Creatpatirnt from "./Admin/createpatient.js";
import SignUp5 from "./Admin/signupAdmin.js";
import History2 from "./patient/Historyofmedicine.js";
import History3 from "./patient/Historyofmedicine2.js";
import Accept from "./Admin/Accept.js";
import Guest from "./Middleware/Guest";
import Guest1 from "./Middleware/Admin";
import Catogary from "./patient/catogary.js";
import Listmeds from "./patient/listmeds.js";
// import PrivateRoute from "./product.js";

// import Guest from "./Middleware/Guest.js"
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <div>contact</div>,
  },
  {
    path: "/Patient",
    element: <Patient />,
  },

  // GUEST MIDDLEWARE
  {
    element: <Guest />,
    // element: <Guest1 /> ,

    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },

  {
    path: "/Admin",
    element: <Dashboard />,
  },

  {
    path: "/signUp2",
    element: <SignUp2 />,
  },

  {
    path: "/form",
    element: <Form1 />,
  },

  {
    path: "/update/:id",
    element: <Update />,
  },

  {
    path: "/managemedicine",
    element: <Dashboard1 />,
  },
  {
    path: "/form5",
    element: <Form2 />,
  },

  {
    path: "/update-patient3/:id",
    element: <Update1 />,
  },

  {
    path: "/form3",
    element: <Form3 />,
  },

  {
    path: "/update-cat/:id",
    element: <Updatecat />,
  },
  {
    path: "/delete-patient2",
    element: <Delete2 />,
  },
  {
    path: "/history_of_patient",
    element: <History />,
  },

  {
    path: "/list-patient",
    element: <Request_list />,
  },
  {
    path: "/creatpatirnt",
    element: <Creatpatirnt />,
  },
  {
    path: "/SignUp5",
    element: <SignUp5 />,
  },

  {
    path: "/Accept/:id",
    element: <Accept />,
  },
  {
    path: "/Listmeds/:id",
    element: <Listmeds />,
  },
  // {
  //   element: <Guest1 />,
  //   // element: <Guest1 /> ,

  //   children: [
  {
    path: "/Catogary",
    element: <Catogary />,
  },

  {
    path: "/patient3/:id",
    element: <Dashboard3 />,
  },
  {
    path: "/list-patientpatient/:id",
    element: <Requestpatient />,
  },
  {
    path: "/History3",
    element: <History3 />,
  },
  {
    path: "/History2",
    element: <History2 />,
  },

  // ]},
  {
    path: "*",
    element: <Navigate to={"/"} />,
  },
]);
