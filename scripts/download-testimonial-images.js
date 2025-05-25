/**
 * This script helps download and optimize testimonial images from Pixabay
 *
 * How to use:
 * 1. Install required packages: npm install node-fetch sharp fs-extra
 * 2. Run this script: node scripts/download-testimonial-images.js
 * 3. Images will be downloaded to public/images/testimonials/
 */

const fetch = require("node-fetch")
const sharp = require("sharp")
const fs = require("fs-extra")
const path = require("path")

// Create directory if it doesn't exist
const testimonialsDir = path.join(process.cwd(), "public", "images", "testimonials")
fs.ensureDirSync(testimonialsDir)

// List of Pixabay image URLs for testimonials
// Replace these with actual Pixabay image URLs you want to use
const imageUrls = [
  // Business woman - professional female in business attire
  "https://pixabay.com/photos/woman-business-fashion-young-3060784/",

  // Dental professional - dentist or dental practice owner
  "https://pixabay.com/photos/dentist-dentistry-dental-clinic-1639683/",

  // Real estate agent - professional realtor
  "https://pixabay.com/photos/man-portrait-businessman-male-5792285/",

  // Healthcare professional - doctor or medical practice owner
  "https://pixabay.com/photos/doctor-medical-medicine-health-563429/",

  // Gym owner - fitness professional
  "https://pixabay.com/photos/fitness-man-male-muscles-strong-4316713/",

  // Home services - contractor or service professional
  "https://pixabay.com/photos/electrician-electricity-electric-1080554/",
]

// File names for the downloaded images
const fileNames = [
  "business-woman.jpeg",
  "dental-professional.jpeg",
  "real-estate-agent.jpeg",
  "healthcare-professional.jpeg",
  "gym-owner.jpeg",
  "home-services.jpeg",
]

// Function to download and optimize an image
async function downloadAndOptimizeImage(url, fileName) {
  try {
    console.log(`Downloading ${fileName} from ${url}...`)

    // Note: You'll need to manually navigate to these Pixabay URLs,
    // download the images, and then place them in your public/images/testimonials/ folder
    // This script provides the structure, but actual downloading requires browser interaction

    console.log(`Please manually download the image from: ${url}`)
    console.log(`Save it as: public/images/testimonials/${fileName}`)

    // If you had direct image URLs (not webpage URLs), you could use this code:
    /*
    const response = await fetch(url);
    const buffer = await response.buffer();
    
    // Optimize the image
    await sharp(buffer)
      .resize(400, 400, { fit: 'cover' })
      .jpeg({ quality: 80 })
      .toFile(path.join(testimonialsDir, fileName));
    
    console.log(`Successfully downloaded and optimized ${fileName}`);
    */
  } catch (error) {
    console.error(`Error processing ${fileName}:`, error)
  }
}

// Download and optimize all images
async function processAllImages() {
  console.log("Starting download of testimonial images...")

  for (let i = 0; i < imageUrls.length; i++) {
    await downloadAndOptimizeImage(imageUrls[i], fileNames[i])
  }

  console.log("Finished processing all images.")
  console.log("Please manually download the images from the provided Pixabay URLs.")
}

processAllImages()
