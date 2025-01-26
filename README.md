Created by Daryl Kevin \
Friday, November 22 2024 \
Hong Kong

# Personal Portfolio Template

A sleek, professional, and low-profile portfolio template designed to showcase your experiences, projects, and skills effectively. This responsive template is simple yet focused, allowing users to easily customize it to their needs.

![responsive-mockups](./public/screenshots/responsive.png)

Made by yours truly, myself :)

---

## 🌟 Features

- **Customizable in One File**: Update your personal info, experiences, projects, education, and contact links directly in `definitions.ts`.
- **Sleek Design**: A clean and professional layout for showcasing your skills and projects.
- **Highly Responsive**: The template is designed with responsiveness in mind, providing a seamless user experience across all devices. Whether it's viewed on desktops, tablets, or smartphones, the layout dynamically adjusts to ensure optimal display and usability.
- **Component-Based Architecture**: Reusable UI components for each section make it easy to add or modify functionality.
- **TailwindCSS Styling**: Built with TailwindCSS for quick and scalable design changes.
- **Prettier Integration**: Keep your code consistent and clean with Prettier formatting (configured with TailwindCSS support).

---

## 🚀 Getting Started

Follow these steps to set up and customize your portfolio:

### 1. Clone the Repository

```bash
git clone https://github.com/darylkevin/PersonalPortfolio.git
cd PersonalPortfolio
```

### 2. Install Dependencies

Install all required dependencies using `pnpm`:

```bash
pnpm install
```

> **Note**: Make sure you have `pnpm` installed. If not, refer to [pnpm installation guide](https://pnpm.io/installation).

### 3. Run the Development Server

Start the development server to preview your changes:

```bash
pnpm dev
```

The site will be available at `http://localhost:3000`.

---

## 🛠️ Customization Guide

### Edit `definitions.ts`

The `definitions.ts` file (located in `app/lib/`) is your one-stop shop for customizing this portfolio. Here's a quick overview of what you can configure (leave the link field as an empty string if you do not need it):

#### **Hero Section**

Define your profile details:

```typescript
export const hero = {
  name: "Your Name",
  title: "Your Title",
  about: "A short description about yourself.",
};
```

#### **Experiences**

Showcase your work experience:

```typescript
export const experiences = [
  {
    company: "Company Name",
    title: "Your Role",
    period: "Start-End Dates",
    description: "Brief summary of your responsibilities.",
    skills: ["Skill 1", "Skill 2", "Skill 3"],
    link: "https://your-experience-showcase.com"
  },
];
```

#### **Projects**

Highlight your projects:

```typescript
export const projects = [
  {
    title: "Project Name",
    image: "/projects/your-image.png",
    imageAlt: "Alt text for the image",
    description: "A short description about the project.",
    skills: ["Technology 1", "Technology 2"],
    link: "https://your-project-showcase.com"
  },
];
```

#### **Education**

Add your educational background:

```typescript
export const education = {
  institution: "Your Institution",
  degree: "Your Degree",
  period: "Start-End Dates",
  description: "Details about your studies.",
  link: "https://your-institution-website.com"
};
```

#### **Footer**

Customize the footer text and contact details:

```typescript
export const footer = {
  contact: "Your Contact Info",
  text: "Additional footer text or description.",
};
```

#### **Profile Links**

Add links to your social profiles:

```typescript
export const profileLinks = {
  github: {
    alt: "GitHub",
    url: "https://github.com/your-username",
    icon: "/icons/github-white.png",
  },
  linkedin: {
    alt: "LinkedIn",
    url: "https://linkedin.com/in/your-profile",
    icon: "/icons/in-white.png",
  },
  email: {
    alt: "Email",
    url: "mailto:your-email@example.com",
    icon: "/icons/mail-open-white.png",
  },
};
```

---

## 🖋️ Formatting & Styling

The project uses **Prettier** to maintain consistent code style. A Prettier configuration is included with TailwindCSS plugin support. Run the following command to format your code:

```bash
npx prettier --write .
```

---

## 📦 Built With

- [Next.js](https://nextjs.org/) – React Framework for building fast, server-rendered apps.
- [TailwindCSS](https://tailwindcss.com/) – Utility-first CSS framework for styling.
- [TypeScript](https://www.typescriptlang.org/) – Typed JavaScript for better developer experience.
- [Prettier](https://prettier.io/) – Code formatter with TailwindCSS support.

---

## 🧑‍💻 Contributing

Contributions are welcome. If you have suggestions or improvements, feel free to open an issue or submit a pull request.

---

## 📜 License

This project is licensed under the **MIT License** – see the [LICENSE](./LICENSE) file for details.
