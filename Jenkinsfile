pipeline {
    agent any

    tools {
        nodejs 'Node18'
    }

    stages {
        stage('Clone') {
            steps {
                echo 'Récupération du projet...'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build') {
            steps {
                echo 'Build terminé avec succès.'
            }
        }
    }

    post {
        success {
            echo 'Bravo, déploiement réussi !'
        }
        failure {
            echo 'Le pipeline a échoué.'
        }
    }
}