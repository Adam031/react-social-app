import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="App">
        <Header />
        <div className="main">
            <Sidebar />
            <Profile />
        </div>
        <Footer />
    </div>
  );
}

export default App;
