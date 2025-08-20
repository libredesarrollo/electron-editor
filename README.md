# Electron Editor

Editor de texto simple construido con **Electron** y **SimpleMDE**, presentado como la primera aplicación práctica en el curso de Electron de Desarrollo Libre:

https://www.desarrollolibre.net/libros/primeros-pasos-electron-js

https://www.desarrollolibre.net/blog/electronjs/curso-electronjs

---

## Descripción

Este proyecto es una introducción práctica al desarrollo de aplicaciones de escritorio con **Electron**, usando una interfaz basada en **SimpleMDE** (un editor Markdown). El objetivo es aprender el flujo básico de Electron: creación de ventanas, menú, integración de librerías web y empaquetado básico de una app de escritorio :contentReference[oaicite:0]{index=0}.

---

## Instalación y ejecución

```bash
git clone https://github.com/libredesarrollo/electron-editor.git
cd electron-editor
npm install
npm run start

electron-editor/
├── index.html           # Interfaz principal con el editor SimpleMDE
├── index.js             # Lógica del proceso "renderer"
├── menu.js              # Definición del menú (comandos, atajos, etc.)
├── editor-options.js    # Configuración de SimpleMDE (barra de herramientas, tema, etc.)
├── package.json         # Dependencias, scripts y metadatos del proyecto
├── README.md            # Este archivo de documentación
└── Otros archivos (package-lock.json, copias de respaldo, etc.)
