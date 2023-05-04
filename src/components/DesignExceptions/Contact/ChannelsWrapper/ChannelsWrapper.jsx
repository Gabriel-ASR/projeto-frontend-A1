import Style from './ChannelsWrapper.module.css'

function ChannelsWrapper(props) {
    return <div className={Style.channelsWrapper}>{props.children}</div>
}

export default ChannelsWrapper
    
