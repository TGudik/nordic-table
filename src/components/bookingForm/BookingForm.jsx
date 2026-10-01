import styles from "./bookingForm.module.css";
import { useState } from "react";
import { useFetchBookings } from "../../hooks/useFetchBookings";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    amount: ""
  });
  const [errors, setErrors] = useState({})

  const { makeBooking } = useFetchBookings()

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = "Udfyld dit navn"
    if (!formData.email.trim()) {
        newErrors.email = "Udfyld din email"
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = "Indtast en gyldig email"
    }
    if (!formData.date) newErrors.date = "Vælg en dato";
    if (!formData.time) newErrors.time = "Vælg et tidspunkt";
    if (!formData.amount) newErrors.amount = "Vælg antal gæster";

    return newErrors

  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = validate()
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    const booking = {
        name: formData.name,
        email: formData.email,
        startAt: new Date(`${formData.date}T${formData.time}`),
        numberOfGuests: Number(formData.amount),
        status: "new"
    }

    makeBooking(booking)
    
    setFormData({ name: "", email: "", date: "", time: "", amount: "" });
  }

  return (
    <div className={styles.sectionWrapper}>
      <h2 className={styles.sectionTitle}>Din reservation</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.inputWrapper}>
          <label htmlFor="name">FULDE NAVN</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className={styles.error}>{errors.name}</p>}
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="email">EMAIL</label>
          <input
            id="email"
            name="email"
            type="text"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>
        <div className={styles.dateNtimeWrapper}>
          <div className={styles.inputWrapper}>
            <label htmlFor="date">DATO</label>
            <input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
            />
            {errors.date && <p className={styles.error}>{errors.date}</p>}
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="time">TIDSPUNKT</label>
            <input
              id="time"
              name="time"
              type="time"
              value={formData.time}
              onChange={handleChange}
            />
            {errors.time && <p className={styles.error}>{errors.time}</p>}
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <select
            name="amount"
            id="amount"
            value={formData.amount}
            onChange={handleChange}
            >
            <option value="" disabled>
              Vælg antal gæster
            </option>
            {Array.from({ length: 12 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                {i + 1} {i + 1 === 1 ? "Gæst" : "Gæster"}
              </option>
            ))}
          </select>
          {errors.amount && <p className={styles.error}>{errors.amount}</p>}
        </div>
        <button type="submit" className={styles.submitBtn}>
          BOOK BORD
        </button>
      </form>
    </div>
  );
}
