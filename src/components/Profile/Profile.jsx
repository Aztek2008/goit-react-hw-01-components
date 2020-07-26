import React from "react";
import PropTypes from "prop-types";
import user from "../../api-json/user.json";
import styles from "./Profile.module.css";

// СИЛЬНЫЕ СОМНЕНИЯ НАСЧЕТ ПРОПСА stats
function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="user avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.statsItem}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{user.stats.followers}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{user.stats.likes}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{user.stats.views}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.defaultProps = {
  avatar:
    "https://icon-library.net//images/profile-image-icon/profile-image-icon-0.jpg",
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Profile;
