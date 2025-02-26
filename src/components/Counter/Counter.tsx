import React, { useEffect } from "react";
import styles from "./counter.module.css";
import { useCounter } from "../../context/CounterContext";
import { toaster } from "../ui/toaster";

const Counter: React.FC = () => {
  const { count, increment } = useCounter(); // Use the custom hook

  const handleIncrement = () => {
    increment();
    // Trigger the toast when the button is clicked
    toaster.create({
      title: `Incremented`,
      description: `Counter is now ${count + 1}`, // Incremented value
      type: "success",
    });
  };

  return (
    <div className={styles.container}>
      <p className={styles.countText}>Current count: {count}</p>
      <button className={styles.button} onClick={handleIncrement}>
        +1
      </button>
    </div>
  );
};

export default Counter;
