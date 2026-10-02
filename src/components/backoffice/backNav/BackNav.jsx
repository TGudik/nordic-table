import styles from "./backNav.module.css"

export default function BackNav() {

    if (window.location.pathname === "/backoffice") {
        
        return (
            <div>
                backoffice
            </div>
        )
    }

}