import Style from './SecDesc.module.css'

function SecDesc(props) {
    return <p className={Style.secDesc}>{props.desc}</p>
}

export default SecDesc