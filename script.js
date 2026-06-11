const addmoreBtn = document.getElementById("addmoreBtn");
const notesGrid = document.getElementById("notesGrid");
const noteModal = document.getElementById("noteModal");
const closeNote = document.getElementById("closeNote");
const noteTextarea = document.querySelector(".opened-note textarea");
const cat = document.querySelector(".catlaying");

/* to save data*/
const noteData = new Map();
let currentNote = null;

/* cat image changes*/
let catClick = 0;
const catImg = [
  "assets/catLaying/catlaying1.png",
  "assets/catLaying/catlaying2.png",
  "assets/catLaying/catlaying3.png"
]

cat.addEventListener("click", () => {
  catClick = (catClick + 1) % catImg.length;
  cat.src = catImg[catClick];
});

/* button image changes*/
let clickCount = 0;
const addmoreImg = [
  "assets/mugButton/addmore6.png",
  "assets/mugButton/addmore5.png",
  "assets/mugButton/addmore4.png",
  "assets/mugButton/addmore3.png",
  "assets/mugButton/addmore2.png",
  "assets/mugButton/addmore2.png",
  "assets/mugButton/addmore1.png"
]

addmoreBtn.addEventListener("click", () => {
  addCatNote();
  clickCount++;

  if (clickCount < addmoreImg.length) {
    addmoreBtn.src = addmoreImg[clickCount];
  }
});
closeNote.addEventListener("click", closeOpenedNote);

function addCatNote() {
  const catNote = document.createElement("img");
  if (notesGrid.children.length >= 6) {
    document.getElementById("refillModal").style.display = "flex";
    return;
  }
  catNote.src = "assets/Notes/catnote.png";
  catNote.classList.add("cat-note");

  noteData.set(catNote, "");

  catNote.addEventListener("click", openNote);
  notesGrid.appendChild(catNote);
}

function openNote() {
  currentNote = this;
  noteTextarea.value = noteData.get(currentNote) || "";
  noteModal.style.display = "flex";
}

function closeOpenedNote() {
  if (currentNote) {
    noteData.set(currentNote, noteTextarea.value);
  }
  noteModal.style.display = "none";
  currentNote = null;
}

document.getElementById("refillYes").addEventListener("click", () => {
  notesGrid.innerHTML = "";
  noteData.clear();
  clickCount = 0;
  addmoreBtn.src = addmoreImg[0];
  document.getElementById("refillModal").style.display = "none";
});

document.getElementById("refillNo").addEventListener("click", () => {
  document.getElementById("refillModal").style.display = "none";
});

