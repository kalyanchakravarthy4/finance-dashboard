import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

const RoleSwitcher = () => {
  const { role, setRole } = useContext(FinanceContext);

  return (
    <select
    value={role}
    onChange={(e) => setRole(e.target.value)}
    style={{
        padding: "10px",
        borderRadius: "8px",
        border: "1px solid #ddd",
        marginBottom: "20px",
        background: "white",
        cursor: "pointer"
    }}
    >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
        </select>
  );
};

export default RoleSwitcher;