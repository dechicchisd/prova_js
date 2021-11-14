module.exports = {
    preset: 'ts-jest',
    setupFilesAfterEnv: ['./src/config/tests.ts'],
    modulePathIgnorePatterns: ['<rootDir>/dist'],
    coverageThreshold: {
        global: {
            statements: 80,
            branches: 80,
            functions: 80,
            lines: 80,
        },
    },
}
