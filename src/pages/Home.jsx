import Dashboard from "../components/Dashboard";
import Transactions from "../components/Transactions";
import Insights from "../components/Insights";
import RoleSwitcher from "../components/RoleSwitcher";

const Home = () => {
  return (
    <div style={layout}>
      <h1 style={heading}>Finance Dashboard</h1>

      <RoleSwitcher />

      <Dashboard />
      <Transactions />
      <Insights />
    </div>
  );
};

const layout = {
  maxWidth: "1100px",
  margin: "auto",
  padding: "20px"
};

const heading = {
  fontSize: "28px",
  fontWeight: "600",
  marginBottom: "20px",
  color: "#1e293b"
};

export default Home;