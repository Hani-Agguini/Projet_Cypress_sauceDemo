pipeline {
    agent {
        docker {
            image 'cypress/base'
            args '-u root --entrypoint='
        }
    }
    stages {
        stage('Check version nodejs') {
            steps {
                sh 'npm --version'
            }
        }
        stage('install dep') {
            steps {
                sh '''
                        npm install
                        chmod +x node_modules/cypress/bin/cypress
                        npx cypress --version
                    '''
            }
        }
        stage('Lancer le test') {
            steps {
                sh '''
                    npx cypress run
                '''
            }
        }
    }
    // post {
    //     // success {
    //     //     // 1. Archive le rapport (téléchargeable depuis la page du build)
    //     //     archiveArtifacts artifacts: 'reports/*.html', allowEmptyArchive: true
    //     // }
    // }
}