import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell
} from "recharts";

const Dashboard = () => {
  const { transactions } = useContext(FinanceContext);

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  const data = transactions.map((t, index) => ({
    name: "T" + (index + 1),
    amount: t.amount
  }));

  const categoryData = [
    { name: "Income", value: income },
    { name: "Expense", value: expense }
  ];

  const COLORS = ["#00C49F", "#FF4C4C"];

  return (
    <div style={container}>
      <h2 style={title}>Dashboard</h2>

      {/* Cards */}
      <div style={cardContainer}>
        <div style={card} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
          <h4>Balance</h4>
          <p style={{ color: "#4f46e5", fontWeight: "bold" }}>₹{balance}</p>
        </div>

        <div style={card} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
          <h4>Income</h4>
          <p style={{ color: "green" }}>₹{income}</p>
        </div>

        <div style={card} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
          <h4>Expenses</h4>
          <p style={{ color: "#ef4444" }}>₹{expense}</p>
        </div>
      </div>

      {/* Line Chart */}
      <div style={sectionCard}>
        <h3 style={{marginBottom: "10px",color: "#334155",fontWeight: "500"}}>Trend</h3>
        <LineChart width={450} height={250} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="amount" stroke="#4f46e5" />
        </LineChart>
      </div>

      {/* Pie Chart */}
      <div style={sectionCard}>
        <h3 style={{marginBottom: "10px",color: "#334155",fontWeight: "500"}}>Spending Breakdown</h3>
        <PieChart width={300} height={300}>
          <Pie
            data={categoryData}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
          >
            {categoryData.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

// 🎨 Styles
const container = {
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  marginTop: "20px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
};

const title = {
  marginBottom: "20px",
  color: "#1e293b"
};

const cardContainer = {
  display: "flex",
  gap: "20px"
};

const card = {
  background: "white",
  padding: "20px",
  borderRadius: "16px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  width: "180px",
  textAlign: "center",
  transition: "0.3s"
};

const sectionCard = {
  background: "white",
  padding: "20px",
  borderRadius: "16px",
  marginTop: "20px",
  boxShadow: "0 6px 15px rgba(0,0,0,0.06)"
};
// hover functions
const hoverIn = (e) => {
  e.currentTarget.style.transform = "translateY(-5px)";
};

const hoverOut = (e) => {
  e.currentTarget.style.transform = "translateY(-5px)";
};

export default Dashboard;