module.exports = {
    verbose: true,
    moduleFileExtensions: [
        "js",
        "json",
        "vue"
    ],
    transform: { "^.+\.js$": "babel-jest", ".*\.(vue)$": "@vue/vue3-jest" },
    testEnvironment: "jsdom",
    collectCoverage: true,
    collectCoverageFrom: [
        "src/components/*.{js,vue}",
        "!**/node_modules/**"
    ],
    coverageReporters: [
        "html",
        "text-summary"
    ],
}