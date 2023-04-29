import Style from './NavWrapper.module.css'

function NavWrapper(props) {
    return <ul className={Style.navWrapper}>{props.children}</ul>
}

export default NavWrapper