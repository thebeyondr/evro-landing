const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

// Configuration for all hero images
const heroImages = [
  {
    name: 'img-hero',
    description: 'Hero section background'
  },
  {
    name: 'img-community',
    description: 'Community section background'
  },
  {
    name: 'img-corefeature',
    description: 'Core features section background'
  },
  {
    name: 'img-motivation',
    description: 'Motivation section background'
  },
  {
    name: 'img-stats',
    description: 'Stats section background'
  }
];

// Screen sizes (accounting for 110% width where applicable)
// Mobile versions already exist, so we generate: tablet, desktop, wide
const sizes = [
  {
    name: 'tablet',
    width: 1503,  // Covers up to 1366px viewport
    suffix: '-md',
    description: 'Tablet (769px - 1366px)'
  },
  {
    name: 'desktop',
    width: 2253,  // Covers up to 2048px viewport
    suffix: '-lg',
    description: 'Desktop (1367px - 2048px)'
  },
  {
    name: 'wide',
    width: 3085,  // Ultra-wide screens
    suffix: '-xl',
    description: 'Wide screens (2049px+)'
  }
];

// Output formats
const formats = [
  {
    ext: 'webp',
    options: { quality: 85, effort: 6 },
    converter: (sharp) => sharp.webp({ quality: 85, effort: 6 })
  },
  {
    ext: 'png',
    options: { quality: 90, compressionLevel: 9 },
    converter: (sharp) => sharp.png({ quality: 90, compressionLevel: 9 })
  }
];

async function generateResponsiveImages() {
  const inputDir = path.join(__dirname, 'public', 'assets');
  const outputDir = path.join(__dirname, 'public', 'assets');

  // Ensure directories exist
  if (!fs.existsSync(inputDir)) {
    console.error(`❌ Input directory not found: ${inputDir}`);
    process.exit(1);
  }

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('🖼️  Starting responsive image generation...\n');
  console.log('📁 Processing images for tablet, desktop, and wide screens');
  console.log('📱 Mobile versions (-sm) already exist and will be preserved\n');

  let totalGenerated = 0;
  let totalSize = 0;

  for (const image of heroImages) {
    const inputPath = path.join(inputDir, `${image.name}.png`);

    // Check if source image exists
    if (!fs.existsSync(inputPath)) {
      console.warn(`⚠️  Skipping ${image.name}: source file not found`);
      continue;
    }

    console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    console.log(`📸 ${image.name.toUpperCase()}`);
    console.log(`   ${image.description}`);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);

    // Get original dimensions
    const metadata = await sharp(inputPath).metadata();
    const originalWidth = metadata.width;
    const originalHeight = metadata.height;
    const aspectRatio = originalWidth / originalHeight;

    console.log(`📐 Original: ${originalWidth}x${originalHeight}px\n`);

    for (const size of sizes) {
      const height = Math.round(size.width / aspectRatio);

      for (const format of formats) {
        const outputFilename = `${image.name}${size.suffix}.${format.ext}`;
        const outputPath = path.join(outputDir, outputFilename);

        try {
          const pipeline = sharp(inputPath)
            .resize(size.width, height, {
              fit: 'cover',
              position: 'center'
            });

          await format.converter(pipeline).toFile(outputPath);

          const stats = fs.statSync(outputPath);
          const fileSizeKB = (stats.size / 1024).toFixed(2);
          totalSize += stats.size;
          totalGenerated++;

          const formatLabel = format.ext.toUpperCase().padEnd(4);
          const sizeLabel = size.name.padEnd(8);
          
          console.log(`   ✅ ${formatLabel} | ${sizeLabel} | ${size.width}x${height}px | ${fileSizeKB}KB`);
        } catch (error) {
          console.error(`   ❌ Error generating ${format.ext}:`, error.message);
        }
      }
      console.log('');
    }
  }

  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`✨ Generation complete!`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
  console.log(`📊 Summary:`);
  console.log(`   • Files generated: ${totalGenerated}`);
  console.log(`   • Total size: ${(totalSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`   • Images processed: ${heroImages.length}`);
  console.log(`   • Sizes per image: ${sizes.length} (tablet, desktop, wide)`);
  console.log(`   • Formats: ${formats.length} (WebP + PNG fallback)\n`);
}

// Run the script
generateResponsiveImages().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});