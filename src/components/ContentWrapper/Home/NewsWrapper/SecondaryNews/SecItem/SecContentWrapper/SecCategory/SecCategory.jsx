import Style from './SecCategory.module.css'

function SecCategory(props) {
    return <span className={Style.secCategory}>{props.category}</span>
}

export default SecCategory