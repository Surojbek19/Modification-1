module.exports = {
    apps: [{
        name: "EcoFlora",
        cwd: "./",
        script: "./dist/server.js",
        watch: false,
        env: {
            NODE_ENV: "development",
        },
        env_production: {
            NODE_ENV: "production",
        },
        instances: 1,
        exec_mode: "cluster"
    }]
} 