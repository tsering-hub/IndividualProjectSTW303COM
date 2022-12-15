import "./App.scss";
import Body from "./components/layout/Body";
import Header from "./components/layout/Header";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <BrowserRouter>
        {localStorage.getItem("userType") !== "admin" && <Header />}
        <Body />
      </BrowserRouter>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
