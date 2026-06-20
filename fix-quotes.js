const fs = require('fs');

const files = [
  'src/app/articles/page.tsx',
  'src/app/product/page.tsx',
  'src/app/han-manli/page.tsx',
  'src/app/team/page.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Replace Chinese quotation marks with escaped quotes
  content = content.replace(/"/g, '\\"').replace(/"/g, '\\"');
  fs.writeFileSync(file, content, 'utf8');
  console.log('Fixed: ' + file);
});

console.log('All files fixed!');
