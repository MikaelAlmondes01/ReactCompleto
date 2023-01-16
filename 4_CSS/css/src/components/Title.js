import React from "react";
import styles from "./title.module.css";

const Title = () => {
  return (
    <div>
      <h1 className={styles.my_title}>Meu título</h1>
      <p>Esse é o título da seção</p>
    </div>
  );
};

export default Title;
