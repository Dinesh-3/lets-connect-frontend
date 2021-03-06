import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AdminRoute } from "./auth/AuthRoutes";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Notification from "./components/Notification";
import history from "./services/history";

function App() {
    return (
        <div>
            <Header />
            <Notification />
            <BrowserRouter>
                {/* <nav className="nav-container">
                    <Link to="/">Home</Link>
                </nav> */}

                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
