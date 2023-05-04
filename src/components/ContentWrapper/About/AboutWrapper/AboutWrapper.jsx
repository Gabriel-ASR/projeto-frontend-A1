import Style from './AboutWrapper.module.css'

function AboutWrapper(props) {
    return <div className={Style.aboutWrapper}>{props.children}</div>
}

export default AboutWrapper