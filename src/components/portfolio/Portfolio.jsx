import { useEffect, useState } from "react"
import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import { featuredPortfolio, webPortfolio, designPortfolio  } from "../../data"

export default function Portfolio() {
  const [selected, setSelected] = useState("design")
  const [data, setData] = useState([])
  

  const list = [ 
        {
          id: "design",
          title: "Design"
        },
        {
          id: "web",
          title: "Web App"
        },
        {
          id: "mobile",
          title: "Mobile App" 
        },
        {
          id: "featured",
          title: "Featured"
        },
        {
          id: "content",
          title: "Content"
        }
  ]

  useEffect(()=>{
    switch(selected){
      case "featured":
        setData(featuredPortfolio);
        break;
      
        case "web":
          setData(webPortfolio);
          break;

        case "design":
          setData(designPortfolio);
          break;

        default:
          setData(featuredPortfolio)
    }
  }, [selected])
 

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div>
        <ul>
         {list.map((item)=>(
          <PortfolioList 
          key={item.id}
          title={item.title} 
          active={selected === item.id}
          setSelected={setSelected}
          id={item.id}
          />
         ))}
        </ul>
      </div>

      <div className="container">
          {data.map((app)=>(  
          <div className="item" key={app.id}>
          <img src={app.img} 
          alt="" />
          <a href={app.website} target="_blank" rel="noreferrer">{app.title}</a>
          
        </div>
          ))}
 
      </div>
    </div>
  )
}
