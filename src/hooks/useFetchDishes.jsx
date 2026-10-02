import { useRevalidator } from "react-router-dom"
import { getToken } from "../utils/token"
import Swal from "sweetalert2"

export function useFetchDishes() {
    const { revalidate } = useRevalidator()

    const apiUrl = "http://localhost:3042/dish"
    
    async function removeDishById(id) {
        const result = await Swal.fire({
            icon: "warning",
            title: "Er du sikker?",
            showCancelButton: true,
            confirmButtonText: "Ja, slet"
        })
        if (!result.isConfirmed) return

        const token = getToken()

        const res = await fetch(`${apiUrl}/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        if (!res.ok) throw new Error("Fejl i at slette ret", {status: res.status})
        const data = await res.json()
        console.log(data)
        revalidate()
    }

    async function addDish(formData) {
        const token = getToken()

        const res = await fetch(`${apiUrl}`, {
            method: "POST",
            headers: {
                authorization: `Bearer ${token}`
            }, 
            body: formData
        })
        if (!res.ok) throw new Error("Fejl i at oprette ny ret", {status: res.status})
        const data = await res.json()
        console.log(data)
        revalidate()
    }

    async function updateDish(formData) {
        const token = getToken()

        const res = await fetch(`${apiUrl}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${token}`
            }, 
            body: formData
        })
        if (!res.ok) throw new Error("Fejl i at opdatere ny ret", {status: res.status})
        const data = await res.json()
        console.log(data)
        revalidate()
    }

    return {
        removeDishById,
        addDish, 
        updateDish
    }

}