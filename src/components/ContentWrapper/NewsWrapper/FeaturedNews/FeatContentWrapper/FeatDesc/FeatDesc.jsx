import Style from './featDesc.module.css'

function FeatDesc(props) {
    return <p className={Style.featDesc}>{props.Desc}</p>
}

export default FeatDesc