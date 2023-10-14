import { FriendListItem } from "./FriendListItem"
import css from "./FriendList.module.css"

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(friend => {
                return (
                    <FriendListItem
                        key={friend.id}
                        isOnline={friend.isOnline}
                        name={friend.name}
                        avatar={friend.avatar}
                    />
                )
            })}
            </ul>
 )
}