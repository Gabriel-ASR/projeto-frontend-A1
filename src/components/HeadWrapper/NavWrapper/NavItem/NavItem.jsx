import Style from './Navitem.module.css'

function NavItem(props) {
    return <li className={Style.navItem}>{props.children}</li>
}

export default NavItem