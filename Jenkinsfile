pipeline {
    agent any
    tools {
        nodejs "node"
    }
    environment {
        GITHUB_TOKEN = credentials('GITHUB_TOKEN')
    }

    stages {
        stage("Test") {
            steps {
                script {
                    echo "Branch name is ${env.BRANCH_NAME}"
                    echo "Build Number is ${BUILD_NUMBER} "
                }
            }
        }

        stage("Testing Stage") {
            when {
                expression {
                    env.BRANCH_NAME.startsWith('testing')
                }
            }
            steps {
                script {
                    echo "${BUILD_NUMBER} is this"
                }
            }
        }

        stage("Deploy") {
            steps {
                script {
                    echo "Hello from deploy"
                }
            }
        }
        
        
        stage('Release') {
            steps {
                script {
                    withEnv(['GITHUB_TOKEN=${env.GITHUB_TOKEN}']) {
                        sh 'npx semantic-release'
                    }
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