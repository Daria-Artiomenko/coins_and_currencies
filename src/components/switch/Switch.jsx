import './switch.scss'

const Switch = () => {
    return(
        <label className="switch">
            <input id="switch-theme" type="checkbox" />
            <span className="switch-slider round"></span>
        </label>
    )
}

export default Switch;