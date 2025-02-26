import React from "react";
import styles from "./home.module.css"; // Import the CSS module
import Counter from "../../components/Counter/Counter";

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.header}>
        <h1>Yendou Assignment</h1>
        <p>Enhance your experience with this interactive counter!</p>
      </div>
      <div className={styles.counterSection}>
        <h2>Counter</h2>
        <Counter />
      </div>
    </div>
  );
};

export default Home;
