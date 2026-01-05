import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/login";
import ListProducts from "./components/ProductList";

const router = createBrowserRouter([
    {path: '', element: <App/>},
    {path: 'login', element: <Login/>},
    {path: 'products', element: <ListProducts/>}
]);

export default router;