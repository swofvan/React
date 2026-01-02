import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CreateProduct from "./components/CreateProducts";
import Product from "./components/Product";
import EditProduct from "./components/EditProduct";

const router = createBrowserRouter([
    {path: '', element: <App/>},
    {path: 'create', element: <CreateProduct/>},
    {path: 'view/:productId', element: <Product/>},
    {path: 'edit/:productId', element: <EditProduct/>},
]);

export default router;