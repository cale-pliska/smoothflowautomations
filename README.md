# SmoothFlow Automations

This repository contains a simple static website for **SmoothFlow Automations**.
The site is entirely client-side and can be served from any static host.

## Structure

- `index.html` – main HTML page
- `css/style.css` – site styles
- `js/main.js` – basic form interaction

## Usage

Open `index.html` in a modern web browser. No additional build steps are required.

You can customize the content in the HTML file or extend the styles and scripts as needed.

### Development

For live reloading during development, ensure your HTML file includes `<head>`
and `<body>` tags so tools like **live-server** can inject reload scripts. You
can install `live-server` globally with npm:

```bash
npm install -g live-server
```

Run `live-server` in the project directory to automatically refresh the page on
changes.
