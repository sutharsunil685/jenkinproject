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
                    node --version
                    echo 'with docker'
                    npm --version
                    npm ci
                    npm run build
                    ls -la
                '''
                sh ''
            }
        }
    }
}
