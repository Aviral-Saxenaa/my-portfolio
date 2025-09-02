# 🚀 Aviral Saxena - Developer Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-13-black?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react" alt="React">
  <img src="https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>

<p align="center">
  <strong>A modern, responsive portfolio website built with Next.js and Tailwind CSS</strong>
</p>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Sections](#sections)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Contact](#contact)

---

## 🎯 About

Welcome to my professional portfolio website! This is a modern, responsive portfolio built with **Next.js 13** and **Tailwind CSS**, showcasing my skills, experience, and projects. The website is designed to be user-friendly and easily customizable, making it perfect for developers and freelancers.

### ✨ What Makes This Portfolio Special
- **Modern Design**: Clean, professional aesthetic with smooth animations
- **Responsive Layout**: Works perfectly on all devices (desktop, tablet, mobile)
- **Performance Optimized**: Built with Next.js for fast loading and SEO
- **Easy Customization**: Simple data files to update your information
- **No Blog Section**: Focused on essential portfolio content

---

## 🌟 Features

- 🎨 **Modern UI/UX** with smooth animations and transitions
- 📱 **Fully Responsive** design for all screen sizes
- ⚡ **Fast Performance** with Next.js optimization
- 🔍 **SEO Optimized** for better search engine visibility
- 🎯 **Easy Navigation** with smooth scrolling
- 🌙 **Professional Color Scheme** with consistent branding
- 📧 **Contact Form** integration ready
- 🚀 **Easy Deployment** to Vercel, Netlify, or any hosting platform

---

## 🛠️ Technologies Used

### **Frontend Framework**
- **Next.js 13** - React framework with server-side rendering
- **React 18** - Modern React with hooks and functional components

### **Styling & UI**
- **Tailwind CSS** - Utility-first CSS framework
- **CSS3** - Custom animations and responsive design

### **Development Tools**
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing
- **Git** - Version control

### **Deployment & Hosting**
- **Vercel** - Recommended hosting platform
- **Netlify** - Alternative hosting option
- **Docker** - Containerization support

---

## 📚 Sections

The portfolio includes the following sections:

1. **🏠 Hero Section** - Introduction and call-to-action
2. **👤 About** - Personal information and summary
3. **💼 Experience** - Work history and achievements
4. **🛠️ Skills** - Technical skills and competencies
5. **📚 Education** - Academic background and certifications
6. **🚀 Projects** - Showcase of key projects
7. **📞 Contact** - Contact information and form

---

## 🚀 Installation

### Prerequisites
- **Node.js** (version 16.14 or later)
- **npm** or **yarn** package manager
- **Git** for version control

### Clone the Repository
```bash
git clone https://github.com/Aviral-Saxenaa/my-portfolios.git
cd my-portfolios
```

### Install Dependencies
```bash
npm install
# or
yarn install
```

---

## 🎯 Getting Started

### Development Mode
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production
```bash
npm run build
# or
yarn build
```

### Start Production Server
```bash
npm start
# or
yarn start
```

---

## 🎨 Customization

### Personal Information
Update your details in `utils/data/personal-data.js`:
```javascript
export const personalData = {
  name: "YOUR NAME",
  profile: '/your-photo.jpg',
  designation: "Your Title",
  description: "Your description...",
  email: 'your-email@example.com',
  phone: '+1234567890',
  address: 'Your City, Country',
  github: 'https://github.com/yourusername',
  linkedIn: 'https://linkedin.com/in/yourprofile',
  // ... more fields
}
```

### Experience
Edit `utils/data/experience.js` to add your work experience.

### Projects
Update `utils/data/projects-data.js` with your projects.

### Skills
Modify `utils/data/skills.js` to list your technical skills.

### Education
Edit `utils/data/educations.js` with your academic background.

### Profile Photo
Replace `public/aviralimg.jpg` with your own photo.

---

## 🚀 Deployment

### Option 1: Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"

### Option 2: Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect GitHub and select your repo
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy site"

### Option 3: Deploy to any hosting platform

1. **Build the project**
   ```bash
   npm run build
   npm run export
   ```

2. **Upload the `out` folder** to your hosting provider

---

## 📁 Project Structure

```
my-portfolios/
├── app/                    # Next.js 13 app directory
│   ├── components/         # Reusable components
│   │   ├── homepage/       # Page-specific components
│   │   ├── navbar.jsx      # Navigation component
│   │   └── footer.jsx      # Footer component
│   ├── css/               # Global styles
│   ├── page.js            # Main page component
│   └── layout.js          # Root layout
├── public/                # Static assets
│   └── aviralimg.jpg      # Profile photo
├── utils/                 # Utility functions and data
│   └── data/             # Portfolio data files
│       ├── personal-data.js
│       ├── experience.js
│       ├── projects-data.js
│       ├── skills.js
│       ├── educations.js
│       └── contactsData.js
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── next.config.js         # Next.js configuration
└── README.md              # This file
```

---

## 🎯 Key Projects Showcased

### 1. **Snipify – Real-time Tutoring WebApp**
- **Tech Stack**: React, Firebase, WebRTC, Jest
- **Role**: Full Stack Developer
- **Achievements**: 40% faster query responses, 20% increased engagement

### 2. **DashCart – Hyperlocal E-commerce App**
- **Tech Stack**: Expo, Appwrite, React.js
- **Role**: Full Stack Developer
- **Achievements**: 70% increase in micro-orders, 20% cost reduction

---

## 🛠️ Skills Highlighted

- **Frontend**: React.js, Next.js, HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Databases**: MySQL, Firebase Firestore, Appwrite
- **Cloud**: Google Cloud Platform (GCP)
- **Tools**: Git, CI/CD, Jest, Postman, Docker
- **Methodologies**: Agile Development, OOP, UI/UX Design

---

## 📞 Contact

- **Email**: as5216@srmist.edu.in
- **Phone**: +91 74171 27972
- **Location**: Delhi, India
- **GitHub**: [@Aviral-Saxenaa](https://github.com/Aviral-Saxenaa)
- **LinkedIn**: [saxenaaviral](https://linkedin.com/in/saxenaaviral)
- **LeetCode**: [@Aviral-Saxenaa](https://leetcode.com/Aviral-Saxenaa/)

---

## 🤝 Contributing

This is a personal portfolio project, but if you find any bugs or have suggestions for improvements, feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- **Template Inspiration**: Based on modern portfolio designs
- **Icons**: Font Awesome and other icon libraries
- **Community**: Next.js and React communities for excellent documentation

---

<p align="center">
  <strong>Built with ❤️ by Aviral Saxena</strong>
</p>

<p align="center">
  <a href="https://github.com/Aviral-Saxenaa/my-portfolios">View on GitHub</a> • 
  <a href="https://linkedin.com/in/saxenaaviral">Connect on LinkedIn</a>
</p>
