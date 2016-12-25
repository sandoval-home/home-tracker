/* jshint node: true */

module.exports = function(deployTarget) {
    var ENV = {
        build: {},

        s3: {
            accessKeyId: process.env.AWS_KEY,
            secretAccessKey: process.env.AWS_SECRET,
            region: 'us-east-1',
            bucket: process.env.S3_BUCKET
        },

        's3-index': {
            accessKeyId: process.env.AWS_KEY,
            secretAccessKey: process.env.AWS_SECRET,
            region: 'us-east-1',
            bucket: process.env.S3_BUCKET
        },

        'revision-data': {
            type: 'git-commit'
        },

        cloudfront: {
            accessKeyId: process.env.AWS_KEY,
            secretAccessKey: process.env.AWS_SECRET,
            distribution: process.env.CLOUDFRONT_DISTRIBUTION,
            objectPaths: ['/*']
        },

        // include other plugin configuration that applies to all deploy targets here
    };

    if (deployTarget === 'development') {
        ENV.build.environment = 'development';
        ENV.build.outputPath = 'dev/';

        // configure other plugins for development deploy target here
    }

    if (deployTarget === 'test') {
        ENV.build.environment = 'test';
        ENV.build.outputPath = 'test/';

        // configure other plugins for staging deploy target here
    }

    if (deployTarget === 'production') {
        ENV.build.environment = 'production';
        ENV.build.outputPath = 'prod/';

        // configure other plugins for production deploy target here
    }

    // Note: if you need to build some configuration asynchronously, you can return
    // a promise that resolves with the ENV object instead of returning the
    // ENV object synchronously.
    return ENV;

};
