document.getElementById("jokeBtn").addEventListener("click", getJoke);

async function getJoke() {
  const res = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await res.json();
  document.getElementById("joke").innerText = data.setup + " 😁 " + data.punchline;
}
