import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Profile from "./Components/Profile";
import CreateQuote from "./Components/CreateQuote";
import Home from "./Components/Home";
import OtherProfile from "./Components/OtherProfile";
import NotFound from "./Components/NotFound";

export const routes = [
  {path: "/",element: <Home />},
  {path: "/login",element: <Login />},
  {path: "/signup",element: <Signup />},
  {path: "/profile",element: <Profile />},
  {path: "/create",element: <CreateQuote />},
  {path: "/profile/:userid",element: <OtherProfile />},
  {path: "*",element: <NotFound />}
];
