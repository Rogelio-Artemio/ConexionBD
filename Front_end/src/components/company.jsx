import React, { useState } from "react";
import axios from "axios";

const Company = () => {
  const [formData, setFormData] = useState({
    company: "",
    username: "",
    email: "",
    password: "",
    logo: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/company", formData);
      setSuccess(response.data.message);
      setError("");
      setFormData({
        company: "",
        username: "",
        email: "",
        password: "",
        logo: ""
      });
    } catch (err) {
      setError("Error al crear la empresa.");
      setSuccess("");
    }
  };

  return (
    <div id="root">
      <div className="card">
        <div className="card-header">
          <h2>Registrar Empresa</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="input-group-text">Empresa</label>
            <input
              type="text"
              className="form-control"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label className="input-group-text">Nombre de usuario</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label className="input-group-text">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label className="input-group-text">Contraseña</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label className="input-group-text">Logo URL</label>
            <input
              type="text"
              className="form-control"
              name="logo"
              value={formData.logo}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-success">
            Registrar Empresa
          </button>

          {error && <div className="error">{error}</div>}
          {success && <div className="success">{success}</div>}
        </form>
      </div>
    </div>
  );
};

export default Company;