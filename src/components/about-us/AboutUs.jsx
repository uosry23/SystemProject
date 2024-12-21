import React from 'react'
import './AboutUs.css'
const AboutUs = () => {
    return (
        <div>
            <section className="about">
                <h2>About Us</h2>
                <p>
                    At Um El Ayaneen Pharmacy, we believe that healthcare should be accessible, compassionate, and centered around your unique needs. Our name, which translates to "The Caretakers of Patients," reflects our deep commitment to supporting and serving our community with empathy and professionalism.
                </p>
            </section>

            <section className="services">
                <h2>Our Mission & Vision</h2>
                <p>
                    Our mission is to enhance the well-being of our customers by offering reliable medications, expert guidance, and high-quality health products. We aim to create a space where individuals feel supported and confident in managing their health.
                </p>
                <p>
                    We envision a healthier community where everyone has access to trustworthy pharmaceutical care. Through innovation, integrity, and a commitment to excellence, we strive to set a new standard in pharmacy services.
                </p>
            </section>

            <section className="services">
                <h2>What We Offer</h2>
                <div className="services-list">
                    <div className="service-card">
                        <h3>Prescription Services</h3>
                        <p>Fast, accurate, and professional handling of your prescriptions.</p>
                    </div>
                    <div className="service-card">
                        <h3>Over-the-Counter Medications</h3>
                        <p>A wide selection of remedies for everyday health needs.</p>
                    </div>
                    <div className="service-card">
                        <h3>Health & Wellness Products</h3>
                        <p>Vitamins, supplements, and personal care items.</p>
                    </div>
                    <div className="service-card">
                        <h3>Expert Advice</h3>
                        <p>Friendly and knowledgeable guidance to help you make informed health decisions.</p>
                    </div>
                </div>
            </section>

            {/* <section className="team">
                <h2>Meet Our Team</h2>
                <div className="team-grid">
                    <div className="team-card">
                        <img src="https://i.postimg.cc/CK911XsP/profile.jpg" style={styles.image} str alt="Yousry" />
                        <h3>Yousry</h3>
                        <p></p>
                        <a href="#">View Profile</a>
                    </div>
                    <div className="team-card">
                        <img src="https://i.imghippo.com/files/Jmhm3749vo.jpeg" style={styles.image}
                            alt="philo" />
                        <h3>philo</h3>
                        <p></p>
                        <a href="#">View Profile</a>
                    </div>
                    <div className="team-card">
                        <img style={styles.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv74i39yGOKFLOo7ZkNTxLxLzRQt2LGg4X89Zau2XCE4AjkuHaXNrJ60o&s" alt="Nada" />
                        <h3>Nada</h3>
                        <p>.</p>
                        <a href="#">View Profile</a>
                    </div>
                    <div className="team-card">
                        <img style={styles.image} src="https://i.imghippo.com/files/Jmhm3749vo.jpeg" alt="Moamen" />


<h3>Moamen</h3>
                        <p></p>
                        <a href="#">View Profile</a>
                    </div>
                    <div className="team-card">
                        <img style={styles.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv74i39yGOKFLOo7ZkNTxLxLzRQt2LGg4X89Zau2XCE4AjkuHaXNrJ60o&s" alt="Likaa" />
                        <h3>Lekaa</h3>
                        <p></p>
                        <a href="#">View Profile</a>
                    </div>
                </div>
            </section> */}

        </div>
    )
}

export default AboutUs
const styles = {
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '300px',
        height: '200px',
        border: '1px solid #ccc',
        padding: '16px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    image: {
        maxWidth: '100%',
        height: '65%',
    },
};
