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

        stage('Release') {
            steps {
                script {
                    sh "npm install"
                    sh 'npx semantic-release --ci --github-token=${GITHUB_TOKEN}'               
                    }
            }
        }

          stage('Build Docker Image') {
            steps {
                script {
                    // Get the version from the package.json or from the output of semantic release
                    def version = sh(script: 'npx semantic-release --dry-run | grep "Release version" | cut -d " " -f 3', returnStdout: true).trim()
                    echo "Version is ${version}"

                    // Print the version number indicating it is the build version
                    echo "This is the build version: ${version}"

                    // Build and tag the Docker image
                    // sh "docker build -t myApp:${version} ."
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
