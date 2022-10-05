import './NavButton.css'

function NavButton(props) {

    function select(){
        const navButton = document.querySelector("."+props.text)
        const allButtons = document.querySelectorAll(".buttonNavigation")
        
        allButtons.forEach((button) => {
            button.classList.remove("selected")
        })
        navButton.classList.add("selected")
        
    }

    return(
        <a onClick={select} href={"#" + props.refe} className={"buttonNavigation " + props.text}>
            <div className='iconBox'>
                <i className={'fa fa-' + props.icon}></i>
            </div>
            
            <p>{props.text}</p>
        </a>
    )
}

export default NavButton