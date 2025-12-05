# Prajwol Chaulagain - Portfolio

Welcome to my professional portfolio website showcasing my work as a Creative Developer & Designer.

## 🎨 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern Animations** - Smooth transitions and interactive elements powered by Framer Motion
- **Dark Mode Support** - Toggle between light and dark themes
- **Project Showcase** - Highlighting my best work and case studies
- **Skills Section** - Displaying technical expertise across multiple domains
- **Contact Integration** - Easy way for potential clients and collaborators to reach out
- **Performance Optimized** - Fast loading times with optimized assets

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui (Radix UI)
- **Icons**: Lucide React
- **Routing**: React Router DOM

## 📦 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ProjectsSection.tsx
│   ├── SkillsSection.tsx
│   ├── ContactSection.tsx
│   └── ...
├── pages/              # Page components
│   └── Index.tsx
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd animated-portfolio-showcase

# Install dependencies
npm install

# Start development server
npm run dev
```

The portfolio will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 📝 Customization

### Update Your Information

Edit the following files to personalize the portfolio:

- **HeroSection.tsx** - Your name and title
- **AboutSection.tsx** - About me description
- **ProjectsSection.tsx** - Your projects
- **SkillsSection.tsx** - Technical skills
- **ContactSection.tsx** - Contact information
- **index.html** - Page title and metadata

### Change Your Photo

1. Add your photo to `public/` folder
2. Update the image URL in `HeroSection.tsx`

### Update Colors

Edit Tailwind CSS configuration in `tailwind.config.ts` to match your brand colors.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Follow the prompts to deploy your portfolio.

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Deploy to GitHub Pages

1. Build the project: `npm run build`
2. Push the `dist` folder to your GitHub Pages branch

## 📧 Contact

Feel free to reach out through the contact section on the portfolio or connect on social media!

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ by Prajwol Chaulagain

## Project info

**URL**: https://lovable.dev/projects/060238ad-92a7-41b1-ae67-10985f977acd

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/060238ad-92a7-41b1-ae67-10985f977acd) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/060238ad-92a7-41b1-ae67-10985f977acd) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
