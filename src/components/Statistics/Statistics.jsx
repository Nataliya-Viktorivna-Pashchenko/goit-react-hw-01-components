import "./Statistics.css"

const changeItemColor = () => {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  return `rgb(${x}, ${y}, ${z})`;
};

export const Statistics = ({ title, stats }) => {
    return (
        <section className = "statistics">
  {title && <h2 className="title">{title}</h2>}
<ul className="statList">
                {stats.map(stat => {
                    return (
                    
                        <li key={stat.id} className="item" style={{ backgroundColor: changeItemColor() }}>
                            <span className="labelS">{stat.label}</span>
                            <span className="percentage">{stat.percentage}%</span>
                        </li>
                  
                    )
                }
                )}
                  </ul>
</section>
    )
    
}    
         
