import Style from './InfoWrapper.module.css'

function InfoWrapper(props) {
    return <div className={Style.infoWrapper}>{props.children}</div>
}

export default InfoWrapper