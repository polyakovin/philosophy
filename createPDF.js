const markdownpdf = require("markdown-pdf");
const dateFormat = require('dateformat');

const time = dateFormat(new Date(), "yyyy.mm.dd");

const options = {
  remarkable: {
    breaks: false,
    preset: 'full'
  },
};



const seminarsPDF = `./Seminars_${time}.pdf`;

let seminarsMD = [];
for (let i = 1; i <= 26; i++) {
  seminarsMD.push(`Seminars/Seminar_${i < 10 ? "0" + i : i}.md`)
}

markdownpdf(options).concat
  .from(seminarsMD)
  .to(seminarsPDF, () => {
    console.log("Created", seminarsPDF);
});



const lecturesPDF = `./Lectures_${time}.pdf`;

let lecturesMD = [];
for (let i = 1; i <= 22; i++) {
  if (i !== 14 && (i === 1 || i > 5)) {
    lecturesMD.push(`Lectures/Lecture_${i < 10 ? "0" + i : i}.md`);
  }
}

markdownpdf(options).concat
  .from(lecturesMD)
  .to(lecturesPDF, () => {
    console.log("Created", lecturesPDF);
});