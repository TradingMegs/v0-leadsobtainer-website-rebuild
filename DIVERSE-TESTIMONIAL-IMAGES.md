# Diverse Testimonial Images Guide

This guide provides instructions for selecting and implementing diverse portrait images for the website's testimonial sections.

## Image Selection Criteria

When selecting images from Pixabay, look for portraits that:

1. **Represent Diversity**: Include various ethnicities, ages, and genders
2. **Convey Positivity**: Show smiling, confident, and approachable expressions
3. **Look Professional**: Appropriate for business testimonials
4. **Have Good Quality**: Clear, well-lit, and properly framed
5. **Feel Authentic**: Avoid overly staged or artificial-looking stock photos

## Recommended Images

Search Pixabay using these terms to find appropriate diverse portraits:

- "professional woman smiling portrait"
- "african american businessman portrait"
- "asian professional woman portrait"
- "latino man smiling portrait"
- "middle eastern professional portrait"
- "senior business person portrait"
- "young professional portrait diverse"

## Image Specifications

For optimal website performance:

- **Size**: 400x400 pixels (will be displayed at smaller sizes)
- **Format**: JPEG or WebP
- **Quality**: 80-85% (good balance between quality and file size)
- **File Size**: Keep under 100KB per image

## Implementation

1. Download diverse portrait images from Pixabay
2. Optimize images using tools like:
   - [Squoosh](https://squoosh.app/)
   - [TinyPNG](https://tinypng.com/)
   - [ImageOptim](https://imageoptim.com/)
3. Save optimized images to the `/public/images/testimonials/` directory with these filenames:
   - `dental-professional.jpg` - For Michael Johnson (Dental Care)
   - `business-woman.jpg` - For Sarah Williams (Law Group)
   - `real-estate-agent.jpg` - For David Chen (Real Estate)
   - `healthcare-professional.jpg` - For Jennifer Martinez (Medical Clinic)
   - `gym-owner.jpg` - For John Smith (Local Gym)
   - `home-services.jpg` - For Michael Williams (Home Services)
   - `marketing-director.jpg` - Additional diverse option
   - `tech-entrepreneur.jpg` - Additional diverse option

## Testimonial Components

The following components have been updated to use these diverse images:

1. `components/home-ultra/social-proof.tsx`
2. `components/promo/promo-testimonials.tsx`
3. `components/enhanced-home/TestimonialCarousel.tsx`
4. `components/promo/high-conversion/social-proof.tsx`

## Accessibility Considerations

- Ensure all images have proper alt text describing the person
- Maintain good contrast between text and background
- Ensure testimonial text remains readable regardless of image
\`\`\`

Let's update the enhanced home testimonial carousel to better handle diverse images:
