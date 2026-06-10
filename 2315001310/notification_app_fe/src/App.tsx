import { useState } from "react";
import AllNotifications from "./pages/AllNotifications";
import PriorityNotifications from "./pages/PriorityNotifications";

function App() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div>
      <h1>Notification Dashboard</h1>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setActiveTab("all")}>
          All Notifications
        </button>

        <button
          onClick={() => setActiveTab("priority")}
          style={{ marginLeft: "10px" }}
        >
          Priority Notifications
        </button>
      </div>

      {activeTab === "all" ? (
        <AllNotifications />
      ) : (
        <PriorityNotifications />
      )}
    </div>
  );
}

export default App;
