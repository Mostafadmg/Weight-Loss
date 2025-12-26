/* Extracts text from a PDF and writes it to a UTF-8 .txt file.

Usage:
  node scripts/extract_pdf.js "C:\\path\\file.pdf" "out.txt"
*/

const fs = require("fs");
const path = require("path");
const pdf = require("pdf-parse");

async function main() {
  const [, , inputPdf, outputTxt] = process.argv;

  if (!inputPdf || !outputTxt) {
    console.error("Usage: node scripts/extract_pdf.js <input.pdf> <output.txt>");
    process.exit(2);
  }

  const pdfPath = path.resolve(inputPdf);
  const outPath = path.resolve(outputTxt);

  if (!fs.existsSync(pdfPath)) {
    console.error(`PDF not found: ${pdfPath}`);
    process.exit(2);
  }

  const dataBuffer = fs.readFileSync(pdfPath);
  const data = await pdf(dataBuffer);

  const text = (data.text || "").replace(/\r\n/g, "\n");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, text, "utf8");

  const pages = data.numpages ?? "?";
  console.log(`Extracted ${pages} pages to: ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
