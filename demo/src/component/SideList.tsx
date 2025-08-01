import { Link } from "react-router"

interface ListItem {
  path: string;
  name: string;
}

function SideList({ 
  title,
  current,
  navList
}: { 
  title: string;
  current: string;
  navList: ListItem[];
}) {

  const itemStyle = {
    width: '100%',
    padding: '8px'
  }

  return (
    <div className="nav-wrapper">
      <h4 className="nav-title">{title}</h4>
      <div className="be-list selection text bg">
        {
          navList.map(item => (
            <div 
              className={`nav-item item ${current === item.path ? 'selected' : ''}`} 
              key={item.name}
            >
              <Link to={item.path} style={itemStyle}>{item.name}</Link>
            </div>
          ))
        }
      </div>
      <style jsx="true">
        {`
          .nav-wrapper {
            padding: 10px;
            font-size: 0.85em;
          }
          .nav-title {
            color: #d6d6d6;
            padding: 10px;
            font-size: .95em;
          }
          .nav-item {
            border-radius: 4px;
          }
      `}
      </style>  
    </div>
  )
}

export default SideList