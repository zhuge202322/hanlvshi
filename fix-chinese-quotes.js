const fs = require('fs');

const files = [
  'src/app/articles/page.tsx',
  'src/app/product/page.tsx',
  'src/app/han-manli/page.tsx',
  'src/app/team/page.tsx',
  'src/app/certificates/page.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace Chinese left quotation mark " with escaped quote \"
  content = content.replace(/"/g, '\\"');
  
  // Replace Chinese right quotation mark " with escaped quote \"
  content = content.replace(/"/g, '\\"');
  
  fs.writeFileSync(file, content, 'utf8');
  console.log('Fixed: ' + file);
});

console.log('All Chinese quotation marks replaced!');
