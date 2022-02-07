import FriendListItem from "./FriendListItem/FriendListItem";
import PropTypes from 'prop-types';
import s from './FriendList.module.css'

const FriendList = ({ friends }) => {
    
    return (<ul className={s.list}>
        {friends.map(friend => {
            return <FriendListItem avatar={friend.avatar} name={friend.name} status={friend.isOnline} key={friend.id}/>
})}
        
    </ul>)
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default FriendList;

