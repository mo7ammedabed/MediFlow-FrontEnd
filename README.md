# MediFlow Dashboard System

MediFlow is a comprehensive hospital management and administrative dashboard designed to streamline hospital operations, providing a centralized platform for managing analytics, inventory, finances, pharmacy, and user verification. It is built with a modular, modern tech stack to deliver a seamless and efficient user experience.

## Project Overview

The system features an 8-page command center interface designed for healthcare administrators and data analysts. Recently, the project underwent a major architectural refactoring from monolithic files into a clean, modular structure, segregating HTML, CSS, JavaScript, and Tailwind configuration.

## Features

- **Comprehensive Dashboards**: 8 dedicated modules covering all key aspects of hospital administration.
- **Modular Architecture**: Clean separation of concerns with dedicated `html`, `css`, and `js` directories.
- **Modern UI/UX**: Designed using Tailwind CSS with a "Clinical Precision" design system.
- **Responsive Design**: Fluid grid layouts suitable for various screen sizes, specifically optimized for high-density 1080p displays.

## Dashboard Modules

The 8 interconnected pages include:
- **Reporting & Analytics** (`index.html`)
- **Inventory Management** (`catalog.html`)
- **Financial Overview** (`finance.html`)
- **Pharmacy Dashboard** (`pharmacy.html`)
- **Security Protocols** (`security.html`)
- **Support & Helpdesk** (`support.html`)
- **User Management** (`users.html`)
- **Verification System** (`verification.html`)

## Technology Stack

- **HTML5**: Structured, semantic markup.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Vanilla JavaScript**: Lightweight, module-based logic for interactivity.
- **Custom CSS**: For specific design system overrides.

## Project Structure

```
MediFlow/
├── html/                # Contains all 8 dashboard HTML pages
├── css/                 # Externalized custom CSS stylesheets
├── js/                  # Externalized JavaScript logic
├── tailwindcss/         # Tailwind CSS configuration and build files
├── DESIGN.md            # Comprehensive design system guidelines
└── README.md            # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (or yarn)

### Installation

1. Clone the repository
2. Navigate to the project directory and install Tailwind dependencies:
   ```bash
   npm install
   ```

### Usage

Start the development server or build the Tailwind CSS output:

```bash
npm run dev
```

To view the dashboards, open the files in the `html/` directory using a local development server like Live Server.

## License

This project is proprietary software.

## Contributing

Contributions are not currently accepted.
