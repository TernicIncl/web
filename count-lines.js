const fs = require("fs");
const path = require("path");

const IGNORED_DIRS = [
  "node_modules",
  ".git",
  "dist",
  "build",
  ".next",
  ".vercel",
  ".turbo",
];
const IGNORED_FILES = ["package-lock.json", "yarn.lock", "pnpm-lock.yaml"];

const results = {
  totalLines: 0,
  totalFiles: 0,
  byFile: [],
};

function isHidden(fileOrDirName) {
  return fileOrDirName.startsWith(".");
}

function shouldIgnore(filePath, stats) {
  const base = path.basename(filePath);
  if (stats.isDirectory()) {
    return IGNORED_DIRS.includes(base) || isHidden(base);
  }
  return IGNORED_FILES.includes(base) || isHidden(base);
}

function countLines(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  return content.split("\n").length;
}

function walkDir(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    const stats = fs.statSync(fullPath);

    if (shouldIgnore(fullPath, stats)) continue;

    if (stats.isDirectory()) {
      walkDir(fullPath);
    } else if (stats.isFile()) {
      try {
        const lines = countLines(fullPath);
        results.totalLines += lines;
        results.totalFiles += 1;
        results.byFile.push({ path: fullPath, lines });
      } catch (err) {
        console.warn(`⚠️ Skipped unreadable file: ${fullPath}`);
      }
    }
  }
}

function printSummary() {
  console.log("📊 Project Line Count Summary");
  console.log("──────────────────────────────");
  console.log(`📁 Total files: ${results.totalFiles}`);
  console.log(`📄 Total lines: ${results.totalLines}`);
  console.log("\nTop 10 largest files by line count:");
  const topFiles = results.byFile
    .sort((a, b) => b.lines - a.lines)
    .slice(0, 10);

  topFiles.forEach((file, i) => {
    console.log(`${i + 1}. ${file.path} - ${file.lines} lines`);
  });
}

const rootDir = process.cwd(); 
walkDir(rootDir);
printSummary();
