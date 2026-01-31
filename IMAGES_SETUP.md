# Job Card Images Setup Guide

## Folder Structure

Create a folder called `jobs` in the same directory as your `index.html` file:

```
d:\Coding\degreecontrol.github.io\
├── index.html
├── IMAGES_SETUP.md
├── script.js
├── webform.js
└── jobs/                    ← CREATE THIS FOLDER
    ├── coil-cleaning-1.jpg
    ├── coil-cleaning-2.jpg
    ├── coil-cleaning-3.jpg
    ├── rooftop-hvac-1.jpg
    ├── rooftop-hvac-2.jpg
    ├── rooftop-hvac-3.jpg
    ├── furnace-1.jpg
    ├── furnace-2.jpg
    ├── furnace-3.jpg
    ├── heat-pump-1.jpg
    ├── heat-pump-2.jpg
    ├── heat-pump-3.jpg
    ├── cooler-1.jpg
    ├── cooler-2.jpg
    ├── cooler-3.jpg
    ├── ductwork-1.jpg
    ├── ductwork-2.jpg
    └── ductwork-3.jpg
```

## Image Filenames by Job

### Job 1: Deep Coil Cleaning & Restoration
- `jobs/coil-cleaning-1.jpg` (First image shown on hover)
- `jobs/coil-cleaning-2.jpg` (Cycles after 3 seconds)
- `jobs/coil-cleaning-3.jpg` (Cycles after 6 seconds)

### Job 2: Commercial Rooftop HVAC Installation
- `jobs/rooftop-hvac-1.jpg`
- `jobs/rooftop-hvac-2.jpg`
- `jobs/rooftop-hvac-3.jpg`

### Job 3: Complete Furnace Replacement
- `jobs/furnace-1.jpg`
- `jobs/furnace-2.jpg`
- `jobs/furnace-3.jpg`

### Job 4: Dual-Zone Heat Pump System
- `jobs/heat-pump-1.jpg`
- `jobs/heat-pump-2.jpg`
- `jobs/heat-pump-3.jpg`

### Job 5: Walk-In Cooler Repair & Maintenance
- `jobs/cooler-1.jpg`
- `jobs/cooler-2.jpg`
- `jobs/cooler-3.jpg`

### Job 6: Complete Ductwork Redesign
- `jobs/ductwork-1.jpg`
- `jobs/ductwork-2.jpg`
- `jobs/ductwork-3.jpg`

## How It Works

1. ✅ **Place your images** in the `jobs/` folder with the exact filenames listed above
2. ✅ **Hover over a job card** - the images will start cycling
3. ✅ **Every 3 seconds** - the image will fade smoothly to the next one
4. ✅ **Loops continuously** - after the last image, it goes back to the first
5. ✅ **Mouse leave** - the carousel stops and resets to the first image

## Image Tips

- **Recommended size:** 800x500px or similar 16:9 aspect ratio (they'll be cropped to fit 100% width)
- **File format:** JPG works great (can also use PNG)
- **File size:** Keep under 500KB per image for fast loading
- **Quality:** High resolution images look better

## Want to Add More Images?

You can add more images per job! Just:
1. Add the new image file to the `jobs/` folder
2. Add a new `<img>` line in the job card (keep the pattern)

Example for adding a 4th image to coil cleaning:
```html
<img class="job-image" src="jobs/coil-cleaning-4.jpg" alt="Coil cleaning process 4">
```

The JavaScript will automatically cycle through all of them!

## Want to Change the 3-Second Timing?

Find this line in `index.html` (around line 730):
```javascript
}, 3000);  // Change 3000 to different milliseconds (3000 = 3 seconds)
```

Examples:
- `2000` = 2 seconds
- `4000` = 4 seconds
- `5000` = 5 seconds
