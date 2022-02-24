export default function Register() {
  return (
    <div className="form-container">
        <div className="intro-logo">
            <div className="logo-icon-dark"></div>
            <div className="logo-text-dark">Browse Restaurants</div>
        </div>
        <div className="registration-form">
            <p className="form-name">Registration</p>
            <input className="form-input" type="text" placeholder="Username" />
            <input className="form-input" type="text" placeholder="Email Address" />
            <input className="form-input" type="password" placeholder="Password" />
            <input className="form-input" type="password" placeholder="Confirm Password" />
            <button className="submit-button">Register</button>
            <p className="form-switcher">Already have an account ? <span>Login</span></p>
        </div>
    </div>
  )
}