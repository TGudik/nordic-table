import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import AppLayout from "./components/appLayout/AppLayout";
import Loading from "./components/loading/Loading";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Book from "./pages/Book";
import { bookingsLoader, dishesLoader } from "./loaders/DataLoaders";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import Backoffice from "./pages/Backoffice";
import Login from "./pages/Login";
import BackofficeDishes from "./pages/BackofficeDishes";
import BackofficeBookings from "./pages/BackofficeBookings";
import NotFound from "./pages/NotFound";


const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<AppLayout />} hydrateFallbackElement={<Loading />}>
            <Route 
              index
              element={<Home />}
              loader={dishesLoader}
            />
            <Route
              path="menu"
              element={<Menu />}
              loader={dishesLoader}
            />
            <Route 
              path="book"
              element={<Book />}
            />
            <Route  
              path="login"
              element={<Login />}
            />
            <Route 
              path="backoffice"
              element={<ProtectedRoute />}
            >
              <Route
               index
               element={<Backoffice />}
              />
              <Route
                path="dishes"
                element={<BackofficeDishes />}
                loader={dishesLoader}
              />
              <Route
                path="bookings"
                element={<BackofficeBookings />}
                loader={bookingsLoader}
              />
            </Route>
            <Route
              path="*"
              element={<NotFound/>}
            />
        </Route>
    )
)

export default routes