# Birthday Slideshow App

A beautiful birthday slideshow application with continuous music, multiple photo sections, and cinematic view.

## Features

- **Birthday Introduction** with animated celebration
- **Multiple Photo Sections**: Classic, Modern, Appaji, Family, Friends
- **Continuous Background Music** from birthday.mp4
- **Cinematic Slideshow** with all photos in sequence
- **Interactive Controls**: Play/Pause, Next/Previous navigation
- **Beautiful UI** with gradients and animations
- **Sound Effects Control** (disabled by default)

## Deployment on Render

### Prerequisites
- GitHub repository with your code
- Render account (free tier available)

### Steps to Deploy

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for Render deployment"
   git push origin main
   ```

2. **Create Render Service**
   - Go to [render.com](https://render.com)
   - Click "New +" → "Static Site"
   - Connect your GitHub repository
   - Configure settings:
     - **Name**: birthday-slideshow
     - **Branch**: main
     - **Root Directory**: (leave empty)
     - **Build Command**: `npm run build`
     - **Publish Directory**: `dist`
     - **Node Version**: 18

3. **Deploy**
   - Click "Create Static Site"
   - Render will automatically build and deploy your app

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Enjoy Your Birthday Slideshow! 

Your app will be live at: `https://birthday-slideshow.onrender.com`
