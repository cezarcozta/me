# Next.js Project 🚀

[![Next.js](https://img.shields.io/badge/Next.js-15.0-blueviolet.svg)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

## Production Status
[![Netlify Status](https://api.netlify.com/api/v1/badges/6f0f8cd0-4f72-460b-8d87-5e5609ad7da6/deploy-status)](https://app.netlify.com/projects/cezarcozta/deploys)


A modern web application built with Next.js, featuring best practices and a scalable architecture.

## 🌟 Features

- ⚡️ **Next.js 15+** - For superior React development
- 📦 **TypeScript** - For type safety and better developer experience
- 🎨 **Modern UI** - Clean and intuitive user interface
- 🔒 **Best Practices** - Following industry standards and security guidelines

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone git@github.com/cezarcozta/me
cd me
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up your Resend API key:
- Sign up at [Resend](https://resend.com)
- Go to your dashboard
- Verify your domain for sending emails
- Create an API key
- Resend Test

4. Set up environment variables:
Create a `.env` file in the root directory and add, check env.example:
```env
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_WHATSAPP_NUMBER=yourwhatsappnumber
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Project Structure

```
├── app/                               # Next.js app directory
├── app/about/page.tsx                 # Next.js APP route (Client)
├── app/api/send/route.ts              # Next.js API route (Netlify Function)
├── app/contact/page.tsx               # Next.js APP route (Client)
├── app/contact/ContactInfo.tsx        # React.js Component
├── app/contact/SendEmailForm.tsx      # React Form Component
├── app/skills/page.tsx                # Next.js APP route (Client)
├── app/skills/SkillCard.tsx           # React.js Component
├── components/                        # Reusable React components
├── components/action/                 # Action component
│   ├── index.tsx
│   ├── action.tsx
├── components/active-link/            # Active-link component
│   ├── index.tsx
│   ├── active-link.tsx
├── components/header/                 # Header component
│   ├── index.tsx
│   ├── header.tsx
├── components/footer/                 # Footer component
│   ├── index.tsx
│   └── footer.tsx
├── components/page-title/             # Page-title component
│   ├── index.tsx
│   └── page-title.tsx
├── components/logo/                   # Logo component
│   ├── index.tsx
│   └── logo.tsx
├── components/hero/                   # Hero component
│   ├── index.tsx
│   └── hero.tsx
├── components/ui/                     # shadcn Folder
├── components/ClientLayout.tsx        # Client Layout
├── components/EmailTemplate.tsx       # Email template component
├── components/LanguageSwitch.tsx      # Language switcher component
├── lib/                               # Libs
├── lib/context/                       # Contexts
├── lib/context/LanguageContext.tsx    # Languages Context
├── lib/hooks/                         # Hooks
├── lib/hooks/useTranslation.ts        # Translation Hook
├── lib/utils.ts                       # shadcn ui File
├── lib/validator.ts                   # zod Validator
└── server/                            # server-only
└── server/resend.ts                   # Resend Email Integration
└── data.json                          # Portuguese and english static text
```

## 🛠️ Development

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## 📐 Architecture

![Architecture Diagram](./.github/assets/arch.png)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
6. Get in touch

## 📫 Contact

cezarcozta - [@cezarcozta](https://www.linkedin.com/in/cezarcozta/)