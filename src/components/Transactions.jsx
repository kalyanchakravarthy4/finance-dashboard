import { useContext, useState } from "react";
import { FinanceContext } from "../context/FinanceContext";

const Transactions = () => {
  const {
    transactions,
    setTransactions,
    filter,
    setFilter,
    role
  } = useContext(FinanceContext);

  const [search, setSearch] = useState("");

  // 🔍 Filter + Search
  const filtered = transactions.filter((t) => {
    const matchesFilter = filter === "" || t.type === filter;
    const matchesSearch = t.category
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  // ➕ Add Transaction (Admin only)
  const addTransaction = () => {
    const newTransaction = {
      id: Date.now(),
      date: "2026-04-05",
      amount: Math.floor(Math.random() * 2000) + 500,
      category: "Misc",
      type: "expense"
    };

    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h2 style={{marginTop: "40px",marginBottom: "10px",color: "#1e293b"}}>Transactions</h2>

      {/* Admin Button */}
      {role === "admin" && (
        <button style={btnStyle} onClick={addTransaction} onMouseEnter={(e) => e.target.style.background = "#4338ca"} onMouseLeave={(e) => e.target.style.background = "#4f46e5"}>
          + Add Transaction
        </button>
      )}

      {/* Controls */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <select
          onChange={(e) => setFilter(e.target.value)}
          style={inputStyle}
        >
          <option value="">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <input
          type="text"
          placeholder="Search category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={inputStyle}
        />
      </div>

      {/* Header */}
      <div style={headerStyle}>
        <span>Date</span>
        <span>Amount</span>
        <span>Category</span>
        <span>Type</span>
      </div>

      {/* Rows */}
      {filtered.length === 0 ? (
        <p>No transactions found</p>
      ) : (
        filtered.map((t) => (
          <div style={rowStyle} onMouseEnter={(e) => e.currentTarget.style.background = "#f0f4ff"} onMouseLeave={(e) => e.currentTarget.style.background = "white"}>
            <span>{t.date}</span>
            <span>₹{t.amount}</span>
            <span>{t.category}</span>
            <span
              style={{
                color: t.type === "income" ? "green" : "red",
                fontWeight: "bold"
              }}
            >
              {t.type}
            </span>
          </div>
        ))
      )}
    </div>
  );
};

// 🎨 Styles
const inputStyle = {
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc"
};

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  fontWeight: "bold",
  padding: "10px",
  background: "#e0e7ff",
  borderRadius: "6px",
  marginTop: "15px"
};

const rowStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  background: "white",
  padding: "10px",
  marginTop: "8px",
  borderRadius: "6px"
};

const btnStyle = {
  padding: "10px 16px",
  marginBottom: "10px",
  background: "#4f46e5",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  transition: "0.2s",
  fontWeight: "500"
};

export default Transactions;