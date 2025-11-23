import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";

function App(props) {
    return (
        <div className="App">
            <Header/>

            <div className="main">
                <Sidebar state={props.state.sidebar}/>
                <div className="content">
                    <Routes>
                        <Route path="/profile"
                               element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
                        <Route path="/dialogs/*"
                               element={<Dialogs state={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>

            <Footer/>
        </div>
    );
}

export default App;
