#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Create a simple 192x192 PNG icon (orange gradient with white app icon)
function createIcon(size) {
  // PNG header for a simple orange square with app text
  // This creates a simple colored PNG file
  
  const canvas = require('canvas');
  const { createCanvas } = canvas;
  
  const iconCanvas = createCanvas(size, size);
  const ctx = iconCanvas.getContext('2d');
  
  // Orange background (matching the theme primary color #e8543e)
  ctx.fillStyle = '#e8543e';
  ctx.fillRect(0, 0, size, size);
  
  // White circle in center for icon
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 3, 0, Math.PI * 2);
  ctx.fill();
  
  // Letter W for Wisdom
  ctx.fillStyle = '#e8543e';
  ctx.font = `bold ${Math.round(size * 0.35)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('W', size / 2, size / 2);
  
  return iconCanvas.toBuffer('image/png');
}

function createMaskableIcon(size) {
  // Maskable icon: larger content area to accommodate masking
  const canvas = require('canvas');
  const { createCanvas } = canvas;
  
  const iconCanvas = createCanvas(size, size);
  const ctx = iconCanvas.getContext('2d');
  
  // Orange background
  ctx.fillStyle = '#e8543e';
  ctx.fillRect(0, 0, size, size);
  
  // White circle - larger for maskable variant
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size * 0.4, 0, Math.PI * 2);
  ctx.fill();
  
  // Letter W
  ctx.fillStyle = '#e8543e';
  ctx.font = `bold ${Math.round(size * 0.4)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('W', size / 2, size / 2);
  
  return iconCanvas.toBuffer('image/png');
}

try {
  console.log('📦 Checking if canvas package is available...');
  require('canvas');
  console.log('✓ Canvas available, generating icons...\n');
  
  const publicDir = path.join(__dirname, 'public');
  
  // Generate icons
  const icons = [
    { name: 'icon-192x192.png', size: 192, maskable: false },
    { name: 'icon-512x512.png', size: 512, maskable: false },
    { name: 'icon-192x192-maskable.png', size: 192, maskable: true },
    { name: 'icon-512x512-maskable.png', size: 512, maskable: true },
  ];
  
  icons.forEach(icon => {
    const buffer = icon.maskable ? createMaskableIcon(icon.size) : createIcon(icon.size);
    const filepath = path.join(publicDir, icon.name);
    fs.writeFileSync(filepath, buffer);
    console.log(`✓ Generated ${icon.name} (${icon.size}x${icon.size})`);
  });
  
  console.log('\n✅ All icons generated successfully!');
} catch (err) {
  if (err.code === 'MODULE_NOT_FOUND') {
    console.log('⚠️ Canvas package not found. Creating simple placeholder PNG files...\n');
    
    // Create minimal valid PNG files as placeholders
    // PNG header + simple data + CRC
    const createSimplePNG = (size) => {
      const width = Buffer.allocUnsafe(4);
      const height = Buffer.allocUnsafe(4);
      width.writeUInt32BE(size);
      height.writeUInt32BE(size);
      
      // Minimal PNG: signature + IHDR + IDAT + IEND
      const png = Buffer.concat([
        Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]), // PNG signature
        Buffer.from([0x00, 0x00, 0x00, 0x0D]), // IHDR chunk size
        Buffer.from([0x49, 0x48, 0x44, 0x52]), // IHDR
        width, height,
        Buffer.from([0x08, 0x02, 0x00, 0x00, 0x00]), // bit depth, color type, etc.
        Buffer.from([0x00, 0x00, 0x00, 0x00]), // CRC (placeholder)
        Buffer.from([0x00, 0x00, 0x00, 0x00]), // IDAT chunk size
        Buffer.from([0x49, 0x44, 0x41, 0x54]), // IDAT
        Buffer.from([0x00, 0x00, 0x00, 0x00]), // CRC (placeholder)
        Buffer.from([0x00, 0x00, 0x00, 0x00]), // IEND chunk size
        Buffer.from([0x49, 0x45, 0x4E, 0x44]), // IEND
        Buffer.from([0xAE, 0x42, 0x60, 0x82]), // CRC
      ]);
      return png;
    };
    
    const publicDir = path.join(__dirname, 'public');
    const icons = [
      'icon-192x192.png',
      'icon-512x512.png',
      'icon-192x192-maskable.png',
      'icon-512x512-maskable.png',
    ];
    
    icons.forEach(icon => {
      const size = icon.includes('512') ? 512 : 192;
      const filepath = path.join(publicDir, icon);
      fs.writeFileSync(filepath, createSimplePNG(size));
      console.log(`✓ Created placeholder ${icon}`);
    });
    
    console.log('\n⚠️ Placeholder PNG icons created.');
    console.log('📝 To create proper icons, install canvas: npm install canvas');
  } else {
    throw err;
  }
}
