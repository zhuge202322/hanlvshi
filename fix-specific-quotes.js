const fs = require('fs');

const replacements = [
  // product/page.tsx
  {
    file: 'src/app/product/page.tsx',
    replacements: [
      { from: '"人、财、保、传"', to: '\\"人、财、保、传\\"' },
      { from: '"人财保·传"', to: '\\"人财保·传\\"' }
    ]
  },
  // han-manli/page.tsx
  {
    file: 'src/app/han-manli/page.tsx',
    replacements: [
      { from: '"举案说法"', to: '\\"举案说法\\"' },
      { from: '"家族法律服务的正确打开方式"', to: '\\"家族法律服务的正确打开方式\\"' },
      { from: '"新时代家庭人财保全法律实务"', to: '\\"新时代家庭人财保全法律实务\\"' },
      { from: '"人财保·传"', to: '\\"人财保·传\\"' },
      { from: '"人财保传"', to: '\\"人财保传\\"' }
    ]
  },
  // team/page.tsx
  {
    file: 'src/app/team/page.tsx',
    replacements: [
      { from: '"人财保·传"', to: '\\"人财保·传\\"' },
      { from: '"广东省12348公共法律服务热线抗疫先锋"', to: '\\"广东省12348公共法律服务热线抗疫先锋\\"' }
    ]
  },
  // certificates/page.tsx - already fixed manually
];

replacements.forEach(item => {
  let content = fs.readFileSync(item.file, 'utf8');
  
  item.replacements.forEach(rep => {
    content = content.split(rep.from).join(rep.to);
  });
  
  fs.writeFileSync(item.file, content, 'utf8');
  console.log('Fixed: ' + item.file);
});

console.log('All Chinese quotation marks in specific strings replaced!');
