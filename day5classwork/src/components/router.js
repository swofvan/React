import { createBrowserRouter} from "react-router-dom";

import App from "../App";
import Welcome from "./welcome";


let router = createBrowserRouter ([
    { path: '', element: <App/> },
    { path: 'welcome/:name', element: <Welcome/> }
])

export default router;