import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>

                <div className="main">
                    <Sidebar/>
                    <div className="content">
                        <Routes>
                            <Route path="/profile" element={<Profile />}/>
                            <Route path="/dialogs/*" element={<Dialogs />}/>
                            <Route path="/news" element={<News />}/>
                            <Route path="/music" element={<Music />}/>
                            <Route path="/settings" element={<Settings />}/>
                        </Routes>
                    </div>
                </div>

                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
