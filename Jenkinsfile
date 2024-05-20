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

                    // Run semantic release and capture the output
                    def releaseOutput = sh(script: 'npx semantic-release --ci --github-token=${GITHUB_TOKEN}', returnStdout: true).trim()

                    // Print the full output (useful for debugging or verification)
                    echo releaseOutput

                    // Extract the version number using a regular expression
                    def versionMatcher = releaseOutput =~ /.*?The next release version is (\d+\.\d+\.\d+).*/
                    if (versionMatcher) {
                        def newVersion = versionMatcher[0][1]
                        echo "New version: ${newVersion}"
                    } else {
                        echo "Failed to extract version number from semantic release output."
                    }  }
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
