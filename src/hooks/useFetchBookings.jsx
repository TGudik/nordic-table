
export function useFetchBookings() {
    const apiUrl = "http://localhost:3042/booking"

    async function makeBooking(booking) {
        try {
            const res = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(booking)
            })
            const data = await res.json()
            console.log(data)
        } catch (error) {
            console.error("Fejl i at oprette booking", error)
        }
    }

    return {
        makeBooking
    }
}