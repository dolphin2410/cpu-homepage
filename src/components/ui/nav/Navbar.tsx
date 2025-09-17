import { useNavigate } from "react-router-dom"
import "styles/ui/nav/Navbar.css"

const burgerClick = () => {
    let burger = document.querySelector(".navbar-burger")!!
    const contents = document.querySelector(".cpu-menu")!!
    contents.classList.toggle("cpu-menu-expanded")

    for (const child of burger.children) {
        child.classList.toggle("navbar-burger-line-active")
    }
}

const burgerDefault = () => {
    let burger = document.querySelector(".navbar-burger")!!
    const contents = document.querySelector(".cpu-menu")!!
    contents.classList.remove("cpu-menu-expanded")
    
    for (const child of burger.children) {
        child.classList.remove("navbar-burger-line-active")
    }
}

function Navbar() {
    const navigation = useNavigate()

    const moveTo = (dest: string) => {
        burgerDefault()
        navigation(dest)
    }

    return (
        <div className="cpu-navbar">
            <h1 className="cpu-logo" onClick={() => moveTo("/")}>CPU</h1>
            <div className="cpu-menu">
                <div className="cpu-menu-item" onClick={() => moveTo("/people")}>
                    People
                    <span className="cpu-menu-item-underline"></span>
                </div>
                <div className="cpu-menu-item">
                    Projects
                    <span className="cpu-menu-item-underline"></span>
                </div>
                <div className="cpu-menu-item">
                    Seminar
                    <span className="cpu-menu-item-underline"></span>
                </div>
                <div className="cpu-menu-item">
                    Activities
                    <span className="cpu-menu-item-underline"></span>
                </div>
            </div>
            <div className="navbar-burger" onClick={() => burgerClick()}>
              <span className="navbar-burger-line"></span>
              <span className="navbar-burger-line"></span>
              <span className="navbar-burger-line"></span>
            </div>
        </div>
    )
}

export default Navbar