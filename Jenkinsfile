pipeline {
    agent any
    tools {
        nodejs "node"
    }
    environment {
        GITHUB_TOKEN = credentials('GITHUB_TOKEN')
        NPM_TOKEN = credentials('NPM_TOKEN')
    }

    stages {
        stage("Test") {
            steps {
                script {
                    echo "Branch name is ${env.BRANCH_NAME}"
                    echo "Build Number is ${BUILD_NUMBER}"
                }
            }
        }

        stage('Release') {
            steps {
                script {
                    sh "npm install"
                    sh 'npx semantic-release --ci --github-token=${GITHUB_TOKEN} --npm-token=${NPM_TOKEN}'               
                }
            }
        }
    }

    post {
        success {
            script {
                cleanWs()
            }
        }
    }
}
