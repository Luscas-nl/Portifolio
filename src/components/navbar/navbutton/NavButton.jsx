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
        <div onClick={select} href="#" className={"buttonNavigation " + props.text}>
            <div className='iconBox'>
                <i className={'fa fa-' + props.icon}></i>
            </div>
            
            <p>{props.text}</p>
        </div>
    )
}

export default NavButton