import Style from './Navitem.module.css'

function NavItem(props) {
    return <li className={Style.navItem}>{props.innerLink}</li>
}

export default NavItem