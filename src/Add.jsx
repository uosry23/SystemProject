import axios from 'axios';
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Add = () => {
	const [selectedOption, setSelectedOption] = useState(""); // State to hold the selected value
	const options = ['Tablet', 'Capsule', 'Cream', 'Ointment', 'Skin Care', 'Supplies', 'Misc.']; // Dropdown options

	const handlecat = (event) => {
		const selectedValue = event.target.value; // Get the selected value from the event
		setSelectedOption(selectedValue); // Update the state with the selected value
	};
	const Navigate = useNavigate("")
	const [formData, setFormData] = useState({
		name: "",
		category: "",
		price: 0,
		description: "",
		img: '',
		rating: 0,
		available: true,
		reviewsCount : 0 , 
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	// const handleimgChange = (e) => {
	//     setFormData({ ...formData, img: e.target.files[0] });
	// };

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log("Form submitted:", formData);
		axios({
			method: "post",
			url: "https://medicine-me-backend-rntyitptm-philopaterwaheeds-projects.vercel.app/products/add",

			data: {
				name: formData.name,
				price: formData.price,
				img: formData.img,
				description: formData.description,
				category: selectedOption,
				available: formData.available,
				rating: formData.rating,
				reviewsCount : formData.reviewsCount,
				

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
						value={formData.name}
						onChange={handleChange}
						style={styles.input}
						required
					/>
				</label>

				<label for="category">Choose category </label>
				<select value={selectedOption} onChange={handlecat}>
					<option value="" disabled>
						{selectedOption ? `Selected: ${selectedOption}` : "-- Select a category --"}
					</option>
					{options.map((option, index) => (
						<option key={index} value={option}>
							{option}
						</option>
					))}
				</select>
				<label style={styles.label}>
					price:
					<input
						type="number"
						name="price"
						value={formData.price}
						onChange={handleChange}
						style={styles.input}
						required
					/>
				</label>

				<label style={styles.label}>
					description:
					<textarea
						name="description"
						value={formData.description}
						onChange={handleChange}
						style={styles.textarea}
						required
					/>
				</label>
				<label style={styles.label}>
					Upload img:
					<input
						type="url"
						name="img"
						value={formData.img}
						onChange={handleChange}
						style={styles.input}
						placeholder="https://example.com/img.jpg"
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
export default Add
