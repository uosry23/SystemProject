import React, { useEffect, useState } from 'react'
import StarRatings from 'react-star-ratings';
import './Card.css'
import Loding from './Loding';
const Categories = () => {
	const [data, setdata] = useState([]);
	useEffect(() => {
		fetch('https://medicine-me-backend-rntyitptm-philopaterwaheeds-projects.vercel.app/products/', {
			method: 'GET',
		})
			.then(res => res.json())
			.then(res => setdata(res)
			);


	}, [])
	// console.log(data);

	return (

		data.length < 1 ? <Loding /> : <div className='mainCatogry'>
			<div style={{ width: "100%", marginBottom: "10px" }} className='lable'>
				SEE OUR <span>
					{data[0].category}
				</span>
			</div>
			{data.map((data) => (


				<div className="card" key={data.id}>
					<img src={data.img} alt="Card Image" />
					<div className="details">
						<h2 style={{ maxHeight: " 10%" }}>{data.name}</h2>
						<p style={{ height: "20%" }}>category {data.category}</p>
						<p style={{ height: "20%" }}>{data.description}</p>
						<p style={{ height: "20%" }}>price : {data.price} $</p>

						<StarRatings
							rating={data.rating}
							starRatedColor="blue"
							numberOfStars={5}
							name='rating'
							starDimension={'20px'}
						/>


						<a href="#" className="button" style={{ height: "20%" }}>details</a>
					</div>

				</div>
			))}

		</div>




	)
}

export default Categories
