export default function Login() {
  return (
    <div className="form-container">
      <div className="intro-logo">
        <div className="logo-icon-dark"></div>
        <div className="logo-text-dark">Browse Restaurants</div>
      </div>
      <div className="login-form">
        <p className="form-name">Login</p>
        <input className="form-input" type="text" placeholder="Username or Email Address" />
        <input className="form-input" type="password" placeholder="Password" />
        <button className="submit-button">Login</button>
        <p className="form-switcher">Don't have an account ? <span>Register</span> now</p>
      </div>
    </div>
  )
}