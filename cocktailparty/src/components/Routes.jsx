
import UserProfile from "./UserProfile";
import ErrorPage from "./ErrorPage";
import Form from "./form";
import Homepage from "./Homepage";
import CocktailCard from "./CocktailCard";


const routes = [
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />
  }, 
  {
    path: "/userprofile",
    element: <UserProfile />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <Form />,
    errorElement: <ErrorPage />
  } ,
   {
    path: "/signup",
    element: <Form />,
    errorElement: <ErrorPage />
  },

];

export default routes;