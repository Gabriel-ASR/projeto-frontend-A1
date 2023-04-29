import Style from './CatListWrapper.module.css'

function CatListWrapper(props) {
    return <ul className={Style.catListWrapper}>{props.children}</ul>
}

export default CatListWrapper