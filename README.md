# Catmull-Clark with REGL

This is a university course project for the Computer-Aided Geometric Modeling (CAGD) course held @FMI, Sofia University by Krasimira Alexandrova. Main technologies used to implement it were TypeScript and REGL

## Setup

### Prerequisites
- `npm`
- browser supporting `WebGL` (mostly all contemporary browsers)

### Installation
Before running the project, one must first install all dependencies using `npm install` in the root directory of the project. From there on different uses require the following steps.
- Live build: run `npm start` to initialize a live-reload server, which automatically detects changes to the codebase and refreshes the build
- Build static artefact: run `npm run clear && npm run compile` to build a static `index.html` file.

### Demo
A demo of the latest build can be found at [this link](https://sashodada.github.io/Catmull-Clark-regl/).
