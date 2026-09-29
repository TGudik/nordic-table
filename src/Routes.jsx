import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import AppLayout from "./components/appLayout/AppLayout";
import Loading from "./components/loading/Loading";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Book from "./pages/Book";
import { dishesLoader } from "./loaders/DataLoaders";


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
        </Route>
    )
)

export default routes