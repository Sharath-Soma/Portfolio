import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = path.join(process.cwd(), 'src/assets/cetificates');

async function convertImages() {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')) {
      const inputPath = path.join(dir, file);
      const ext = path.extname(file);
      const outputPath = path.join(dir, file.replace(ext, '.webp'));
      
      console.log(`Converting ${file} to WebP...`);
      await sharp(inputPath)
        .webp({ quality: 75 })
        .toFile(outputPath);
      
      // Delete the old file
      fs.unlinkSync(inputPath);
      console.log(`Successfully converted and replaced ${file}`);
    }
  }
}

convertImages().catch(console.error);
