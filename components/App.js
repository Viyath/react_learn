import React from "react";
import Nav from "../components/Navbar";
import Main from "../components/MainContent";
import Footer from "../components/Footer";

function App() {
  const fName = "konga"
  const lName = "anta"

  return (
    <div>
      <h1>Hello {`${fName} ${lName}`} !</h1>
      <Nav />{fName + " " + lName}
      <Main />
      <Footer />
    </div>
  );
}

export default App;
