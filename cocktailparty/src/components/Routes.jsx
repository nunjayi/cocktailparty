import Hero from "./Hero"
import Homepage from "./HomePage";
import CocktailList from "./CocktailList";

import ErrorPage from "./ErrorPage";

import ShoppingList from "./ShoppingList";;
import Form from "./form"
import SignUpForm  from "./SignUpForm"

const routes = [
  {
    path:"/login",
    element:<Form />,
    errorElement:<ErrorPage />
  },
  {
    path:"/signup",
    element:<SignUpForm />,
    errorElement:<ErrorPage />
  },
  {
    path: "/",
    element: <Hero />,
    errorElement: <ErrorPage />
    
  },
  {
    path:'/homepage',
    element: <Homepage />,
    errorElement:<ErrorPage/>,
  },
  {
    path: "/cocktails",
    element: <CocktailList />,
    errorElement: <ErrorPage />
  },
  {
    path: "/shoppinglist", 
    element: <ShoppingList />, 
    errorElement: <ErrorPage />
  },
  {
    path:'/error',
    element:<ErrorPage />,
    errorElement:<ErrorPage />

  }
];

export default routes;
