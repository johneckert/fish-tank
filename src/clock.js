function clock() {
  const clockElement = document.getElementById('clock');
  const dateElement = document.getElementById('date');
  function updateTime() {
      const time = new Date();
      clockElement.innerHTML = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      dateElement.innerHTML = time.toLocaleDateString([], { weekday: "long", month: "long", day: "numeric" });
  }
  updateTime();
  const clockInterval = setInterval(updateTime, 500);

  window.addEventListener("beforeunload", function (e) {
      clearInterval(clockInterval);
  });
}

export default clock;