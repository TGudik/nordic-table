const apiUrl = "http://localhost:3042"

export const dishesLoader = async () => {

    const res = await fetch(`${apiUrl}/dishes`)
    if (!res.ok) throw new Response("Fejl i at hente retter", {status: res.status})
    const preData = await res.json()
    const data = preData.data
    return data
}