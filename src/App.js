import './App.css';
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import {Route, Routes, useParams} from "react-router-dom";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {initApp} from "./redux/appReducer";
import {Preloader} from "./components/common/Preloader/Preloader";

class App extends Component {
    componentDidMount() {
        this.props.initApp()
    }

    render() {
        if (!this.props.isInit) {
            return <Preloader/>
        }

        return (
            <div className="App">
                <HeaderContainer/>

                <div className="main">
                    <Sidebar/>
                    <div className="content">
                        <Routes>
                            <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
                            <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/music" element={<Music/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                            <Route path="/login" element={<Login/>}/>
                        </Routes>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isInit: state.appComponent.isInit
    }
}

export default connect(mapStateToProps, {initApp})(App)
