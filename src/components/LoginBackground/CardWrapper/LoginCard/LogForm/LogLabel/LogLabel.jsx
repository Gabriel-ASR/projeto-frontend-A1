function LogLabel(props) {
    return <label htmlFor={props.htmlFor}>{props.children}</label>
}

export default LogLabel