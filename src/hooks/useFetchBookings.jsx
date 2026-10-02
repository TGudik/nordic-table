import Swal from "sweetalert2"
import { getToken } from "../utils/token"
import { useRevalidator } from "react-router-dom"

export function useFetchBookings() {
    const apiUrl = "http://localhost:3042/booking"
    const {revalidate} = useRevalidator()

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

    async function acceptBooking(id) {
        const result = await Swal.fire({
            icon: "warning",
            title: "Godkend booking?",
            showCancelButton: true,
            confirmButtonText: "Godkend"
        })
        if (!result.isConfirmed) return

        const token = getToken()

        const res = await fetch(`${apiUrl}/${id}/status`, {
            method: "PATCH", 
            headers: {
                authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                status: "confirmed"
            })
        })
        if (!res.ok) throw new Error("Fejl i at opdatere status", {status: res.status})
        const data = await res.json()
        console.log(data)
        revalidate()
    }

    async function declineBooking(id) {
        const result = await Swal.fire({
            icon: "warning",
            title: "Afslå booking?",
            showCancelButton: true,
            confirmButtonText: "Afslå"
        })
        if (!result.isConfirmed) return

        const token = getToken()

        const res = await fetch(`${apiUrl}/${id}/status`, {
            method: "PATCH", 
            headers: {
                authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                status: "cancelled"
            })
        })
        if (!res.ok) throw new Error("Fejl i at opdatere status", {status: res.status})
        const data = await res.json()
        console.log(data)
        revalidate()
    }

    return {
        makeBooking,
        acceptBooking,
        declineBooking
    }
}