pipeline{
    agent any

    tools {
        maven 'M2_HOME'
    }


	stages {

    stage('Getting project from Git') {
            steps{
      			checkout([$class: 'GitSCM', branches: [[name: '*/Sinda']],
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
                            sh 'docker build -t 07495014/angular-app:latest .'
                          }
                      }
                  }

        stage('login dockerhub') {
                    steps {
                        sh 'docker login -u 07495014 -p dckr_pat_IGzrU64ntM8f_dw9HPZ9Wh0OcMk'
                        }
		}
	    
	    stage('Push Docker Image') {
                    steps {
                        sh 'docker push 07495014/angular-app:latest'
                        }
		}

        stage('Run Angular Container') {
                 steps {
                    script {
                        sh 'docker-compose up -d'
                        }
                      }
                  }

}

}