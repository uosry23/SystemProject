import React, { useEffect, useState } from 'react'
import './Card.css'
import Loding from './Loding';
const Categories = () => {
    const [data, setdata] = useState([]);
    useEffect(() => {
        fetch('https://data-api-yv91.onrender.com/products', {
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
                        <p style={{ height: "20%" }}>{data.description}</p>
                        {/* بعد ما تضيف ال Api حط دي 
                        
                        .subSequence(7, 12) */}


                        <a href="#" className="button" style={{ height: "20%" }}>details</a>
                    </div>

                </div>
            ))}

        </div>




    )
}

export default Categories