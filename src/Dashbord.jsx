import React, { useEffect, useState } from 'react'
import './dashbord.css'
import Swal from 'sweetalert2'
import axios from 'axios'
import { Button } from '@mui/material'
import { Link, Navigate, useNavigate } from 'react-router-dom'
const Dashbord = () => {
    const Swal = require('sweetalert2')
    const [product, setProduct] = useState([])
    const [rework, setrework] = useState(false)
    const Navigate = useNavigate("")
    useEffect(() => {


        fetch('https://medicine-me-backend-5n8q60f0o-momen-ahmeds-projects-0258fff5.vercel.app/products', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(res => setProduct(res));

        // console.log(product);


    }, [rework])


    const view = (item) => {
        // console.log(item);

        Swal.fire({
            imageUrl: `${item.
                img
                } `,
            title: `${item.
                name
                }`,

            imageWidth: 100,
            imageHeight: 200,
            showCancelButton: true,
            confirmButtonText: "ok",

        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire("ok!", "", "success");

            }
        });

    };

    const del = (item) => {
        Swal.fire({
            title: "Are you sure?",
            imageUrl: `${item.img} `,
            showDenyButton: true,
            imageWidth: 100,
            imageHeight: 200,
            showCancelButton: true,
            confirmButtonText: "yes",
            denyButtonText: `no`,
        }).then((result) => {
             if (result.isConfirmed) {
                 Swal.fire("Saved!", "", "success");
            
                 axios({
                     method: "delete",
                     url: `https://medicine-me-backend-5n8q60f0o-momen-ahmeds-projects-0258fff5.vercel.app/products/${item._id}`,
                 }).then((data) => window.location.reload()
            
            
                 );
             }
        });

        // data();
    };
    return (
        <div className='mainDiv' >



            <Button variant="contained" style={{ marginTop: "90px" }}>
                <Link to="/admin/add" style={{ color: "white", textDecoration: "none" }} >
                    add product
                </Link>
            </Button>
            <table style={{ margin: "10px" }} >
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                {product.map((pro) => (
                    <tbody key={pro._id}>
                        <tr>
                            <td data-label="Product" className='imagtd'><img src={pro.img} alt="Product" className='image' />
                                <span style={{ textAlign: "center", marginLeft: "20px", width: "50%" }} >
                                    {pro.name}
                                </span>
                            </td>
                            <td data-label="Price" className='pricetd'>{pro._id}$</td>
                            <td data-label="Operation" className='oprations'>
                                <button className="btn view" onClick={() => view(pro)} >View</button>
                                <button className="btn edit"  ><Link to={`/admin/edite/${pro._id}`} style={{ textDecoration: "none", color: "white" }}> Edite</Link></button>
                                <button className="btn del" onClick={() => del(pro)}>Del</button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table></div>
    )
}

export default Dashbord
