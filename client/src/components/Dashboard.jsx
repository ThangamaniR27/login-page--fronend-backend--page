import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        <h1>🎵 Welcome to Dashboard</h1>
        <p>You have successfully logged in.</p>

        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;