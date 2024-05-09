import Home from "./Home";
import CocktailList from "./CocktailList";
import UserProfile from "./UserProfile";
import ErrorPage from "./ErrorPage";


const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  }, 
  {
    path: "/cocktails",
    element: <CocktailList />,
    errorElement: <ErrorPage />
  },
  {
    path: "/userprofile",
    element: <UserProfile />,
    errorElement: <ErrorPage />
  }
];

export default routes;