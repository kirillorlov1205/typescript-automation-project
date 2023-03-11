pipeline {
    agent any

    parameters {
        choice(name: 'BROWSER', choices: ['chrome','firefox'], description: 'Choice the browser where you want to execure your scripts')
        string(name: 'SPEC', defaultValue: 'cypress/e2e/**', description: 'Enter the script path that you want to execure')
    }

    options {
        ansiColor('xterm')
    }

    stages {
        stage('Building'){
            echo 'Building the application'
        }
        stage('Testing'){
            steps{
                bat 'npm i'
                bat 'npx cypress run --browser ${BROWSER} --config-file=./cypress/cypress.config.ts --spec ${SPEC}'
            }
        }
        stage('Deploying'){
            echo 'Deploy the application'
        }
    }

    post{
        always {
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }
}

