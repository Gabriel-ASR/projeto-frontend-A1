import Style from './CardWrapper.module.css'

function CardWrapper(props) {
    return <div className={Style.loginWrapper}>{props.children}</div>
}

export default CardWrapper