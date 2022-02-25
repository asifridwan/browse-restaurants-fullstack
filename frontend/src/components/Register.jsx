export default function Register() {
  return (
    <div className="form-container">
      <div className="inline-centering">
        <div className="intro-logo-icon"></div>
        <div className="intro-logo-text">Browse Restaurants</div>
      </div>
      <div className="registration-form">
        <p className="form-name">Registration</p>
        <p className="form-error"><i className="fa fa-exclamation-circle"></i> This username or email is already used</p>
        <p className="form-error"><i className="fa fa-exclamation-circle"></i> Passwords do not match</p>
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