import React from "react";
import "./App.css";
import UsersTable from "./components/UsersTable";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h2>DWP Skill Test UI</h2>
      <UsersTable />
    </div>
  );
}

export default App;
