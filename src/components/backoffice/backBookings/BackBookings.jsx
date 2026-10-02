import { useLoaderData } from "react-router-dom"
import styles from "./backBookings.module.css"
import BackBooking from "../backBooking/BackBooking"

export default function BackBookings() {
    const bookings = useLoaderData()

    return (
        <div className={styles.sectionWrapper}>
            {bookings.map((booking) => {
                return (
                    <BackBooking key={booking._id} booking={booking}/>
                )
            })}
        </div>
    )
}