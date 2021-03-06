import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

const offlineColor = "#d16350";
const onlineColor = "#3b9a59";

function FriendLi({ avatar, name, isOnline }) {
  return (
    <li className={styles.friendListitem}>
      <span
        className={styles.status}
        style={
          isOnline ? { background: onlineColor } : { background: offlineColor }
        }
      ></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendLi.defaultProps = {
  avatar:
    "https://icon-library.net//images/profile-image-icon/profile-image-icon-0.jpg",
};

FriendLi.propTypes = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendLi;
