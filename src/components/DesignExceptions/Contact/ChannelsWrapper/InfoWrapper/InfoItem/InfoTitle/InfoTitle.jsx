import Style from './InfoTitle.module.css'

function InfoTitle(props) {
    return <h1 className={Style.infoTitle}>{props.children}</h1>
}

export default InfoTitle