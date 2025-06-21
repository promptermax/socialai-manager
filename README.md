# SocialAI Manager

A comprehensive AI-powered social media management platform built with React and modern web technologies.

![SocialAI Manager](https://img.shields.io/badge/SocialAI-Manager-blue)
![React](https://img.shields.io/badge/React-18.0+-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-blue)
![Vite](https://img.shields.io/badge/Vite-5.0+-blue)

## 🚀 Features

### 🤖 AI-Powered Content Generation
- **Text Generation**: Create engaging posts, captions, hashtags, blog posts, and ad copy
- **Image Generation**: AI-powered image creation with multiple styles and aspect ratios
- **Video Content**: AI-assisted video creation and editing tools
- **Multi-Platform Optimization**: Content tailored for Instagram, Facebook, Twitter, LinkedIn, and YouTube

### 📅 Content Calendar & Scheduling
- **Interactive Calendar**: Visual monthly calendar with post indicators
- **Advanced Scheduling**: Multi-platform post scheduling with date/time selection
- **Content Management**: Track post status (scheduled, draft, published, failed)
- **Quick Actions**: Edit, copy, view, and delete scheduled content

### 📊 Analytics & Dashboard
- **Real-Time Statistics**: Track total posts, scheduled content, engagement, and team activity
- **Interactive Charts**: Visual representation of posting activity and engagement trends
- **Performance Metrics**: Monitor social media performance across all platforms
- **Activity Feed**: Recent posts and team activity tracking

### 👥 User & Team Management
- **Role-Based Access**: Admin, Manager, and User roles with appropriate permissions
- **User Invitation System**: Invite team members with role assignment
- **Activity Monitoring**: Track user actions and system events
- **Organization Settings**: Configure company-wide settings and preferences

### 🎨 Modern User Interface
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Theme toggle for user preference
- **Professional UI**: Clean, modern interface with smooth animations
- **Toast Notifications**: Real-time feedback for user actions

## 🛠️ Technology Stack

- **Frontend**: React 18+ with Vite
- **Styling**: Tailwind CSS with custom components
- **UI Components**: Radix UI primitives with shadcn/ui
- **Icons**: Lucide React icons
- **Charts**: Recharts for data visualization
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Build Tool**: Vite for fast development and building

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/socialai-manager.git
   cd socialai-manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Demo Credentials
- **Email**: demo@socialai.com
- **Password**: password123

## 📁 Project Structure

```
socialai-manager/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # Base UI components (shadcn/ui)
│   │   ├── auth/         # Authentication components
│   │   ├── dashboard/    # Dashboard-specific components
│   │   ├── calendar/     # Calendar components
│   │   └── admin/        # Admin panel components
│   ├── contexts/         # React Context providers
│   │   ├── AuthContext.jsx
│   │   ├── ThemeContext.jsx
│   │   └── ToastContext.jsx
│   ├── layouts/          # Layout components
│   │   └── DashboardLayout.jsx
│   ├── pages/            # Page components
│   │   ├── LoginPage.jsx
│   │   ├── Dashboard.jsx
│   │   ├── AIGenerator.jsx
│   │   ├── Calendar.jsx
│   │   └── AdminPanel.jsx
│   ├── api/              # API service utilities
│   ├── utils/            # Utility functions and database schema
│   ├── App.jsx           # Main application component
│   └── main.jsx          # Application entry point
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎯 Key Features Explained

### AI Content Generation
The AI Generator supports multiple content types and platforms:
- **Social Media Posts**: Platform-optimized content for Instagram, Facebook, Twitter, LinkedIn
- **Content Types**: Posts, captions, hashtags, blog posts, email campaigns, ad copy
- **Tone Customization**: Professional, casual, friendly, humorous, inspiring, urgent
- **Image Generation**: Multiple styles including photorealistic, illustration, cartoon, abstract
- **Video Content**: AI-assisted video creation with duration options

### Content Calendar
Comprehensive scheduling system:
- **Visual Calendar**: Monthly view with post indicators on specific dates
- **Multi-Platform Scheduling**: Select multiple platforms for simultaneous posting
- **Post Types**: Text, image, video, and carousel posts
- **Status Tracking**: Monitor scheduled, draft, published, and failed posts
- **Quick Actions**: Edit, duplicate, preview, and delete scheduled content

### Analytics Dashboard
Real-time insights and metrics:
- **Performance Metrics**: Total posts, scheduled content, engagement rates
- **Visual Charts**: Bar charts for posting activity, line charts for engagement trends
- **Team Activity**: Monitor team member actions and productivity
- **Growth Tracking**: Compare performance with previous periods

### Admin Panel
Complete administrative control:
- **User Management**: View, edit, suspend, or delete user accounts
- **Role Assignment**: Admin, Manager, and User roles with different permissions
- **Activity Logs**: Comprehensive audit trail of all user actions
- **System Monitoring**: CPU, memory, and disk usage tracking
- **Organization Settings**: Configure company-wide preferences

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_APP_NAME=SocialAI Manager
VITE_API_URL=your-api-url
VITE_OPENAI_API_KEY=your-openai-key
VITE_ANTHROPIC_API_KEY=your-anthropic-key
```

### Customization
- **Branding**: Update colors and logos in `tailwind.config.js`
- **Features**: Enable/disable features in component configurations
- **API Integration**: Connect real AI APIs by updating service files

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy with automatic builds

### Other Platforms
The application can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Radix UI** for accessible UI primitives
- **Tailwind CSS** for utility-first styling
- **Lucide** for beautiful icons
- **Recharts** for data visualization
- **Vite** for fast development experience

## 📞 Support

For support, email support@socialai.com or join our Discord community.

## 🔗 Links

- [Live Demo](https://socialai-manager.vercel.app)
- [Documentation](https://docs.socialai.com)
- [API Reference](https://api.socialai.com/docs)
- [Community Discord](https://discord.gg/socialai)

---

Built with ❤️ by the SocialAI team

