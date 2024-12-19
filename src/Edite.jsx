import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const Edite = () => {
    const Navigate = useNavigate("")
    const { id } = useParams("")
    const [name, setname] = useState("");
    const [price, setprice] = useState("");
    const [img, setimg] = useState("");
    const [description, setdescription] = useState("");
    const [category, setcategory] = useState("")
    const [rating, setRating] = useState(0)
    const [available, setAvailable] = useState(true)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setname(value)
    };
    useEffect(() => {

        axios({
            method: "get",
            url: `https://data-api-yv91.onrender.com/products/${id}`,
        }).then((data) => {

            setname(data.data.neme)
            // setcategory(data.data.category)
            setprice(data.data.price)
            setimg(data.data.img)
            // setlable(data.data.lable);
        });

    }, [])

    // const handleImageChange = (e) => {
    //     setFormData({ ...formData, image: e.target.files[0] });
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Form submitted:", formData);
        axios({
            method: "put",
            url: `https://data-api-yv91.onrender.com/products/${id}`,

            data: {
                name: name,
                price: price,
                img: img,
                description: description,
                category: category,
                rating: rating,
                available: available
            },
        });
        setTimeout(() => {
            Navigate("/admin");
        }, 500);
        // Process the form data (e.g., send to an API)
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <label style={styles.label}>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => { setname(e.target.value) }}
                        style={styles.input}
                        required
                    />
                </label>

                <label style={styles.label}>
                    category:
                    <input
                        type="text"
                        name="category"
                        value={category}
                        onChange={(e) => { setcategory(e.target.value) }}
                        style={styles.input}
                        required
                    />
                </label>
                <label style={styles.label}>
                    rating:
                    <input
                        type="number"
                        name="rating"
                        value={rating}
                        onChange={(e) => { setname(e.target.value) }}
                        style={styles.input}
                        required
                    />
                </label>
                <label style={styles.label}>
                    price:
                    <input
                        type="number"
                        name="price"
                        value={price}
                        onChange={(e) => { price(e.target.value) }}
                        style={styles.input}
                        required
                    />
                </label>

                <label style={styles.label}>
                    Description:
                    <textarea
                        name="description"
                        value={description}
                        onChange={(e) => { setdescription(e.target.value) }}
                        style={styles.textarea}
                        required
                    />
                </label>
                <label style={styles.label}>
                    available:
                    <input
                        type="text"
                        name="available"
                        value={available}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </label>
                <label style={styles.label}>
                    Upload Image:
                    <input
                        type="url"
                        name="image"
                        value={img}
                        onChange={(e) => { setimg(e.target.value) }}
                        style={styles.input}
                        placeholder="https://example.com/image.jpg"
                        required
                    />
                </label>

                <button type="submit" style={styles.button}>
                    Submit
                </button>
            </form>
        </div>
    );
}
const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: "#f9f9f9",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "400px",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    label: {
        marginBottom: "10px",
        fontSize: "16px",
        fontWeight: "bold",
    },
    input: {
        width: "100%",
        padding: "10px",
        margin: "5px 0 20px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        fontSize: "16px",
    },
    textarea: {
        width: "100%",
        padding: "10px",
        margin: "5px 0 20px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        fontSize: "16px",
        resize: "none",
        height: "80px",
    },
    button: {
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        fontSize: "16px",
        cursor: "pointer",
    },
}
export default Edite