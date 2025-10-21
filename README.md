# Jegan Enterprises - Steel Fabrication Website

🏭 **Premium steel fabrication services in Virudhunagar, Tamil Nadu**

## 🚀 About

Modern, fully responsive React.js website for Jegan Enterprises, showcasing premium steel fabrication services across industrial, residential, restaurant, kitchen, fencing, and office applications. Built with the latest UI/UX best practices and modern web technologies.

## ✨ Features

### Core Features
- **Modern Component Architecture**: Modular, reusable React components
- **Professional Icons**: Lucide React icons throughout (no emojis!)
- **Dark Mode**: Full dark mode support with smooth transitions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Animations**: Smooth Framer Motion animations throughout
- **Performance Optimized**: Code splitting and lazy loading
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Accessibility**: WCAG 2.1 AA compliant with ARIA labels

### User Experience
- **Smart Form Validation**: react-hook-form + Zod schemas
- **Toast Notifications**: Real-time user feedback
- **Testimonials Carousel**: React Slick with customer reviews
- **Back-to-Top Button**: With scroll progress indicator
- **Active Section Tracking**: Navigation highlights current section
- **Smooth Scrolling**: Enhanced navigation experience

### Design
- **Glassmorphism Effects**: Modern frosted glass UI elements
- **Custom Typography**: Inter (body) and Space Grotesk (headings)
- **Gradient Backgrounds**: Complex multi-point gradients
- **Hover Effects**: Engaging micro-interactions
- **Card Animations**: Smooth entrance and hover effects

## 🛠️ Services

- 🏭 **Industrial Fabrication**: Heavy-duty steel structures and machinery
- 🏠 **Residential Solutions**: Custom railings, staircases, and decorative elements
- 🍽️ **Restaurant & Kitchen**: Commercial kitchen equipment and fixtures
- 🏢 **Office Spaces**: Modern furniture and partition systems
- 🏡 **Fencing Solutions**: Security and decorative fencing
- 🔧 **Custom Fabrication**: Specialized projects and prototypes

## 📞 Contact Information

- **Phone**: +91 99441 04890
- **Email**: info@jeganenterprises.com
- **Location**: Virudhunagar, Tamil Nadu 626001
- **Business Hours**: Mon-Fri 7:00 AM - 6:00 PM, Sat 8:00 AM - 4:00 PM

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/davdinesh/jegan-enterprises-website.git
cd jegan-enterprises-website

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

The site will open at `http://localhost:3000`

## ⚙️ Configuration

### EmailJS Setup (Contact Form)

To enable the contact form, configure EmailJS:

1. Sign up at [https://www.emailjs.com/](https://www.emailjs.com/)
2. Create an email service and template
3. Update credentials in `/src/components/sections/Contact.jsx`:

```javascript
await emailjs.send(
  'YOUR_SERVICE_ID',     // Replace with your Service ID
  'YOUR_TEMPLATE_ID',    // Replace with your Template ID
  templateParams,
  'YOUR_PUBLIC_KEY'      // Replace with your Public Key
);
```

## 🌐 Live Website

Visit our website: [https://davdinesh.github.io/jegan-enterprises-website](https://davdinesh.github.io/jegan-enterprises-website)

## 📱 Technologies Used

### Core
- **React** 18.2.0 - Modern UI library
- **React Router** - Client-side routing (via section navigation)
- **Tailwind CSS** 3.3.0 - Utility-first CSS framework

### UI/UX
- **Framer Motion** 12.23.24 - Animation library
- **Lucide React** 0.546.0 - Icon library
- **React Slick** 0.31.0 - Carousel component
- **React Hot Toast** 2.6.0 - Toast notifications

### Forms
- **React Hook Form** 7.65.0 - Form state management
- **Zod** 4.1.12 - Schema validation
- **@hookform/resolvers** 5.2.2 - Form resolvers
- **EmailJS Browser** 4.4.1 - Email service integration

### Typography
- **@fontsource/inter** 5.2.8 - Body font
- **@fontsource/space-grotesk** 5.2.10 - Heading font

### SEO & Meta
- **React Helmet Async** 2.0.5 - Meta tag management

### Utilities
- **clsx** 2.1.1 - Conditional className utility
- **tailwind-merge** 3.3.1 - Tailwind class merging

### Development Tools
- **ESLint** 8.0.0 - Code linting
- **Prettier** 3.0.0 - Code formatting
- **PostCSS** 8.4.31 - CSS processing
- **Autoprefixer** 10.4.16 - Vendor prefixes

## 📂 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── NavBar.jsx          # Navigation with dark mode toggle
│   │   └── Footer.jsx          # Footer component
│   ├── sections/
│   │   ├── Hero.jsx            # Hero section with animations
│   │   ├── About.jsx           # About section with features
│   │   ├── Services.jsx        # Services grid
│   │   ├── Projects.jsx        # Project showcase
│   │   ├── Testimonials.jsx    # Testimonials carousel
│   │   └── Contact.jsx         # Contact form with validation
│   └── ui/
│       ├── Button.jsx          # Reusable button component
│       ├── Card.jsx            # Card variants
│       ├── Input.jsx           # Form inputs
│       ├── SectionHeader.jsx   # Section headers
│       ├── BackToTop.jsx       # Back to top button
│       └── DarkModeToggle.jsx  # Theme toggle
├── hooks/
│   ├── useScrollSpy.js         # Track active section
│   └── useInView.js            # Intersection observer
├── lib/
│   └── utils.js                # Utility functions
├── utils/
│   └── constants.js            # App constants and data
├── App.js                      # Main app component
├── index.js                    # Entry point
├── index.css                   # Global styles
└── App.css                     # Component styles
```

## 🎨 Design System

### Colors
- **Primary**: #ff6b35 (Orange) - Extended palette (50-900)
- **Dark**: #1a1a1a to #f7f7f7 - Dark mode colors
- **Gradients**: Custom gradient utilities

### Typography
- **Headings**: Space Grotesk (400, 500, 600, 700)
- **Body**: Inter (400, 500, 600, 700)
- **Sizes**: 4xl to 8xl for headings

### Animations
- Fade in, slide up, scale in
- Floating elements
- Shimmer effects
- Scroll-triggered animations

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run deploy` - Deploy to GitHub Pages
- `npm run lint` - Run ESLint
- `npm run format` - Run Prettier
- `npm test` - Run tests

## 📊 Performance

### Build Metrics
- Total JS (gzipped): ~140 KB
- Total CSS (gzipped): ~13 KB
- Code splitting: 12 chunks
- Lazy loading: All sections

### Expected Lighthouse Scores
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - see LICENSE file for details

## 📞 Support

For support, email info@jeganenterprises.com or call +91 99441 04890

---

**🤖 Generated with [Claude Code](https://claude.com/claude-code)**

© 2025 Jegan Enterprises. All rights reserved. | Premium Steel Fabrication Services