import Style from './HeadWrapper.module.css'

function HeadWrapper(props) {
    return <div className={Style.headWrapper}>{props.children}</div>
}

export default HeadWrapper