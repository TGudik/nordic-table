import { useLoaderData } from "react-router-dom"
import BackNav from "../backNav/BackNav"
import styles from "./backDishes.module.css"
import BackDish from "../backDish/BackDish"
import { useEffect, useState } from "react"
import { useFetchDishes } from "../../../hooks/useFetchDishes"

const emptyForm = {
  title: "",
  image: null,
  price: "",
  description: "",
  isSignature: "false",
  category: "",
};

export default function BackDishes() {
    const dishes = useLoaderData()
    const {addDish, updateDish} = useFetchDishes()

    const [currentDish, setCurrentDish] = useState(null)
    const [isEditing, setIsEditing] = useState(false)
    const [inputKey, setInputKey] = useState(0)
    const [formData, setFormData] = useState(emptyForm)
    const [preview, setPreview] = useState(null)

    /* --------------------- HÅNDTER OPDATER ELLER TILFØJ -------------------------------------- */

    useEffect(() => {
        if (!currentDish) return
        setIsEditing(true)
        setFormData({
            title: currentDish.title,
            image: currentDish.image,
            price: currentDish.price,
            description: currentDish.description,
            isSignature: currentDish.isSignature,
            category: currentDish.category
        })
    }, [currentDish])

    function cancelEdit() {
        setIsEditing(false)
        setFormData(emptyForm)
        setPreview(null);
        setInputKey((k) => k + 1)
        setCurrentDish(null)
    }

    /* ----------------------- HÅNDTER ÆNDRING I FORM ----------------------------- */

    useEffect(() => {
        return () => {
            if (preview) URL.revokeObjectURL(preview)
        }
    }, [preview])


    function handleChange(e) {
        const {name, value, files} = e.target

        if (name === "image") {
            const file = files[0]
            if (!file) return 
            setFormData((prev) => ({ ...prev, image: file }))
            setPreview(URL.createObjectURL(file))
            return
        }

        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    /* ---------------- HÅNDTER SUBMIT -------------------------------- */

    async function handleSubmit(e) {
        e.preventDefault()

        const body = new FormData()
        body.append("title", formData.title)
        body.append("price", formData.price);
        body.append("description", formData.description);
        body.append("isSignature", formData.isSignature);
        body.append("category", formData.category);
        if (formData.image) body.append("image", formData.image);
        

        try {
            if (isEditing) {
              body.append("id", currentDish._id)
              await updateDish(body)
            } else {
              await addDish(body);
            }
        } catch (error) {
            console.error(error)
            return
        }
        
        setFormData(emptyForm)
        setPreview(null);
        e.target.reset();
    }

    return (
        <div className={styles.sectionWrapper}>
            <BackNav />
            <div className={styles.dishesWrapper}>
                {dishes.map((dish) => {
                    return (
                        <BackDish setCurrentDish={setCurrentDish} dish={dish} key={dish._id} id={dish._id} title={dish.title} category={dish.category}/>
                    )
                })}
            </div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h3 className={styles.formHeading}>{isEditing ? "Opdater ret" : "Tilføj ret"}</h3>
                {isEditing && <button type="button" onClick={cancelEdit} className={styles.cancelBtn}>Annuller</button>}
                <div className={styles.inputWrapper}>
                    <label htmlFor="title">Titel</label>
                    <input type="text" id="title" name="title" value={formData.title} onChange={handleChange}/>
                </div>

                <div className={styles.inputWrapper}>
                    <label htmlFor="image">Billede</label>
                    <input key={inputKey} type="file" id="image" name="image" accept="image/*" onChange={handleChange} />
                    {preview && <img src={preview} alt="Forhåndsvisning" className={styles.preview} />}
                </div>

                <div className={styles.inputWrapper}>
                    <label htmlFor="price">Pris</label>
                    <input required type="text" id="price" name="price" value={formData.price} onChange={handleChange}/>
                </div>

                <div className={styles.inputWrapper}>
                    <label htmlFor="description">Beskrivelse</label>
                    <textarea required rows={4} type="text" id="description" name="description" value={formData.description} onChange={handleChange}/>
                </div>

                <div className={styles.inputWrapper}>
                    <label htmlFor="isSignature">Signatur ret?</label>
                    <select required value={formData.isSignature} onChange={handleChange} name="isSignature" id="isSignature">
                        <option value={"false"}>Nej</option>
                        <option value={"true"}>Ja</option>
                    </select>
                </div>
                <div className={styles.inputWrapper}>
                    <label htmlFor="category">Kategori</label>
                    <select required value={formData.category} onChange={handleChange} name="category" id="category">
                        <option value="" disabled>Vælg kategori</option>
                        <option value="starter">Starter</option>
                        <option value="main">Main</option>
                        <option value="dessert">Dessert</option>
                    </select>
                </div>
                <button type="submit" className={styles.submitBtn}>Send</button>
            </form>
        </div>
    )
}