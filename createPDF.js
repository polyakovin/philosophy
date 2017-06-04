const markdownpdf = require("markdown-pdf");
const dateFormat = require('dateformat');
const toc = require('markdown-toc');

const time = dateFormat(new Date(), "yyyy.mm.dd");
const bookPath = `./Seminars_${time}.pdf`;

let mdDocs = [];
for (let i = 1; i <= 26; i++) {
  mdDocs.push(`Seminars/Seminar_${i < 10 ? "0" + i : i}.md`)
}

const options = {
  remarkable: {
    breaks: false,
    preset: 'full'
    // plugins: [toc]
  },
};

markdownpdf(options).concat
  .from(mdDocs)
  .to(bookPath, function () {
  console.log("Created", bookPath)
})