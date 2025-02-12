pipeline {
    agent any

    environment {
        NODEJS_HOME = tool '23.7.0' // Use Node.js from Jenkins
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout Code') {
            steps {
                 git branch: 'develop', 
                    credentialsId: 'tushar2281', 
                    url: 'https://github.com/tushar80078/delta_server.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Start Server') {
            steps {
                script {
                    // Stop any running process
                    sh "pkill -f 'node index.js' || echo 'No process found'"
                    // Start the backend server
                    sh 'nohup npm start > server.log 2>&1 &'
                }
            }
        }
    }
}
