import React from "react";
import "./App.module.css";
import Profile from "../Profile/Profile";
import Statistics from "../Statistics/Statistics";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import user from "../../api-json/user.json";
import statisticalData from "../../api-json/statistical-data.json";
import friends from "../../api-json/friends.json";
import transactions from "../../api-json/transactions.json";

function App() {
  return (
    <div className="App">
      <Profile
        name="Petra Marica"
        tag="pmarica"
        location="Salvador, Brasil"
        avatar="https://i.pinimg.com/originals/a0/40/66/a04066a2d1fcf25df39c599e093995c8.jpg"
        stats={{ user }}
      />

      <Statistics title="Upload stats" stats={statisticalData} />

      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
