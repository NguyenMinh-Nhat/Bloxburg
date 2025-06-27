const fs = require('fs');
const path = require('path');

const version = require('./package.json').version;
const changelog = '🛠️ Sửa lỗi hiển thị và nâng hiệu suất';
const outputName = `WereTools Setup ${version}.exe`;

const distPath = path.resolve(__dirname, 'dist', outputName);
const publishPath = path.resolve(__dirname, 'publish');
const jsonPath = path.join(publishPath, 'latest-version.json');

// Tạo thư mục publish nếu chưa có
if (!fs.existsSync(publishPath)) fs.mkdirSync(publishPath);

// Copy file .exe
fs.copyFileSync(distPath, path.join(publishPath, outputName));

// Tạo JSON update
fs.writeFileSync(jsonPath, JSON.stringify({
  version,
  changelog,
  downloadUrl: `https://nguyenminh-nhat.github.io/Bloxburg/${outputName}`
}, null, 2));

console.log('✅ Publish complete!');