<script context="module">
  export async function load({ session, fetch }) {
    const res = await fetch("/api/times");
    if (res.ok) {
      const result = await res.json();
      return {
        props: {
          times: result.docs,
        },
      };
    }
    return {
      error: "error loading times",
    };
  }
</script>

<script>
  export let times;
</script>

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
  <a style="float: right" href="/form">New Time</a>
  <section>
    {#each times as time}
      <aside>
        <h3>{time.city}</h3>
        <p>{new Date().toISOString()}</p>
      </aside>
    {/each}
  </section>
</main>
