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
                sh 'npm --version'
                echo 'with docker'
            }
        }
    }
}
