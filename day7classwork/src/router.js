import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CreateBook from "./components/CreateBook";

const router = createBrowserRouter ([
    {path: '', element: <App/>},
    {path: 'create', element: <CreateBook/> }
])

export default router