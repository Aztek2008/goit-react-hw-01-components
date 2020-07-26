import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

function FriendList({ friends }) {
  const onlineColor = "#3b9a59";
  const offlineColor = "#d16350";
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => (
        <li key={friend.id} className={styles.friendListitem}>
          <span
            className={styles.status}
            style={
              friend.isOnline
                ? { background: onlineColor }
                : { background: offlineColor }
            }
          ></span>
          <img
            className="avatar"
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.defaultProps = {
  avatar:
    "https://icon-library.net//images/profile-image-icon/profile-image-icon-0.jpg",
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default FriendList;
