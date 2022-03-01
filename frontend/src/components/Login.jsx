export default function Login({switchToRegister, errorMessage, username, password, onSubmit}) {
  return (
    <div className="form-container">
      <div className="inline-centering">
        <div className="intro-logo-icon"></div>
        <div className="intro-logo-text">Browse Restaurants</div>
      </div>
      <div className="login-form">
        <p className="form-name">Login</p>
        {errorMessage && <p className="error-message"><i className="fa fa-exclamation-triangle"></i> {errorMessage}</p>}
        <input className="form-input" type="text" placeholder="Username or Email Address" onChange={username} />
        <input className="form-input" type="password" placeholder="Password" onChange={password} />
        <button className="submit-button" onClick={onSubmit}>Login</button>
        <p className="form-switcher">Don't have an account ? <span onClick={switchToRegister}>Register</span> now</p>
      </div>
    </div>
  )
}