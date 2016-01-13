# 4DV611-admin


## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and NPM](nodejs.org) >= v0.12.0
- [Bower](bower.io) (`npm install --global bower`)
- [Gulp](http://gruntjs.com/) (`npm install --global gulp`)

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

4. Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `gulp` or `gulp build` for building and `gulp serve` for preview.

## Deploying

After running `gulp build`, the standalone application will be available in the dist folder.

#### File structure
<pre>
├── app                     - your application folder
│   ├── components          - components of the application
│   │   ├── apiInterceptor  - authorization interceptor lies here
│   │   ├── auth            - authorization service lies here
│   │   ├── dataProcessing  - event and user data access components
│   │   ├── event           - event row component page with styles and directive
│   │   └── pageHeader      - page header component page with styles and directive
│   ├── login               - login page with styles and controller files
│   ├── main                - ---main module---
│   ├── userManage          - user manage page with styles and controller files
│   └── visitStatistics     - statistics page with styles and controller files
└── assets                  - assets: fonts, images, translation, etc... goes here
    └── images              - images: image assets folder
├──  bower_components/    - local installation of bower packages
├──  gulp/          - gulp tasks
├──  nodes_modules/ - local installation of node modules
├──  bower.json     - bower dependencies
├──  gulpfile.js    - entry point to all gulp tasks
├──  package.json   - node dependencies configuration
├──  README.md      - the generator's README.md
</pre>
