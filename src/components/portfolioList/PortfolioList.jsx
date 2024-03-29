import "./portfolioList.scss"

export default function PortfolioList({id, title, active, setSelected}) {
 
 //active refers item.id that equals selected id from portfolio file..
  return (
    <li className={active ? "portfolioList active" : "portfolioList"}
    onClick={()=>setSelected(id)}
    >
      {title}
    </li>
  )
}
