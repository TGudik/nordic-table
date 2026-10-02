import { useFetchBookings } from "../../../hooks/useFetchBookings";
import styles from "./backBooking.module.css"

export default function BackBooking({booking}) {

    const date = new Date(booking.startAt)
    const {acceptBooking, declineBooking} = useFetchBookings()

    return (
      <div className={styles.cardWrapper}>
        <p className={styles.text}>Email: {booking.email}</p>
        <p className={styles.text}>Antal gæster: {booking.numberOfGuests}</p>
        <p className={styles.text}>
          Starttid: {date.toLocaleString("da-DK")}
        </p>
        <p className={styles.text}>Status: {booking.status}</p>
        {booking.status === "new" && (
            <div>
                <button onClick={() => acceptBooking(booking._id)}>Godkend</button>
                <button onClick={() => declineBooking(booking._id)}>Annuller</button>
            </div>
        )}
      </div>
    );

}