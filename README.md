# RaceTracks Admin Panel

travappar's SwedishRacetracks application  admin dashboard to:

  - view list of all available events
  - add/edit/delete events
  - manage users (activation & password)
  - view statistics

## Getting Started
#### Installation
> Download the Node.js source code or a pre-built installer for your platform [from here][ndjssrc].
> install a good development environment, recommendation; [ATOM][atomeditor] or [Brackets][bracketsecitor]

You need [Gulp][gulp], [Bower][bower] installed globally:

```sh
$ npm install -g gulp bower
```
After global installation clone the project and install all dependencies and modules
```sh
$ git clone https://github.com/Aldrian/4DV611-admin.git
$ cd 4DV611-admin
$ npm install
$ bower install
```
now build the project, preview on the bowser, get ready for coding and view all changes applied on the browser with:
```sh
$ gulp serve
```
### File structure
<pre>
├──  bower_components/                      - local installation of bower packages
├──  e2e/                                   - out of the box e2e test configuration with protractor
├──  gulp/                                  - gulp tasks
├──  nodes_modules/                         - local installation of node modules
│
├──  src/
│   ├──  app/                               - your application folder
│   │   ├──  components/                    - components of the application
│   │   │   └──  apiInterceptor             - authorization interceptor lies here
│   │   │   └──  auth                       - authorization service lies here
│   │   │   └──  dataProcessing             - event and user data access components
│   │   │   └──  event                      - event row component page with styles and directive
│   │   │   └──  pageHeader                 - page header component page with styles and directive
│   │   │
│   │   ├──  login/                         - login page with styles and controller files
│   │   ├──  main/                          - ---main module---
│   │   ├──  userManage/                    - user manage page with styles and controller files
│   │   ├──  visitStatistics/               - statistics page with styles and controller files
│   │   │
│   │   └──  index.config.js
│   │   └──  index.constants.js
│   │   └──  index.module.js
│   │   └──  index.route.js
│   │   └──  index.run.js
│   │   └──  index.scss
|   |
│   ├──  assets/                            - assets: fonts, images, translation, etc... goes here
│       └──  images/                        - images: image assets folder
│
├──  .bowerrc
├──  .editorconfig
├──  .gitignore
├──  .eslintrc
├──  bower.json                             - bower dependencies
├──  gulpfile.js                            - entry point to all gulp tasks
├──  package.json                           - node dependencies configuration
</pre>

#### A few things worth noting
- The BackEnd URL is a constant included in index.constants.js.

#### App workflow

#### Further improvements to the project
* Add notifications of successful or failed authorization
* Add notifications for updating and publishing events
* Add notifications of saving user data
* Improve animations on user managing page
* Optimize time for loading events for admin
* Add image placeholder for events if needed



#### `gulp/server.js`

The generator ship a fully featured development server through the use of [Browser Sync](http://www.browsersync.io/). Don't hesitate to look at its website to know more about all its features and options.

The `serve` task has as only goal to configure and launch it.

#### Browser Sync configuration

The base directories for Browser Sync are `.tmp/serve` and `src` with a priority for `.tmp/serve`. The processed version of a file has to be chosen over the source one.

As the `bower_components` folder is not located in any of the base paths, a special routes is added for this folder to be addressed by `/bower_components`.

The default Browser Sync port is `3000`, if you ever need to change it, head over to the [gulp/server.js](https://github.com/Swiip/generator-gulp-angular/blob/master/generators/app/templates/gulp/_server.js#L42) file and add the `port` attribute to the *server* variable.
Example below :
```javascript
browserSync.instance = browserSync.init({
    startPath: '/',
    server: server,
    browser: browser,
    port: 4000 // Add this line to change the default port
  });
```

Last configuration, the `browser` option is used to open the default browser to the root page.

Head over to [Browser Sync list of options](http://www.browsersync.io/docs/options/) for the full list of available configurations for BrowserSync.

#### Use Gulp tasks

* `gulp` or `gulp build` to build an optimized version of your application in `/dist`
* `gulp serve` to launch a browser sync server on your source files
* `gulp serve:dist` to launch a server on your optimized application
* `gulp test` to launch your unit tests with Karma
* `gulp test:auto` to launch your unit tests with Karma in watch mode
* `gulp protractor` to launch your e2e tests with Protractor
* `gulp protractor:dist` to launch your e2e tests with Protractor on the dist files

More information on the gulp tasks in the [User Guide](https://github.com/Swiip/generator-gulp-angular/blob/master/docs/user-guide.md).
#### Features included in the gulpfile
* *useref* : allow configuration of your files in comments of your HTML file
* *ngAnnotate* : convert simple injection to complete syntax to be minification proof
* *uglify* : optimize all your JavaScript
* *csso* : optimize all your CSS
* *autoprefixer* : add vendor prefixes to CSS
* *rev* : add a hash in the file names to prevent browser cache problems
* *watch* : watch your source files and recompile them automatically
* *eslint* : The pluggable linting utility for JavaScript
* *imagemin* : all your images will be optimized at build
* *Unit test (karma)* : out of the box unit test configuration with karma
* *e2e test (protractor)* : out of the box e2e test configuration with protractor
* *browser sync* : full-featured development web server with livereload and devices sync
* *angular-templatecache* : all HTML partials will be converted to JS to be bundled in the application
* **TODO** lazy : don't process files which haven't changed when possible

[atomeditor]:<https://atom.io/>
[bracketsecitor]:<http://brackets.io/>
[ndjssrc]:<https://nodejs.org/en/download/>
[AngularJS]: <http://angularjs.org>
[Gulp]: <http://gulpjs.com>
[bower]:<http://bower.io/>
