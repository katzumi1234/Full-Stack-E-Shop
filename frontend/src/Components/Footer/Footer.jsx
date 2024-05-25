import "./Footer.css"
import footer_logo from'../Assets/favicon.png'
import github_icon from'../Assets/github.svg'
import linkedin_icon from'../Assets/linkedin.svg'


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt=""/>
        <p>Alex's Shop</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
      <div className="footer-icons-container">
      <a href="https://github.com/katzumi1234"><img src={github_icon}alt="github"/></a>
</div>
<div className="footer-icons-container">
<a href="https://www.linkedin.com/in/alexandru-grigore-ba8294230/"><img src={linkedin_icon} alt="linkedin"/></a>
</div>
      </div>
    <div className="footer-copyright">
    <hr/>
 <p>Copyright Grigore Alexandru 2024 - All Right Reserved.</p>
 </div>
    </div>
  )
}

export default Footer
