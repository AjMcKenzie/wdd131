// const bookPegs = {
//     "1 Nephi": "Nephi's Moving Van",
//     "2 Nephi": "Basket",
//     "Jacob": "Cup",
//     "Enos": "Nose",
//     "Jarom": "Jar"
// };

const bookPegs = [
    {book: "1 Nephi", peg: "Nephi's Moving Van"},
    {book: "2 Nephi", peg: "Basket"},
    {book: "Jacob", peg: "Cup"},
    {book: "Enos", peg: "Nose"},
    {book: "Jarom", peg: "Jar"}
]

const chapterPegs = [
    {chapter: 1, peg: "Tie"},
    {chapter: 2, peg: "Noah"},
    {chapter: 3, peg: "Ma"},
    {chapter: 4, peg: "Ray"},
    {chapter: 5, peg: "Lye"},
    {chapter: 6, peg: "Shoe"},
    {chapter: 7, peg: "Cow"},
    {chapter: 8, peg: "Foe"},
    {chapter: 9, peg: "Pie"},
    {chapter: 10, peg: "Daisy"},
    {chapter: 11, peg: "Tattoo"},
    {chapter: 12, peg: "Twain"},
    {chapter: 13, peg: "Tomb"},
    {chapter: 14, peg: "Tar"},
    {chapter: 15, peg: "Towel"},
    {chapter: 16, peg: "Ditch"},
    {chapter: 17, peg: "Tack"},
    {chapter: 18, peg: "TV"},
    {chapter: 19, peg: "Teepee"},
    {chapter: 20, peg: "Henhouse"},
    {chapter: 21, peg: "Net"},
    {chapter: 22, peg: "Onion"}
];

const chapterData = [
    {
        book: "1 Nephi",
        chapter: 1,
        story: "One end of the neck tie is fastened to Nephi's Moving Van and the other is secured to the wall. The van pulls down the walls of Jerusalem.",
        doctrine: "Lehi is warned to leave Jerusalem",
        ref: "1 Nephi 1:4"
    },
    {
        book: "1 Nephi",
        chapter: 2,
        story: "Noah loads the ark onto the top of Nephi's Moving van and drives away from Jerusalem.",
        doctrine: "Lehi's family leaves Jerusalem ",
        ref: "1 Nephi 2:4"
    },
    {
        book: "1 Nephi",
        chapter: 3,
        story: "Ma kicks kids out of the back of Nephi's Moving van and sends them back to Jerusalem to retrieve the brass plates.",
        doctrine: "Lehi is told in vision to send his children back to Jerusalem to retrieve the brass plates",
        ref: "1 Nephi 3:2"
    },
    {
        book: "1 Nephi",
        chapter: 4,
        story: "The rays of light coming from the headlights of Nephi's Moving van turn into deadly laser weapons that cut off Laban's head.",
        doctrine: "Nephi slays Laban",
        ref: "1 Nephi 4:18"
    }
];

const currentPage = window.location.pathname.split("/").pop();
const content = document.getElementById("content");
const navLinks = document.querySelectorAll("nav a");

const flip = document.getElementById("flip");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const random = document.getElementById("random");

let currentChapterIndex = 0;
let currentBookIndex = 0;
let showingFront = true;

navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

function renderCard() {
    if (currentPage === "chapters.html") {
        const row = chapterPegs[currentChapterIndex];
        const frontText = `${row.chapter}`;
        const backText = row.peg;

        if (showingFront) {
        content.textContent = frontText;
        } else {
            content.textContent = backText;
        }
    } else if (currentPage === "books.html") {
        const row = bookPegs[currentBookIndex];
        const frontText = `${row.book}`;
        const backText = row.peg;
        if (showingFront) {
            content.textContent = frontText;
        } else {
            content.textContent = backText;
        }
    } else if (currentPage === "story.html") {
        const row = chapterData[currentChapterIndex];
        const frontText = `${row.book} ${row.chapter}`;
        const backText = `${row.story} \n(${row.ref})`;
        if (showingFront) {
            content.textContent = frontText;
        } else {
            content.textContent = backText;
        }
    }

}

flip.addEventListener("click", () => {
    showingFront = !showingFront;
    renderCard();
});

next.addEventListener("click", () => {
    currentChapterIndex = (currentChapterIndex + 1) % chapterPegs.length;
    currentBookIndex = (currentBookIndex + 1) % bookPegs.length;
    showingFront = true;
    renderCard();
});

prev.addEventListener("click", () => {
    currentChapterIndex = (currentChapterIndex - 1 + chapterPegs.length) % chapterPegs.length;
    currentBookIndex = (currentBookIndex - 1 + bookPegs.length) % bookPegs.length;
    showingFront = true;
    renderCard();
});

random.addEventListener("click", () => {
    currentChapterIndex = Math.floor(Math.random() * chapterPegs.length);
    currentBookIndex = Math.floor(Math.random() * bookPegs.length);
    showingFront = true;
    renderCard();
});

renderCard();
