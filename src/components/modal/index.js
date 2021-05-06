import React, { useState } from "react";
import occupations from '../../occupations.json';

import "./styles.css";

const CNBCModal = () => {
  const [showModal, setShowModal] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [occupation, setOccupation] = useState('C-Suite Executive');

  const occupationsList = () => {
    return occupations.occupations.map((occupation) => <option value={occupation}>{occupation}</option>)
  };

  const handleSubmit = (e) => {
    const emailRegex = /\S+@\S+\.\S+/.test(email);
    const isValid = (email.length > 0 && password.length > 0 && name.length > 0 && emailRegex);
    if(isValid){
      console.log("email", email, password, name, occupation)
      setShowModal(false);
    }else{
      alert('Error');
    }
    e.preventDefault()
  };

  return (
    <div>
      {showModal ? 
      <div id="openModal" className="modalDialog">
        <div>
          <a
            href="#close"
            title="Close"
            className="close"
            onClick={() => setShowModal(false)}
          >
            X
          </a>
          <form aria-label="Contact info">
          <div>
            <label htmlFor="name">
              Name
              <input placeholder="Name" aria-label="Name" onChange={(e) => setName(e.target.value)} id="name" type="text" name="nick" />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email
              <input placeholder="email" aria-label="email" onChange={(e) => setEmail(e.target.value)} id="email" type="text" name="email" />
            </label>
          </div>
          <div>
            <label htmlFor="pass">
              Password
              <input aria-label={'password'} aria-required="true" id="pass" onChange={(e) => setPassword(e.target.value)} type={showPassword ? "password" : ''} name="pass" />
              <input onClick={() => setShowPassword(!showPassword)} type="checkbox"></input>
            </label>
          </div>
          <div>
            <label htmlFor="occupations">
              Occupations:
              <select id="occupations" style={{width: '153px'}} onChange={(event) => setOccupation(event.target.value)}>
                {occupationsList()}
              </select>
            </label>
          </div>
          <br />
          <button aria-label="submit" onClick={(e) => handleSubmit(e)} type="submit">Submit</button>
          </form>
        </div>
      </div> : <></>}
    </div>
  );
};

export default CNBCModal;
