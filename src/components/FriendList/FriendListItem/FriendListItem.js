import propTypes from "prop-types";
import s from './FriendListItem.module.css';

const FriendListItem = ({avatar, name, status}) => {
    return (
        <li className={s.item}>
            <div style={{width: '16px', height: '16px', borderRadius: '8px', background: status ? 'green' : 'red'}} className="status">{ status}</div>
  <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={s.name}>{ name}</p>
</li>
    )
}

FriendListItem.propTypes = {
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    status: propTypes.bool.isRequired,
}

export default FriendListItem;
