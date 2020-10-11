import React from "react";
import Nav from "../components/Navbar";
import Main from "../components/MainContent";
import Footer from "../components/Footer";

function App() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  
if (hours < 12) {
  timeOfDay = "morning"
} else if (hours >= 12 && hours < 17){  
  timeOfDay = "afternoon"
} else {
  timeOfDay = "night"
}

const style = {
  color: "#FF8C00", 
  backgroundColor: "#FF2D00"
}
  return (
    <div>
      <h1 style={style}>Good {timeOfDay} !</h1>
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
