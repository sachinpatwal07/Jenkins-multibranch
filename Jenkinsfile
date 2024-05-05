// The release stage in the pipeline will run only if the test stage in the pipeline is successful
pipeline {
    agent any
    environment {
        GH_TOKEN  = credentials('GITHUB_TOKEN')
    }
    stages {
        stage('Test') {
            steps {
               echo "test successful.........."
            }
        }
        stage('Release') {
            tools {
                nodejs "node"
            }
            steps {
                sh '''
                # Run optional required steps before releasing
                npx semantic-release
                '''
            }
        }
    }
}