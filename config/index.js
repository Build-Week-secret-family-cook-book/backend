module.exports = {
JWT_SECRET: 'shh',
BRCYPT_ROUNDS: 8,
PORT: process.env.PORT || 5432,
NODE_ENV: process.env.NODE_END|| 'development',
DEV_DATABASE_URL: `postgresql://postgres:September0907.@localhost:5432/secretfamilycookbook`,
TESTING_DATABASE_URL: `postgresql://postgres:September0907.@localhost:5432/secretfamilycookbook-testing`,
SEED_PASSWORD: '1234'
}