import FriendListItem from "./FriendListItem";
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
    
    return (<ul className="friend-list">
        {friends.map(friend => {
            return <FriendListItem avatar={friend.avatar} name={friend.name} status={friend.isOnline} key={friend.id}/>
})}
        
    </ul>)
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default FriendList;

