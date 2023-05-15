const SignupPage = () => {
  return (
    <main>
      <form id='signup-form'>
        <div>
          <label htmlFor='email'>Email Address</label>
          <input type='text' id='email' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' />
        </div>
        <div>
          <label htmlFor='confirm'>Confirm password</label>
          <input type='password' id='confirm' />
        </div>
        <input type='submit' value='Create Account' />
      </form>
    </main>
  )
}
export default SignupPage
