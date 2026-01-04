const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const indexPath = path.join(root, "index.html");
const cssPath = path.join(root, "styles.css");
const jsPath = path.join(root, "app.js");
const outPath = path.join(root, "standalone.html");

function read(p) {
  return fs.readFileSync(p, "utf8");
}

function build() {
  const html = read(indexPath);
  const css = read(cssPath);
  const js = read(jsPath);

  let out = html;

  // Inline CSS
  out = out.replace(
    /\s*<link\s+rel=["']stylesheet["']\s+href=["']styles\.css["']\s*\/?>\s*/i,
    `\n    <style>\n${css}\n    </style>\n`
  );

  // Inline JS
  out = out.replace(
    /\s*<script\s+src=["']app\.js["']\s*><\/script>\s*/i,
    `\n  <script>\n${js}\n  </script>\n`
  );

  fs.writeFileSync(outPath, out, "utf8");
  // eslint-disable-next-line no-console
  console.log(`Wrote ${outPath}`);
}

build();
