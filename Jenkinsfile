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

        // stage('Install Dependencies') {
        //     steps {
        //         sh 'npm install'
        //     }
        // }

        stage('Restart Server with PM2') {
            steps {
                script {
                    sh '''
                        pm2 restart npm || pm2 start npm --name "npm" -- start
                        pm2 save
                    '''
                }
            }
        }
    }
}
