import './App.css';
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
    return (
        <div className="App">
            <HeaderContainer/>

            <div className="main">
                <Sidebar/>
                <div className="content">
                    <Routes>
                        <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
                        <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                        <Route path="/users" element={<UsersContainer />}/>
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
