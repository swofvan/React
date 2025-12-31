import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CreateBook from "./components/CreateBook";
import EditBooks from "./components/EditBooks";

const router = createBrowserRouter ([
    {path: '', element: <App/>},
    {path: 'create', element: <CreateBook/>},
    {path: 'edit', element: <EditBooks/>},
])

export default router