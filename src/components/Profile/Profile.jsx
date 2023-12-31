import "./Profile.css";
export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <div className ="profile">
            <div className ="description">
                <img
                    src={avatar}
                    alt="User avatar"
                    className="avatar"
                />
                <h1 className="name">{username}</h1>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className ="stats">
                <li className="statItem">
                    <span className ="label">Followers</span>
                    <span className ="quantity">{stats.followers}</span>
                </li>
                <li className="statItem">
                    <span className ="label">Views</span>
                    <span className ="quantity">{stats.views}</span>
                </li>
                <li className="statItem">
                    <span className ="label">Likes</span>
                    <span className ="quantity">{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};