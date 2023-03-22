pipeline {
    agent any
    
    parameterizedSpecification : 'H/15 * * * * %name=value'

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
                bat "npx cypress run --browser ${BROWSER} --config-file=./cypress/cypress.config.ts --spec ${SPEC} --reporter mochawesome"
                bat "npm run cy-merge-reports"
                bat "npm run cy-mochawesome-report"
            }
        }
        stage('Deploying'){
            steps{
                echo 'Deploy the application'
            }
        }
}
}
