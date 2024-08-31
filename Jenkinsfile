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
            steps{
                sh '''
                    node --version
                    echo 'with docker'
                    npm --version
                    npm install
                    npm ci
                    npm run build
                    ls -la
                '''
            }
        }
    }
}
