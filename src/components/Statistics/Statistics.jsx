import React from "react";
import PropTypes from "prop-types";
import RandomColor from "./RandomColor";
import styles from "./Statistics.module.css";

// ВЫЧИСЛЯЕМАЯ ШИРИНА ДЛЯ ЭЛЕМЕНТОВ СПИСКА - ЧТО НЕ ТАК С ВЫРАЖЕНИЕМ ???
// const itemWidth = () => {calc( 100% / statisticalData.length )};

function Statistics({ title, stats }) {
  const isTitle = title;
  return (
    <section className={styles.statistics}>
      {isTitle && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map((stat) => (
          <li
            key={stat.id}
            className={styles.item}
            style={{ backgroundColor: RandomColor() }}
          >
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
