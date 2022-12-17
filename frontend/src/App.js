import "./App.scss";
import Body from "./components/layout/Body";
import Header from "./components/layout/Header";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminHeader from "./components/layout/AdminHeader";
import AdminBody from "./components/layout/AdminBody";
function App() {
  var mainbody;
  if (localStorage.getItem("userType") !== "Admin") {
    mainbody = (
      <>
        <Header />
        <Body />
      </>
    );
  } else if (localStorage.getItem("userType") === "Admin") {
    mainbody = (
      <>
        <AdminHeader>
          <AdminBody />
        </AdminHeader>
      </>
    );
  }
  return (
    <>
      <BrowserRouter>
        <>{mainbody}</>
      </BrowserRouter>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
