# WhisperLeaf Mind Monitor

A React-based web application built with Vite, TypeScript, and Tailwind CSS.

## 🚀 Deployment to GitHub Pages

This project is configured for easy deployment to GitHub Pages. Here are the steps to deploy:

### Prerequisites

1. Make sure your project is pushed to a GitHub repository
2. Ensure you have the necessary permissions to enable GitHub Pages

### Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the `main` or `master` branch.

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the changes

2. **Push your code:**
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push origin main
   ```

3. **Monitor the deployment:**
   - Go to the **Actions** tab in your repository
   - You should see a "Deploy to GitHub Pages" workflow running
   - Once complete, your site will be available at: `https://whisperleaf.github.io/waitlist-web/`

### Manual Deployment

If you prefer to deploy manually:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

### Local Development

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

## 📁 Project Structure

```
whisperleaf-mind-monitor/
├── src/
│   ├── components/     # React components
│   ├── pages/         # Page components
│   ├── hooks/         # Custom React hooks
│   └── lib/           # Utility functions
├── public/            # Static assets
├── .github/workflows/ # GitHub Actions workflows
└── dist/              # Build output (generated)
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Shadcn/ui** - UI components
- **React Router** - Client-side routing

## 📝 License

This project is licensed under the MIT License.


## hello