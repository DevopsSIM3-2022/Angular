pipeline{
    agent any

    tools {
        maven 'M2_HOME'
    }


	stages {

    stage('Getting project from Git') {
            steps{
      			checkout([$class: 'GitSCM', branches: [[name: '*/Aziz']],
			extensions: [],
			userRemoteConfigs: [[url: 'https://github.com/DevopsSIM3-2022/Angular.git']]])
            }
        }


        stage('initialising the project') {
            steps{
                sh "npm install"
            }
        }

        stage('Artifact Construction') {
            steps{
                sh "ng build"
            }
        }

       

        stage('Build Docker Image') {
                      steps {
                          script {
                            sh 'docker build -t status404/angular-app:latest .'
                          }
                      }
                  }

        stage('login dockerhub') {
                    steps {
                        sh 'docker login -u status404 -p dckr_pat_FuLeu62QKYn3b7vH1kumw_vwrTk'
                        }
		}
	    
	    stage('Push Docker Image') {
                    steps {
                        sh 'docker push status404/angular-app:latest'
                        }
		}

        stage('Run Angular Container') {
                 steps {
                    script {
                        sh 'docker compose up -d'
                        }
                      }
                  }

}

}
