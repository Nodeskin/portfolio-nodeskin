import './topbar.scss';
import {Mail, Person} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}> 
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo' onClick={()=> setMenuOpen(false)}>nodeSkin..</a>
          <div className="itemContainer">
          <Person className='icon'/>
          <span> +234 901 794 3378 </span>
          </div>

          <div className="itemContainer">
          <Mail className='icon'/>
          <span> shittujamiu01@gmail.com </span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
