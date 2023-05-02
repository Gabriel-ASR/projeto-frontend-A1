import Style from './FeatContentWrapper.module.css'

function FeatContentWrapper(props) {
    return <div className={Style.featContentWrapper}>{props.children}</div>
}

export default FeatContentWrapper