const LoginPage = () => {
  return (
    <main>
      <form id='login-form'>
        <div>
          <label htmlFor='email'>Email Address</label>
          <input type='text' id='email' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' />
        </div>
        <input type='submit' value='Log In' />
      </form>
    </main>
  )
}
export default LoginPage
