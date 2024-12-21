import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    avatar: "https://via.placeholder.com/150", // صورة افتراضية
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUser({ ...user, avatar: reader.result }); // تحديث الصورة
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("User data saved:", user);
  };

  return (
    <div className="user-profile">
      <div className="profile-header">
        <img src={user.avatar} alt="User Avatar" className="profile-avatar" />
        <h1>{user.name}</h1>
      </div>

      <div className="profile-details">
        {isEditing ? (
          <div className="edit-form">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                value={user.phone}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={user.address}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Date of Birth:
              <input
                type="date"
                name="dob"
                value={user.dob}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Upload Avatar:
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
            <button onClick={handleSave}>Save</button>
          </div>
        ) : (
          <ul>
            <li>
              <strong>Email:</strong> {user.email}
            </li>
            <li>
              <strong>Phone:</strong> {user.phone}
            </li>
            <li>
              <strong>Address:</strong> {user.address}
            </li>
            <li>
              <strong>Date of Birth:</strong> {user.dob}
            </li>
          </ul>
        )}
        <button onClick={handleEditToggle}>
          {isEditing ? "Cancel" : "Edit Profile"}
        </button>
      </div>
    </div>
  );
};

export default Profile;
