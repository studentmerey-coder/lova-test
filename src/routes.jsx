import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ValentinePath} from "./components/common/paths.js";
import Valentine from "./pages/Valentine.jsx";


const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path={ValentinePath} element={<Valentine/>}/>
        </Routes>
    </Router>
);

export default AppRoutes;