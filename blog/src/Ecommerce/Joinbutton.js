import React from "react";


const Joinbutton = () => {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Sign Up</h2>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <div className="name-fields">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>
        <div className="gender">
          <label>
            <input type="radio" name="gender" value="Male" /> Male
          </label>
          <label>
            <input type="radio" name="gender" value="Female" /> Female
          </label>
        </div>
        <select required>
          <option value="">Select a country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="USA">Korea</option>
          <option value="USA">Germany</option>
          <option value="USA">Africa</option>
          <option value="USA">Japan</option>
        </select>
        <div class="checkbox-container">
          <label>
            <span>I agree to the terms and conditions</span>
            <input type="checkbox" />
          </label>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Joinbutton;