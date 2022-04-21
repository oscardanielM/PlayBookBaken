const repo = {
  name: "LaunchX",
  author: "oscarmtz",
  language: "JavaScript",
  numberOfCommits: 100,
  stars: 1,
  forks: 2,
  issues_open: 10,
  issues_close: 10,
  getTotalIssues: function () {
    return this.issues_open + this.issues_close;
  },
  getGeneralInfo: function () {
    return `This repository ${this.name} was created by ${this.author}`;
  },
};

console.log("Nombre del repo:" + repo.name);
console.log("Issues totales: " + repo.getTotalIssues());
console.log(repo.getGeneralInfo());

const Issue = {
  title: "Issue New",
  repositoryNameAssociated: repo.author,
  status: true,
  numberOfComments: 2,
  labels: "",
  author: "oscarmtz",
  dateCreated: Date.now,
  lastUpdated: "01/04/2022",
  getTitleAndAuthor: function () {
    return `El autor es: ${this.author}`;
  },
  getGeneralInfo: function () {
    return `El autor es: ${this.author}, issue: ${this.title} creado el dia ${this.dateCreated}`;
  },
};

console.log("Nombre del repo:" + Issue.title);
console.log("Info issue: " + Issue.getTitleAndAuthor());
console.log(Issue.getGeneralInfo());

const PullRequest = {
  title: "New pull",
  branchName: "branch pruebas",
  dateCreated: Date.now,
  status: false,
  repositoryNameAssociated: repo.author,
  getStatus: function () {
    return `Status : ${this.status}`;
  },
  getTitleAndAutor: function () {
    return `New pull de: ${this.repositoryNameAssociated}, nombre: ${this.title} de la rama ${this.branchName}`;
  },
};

console.log("PullRequest " + PullRequest.title);
console.log(PullRequest.getTitleAndAutor());
console.log(PullRequest.getStatus());

const Twitter = {
  user: {
    usuario: "oscarmtz",
    edad: 25,
    sexo: "Masculino",
    correo: "oscarskapee@gmail.com",
  },
  trending_topic: "Desarrollo de sofware",
  hashtag: "todosSomosExplores",
};

const Facebook = {
  user: {
    usuario: "oscarmtz",
    edad: 25,
    sexo: "Masculino",
    correo: "oscarskapee@gmail.com",
  },
  post: "Desarrollo de sofware",
  biography: {
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
};

const Uber = {
  profile : {
    user:"oscarmtz52",
    name:"Oscar Martinez"
  },
  travel:{
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
