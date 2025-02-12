pipeline {
    agent any

    environment {
        NODEJS_HOME = tool '23.7.0' // Use Node.js from Jenkins
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout Code') {
            steps {
                script {
                    // Clone the repository if not already present
                    if (!fileExists('.git')) {
                        sh 'git clone -b develop https://github.com/tushar80078/delta_server.git .'
                    }

                    // Fetch the latest changes
                    sh '''
                        git fetch origin develop
                        git reset --hard origin/develop
                        git clean -fd
                    '''
                }
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
