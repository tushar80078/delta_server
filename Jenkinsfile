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
           sh 'sudo -S /home/ubuntu/.nvm/versions/node/v22.13.1/bin/pm2 restart delta < /dev/null'
        }
            }
        }
    }
}
