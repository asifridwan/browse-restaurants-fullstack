export default function Register({switchToLogin, onSubmit, errorMessage, username, email, password}) {
  return (
    <div className="form-container">
      <div className="inline-centering">
        <div className="intro-logo-icon"></div>
        <div className="intro-logo-text">Browse Restaurants</div>
      </div>
      <div className="registration-form">
        <p className="form-name">Registration</p>
        {errorMessage && <p className="error-message"><i className="fa fa-exclamation-triangle"></i> {errorMessage}</p>}
        <input className="form-input" type="text" placeholder="Username" onChange={username} />
        <input className="form-input" type="text" placeholder="Email Address" onChange={email} />
        <input className="form-input" type="password" placeholder="Password" onChange={password} />
        <button className="submit-button" onClick={onSubmit}>Register</button>
        <p className="form-switcher">Already have an account ? <span onClick={switchToLogin}>Login</span></p>
      </div>
    </div>
  )
}