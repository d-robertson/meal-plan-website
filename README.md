# 🍽️ 14-Day Meal Plan Website

A simple static website hosting our comprehensive meal planning system for 2 adults over 14 days.

## 🚀 Quick Deploy to Netlify

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial meal plan site"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repo
   - Netlify will auto-detect settings from `netlify.toml`
   - Click "Deploy site"

3. **Done!** Your site will be live at `your-site-name.netlify.app`

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
meal-plan/
├── content/           # All markdown files
│   ├── index.md      # Homepage
│   ├── meal-plans/   # Meal planning docs
│   ├── recipes/      # Recipe collections
│   ├── shopping-lists/ # Shopping guides
│   └── prep-guides/  # Prep schedules
├── _includes/        # Templates
│   └── base.njk     # Main layout
├── netlify.toml     # Netlify config
└── package.json     # Dependencies
```

## ✨ Features

- **Responsive design** - Works on mobile and desktop
- **Clean navigation** - Easy to browse between sections
- **Print-friendly** - All pages optimized for printing
- **Fast loading** - Static site, no JavaScript needed
- **Free hosting** - Deployed on Netlify

## 🔧 Customization

To update content:
1. Edit markdown files in the `content/` folder
2. Commit and push changes
3. Netlify will automatically rebuild and deploy

To change styling:
- Edit the CSS in `_includes/base.njk`

## 📱 Mobile Optimized

The site automatically adapts to mobile devices with:
- Responsive navigation
- Readable text sizing
- Touch-friendly buttons