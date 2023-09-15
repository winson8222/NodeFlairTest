import "./style.css"

function BackgroundComponent(props) {
    return (
        <div className="greyBackground">
            {props.children}
        </div>
    )
}

export default BackgroundComponent;