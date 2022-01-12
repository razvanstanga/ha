module.exports = {
    apps : [{
        name   : "HA App",
        script : "/ha/app/start_app.js",
        cwd: "/ha/app/",
        watch: true,
        ignore_watch : ["node_modules", "config.json", "config.json.backup"],
        env_production: {
            NODE_ENV: "production"
        },
        env_development: {
            NODE_ENV: "development"
        },
        version: "1.0.0",
    }, {
        name   : "HA WiFi",
        script : "/ha/app/start_wifi.js",
        cwd: "/ha/app/",
        watch: true,
        ignore_watch : ["node_modules", "config.json", "config.json.backup"],
        env_production: {
            NODE_ENV: "production"
        },
        env_development: {
            NODE_ENV: "development"
        },
        version: "1.0.0",
    }]
}
