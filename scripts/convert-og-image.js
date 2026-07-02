import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

await sharp(join(root, 'public/og-image.svg'))
  .resize(1280, 640)
  .jpeg({ quality: 90 })
  .toFile(join(root, 'public/og-image-github.jpg'));

console.log('✅ og-image-github.jpg generated (1280×640)');
