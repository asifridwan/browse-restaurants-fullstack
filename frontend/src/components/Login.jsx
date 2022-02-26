export default function Login() {
  return (
    <div className="form-container">
      <div className="inline-centering">
        <div className="intro-logo-icon"></div>
        <div className="intro-logo-text">Browse Restaurants</div>
      </div>
      <div className="login-form">
        <p className="form-name">Login</p>
        {/* <p className="form-error"><i className="fa fa-exclamation-triangle"></i> Your username or password is incorrect</p> */}
        <input className="form-input" type="text" placeholder="Username or Email Address" />
        <input className="form-input" type="password" placeholder="Password" />
        <button className="submit-button">Login</button>
        <p className="form-switcher">Don't have an account ? <span>Register</span> now</p>
      </div>
    </div>
  )
}