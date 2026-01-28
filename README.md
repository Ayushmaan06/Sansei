<div align="center">
  
  # Sansei
  
  AI-powered Next.js application generator that transforms natural language prompts into production-ready code. From concept to deployment, skip the boilerplate and focus on what makes your project unique.

</div>


<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![tRPC](https://img.shields.io/badge/tRPC-2596BE?style=for-the-badge&logo=trpc&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Inngest](https://img.shields.io/badge/Inngest-000000?style=for-the-badge&logo=inngest&logoColor=white)
![E2B](https://img.shields.io/badge/E2B-FF6B35?style=for-the-badge&logo=e2b&logoColor=white)

</div>

---

## Features

**⚡ Prompt-to-Code Next.js Apps**  
Transform natural language descriptions into complete Next.js applications with TypeScript and Tailwind CSS. No templates, no restrictions.

**🎯 Unlimited Free AI Generation**  
Powered by Grok 4 during beta. Generate as many applications as you need without hitting usage limits or paywalls.

**✨ No AI Boilerplate**  
Clean, idiomatic Next.js code without generic AI patterns. Every generation feels intentional, structured, and ready for real-world projects.

**🌐 Instant Live Preview**  
Every generation deploys automatically through e2b.app. Get a live demo URL instantly to test and share your application without configuration.

**🔄 Iterative Development**  
Refine your application through conversational prompts. Add features, adjust layouts, or fix issues without rewriting from scratch.

---

## Tech Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| Framework | Next.js | React framework with App Router for modern web applications |
| Language | TypeScript | Type-safe development with enhanced IDE support |
| Styling | Tailwind CSS | Utility-first CSS framework for rapid UI development |
| Authentication | Clerk | User management and authentication infrastructure |
| Database | PostgreSQL | Relational database for application data storage |
| ORM | Prisma | Type-safe database client and schema management |
| API Layer | tRPC | End-to-end typesafe API without code generation |
| Background Jobs | Inngest | Reliable serverless job processing and workflows |
| Code Execution | E2B | Sandboxed environment for secure code execution and previews |
| Infrastructure | AWS | Cloud hosting and storage services |
| Containerization | Docker | Application packaging and deployment consistency |
| AI Model | Grok 4 | Advanced language model for code generation |

---

## Local Development

**Prerequisites**
- Node.js 18+ and npm/yarn/pnpm
- PostgreSQL database
- Docker (optional)

**Clone the Repository**

```
git clone https://github.com/yourusername/Sansei.git
cd Sansei
```

**Install Dependencies**

```
npm install
```
or
```
pnpm install
```
**Environment Setup**

Create a `.env` file in the root directory:

```
DATABASE_URL="postgresql://user:password@localhost:5432/Sansei"
CLERK_SECRET_KEY="your_clerk_secret_key"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
GROK_API_KEY="your_grok_api_key"
E2B_API_KEY="your_e2b_api_key"
INNGEST_EVENT_KEY="your_inngest_key"
INNGEST_SIGNING_KEY="your_inngest_signing_key"
AWS_ACCESS_KEY_ID="your_aws_access_key"
AWS_SECRET_ACCESS_KEY="your_aws_secret_key"
```
**Database Setup**
```
npx prisma generate
npx prisma db push
```
**Run Development Server**
```
npm run dev
```
Open `http://localhost:3000` in your browser.

**Build for Production**
```
npm run build
npm start
```
---
