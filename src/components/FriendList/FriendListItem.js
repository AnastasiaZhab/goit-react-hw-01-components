import propTypes from "prop-types";

const FriendListItem = ({avatar, name, status}) => {
    return (
        <li className="item">
            <div style={{width: '10px', height: '10px', background: status ? 'green' : 'red'}} className="status">{ status}</div>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{ name}</p>
</li>
    )
}

FriendListItem.propTypes = {
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    status: propTypes.bool.isRequired,
}

export default FriendListItem;
