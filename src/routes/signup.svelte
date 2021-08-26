<header>
  <h1>Sign Up for Current Time App</h1>
  <p>The app that gives you the current time all around the world!</p>
</header>
<main>
  <form method="post" action="/api/accounts">
    <h3>Sign up to the Current Time app</h3>
    <p>Already have an account? <a href="/login">login to app</a></p>
    <div>
      <label for="username">Username</label>
      <input id="username" name="username" type="text" />
    </div>
    <div>
      <label for="email">Email</label>
      <input id="email" name="email" type="email" />
    </div>
    <div>
      <button><b>Sign Up</b></button>
      <a href="/"><i>Cancel</i></a>
    </div>
  </form>
</main>

<style>
  p {
    margin-bottom: 3rem;
  }
</style>
