'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development'

if (require.main === module) {
    main({ argv: process.argv })
}

function main(options) {
    const argv = options.argv
    const name = argv[2]
    
    console.info(`NODE_ENV : ${NODE_ENV}`)

    if (NODE_ENV === 'development') {
        console.log('Hello, world!')
    } else if (NODE_ENV === 'production') {
        console.log('Hello, ' + name + '!')
    } else {
        throw new Error('invalid env')
    }
}