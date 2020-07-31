import React from "react";
import PropTypes from "prop-types";
import FriendLi from "./FriendLi";
import styles from "./FriendList.module.css";

function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => (
        <FriendLi
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          alt={friend.name}
          width="48"
          name={friend.name}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default FriendList;
