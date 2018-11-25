const crew = require('serenity-js/lib/stage_crew');

var _            = require('lodash'),
    path         = require('path'),
    glob         = require('glob'),
    protractor   = require.resolve('protractor'),
    node_modules = protractor.substring(0, protractor.lastIndexOf('node_modules') + 12);
    seleniumJar  = glob.sync(`${node_modules}/protractor/**/selenium-server-standalone-*.jar`).pop();

exports.config = {

    seleniumServerJar: seleniumJar,

    baseUrl: 'localhost:3000',

    allScriptsTimeout: 110000,

    framework: 'custom',
    frameworkPath: require.resolve('serenity-js'),
    serenity: {
        dialect: 'cucumber',
        crew: [
            crew.serenityBDDReporter(),
            // outputDirectory: `${process.cwd()}/target/site/serenity/`
            // ,
            // crew.consoleReporter(),
            // crew.Photographer.who(_ => _
            //     .takesPhotosOf(_.Failures)
            //     .takesPhotosWhen(_.Activity_Finishes)
            // )
        ]
    },

    specs: [ 'features/**/*.feature' ],
    cucumberOpts: {
        require:    [ 'features/**/*.ts' ],
        format:     'pretty',
        compiler:   'ts:ts-node/register'
    },

    chromeOnly: true,
    directConnect: true,

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                '--disable-infobars'
                // '--incognito',
                // '--disable-extensions',
                // '--show-fps-counter=true'
            ]
        }
        // ,

        // execute tests using 2 browsers running in parallel
        // shardTestFiles: true,
        // maxInstances: 2
    },

    restartBrowserBetweenTests: false
};
