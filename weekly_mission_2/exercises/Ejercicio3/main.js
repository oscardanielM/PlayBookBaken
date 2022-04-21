class repo {
    constructor(){
        this.name= "LaunchX"
        this.author= "oscarmtz"
        this.language= "JavaScript"
        this.numberOfCommits= 100
        this.stars= 1
        this.forks= 2
        this.issues_open= 10
        this.issues_close= 10
    }

    get getAuthor() {
        return `Authoe ${this.author}`;
    }

    get getName() {
        return `${this.name}`;
      }

    get getGeneralInfo() {
      return `This repository ${this.name} was created by ${this.author}`;
    }
  };
  
  const newrepo = new repo()
  console.log("Nombre del repo:" + newrepo.getAuthor);
  console.log("Issues totales: " + newrepo.getTotalIssues);
  console.log(newrepo.getGeneralInfo);
  
  class Issue{
    constructor(RepoNameAsosiado){
        this.title = "Issue New",
        this.repositoryNameAssociated = RepoNameAsosiado,
        this.status = true,
        this.numberOfComments = 2,
        this.labels = "",
        this.author = "oscarmtz",
        this.dateCreated = Date.now,
        this.lastUpdated = "01/04/2022"
    }

    get getTitle() {
        return `${this.title}`;
    }

    get Author() {
        return `${this.author}`;
    }
    get getTitleAndAuthor() {
      return `El autor es: ${this.author}`;
    }

    get getGeneralInfo() {
      return `El autor es: ${this.author}, issue: ${this.title} creado el dia ${this.dateCreated}`;
    }
  };
  const newIssue = new Issue(newrepo.getName)
  console.log("Nombre del repo:" + newIssue.getTitle);
  console.log("Info issue: " + newIssue.getTitleAndAuthor);
  console.log(newIssue.getGeneralInfo);
  
  class PullRequest {
    constructor(Autor){
        this.title = "New pull",
        this.branchName = "branch pruebas",
        this.dateCreated = Date.now,
        this.status = false,
        this.repositoryNameAssociated = Autor
    }

    get getTitle() {
        return `${this.title}`;
      }

    get getStatus() {
      return `Status : ${this.status}`;
    }

    get getTitleAndAutor() {
      return `New pull de: ${this.repositoryNameAssociated}, nombre: ${this.title} de la rama ${this.branchName}`;
    }
  };

  const newPullRequest = new PullRequest(newIssue.Author)
  console.log("PullRequest " + newPullRequest.getTitle);
  console.log(newPullRequest.getTitleAndAutor);
  console.log(newPullRequest.getStatus);
  
  class Twitter{
    constructor(){
        this.user = {
            usuario : "oscarmtz",
            edad : 25,
            sexo : "Masculino",
            correo : "oscarskapee@gmail.com",
          }
        this.trending_topic = "Desarrollo de sofware"
        this.hashtag = "todosSomosExplores"
    }
  };
  
  class Facebook {
    constructor(){
        this.user = {
            usuario: "oscarmtz",
            edad: 25,
            sexo: "Masculino",
            correo: "oscarskapee@gmail.com",
          }
        this.post = "Desarrollo de sofware",
        this.biography = {
            gustos: {
              peliculas: [
                {
                  pelicula: "La vida es bella",
                  calificacion: 10,
                },
                {
                  pelicula: "El cadaver de la novia",
                  calificacion: 10,
                }
              ]
            }
          }
    }
  };
  
  class Uber{
    constructor(){
        this.profile  = {
            user:"oscarmtz52",
            name:"Oscar Martinez"
          }
        this.travel ={
            viajes:[{
              destino:"Lago zirahuen 98",
              costo: 109,
              stars:1,
              fecha: "12/03/2022"
            },
            {
              destino:"Central del Norte",
              costo: 200,
              stars:0,
              fecha: "12/04/2022"
            },
            {
              destino:"Lago zirahuen 98",
              costo: 98,
              stars:0,
              fecha: "18/04/2022"
            }]
          }
    }
  }
  