<header>
  <h1>Login into Current Time</h1>
</header>
<main>
  <form method="post" action="/api/login">
    <h3>Login to the Current Time app using your username.</h3>
    <p>Don't have an account? <a href="/signup">create new account</a></p>
    <div>
      <label for="username">Username</label>
      <input id="username" name="username" type="text" />
    </div>
    <div>
      <button><b>Login</b></button>
      <a href="/"><i>Cancel</i></a>
    </div>
  </form>
</main>

<style>
  p {
    margin-bottom: 3rem;
  }
</style>
