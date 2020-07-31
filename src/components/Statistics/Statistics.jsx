import React from "react";
import PropTypes from "prop-types";
import StatLi from "./StatLi";
import styles from "./Statistics.module.css";

function Statistics({ title, stats }) {
  const isTitle = title;
  return (
    <section className={styles.statistics}>
      {isTitle && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map((stat) => (
          <StatLi
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
