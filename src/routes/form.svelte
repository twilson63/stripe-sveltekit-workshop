<header>
  <nav>
    <a href="/">Current Time</a>
    <ul>
      <li><a href="/account">Account</a></li>
      <li><button><i>Logout</i></button></li>
    </ul>
  </nav>
  <h1>Current Times</h1>
</header>
<main>
  <form method="post" action="/api/times">
    <h3>Create new time</h3>
    <div>
      <label for="city">City</label>
      <select id="city" name="city">
        <option>Select</option>
        <option>New York, NY</option>
        <option>London, UK</option>
        <option>Chicago, IL</option>
        <option>San Francisco, CA</option>
        <option>Honolulu, Hawaii</option>
        <option>Paris, France</option>
      </select>
    </div>
    <div>
      <button type="submit">Add time</button>
      <a href="/home"><i>Cancel</i></a>
    </div>
  </form>
</main>
