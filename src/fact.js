function fact() {
  const factDiv = document.getElementById('fact');
  let fact;
  fetch('https://uselessfacts.jsph.pl/api/v2/facts/today?language=en')
    .then(response => response.json())
    .then(data => {
      fact = data.text;
      factDiv.innerHTML = fact;
    });
}

export default fact;