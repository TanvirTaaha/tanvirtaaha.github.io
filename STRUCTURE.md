# Website Structure

## Directory Organization

### Public Assets
- `/public/cv/` - Place your CV PDF files here
- `/public/publications/` - Place publication PDF files here
- `/public/images/` - Place images (profile pictures, etc.) here
- `/public/gallery/` - Place gallery images here

### Source Code
- `/src/components/` - React components
  - `Layout.tsx` - Main layout with sidebars
  - `Navigation.tsx` - Left sidebar navigation
  - `InfoPanel.tsx` - Right sidebar with personal info
  - `ThemeToggle.tsx` - Dark/light mode toggle
  - `sections/` - Section components (About, Education, Publications, Projects, CV)
- `/src/data/index.ts` - All your personal data (update this file with your information)
- `/src/types/index.ts` - TypeScript type definitions
- `/src/contexts/ThemeContext.tsx` - Theme management context

## How to Customize

1. **Update Personal Information**: Edit `/src/data/index.ts`
   - Update `personalInfo` with your name, title, email, bio, etc.
   - Update social links with your actual URLs
   - Update profile image path if needed

2. **Add Publications**: 
   - Add PDF files to `/public/publications/`
   - Update the `publications` array in `/src/data/index.ts`

3. **Add Projects**: 
   - Update the `projects` array in `/src/data/index.ts`
   - Add project images to `/public/images/` if needed

4. **Update Education**: 
   - Update the `education` array in `/src/data/index.ts`

5. **Update CV**: 
   - Replace the PDF in `/public/cv/`
   - Update `cvUrl` in `/src/data/index.ts` if filename changes

## Features

- ✅ Responsive design (mobile-friendly)
- ✅ Dark/Light mode toggle
- ✅ Smooth scrolling navigation
- ✅ Academic-focused modern UI
- ✅ Clean, readable code structure

