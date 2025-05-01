pipeline {
    agent any

    environment {
        IMAGE_NAME = "gupshup-coffee"
        CONTAINER_NAME = "gupshup-coffee"
        COMPOSE_FILE = "docker-compose.yml"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/kundan1729/GupShup_Coffee.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    bat 'docker-compose build'
                }
            }
        }

        stage('Stop Existing Container') {
            steps {
                script {
                    bat '''
                        IF EXIST $(docker ps -q -f name=%CONTAINER_NAME%) (
                            docker stop %CONTAINER_NAME%
                            docker rm %CONTAINER_NAME%
                        )
                    '''
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                script {
                    bat 'docker-compose up -d'
                }
            }
        }

        stage('Ngrok Tunnel (Optional)') {
            when {
                expression { fileExists('ngrok.yml') }
            }
            steps {
                script {
                    bat 'ngrok http 3000 &'
                    echo 'Ngrok tunnel started'
                }
            }
        }
    }

    post {
        success {
            echo "✅ GupShup_Coffee deployed successfully!"
        }
        failure {
            echo "❌ Deployment failed. Check the logs for details."
        }
    }
}
