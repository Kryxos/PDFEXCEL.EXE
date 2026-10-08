const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const vendor = path.join(root, 'app', 'vendor');
fs.mkdirSync(vendor, {recursive: true});
const files = {
  'pdf-lib.min.js': 'node_modules/pdf-lib/dist/pdf-lib.min.js',
  'pdf.min.js': 'node_modules/pdfjs-dist/build/pdf.min.js',
  'pdf.worker.min.js': 'node_modules/pdfjs-dist/build/pdf.worker.min.js',
  'exceljs.min.js': 'node_modules/exceljs/dist/exceljs.min.js'
};
for (const [dest, source] of Object.entries(files)) {
  fs.copyFileSync(path.join(root, source), path.join(vendor, dest));
  console.log('Osadzono:', dest);
}
