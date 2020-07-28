import React from "react";
import PropTypes from "prop-types";
import user from "../../api-json/user.json";
import * as s from "./Profile.module.css";

function Profile({ name, tag, location, avatar }) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="user avatar" className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.statsItem}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{user.stats.followers}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{user.stats.likes}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{user.stats.views}</span>
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
