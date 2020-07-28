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

//
//
//======================================================
// // ВЫЧИСЛЯЕМАЯ ШИРИНА ДЛЯ ЭЛЕМЕНТОВ СПИСКА - НЕ РАБОТАЕТ
// // const itemWidth = calc( 100% / statisticalData.length );

// function Statistics({ title, stats }) {
//   const isTitle = title;
//   return (
//     <section className={styles.statistics}>
//       {isTitle && <h2 className={styles.title}>{title}</h2>}

//       <ul className={styles.statList}>
//         {stats.map((stat) => (
//           <li
//             key={stat.id}
//             className={styles.item}
//             style={{ backgroundColor: RandomColor() }}
//           >
//             <span className="label">{stat.label}</span>
//             <span className="percentage">{stat.percentage}</span>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }

// Statistics.propTypes = {
//   title: PropTypes.string,
//   stats: PropTypes.array.isRequired,
// };

// export default Statistics;
