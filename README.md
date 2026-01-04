# Personal Website & Blog with CMS

A modern, full-stack personal website featuring a blog, admin dashboard, and authentication system built with React, Vite, Tailwind CSS, shadcn/ui, and Supabase.

## ✨ Features

- 🎨 **Modern UI** - Built with Tailwind CSS and shadcn/ui components
- 🌓 **Dark Mode** - Persistent theme switching
- 📝 **Blog System** - Create, edit, and delete posts
- 🔐 **Authentication** - Secure login with Supabase Auth
- 📱 **Responsive Design** - Mobile-first approach
- 🎯 **Admin Dashboard** - Full CMS for content management
- 🚀 **GitHub Pages Ready** - One-command deployment

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS
- **UI Components**: shadcn/ui, Radix UI
- **Routing**: React Router v7
- **Authentication**: Supabase Auth
- **Deployment**: GitHub Pages
- **Icons**: Lucide React

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git
- Supabase account (free tier)

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/razaeldotexe/website-gabut.git
cd website-gabut
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Supabase

1. Create a free account at [supabase.com](https://supabase.com)
2. Create a new project
3. Go to **Project Settings** → **API**
4. Copy your project URL and anon key

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 5. Create Admin User

1. Go to Supabase Dashboard → **Authentication** → **Users**
2. Click **Add user** → **Create new user**
3. Enter email and password
4. Confirm the user

### 6. Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📖 Usage

### Accessing the Admin Dashboard

1. Navigate to `/login`
2. Sign in with your Supabase credentials
3. Click **Admin** button in navbar (appears after login)

### Managing Content

- **Dashboard** (`/admin`) - View stats
- **Profile** (`/admin/profile`) - Edit your profile info
- **Posts** (`/admin/posts`) - Create, edit, delete blog posts

### Public Pages

- **Home** (`/`) - Personal profile and links
- **Blog** (`/blog`) - Blog post previews
- **Blog Post** (`/blog/:id`) - Individual post detail

## 🚀 Deployment

### Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:

1. Build the production bundle
2. Deploy to the `gh-pages` branch
3. Make your site available at `https://username.github.io/repository-name/`

### Custom Domain Setup (Optional)

1. Go to GitHub repo → **Settings** → **Pages**
2. Under "Custom domain", enter your domain
3. Add DNS records at your domain provider:
   - **CNAME**: `www` → `username.github.io`
   - **A records** for apex (@):
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

## 🔧 Configuration

### Update Homepage URL

Edit `package.json`:

```json
{
  "homepage": "https://your-domain.com"
}
```

### Customize Profile Data

Edit `src/database/profile.json`:

```json
{
  "name": "Your Name",
  "bio": "Your bio",
  "avatar": "avatar-url",
  "socials": [...]
}
```

## 📁 Project Structure

```
website-gabut/
├── src/
│   ├── components/        # Reusable components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── auth-provider.jsx
│   │   ├── content-provider.jsx
│   │   └── ...
│   ├── pages/            # Route pages
│   │   ├── admin/        # Admin dashboard pages
│   │   ├── Blog.jsx
│   │   ├── BlogPost.jsx
│   │   ├── Home.jsx
│   │   └── Login.jsx
│   ├── lib/              # Utilities
│   │   └── supabase.js
│   ├── database/         # Static data
│   └── App.jsx           # Main app component
├── .env.local            # Environment variables
└── package.json
```

## 🎨 Customization

### Theme Colors

Edit `src/index.css` to customize color variables:

```css
:root {
  --background: ...;
  --foreground: ...;
  /* ... */
}
```

### Add UI Components

```bash
npx shadcn@latest add [component-name]
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors, try:

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Authentication Issues

- Verify Supabase credentials in `.env.local`
- Check if user is confirmed in Supabase dashboard
- Ensure Supabase project is active

### Deployment Issues

- Verify `homepage` in `package.json` matches your domain
- Check GitHub Pages settings in repository
- Wait 5-10 minutes for DNS propagation

## 📄 License

MIT License - feel free to use this project for your own website!

## 🤝 Contributing

Built with ❤️ by Razael and Antigravity

## 🔗 Links

- [Live Demo](https://www.razael-crunchy.web.id)
- [Supabase Docs](https://supabase.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
