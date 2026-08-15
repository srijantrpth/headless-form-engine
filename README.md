# Headless Multi-Step Form Engine

A headless and type-safe form engine for building multi-step forms in React.

Built with TypeScript, React, Vite, and Tailwind CSS. The engine is responsible for form state, step management, validation, navigation, and submission while leaving the UI entirely to the consuming application.

## Overview

Multi-step forms often contain a significant amount of state and navigation logic.

A typical signup flow may need to handle:

- Multiple steps
- Field state
- Validation
- Cross-field validation
- Step navigation
- Conditional steps
- Error handling
- Form submission
- Preserving state between steps
- Async validation

This project separates that logic from the presentation layer.

The engine manages the form.

The application manages the UI.

```text
                    React Application
                           |
                           v
                +---------------------+
                |     Form UI         |
                |                     |
                | Inputs              |
                | Buttons             |
                | Step Indicators     |
                | Layout              |
                +----------+----------+
                           |
                           v
                +---------------------+
                |    Form Engine      |
                |                     |
                | Form State          |
                | Step State          |
                | Validation          |
                | Navigation          |
                | Submission          |
                +----------+----------+
                           |
                           v
                +---------------------+
                |   Form Definition   |
                |                     |
                | Steps               |
                | Fields              |
                | Rules               |
                | Configuration       |
                +---------------------+
