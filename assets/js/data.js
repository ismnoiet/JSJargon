var data = {
    "ajax": {
        "caption": " AJAX",
        "value": "[AJAX (Asynchronous JavaScript and XML)](https:\/\/developer.mozilla.org\/en-US\/docs\/AJAX) is a technique for creating seamless interactive websites via asynchronous data exchange between client and server. AJAX facilitates communication with the server via partial page updates instead of the traditional full-page refresh."
    },
    "amd": {
        "caption": " AMD",
        "value": "[AMD](https:\/\/github.com\/amdjs\/amdjs-api\/wiki\/AMD) stands for Asynchronous Module Definition. The API specifies a mechanism for defining modules such that the module and its dependencies can be asynchronously loaded. This is particularly well suited for the browser environment where synchronous loading of modules incurs performance, usability, debugging, and cross-domain access problems.Perhaps the most popular implementation of AMD is [Require JS](http:\/\/requirejs.org\/docs\/whyamd.html) written by Mozilla's [James Burke](https:\/\/github.com\/jrburke\/).AMD is an alternative to Common JS (CJS)."
    },
    "angularjs": {
        "caption": " AngularJS",
        "value": "[AngularJS](https:\/\/angularjs.org\/) is a structural framework for dynamic web apps. It lets developers use HTML as their template language and lets them extend HTML\u2019s syntax to express their application\u2019s components clearly and succinctly.Angular\u2019s data binding and dependency injection eliminate much of the code developers would otherwise have to write. And it all happens within the browser, making it an ideal partner with any server technology."
    },
    "babel": {
        "caption": " Babel",
        "value": "[Babel](https:\/\/babeljs.io\/) (formerly *6to5*) is essentially an [ECMAScript](ECMASCRIPT.md) 2015 (ES6) and beyond transpiler. It means that it is a program that translates future\u2019s JavaScript into today\u2019s widely understood (by browsers) JavaScript. The idea behind such a tool is to allow developers to write their code using ECMAScript's new features while still making it work in current (and past) environments.As of [version 6](http:\/\/babeljs.io\/blog\/2015\/10\/29\/6.0.0\/), Babel also intends to be a platform, a suite of tools designed to create the next generation of JavaScript tooling. This means Babel is also supposed to power minifiers, linters, formatters, syntax highlighters, code completion tools, type checkers, codemod tools, and every other tool to be using the same foundation to do their job better than ever before."
    },
    "backbone": {
        "caption": " Backbone",
        "value": "[Backbone.js](http:\/\/backbonejs.org\/) is a framework giving structure to web applications by providing models with key-value binding and custom events, collections with a rich API of enumerable functions, views with declarative event handling, and connects it all to existing APIs over a RESTful [JSON](JSON.md) interface."
    },
    "bluebird": {
        "caption": " Bluebird",
        "value": "[Bluebird](http:\/\/bluebirdjs.com\/docs\/getting-started.html) is a fully featured [promise](\/PROMISE.md) library with focus on innovative features and performance. It means that it is a tool that completes and reinforces the behavior of JavaScript promises."
    },
    "bower": {
        "caption": " Bower",
        "value": "[Bower](http:\/\/bower.io\/) is a package manager for front-end dependencies. It takes care of hunting, finding, downloading, saving these dependencies and keeping track of them in a manifest file called `bower.json`. Bower uses a flat dependency tree, requiring only one version for each package, reducing page load to a minimum."
    },
    "broccoli": {
        "caption": " Broccoli",
        "value": "[Broccoli](https:\/\/github.com\/broccolijs\/broccoli) is a fast, reliable asset pipeline, supporting constant-time rebuilds and compact build definitions. Comparable to the [Rails](http:\/\/rubyonrails.org\/) asset pipeline in scope, though it runs on [Node.js](NODEJS.md) and is backend-agnostic."
    },
    "browserify": {
        "caption": " Browserify",
        "value": "[Browserify](http:\/\/browserify.org\/) is a tool that allows you to use the [require](https:\/\/nodejs.org\/api\/modules.html) [Node.js](NODEJS.md) function while working for the browser by bundling up all the required dependencies. The idea behind Browserify is to make it possible to use existing libraries from [npm](NPM.md) even when writing code for the client side. To allow this, it goes through the code, request the required dependencies, then create a single file containing everything: both the dependencies and the code using them."
    },
    "brunch": {
        "caption": " Brunch",
        "value": "[Brunch](http:\/\/brunch.io\/) is a builder. Not a generic task runner, but a specialized tool focusing on the production of a small number of deployment-ready files from a large number of heterogenous development files or trees.Brunch is fundamentally specialized and geared towards building assets, these files that get used in the end by the runtime platform, usually a web browser. It thus comes pre-equipped with a number of behaviors and features such as concatenation, minification and watching of source files."
    },
    "canvas": {
        "caption": " Canvas",
        "value": "The [Canvas HTML-Element](https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/HTML\/Element\/canvas) allows access to individual pixels to enable fast drawing applications.Its API gives access to [WebGL](WEBGL.md) for 3D graphics and to the [2D drawing API](https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/API\/CanvasRenderingContext2D)."
    },
    "chai": {
        "caption": " Chai",
        "value": "[Chai](http:\/\/chaijs.com\/) is a Behavior Driven Development (BDD) \/ Test Driven Development (TDD) assertion library for [Node.js](NODEJS.md) and the browser. It can be paired with any JavaScript testing framework, such as [Mocha](MOCHA.md).The Chai assertion library allows you to write assertions in the classical form: `assert.typeOf(foo, 'string')`, but where Chai shines is its chain-capable style which makes writing assertions very readable: `expect(foo).to.be.a('string')`."
    },
    "closure": {
        "caption": " Closure",
        "value": " not available yet"
    },
    "coffeescript": {
        "caption": " CoffeeScript",
        "value": "[CoffeeScript](http:\/\/coffeescript.org\/) is a little language that compiles into JavaScript. It is an attempt to expose the good parts of JavaScript in a simple way and friendly syntax, the golden rule being: \u201cIt\u2019s just JavaScript\u201d.The code compiles one-to-one into the equivalent JavaScript, and there is no interpretation at runtime. The compiled output is readable and pretty-printed, will work in every JavaScript runtime, and tends to run as fast or faster than the equivalent handwritten JavaScript."
    },
    "cors": {
        "caption": " CORS",
        "value": "[CORS](https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/HTTP\/Access_control_CORS) stands for Cross Origin Resource sharing. It's a way for a server to allow pages hosted on other domains (technically other origins) to make http requests to it.A web page can usually embed images, scripts, video, audio, etc. from any location it wants. However, web fonts and [AJAX](\/glossary\/AJAX.md) requests can usually only make requests to the same origin the web page is served from, because of the [same-origin policy](https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/Security\/Same-origin_policy). CORS allows a server to mark [resources](https:\/\/en.wikipedia.org\/wiki\/Web_resource) as shared with other origins, by sending an `Access-Control-Allow-Origin` [header](https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/HTTP\/Headers) in response to an [OPTIONS](http:\/\/www.w3.org\/Protocols\/rfc2616\/rfc2616-sec9.html#sec9.2) request from the browser.For information on how to set this up on your server, see: http:\/\/enable-cors.org\/server.html"
    },
    "couchdb": {
        "caption": " CouchDB",
        "value": "[Apache CouchDB](http:\/\/couchdb.apache.org\/), commonly referred to as CouchDB, is an open source database that focuses on ease of use and on being \"a database that completely embraces the web\".It is a document-oriented NoSQL database that uses JSON to store data, JavaScript as its query language using MapReduce, and HTTP for an API.CouchDB was first released in 2005 and later became an Apache project in 2008."
    },
    "currying": {
        "caption": " Currying",
        "value": "Currying section to be completed."
    },
    "d3.js": {
        "caption": " D3.js",
        "value": "[D3.js](http:\/\/d3js.org\/) is a library for manipulating documents based on data. D3 helps bringing data to life using HTML, SVG, and CSS. Its emphasis on web standards gives the full capabilities of modern browsers without tying to a proprietary framework, combining powerful visualization components and a data-driven approach to DOM manipulation."
    },
    "dom": {
        "caption": " DOM",
        "value": "[DOM (Document Object Model)](http:\/\/www.w3.org\/DOM\/) is a platform- and language-neutral interface that will allow programs and scripts to dynamically access and update the content, structure and style of documents. The document can be further processed and the results of that processing can be incorporated back into the presented page. This is an overview of DOM-related materials here at W3C and around the web."
    },
    "ecmascript (es)": {
        "caption": " ECMAScript (ES)",
        "value": "[ECMAScript](http:\/\/www.ecmascript.org\/) (shortened as *ES*) is the standardized specification of the scripting language used by JavaScript, as well as less known languages JScript and ActionScript.The versioning convention of ECMAScript has been the subject of hot debates. We often refer to ES5 (understood by most browsers), ES6 (the future of JavaScript) and even ES7 (the far future of JavaScript), but the official appellation for ES6 would actually be ES2015. The intention is to publish a version of the specification every year, making the language evolve quicker than ever. Still, most developers use ES5 and ES6 terms."
    },
    "ember": {
        "caption": " Ember",
        "value": "[Ember](http:\/\/emberjs.com\/) is an application framework based on the model-view-controller pattern. By incorporating common patterns and idioms into the framework it aims to allow developers to create ambitious web applications quickly and easily. A side-effect of these abilities (either negative or positive depending upon the readers point of view) is that a certain conformity of naming and structure within those applications is expected.A key aim of the Ember project is that backward compatibility is an important feature of the framework so that applications may be built with Ember in the knowledge that future releases of the framework will not break those applications.Ember relies upon the following [core concepts](https:\/\/guides.emberjs.com\/v2.1.0\/getting-started\/core-concepts\/): - **Templates**: Ember.js templates use [handlebars](http:\/\/handlebarsjs.com\/) style syntax and are used to integrate data with pre-written HTML. - **Models**: In Ember.js models allow the objects which the web application makes use of to be persisted. - **Components**: Components are used to define the behaviour of the user interface in Ember.js. By combining a template and some javascript a component works to produce a representation which is useful to the web application user. - **Routes**: A route loads a component, a template and, optionally, some models. The resulting HTML is then rendered to the user agent. - **The Router**: Maps a URL to a given route."
    },
    "eslint": {
        "caption": " ESLint",
        "value": "[ESLint](http:\/\/eslint.org\/) is the most recent out of the JavaScript linters out there. It was designed to be easily extensible, comes with a large number of custom rules, and is easy to install more in the form of plugins. It gives concise output, but includes the rule name by default so you always know which rules are causing the error messages.There are two very popular ready to use configuration for ESLint: [standard](https:\/\/github.com\/feross\/standard) (no semicolons) and [semistandard](https:\/\/github.com\/Flet\/semistandard)."
    },
    "express": {
        "caption": " Express",
        "value": "[Express](http:\/\/expressjs.com\/en\/index.html) is a fast, un-opinionated, minimalist web framework for [Node.js](NODEJS.md). Express provides a thin layer of fundamental web application features, without obscuring Node.js features that developers already know and like. The myriad of HTTP utility methods and middleware provided by Express makes creating a robust API quick and easy."
    },
    "falcor": {
        "caption": " Falcor",
        "value": "[Falcor](https:\/\/netflix.github.io\/falcor\/) section to be completed."
    },
    "flux": {
        "caption": " Flux",
        "value": "[Flux](https:\/\/facebook.github.io\/flux\/) is an application structure that is developed and used at Facebook to complement [React](REACT.md)\u2019s one-way data flow. With Flux, application state and logic are contained in stores."
    },
    "grunt": {
        "caption": " Grunt",
        "value": "[Grunt](http:\/\/gruntjs.com\/) is a task runner aiming at automating tedious and possibly complex tasks. The idea behind Grunt (and its peer [Gulp](GULP.md)) is to define tasks that perform (usually file-based) actions. These tasks can then be run through the command line or as part of another build step."
    },
    "gulp": {
        "caption": " Gulp",
        "value": "[Gulp](http:\/\/gulpjs.com\/) is a task runner aiming at automating tedious and possibly complex tasks. The idea behind Gulp (and its peer [Grunt](GRUNT.md)) is to define tasks that perform (usually file-based) actions. These tasks can then be run through the command line or as part of another build step. Gulp also owes its success to its very large ecosystem of plugins, making it easy to perform everyday\u2019s tasks without having to write much code."
    },
    "hapi": {
        "caption": " Hapi",
        "value": "[Hapi](http:\/\/hapijs.com\/) is a simple to use configuration-centric framework with built-in support for input validation, caching, authentication, and other essential facilities for building web and services applications. Hapi enables developers to focus on writing reusable application logic in a highly modular and prescriptive approach."
    },
    "hoisting": {
        "caption": " Hoisting",
        "value": "[\u201cHoisting\u201d](http:\/\/www.adequatelygood.com\/JavaScript-Scoping-and-Hoisting.html) is an action performed by the JavaScript interpreter that moves function declarations of the form `function foo() {}`, and variable declarations of the form `var foo;` to the top of their containing scope. During this process, only the actual declarations are moved; any value assignments are left in the place where they were written."
    },
    "iife": {
        "caption": " IIFE",
        "value": "IIFE (for *Immediately Invoked Function Expression*) is a function that gets called immediately after declaration. It is most often used to create a scoping context (a context in which all variables and function definitions are scoped).An IIFE can be written with the calling brackets (`()`) inside of the wrapping brackets:```js(function foo () { \/\/ [body]}());```Or with the calling brackets on the outside:```js(function foo () { \/\/ [body]})();```The examples above are both named IIFE\u2019s (`foo`) but it is also quite common to write them anonymously (without a function name)."
    },
    "isomorphic": {
        "caption": " Isomorphic",
        "value": "An isomorphic (or [preferably](https:\/\/medium.com\/@mjackson\/universal-javascript-4761051b7ae9) [universal](UNIVERSAL.md)) application is one whose code (in this case, JavaScript) can run both in the server and the client.The underlying idea is to allow the server to render and handle routing of an application for non-JavaScript users, while also making it fully working in the browser for fast interactions without involving traditional page reloads.In an isomorphic application, the initial request made by the web browser is processed by the server while subsequent requests are processed by the client."
    },
    "jasmine": {
        "caption": " Jasmine",
        "value": "[Jasmine](http:\/\/jasmine.github.io\/) is a behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. Jasmine is developed by [Pivotal Labs](http:\/\/pivotal.io\/labs), and has many features like [Spies](http:\/\/jasmine.github.io\/2.0\/introduction.html#section-Spies) built in. It also has support for mocking [AJAX](http:\/\/jasmine.github.io\/2.0\/ajax.html)."
    },
    "jquery": {
        "caption": " jQuery",
        "value": "[jQuery](https:\/\/jquery.com\/) is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript."
    },
    "jscs": {
        "caption": " JSCS",
        "value": "[JSCS \u2014 JavaScript Code Style](http:\/\/jscs.info\/) is different from the others in that it doesn\u2019t do anything unless you give it a configuration file or tell it to use a preset. You can download configurations from their website, so it\u2019s not a big problem, and it has a number of presets, such as the [jQuery](JQUERY.md) coding style preset and the Google preset. JSCS is a code style checker. This means it only catches issues related to code formatting, and not potential bugs or errors."
    },
    "jshint": {
        "caption": " JSHint",
        "value": "[JSHint](http:\/\/jshint.com\/) was created as a more configurable version of [JSLint](JSLINT.md) (of which it is a fork). You can configure every rule, and put them into a configuration file, which makes JSHint easy to use in bigger projects. JSHint also has good documentation for each of the rules, so you know exactly what they do."
    },
    "jslint": {
        "caption": " JSLint",
        "value": "[JSLint](http:\/\/www.jslint.com\/) is a static analysis \u201ccode quality\u201d tool for JavaScript.The downsides are that JSLint is not configurable or extensible. You can\u2019t disable many features at all, and some of them lack documentation."
    },
    "json-ld": {
        "caption": " JSON-LD ",
        "value": "[JSON-LD (JSON for Linked Data)](http:\/\/json-ld.org\/) is a lightweight Linked Data format. It is easy for humans to read and write. It is based on the already successful JSON format and provides a way to help JSON data interoperate at Web-scale. JSON-LD is an ideal data format for programming environments, REST Web services, and unstructured databases such as CouchDB and MongoDB. "
    },
    "json": {
        "caption": " JSON",
        "value": "[JSON (JavaScript Object Notation)](http:\/\/www.json.org\/) is a lightweight data-interchange format. It is widely used in [RESTful](https:\/\/en.wikipedia.org\/wiki\/Representational_state_transfer) web services. It is both easy for humans to read and write and for machines to parse and generate."
    },
    "jsx": {
        "caption": " JSX",
        "value": "[JSX](https:\/\/facebook.github.io\/jsx\/) is an XML-like syntax extension to JavaScript. It allows developers to write HTML directly in JS but needs to be transpiled before it can be used in the browser. JSX is developed at Facebook and mostly used to complement [React](REACT.md)."
    },
    "knockout": {
        "caption": " Knockout",
        "value": "[Knockout](http:\/\/knockoutjs.com\/) (shortened as *KO*) is a JavaScript library that helps developers creating rich, responsive display and editor user interfaces with a clean underlying data model. Knockout helps implementing sections of UI that update dynamically (e.g. changes depending on user\u2019s actions or when external data source gets updated) more simply and maintainably."
    },
    "localforage": {
        "caption": " LocalForage",
        "value": "[LocalForage](https:\/\/github.com\/mozilla\/localForage) section to be completed."
    },
    "lodash": {
        "caption": " Lodash",
        "value": "[Lodash](https:\/\/lodash.com\/docs) section to be completed."
    },
    "mean": {
        "caption": " MEAN",
        "value": "[MEAN](https:\/\/en.wikipedia.org\/wiki\/MEAN_(software_bundle)) is a software technology stack based on JavaScript for building web sites and web applications, and comprised of the following components: [MongoDB](https:\/\/www.mongodb.org\/), [ExpressJS](EXPRESS.md), [Node.js](NODEJS.md), and [AngularJS](ANGULARJS.md).## Notable MEAN frameworks* [MEAN.JS](http:\/\/meanjs.org) MEAN.JS - Full-Stack JavaScript Using MongoDB, Express, AngularJS, and Node.js From Creators of MEAN.IO.* [MEAN.io](http:\/\/mean.io\/) MEAN is an opinionated full-stack javascript framework - which simplifies and accelerates web application development."
    },
    "metalsmith": {
        "caption": " Metalsmith",
        "value": "[Metalsmith](http:\/\/metalsmith.io\/) is an abstraction for manipulating a directory of files. To put it simply, it is a static site generator.Metalsmith, at its core, takes files in a source directory, perform operations on them via plugins, and writes those files into a destination directory. Plugins can do virtually anything: create new files, filter out files, modify files based on some logic, etc (note this means that plugin order does matter; transformations done by one plugin can be seen and used by following plugins, making the process a modular build pipeline). The entire ecosystem of plugins is what makes Metalsmith so flexible."
    },
    "meteor": {
        "caption": " Meteor",
        "value": "[Meteor](https:\/\/www.meteor.com\/) section to be completed."
    },
    "mocha": {
        "caption": " Mocha",
        "value": "[Mocha](https:\/\/mochajs.org\/) is an extensible, open-source Javascript testing framework that runs in [Node.js](https:\/\/nodejs.org) or the browser. It supports both test-driven development (TDD) and behavior-driven development (BDD) by allowing you to use any assertion library, such as [expect.js](https:\/\/github.com\/Automattic\/expect.js), [should.js](https:\/\/github.com\/shouldjs\/should.js), and [chai](http:\/\/chaijs.com\/).Mocha supports spies, stubs and mocks through libraries, such as [Sinon](https:\/\/github.com\/sinonjs\/sinon).Mocha supports testing both synchronous and asynchronous code, including [promises](http:\/\/www.sitepoint.com\/promises-in-javascript-unit-tests-the-definitive-guide\/)."
    },
    "moment.js": {
        "caption": " Moment.js",
        "value": "[Moment.js](http:\/\/momentjs.com\/) is a library that helps developing with dates. It supports manipulation of dates, parsing or validate dates, for example based on user inputs, and display dates in certain formats. The localization allows you to display or parse user friendly dates based on a locale and will also translated months etc.Moment.js can also handle durations, queries (like checking if a date is before another date) or custom extensions.[Moment Timezone](http:\/\/momentjs.com\/timezone\/) is a extension of Moment.js wich supports to work with different timezones on dates. It can show a specific time in different timezones."
    },
    "mootools": {
        "caption": " MooTools",
        "value": "[MooTools](http:\/\/mootools.net\/) section to be completed."
    },
    "nightmare": {
        "caption": " Nightmare",
        "value": "[Nightmare](http:\/\/nightmarejs.org\/) is a high-level browser automation library.The goal is to expose just a few simple methods, and have an API that feels synchronous for each block of scripting, rather than deeply nested callbacks. It is designed for automating tasks across sites that do not have APIs.Under the cover, it uses [Electron](http:\/\/electron.atom.io\/), which is similar to [PhantomJS](PHANTOMJS.md) but faster and more modern."
    },
    "node.js": {
        "caption": " Node.js",
        "value": "[Node.js](https:\/\/nodejs.org\/en\/) is an open-source, cross-platform runtime environment for developing server-side web applications built on Chrome\u2019s [V8](#v8) JavaScript engine. These applications are written in JavaScript and can be run within the Node.js runtime.Node.js uses an event-driven, non-blocking I\/O (input\/output) model that makes it lightweight and efficient as well as optimized for real-time web applications\u2019 throughput and scalability.Its work is hosted and supported by the [Node.js Foundation](https:\/\/nodejs.org\/en\/foundation\/), a collaborative project at Linux Foundation."
    },
    "npm": {
        "caption": " npm",
        "value": "[npm](https:\/\/www.npmjs.com\/) is a utility to help publishing packages to, and installing from, an npm repository. The repository npmjs.com is the best known, and contains many useful community written and tested packages."
    },
    "nvm": {
        "caption": " nvm",
        "value": "[nvm](https:\/\/github.com\/creationix\/nvm\/blob\/master\/README.markdown) is a utility to help run multiple versions of [Node.js](NODEJS.md) (and its branches) on the same machine. It can install, list, and choose versions. It is analagous to [RVM](https:\/\/rvm.io\/) (Ruby Version Manager)."
    },
    "phantomjs": {
        "caption": " PhantomJS",
        "value": "[PhantomJS](http:\/\/phantomjs.org\/) section to be completed."
    },
    "phonegap": {
        "caption": " PhoneGap",
        "value": "[PhoneGap](http:\/\/phonegap.com\/) section to be completed."
    },
    "polymer": {
        "caption": " Polymer",
        "value": "[Polymer](https:\/\/www.polymer-project.org) section to be completed."
    },
    "promise": {
        "caption": " Promise",
        "value": "A *Promise* represents a value that may not be available yet but will eventually be resolved at some point in the future. The point is to allow developers to write asynchronous code in a more synchronous fashion, escaping from the popular [callback hell](http:\/\/callbackhell.com\/).Promises are not fully supported in all browsers yet (see [support](http:\/\/caniuse.com\/#feat=promises)), however a lot of libraries mimick their behavior to make them usable right away; [Bluebird](BLUEBIRD.md) is one of them.For more information about how promises work and when to use them, there is [complete overview](http:\/\/robotlolita.me\/2015\/11\/15\/how-do-promises-work.html)."
    },
    "prototype": {
        "caption": " Prototype",
        "value": "Prototype section to be completed."
    },
    "qunit": {
        "caption": " QUnit",
        "value": "[QUnit](http:\/\/api.qunitjs.com) section to be completed."
    },
    "ramda": {
        "caption": " Ramda",
        "value": "[Ramda](http:\/\/ramdajs.com) is a library designed specifically for a functional programming style, one that makes it easy to create functional pipelines, one that never mutates user data.* Ramda emphasizes a purer functional style. Immutability and side-effect free functions are at the heart of its design philosophy. This can help you get the job done with simple, elegant code.* Ramda functions are automatically curried. This allows you to easily build up new functions from old ones simply by not supplying the final parameters.* The parameters to Ramda functions are arranged to make it convenient for currying. The data to be operated on is generally supplied last.Ramda makes it very easy to build functions as sequences of simpler functions, each of which transforms the data and passes it along to the next."
    },
    "react": {
        "caption": " React",
        "value": "[React](https:\/\/facebook.github.io\/react\/) is a library developed and used at Facebook for building user interfaces. It can be seen as the V in MVC (Model View Controller) as it makes no assumptions about the rest of the technology stack. Using [React Native](#react-native) it can even be used to power native apps.In React you can write HTML directly in JS using an XML-like syntax called [JSX](JSX.md). JSX compiles to JS and is optional, but does make the code more expressive.Data flow in React is one-way which makes it easier to reason about and avoid mistakes. This quality can be enhanced using [Flux](FLUX.md), Facebook\u2019s complementary application architecture, or [Redux](REDUX.md) which many people see as a \u201cbetter Flux\u201d.# React Native[React Native](https:\/\/facebook.github.io\/react-native\/) section to be completed."
    },
    "redux": {
        "caption": " Redux",
        "value": "[Redux](http:\/\/redux.js.org\/) is a predictable state container for JavaScript apps, which is a fancy way of saying it controls application state and state mutations. It does so by keeping state in a store, which is the single source of truth.Redux is an alternative to [Flux](FLUX.md) and used a lot together with [React](REACT.md), but you can use it with any other view library."
    },
    "requirejs": {
        "caption": " RequireJS",
        "value": "[RequireJS](http:\/\/requirejs.org\/) section to be completed."
    },
    "rxjs": {
        "caption": " RxJS",
        "value": "[RxJS](https:\/\/github.com\/Reactive-Extensions\/RxJS) is a library in the [ReactiveX](http:\/\/reactivex.io\/) family of functional reactive programming libraries. It allows you to develop programs that respond to asynchronous events by composing sequences of observable streams.Observable streams can send zero or more \u201cdata\u201d notifications and terminate with either an \u201ccompleted\u201d or an \u201cerror\u201d notification. Subsequent streams can combine and remix these notifications into new observable patterns, making it possible to compose rich sequences of asynchronous events that clean up resources appropriately when done.RxJS is available under an Apache license. It is developed by Microsoft Open Source and numerous third-party contributors."
    },
    "sails": {
        "caption": " Sails",
        "value": "[Sails](http:\/\/sailsjs.org\/) is a web framework that makes it easy to build custom, enterprise-grade [Node.js](NODEJS.md) apps. It is designed to resemble the MVC (Model View Controller) architecture from frameworks like Ruby on Rails, but with support for the more modern, data-oriented style of web app development. It\u2019s especially good for building realtime features like chat."
    },
    "three.js": {
        "caption": " Three.js",
        "value": "[Three.js](http:\/\/threejs.org\/) the aim of the project is to create a lightweight 3D library with a very low level of complexity. The library can be used in conjunction with the HTML5 [`"
    }
} 