import { useState } from "react";
import { snacks } from "../data/snacks";
import "./SnackList.css";

function SnackList() {
    const [order, setOrder] = useState("desc");

    const sortedSnacks = [...snacks].sort((a,b)=> 
        order === "asc" ? a.rank - b.rank : b.rank - a.rank
    )

    return (
        <div className="snack-list-container">
            <div className="snack-list-buttons">
                <button
                    className={order === "asc" ? "active" : ""}
                    onClick={() => setOrder("asc")}
                >
                Ascendant
                </button>
                <button
                    className={order === "desc" ? "active" : ""}
                    onClick={() => setOrder("desc")}
                >
                Descendant
                </button>
            </div>

            <ul className="snack-list">
                {sortedSnacks.map((snack) => (
                <li key={snack.id}>
                    <span>{snack.name}</span>
                    <span>Rank: {snack.rank}</span>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default SnackList;