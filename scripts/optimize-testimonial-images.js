/**
 * This script optimizes testimonial images for web use
 *
 * Instructions:
 * 1. Install required packages: npm install sharp fs-extra
 * 2. Place your original Pixabay images in the /original-images directory
 * 3. Run this script: node scripts/optimize-testimonial-images.js
 * 4. Optimized images will be saved to public/images/testimonials/
 */

const sharp = require("sharp")
const fs = require("fs-extra")
const path = require("path")

// Configuration
const config = {
  inputDir: "./original-images",
  outputDir: "./public/images/testimonials",
  width: 400,
  height: 400,
  quality: 80,
  format: "jpeg",
}

// Ensure output directory exists
fs.ensureDirSync(config.outputDir)

// Process all images in the input directory
async function processImages() {
  try {
    // Get all files in the input directory
    const files = await fs.readdir(config.inputDir)

    console.log(`Found ${files.length} images to process`)

    // Process each file
    for (const file of files) {
      const inputPath = path.join(config.inputDir, file)
      const stats = await fs.stat(inputPath)

      // Skip directories
      if (stats.isDirectory()) continue

      // Skip non-image files
      const ext = path.extname(file).toLowerCase()
      if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext)) continue

      // Generate output filename
      const baseName = path.basename(file, ext)
      const outputPath = path.join(config.outputDir, `${baseName}.jpg`)

      console.log(`Processing: ${file}`)

      // Optimize image
      await sharp(inputPath)
        .resize({
          width: config.width,
          height: config.height,
          fit: "cover",
          position: "face", // Focus on faces when cropping
        })
        .jpeg({ quality: config.quality })
        .toFile(outputPath)

      // Get file sizes for comparison
      const originalSize = stats.size
      const optimizedSize = (await fs.stat(outputPath)).size
      const reduction = (((originalSize - optimizedSize) / originalSize) * 100).toFixed(2)

      console.log(`✓ Saved to: ${outputPath}`)
      console.log(`  Original: ${(originalSize / 1024).toFixed(2)} KB`)
      console.log(`  Optimized: ${(optimizedSize / 1024).toFixed(2)} KB (${reduction}% reduction)`)
    }

    console.log("Image optimization complete!")
  } catch (error) {
    console.error("Error processing images:", error)
  }
}

processImages()
