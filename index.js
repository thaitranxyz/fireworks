const container = document.querySelector(".container");
const fireworks = new Fireworks(container, {});

const noteBtn = document.querySelector(".note-button");
const note = document.querySelector(".note");

noteBtn.addEventListener("click", () => {
  noteBtn.classList.add("hidden");
  note.classList.remove("hidden");
  fireworks.start();
});
