import Style from './CatListItem.module.css'

function CatListItem(props) {
    return <li className={Style.catListItem}>{props.innerLink}</li>
}

export default CatListItem