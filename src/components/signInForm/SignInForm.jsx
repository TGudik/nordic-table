import { Link, useNavigate } from "react-router-dom"
import styles from "./signInForm.module.css"
import { ArrowLeft } from "react-bootstrap-icons"
import { useState } from "react"
import { useAuth } from "../../context/AuthContext"

export default function SignInForm() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({})
    const [loginError, setLoginError] = useState(null)
    const {login} = useAuth()

    function handleChange(e) {
        const {name, value} = e.target
        setFormData((prev) => ({...prev, [name]: value}))
    }

    function validate() {
        const newErrors = {}

        if (!formData.email.trim()) {
            newErrors.email = "Udfyld email"
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Indtast en gyldig email"
        }
        if (!formData.password.trim()) newErrors.password = "Udfyld password"

        return newErrors
    }

    async function handleSubmit(e) {
        e.preventDefault()

        const newErrors = validate()
        setErrors(newErrors)
        if (Object.keys(newErrors).length > 0) return

        try {
            await login(formData.email, formData.password)
            navigate("/")
        } catch (error) {
            setLoginError("Fejl i login, tjek email og password")
        }

        setFormData({email: "", password: ""})
    }

    return (
      <div className={styles.sectionWrapper}>
        <div className={styles.headerWrapper}>
          <Link to="/" className={styles.backBtn}>
            <ArrowLeft size={30} /> <p>Tilbage til forsiden</p>
          </Link>
          <h2 className={styles.sectionHeading}>Log ind</h2>
          <p className={styles.sectionBody}>
            Adgang forbeholdt personale og administratorer
          </p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputWrapper}>
            <label htmlFor="email">Email</label>
            <input
              className={`${styles.input} ${errors.email && styles.inputError}`}
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="password">Password</label>
            <input
              className={`${styles.input} ${errors.password && styles.inputError}`}
              type="text"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className={styles.error}>{errors.password}</p>
            )}
          </div>
          <button className={styles.submitBtn} type="submit">
            LOG IND
          </button>
          {loginError && <p className={styles.error}>{loginError}</p>}
        </form>
      </div>
    );
}