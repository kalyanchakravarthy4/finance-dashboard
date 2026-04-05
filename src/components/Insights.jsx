import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

const Insights = () => {
  const { transactions } = useContext(FinanceContext);

  let maxCategory = "";
  let maxAmount = 0;
  const map = {};

  transactions.forEach(t => {
    if (t.type === "expense") {
      map[t.category] = (map[t.category] || 0) + t.amount;
      if (map[t.category] > maxAmount) {
        maxAmount = map[t.category];
        maxCategory = t.category;
      }
    }
  });

  return (
    <div>
      <h2 style={{marginTop: "40px",marginBottom: "10px",color: "#1e293b"}}>Insights</h2>
      <p>Highest Spending Category: {maxCategory}</p>
    </div>
  );
};

export default Insights;