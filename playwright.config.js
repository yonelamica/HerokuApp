const {PlaywrightTestConfig} = require('@playwright/test');


const config = {
    retries: 0,
    timeout: 30000,
    reporter: [
    //['html'],
    ['./reporter.js']
],

    use: {
        baseURL: "https://the-internet.herokuapp.com/",
        headless: true,
        viewport: {width: 1280, height: 720},
        video: "off",
        screenshot: "only-on-failure",
    },
    projects: [
        {name: "Chrome",
            use: {
                browserName: "chromium"}
            },
          /*  
        {name: "firefox",
            use: {
                browserName: "firefox"}
            },
        {name: "edge",
            use: {
                browserName: "chromium",}
            },
            */

    ]

}

module.exports = config;