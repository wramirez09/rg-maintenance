/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'sass')],
    },
}


module.exports = nextConfig
