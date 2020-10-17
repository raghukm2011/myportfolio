import React from "react"
import "./links.scss"
import {
FaGithub, FaLinkedin, FaFreeCodeCamp, FaCodepen, FaInstagram,
} from "react-icons/fa" 

const Links =()=>{
        return(
            <div className="links">
                <ul>
                    <li>
                        <a href="https://github.com/raghukannankm" target="blank">
                            <FaGithub className="icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/raghukannankm" target="blank">
                            <FaLinkedin className="icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/raghukannankm" target="blank">
                            <FaFreeCodeCamp className="icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/raghukannankm" target="blank">
                            <FaCodepen className="icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/raghukannankm" target="blank">
                            <FaInstagram className="icon" />
                        </a>
                    </li>
                </ul>
            </div>
        )
}

export default Links