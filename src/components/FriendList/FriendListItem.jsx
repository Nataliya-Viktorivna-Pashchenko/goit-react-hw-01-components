import css from "./FriendList.module.css"
export const FriendListItem = ({ id, isOnline, name, avatar }) => {
            return (
            <li className ={css.item} key={id}>
                <span className = {isOnline ? css.onlineStatus : css.offlineStatus}>{isOnline}</span>
                <img className ={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className ={css.name}>{name}</p>
            </li>
     )
 }