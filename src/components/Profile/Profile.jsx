import PropTypes from 'prop-types';
import css from './Profile.module.css';

function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.profile}>
      <div>
        <img src={avatar} alt={username} className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.listStats}>
          <span>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.listStats}>
          <span>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.listStats}>
          <span>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
