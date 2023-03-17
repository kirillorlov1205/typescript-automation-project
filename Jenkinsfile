pipeline {
    agent any

    parameters {
        string(name: 'SPEC', defaultValue: 'cypress/e2e/**/*.cy.ts', description: 'Enter the script path that you want to execute')
        choice(name: 'BROWSER', choices: ['chrome','firefox'], description: 'Choice the browser where you want to execute your scripts')
    }

    options {
        ansiColor('xterm')
    }

    stages {
        stage('Building'){
            steps{
                echo "Building the application"
            }
            
        }
        stage('Testing'){
            steps{
                bat "npm i"
                bat "npx cy-cleanup"
                bat "npx cypress run --browser ${BROWSER} --config-file=./cypress/cypress.config.ts --spec ${SPEC} --reporter mochawesome"
                bat "npx cy-merge-reports"
                bat "npx cy-mochawesome-report"
            }
        }
        stage('Deploying'){
            steps{
                echo 'Deploy the application'
            }
        }
    }

    post{
        always {
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }
}