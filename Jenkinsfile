pipeline {
    agent any

    stages {
        stage('w docker') {
            agent{
                docker{
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    ls -la
                '''
            }
        }
        stage('build') {
            agent{
                docker{
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps{
                sh '''
                    echo "build start"
                    echo "node version"
                    node --version
                    npm --version
                    echo "Installing dependencies..."
                    npm install
                    npm ci
                    echo "start building..."
                    npm run build
                    ls -la
                '''
            }
        }
    }
    post{
        success{
            echo 'pipeline completed successfully'
        }
        failure{
            echo 'pipeline failed'
        }
    }
}
