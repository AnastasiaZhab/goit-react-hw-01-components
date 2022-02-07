import PropTypes from 'prop-types';
import s from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <div className={s.profile}>
            <div className={s.description}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={s.avatar}
                />
                <p className={s.name}>{username}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className={s.stats}>
                <li>
                    <span className={s.label}>Followers</span>
                    <span className={s.quantity}>{stats.followers}</span>
                </li>
                <li>
                    <span className={s.label}>Views</span>
                    <span className={s.quantity}>{stats.views}</span>
                </li>
                <li>
                    <span className={s.label}>Likes</span>
                    <span className={s.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
};

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,

    }).isRequired,
}

export default Profile;