import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      {isOnline ? (
        <span className={css.statusisOnline}></span>
      ) : (
        <span className={css.status}></span>
      )}
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
