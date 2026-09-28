import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import AppLayout from "./components/appLayout/AppLayout";
import Loading from "./components/loading/Loading";


const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<AppLayout />} hydrateFallbackElement={<Loading />}>

        </Route>
    )
)

export default routes