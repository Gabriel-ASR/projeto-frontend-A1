import Style from './CategoriesWrapper.module.css'

function CategoriesWrapper(props) {
    return <div className={Style.categoriesWrapper}>{props.children}</div>
}

export default CategoriesWrapper