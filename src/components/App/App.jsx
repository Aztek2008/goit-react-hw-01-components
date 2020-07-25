import React from "react";
import "./App.module.css";
import Profile from "../Profile/Profile";
import Statistics from "../Statistics/Statistics";
import user from "../../user.json";
import statisticalData from "../../statistical-data.json";

function App() {
  return (
    <div className="App">
      <Profile
        name="Petra Marica"
        tag="pmarica"
        location="Salvador, Brasil"
        avatar="https://i.pinimg.com/originals/a0/40/66/a04066a2d1fcf25df39c599e093995c8.jpg"
        stats={user.stats}
        // СИЛЬНЫЕ СОМНЕНИЯ НАСЧЕТ ЗАПИСИ stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
    </div>
  );
}

export default App;
