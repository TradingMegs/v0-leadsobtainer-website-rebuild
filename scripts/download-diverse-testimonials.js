/**
 * This script provides guidance for downloading diverse testimonial images from Pixabay
 *
 * Instructions:
 * 1. Search Pixabay using the provided search terms
 * 2. Download images that represent diverse ethnicities, ages, and positive expressions
 * 3. Optimize images using tools like squoosh.app or tinypng.com
 * 4. Save optimized images to the public/images/testimonials/ directory
 */

// Suggested search terms for diverse testimonial images on Pixabay
const searchTerms = [
  "professional woman smiling portrait",
  "african american businessman portrait",
  "asian professional woman portrait",
  "latino man smiling portrait",
  "middle eastern professional portrait",
  "senior business person portrait",
  "young professional portrait diverse",
]

// Recommended image specifications
const imageSpecs = {
  size: "400x400 pixels (will be displayed at smaller sizes)",
  format: "JPEG or WebP",
  quality: "80-85% (good balance between quality and file size)",
  maxFileSize: "Under 100KB per image for optimal performance",
}

// Suggested file names that match our testimonial personas
const suggestedFileNames = [
  "dental-professional.jpg", // For Michael Johnson - Dental Care
  "business-woman.jpg", // For Sarah Williams - Law Group
  "real-estate-agent.jpg", // For David Chen - Real Estate
  "healthcare-professional.jpg", // For Jennifer Martinez - Medical Clinic
  "gym-owner.jpg", // For John Smith - Local Gym
  "home-services.jpg", // For Michael Williams - Home Services
  "marketing-director.jpg", // Additional diverse option
  "tech-entrepreneur.jpg", // Additional diverse option
]

console.log("=== Diverse Testimonial Images Guide ===")
console.log("\nSearch Terms for Pixabay:")
searchTerms.forEach((term) => console.log(`- ${term}`))

console.log("\nImage Specifications:")
Object.entries(imageSpecs).forEach(([key, value]) => console.log(`- ${key}: ${value}`))

console.log("\nSuggested File Names:")
suggestedFileNames.forEach((name) => console.log(`- ${name}`))

console.log("\nRemember to select images that:")
console.log("- Show positive expressions (smiling, confident)")
console.log("- Represent diverse ethnicities and ages")
console.log("- Look professional and authentic")
console.log("- Have good lighting and clear facial features")
console.log("- Are appropriate for business testimonials")
