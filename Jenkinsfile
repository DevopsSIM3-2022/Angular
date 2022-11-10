pipeline{
    agent any
    
    stages {

        stage('Getting project from Git') {
            steps{
      			checkout([$class: 'GitSCM', branches: [[name: '*/Aziz']],
			extensions: [],
			userRemoteConfigs: [[url: 'https://github.com/DevopsSIM3-2022/Angular.git']]])
            }
        }

        stage('Build : From dockerfile') {
            steps{
                script {
                	sh "docker build --rm -f Dockerfile -t angular:v1 angular"
                }
            }
        }


        stage('Run : docker image') {
            steps{
                	sh "docker run --rm -d -p 80:80 angular:v1"
            }
        }




        stage('Build Docker Image') {
                      steps {
                          script {
                            sh 'docker build -t status404/Angular-app:latest .'
                          }
                      }
                  }

        stage('login dockerhub') {
                    steps {
                        sh 'echo dckr_pat_FuLeu62QKYn3b7vH1kumw_vwrTk | docker login -u status404 --password-stdin'
                        }
		}
	    
	    stage('Push Docker Image') {
                    steps {
                        sh 'docker push status404/Angular:latest'
                        }
		}
		   
     
    }
	    
    post {
        always {
            cleanWs()
        }
    }
	
}