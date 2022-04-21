const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
   ]

   console.log("Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH");
   console.log(explorers.forEach(explorer => console.log(explorer.name)));
   console.log("____________________________");

   console.log("Imprime el stack de cada explorer, usa FOR EACH");
   console.log(explorers.forEach(explorer => console.log(explorer.stack[0] )));
   console.log("____________________________");

   console.log("Crea una nueva lista con las listas de stacks de cada explorer, usa MAP");
   const stacks = explorers.map((explorer) => {
        if(explorer.stack[0] != undefined){
            return explorer.stack[0];
        }
   })
   console.log(stacks);
   console.log("____________________________");

   console.log("Obtén la lista de explorers que tengan en su stack 'js', usa FILTER (para validar un elemento en un lista se usa el método includes)");
   explorers.filter((explorer) => {
        if(explorer.stack[0].includes("js")){
            console.log(explorer.name);
        }
   })
   console.log("____________________________");

   console.log("Busca el primer explorer que sea de la CDMX, usa FIND");
   console.log(explorers.find(explorer => explorer.city == "CDMX").name)
   console.log("____________________________");

   console.log("Obtén la suma de todos los exercises_completed, usa REDUCE");
   const exercises_completed = explorers.map((explorer) => {
        if(explorer.exercises_completed != undefined){
            return explorer.exercises_completed;
        }
    });
    const restante = exercises_completed.reduce((ant, val) => ant + val, 0);
   console.log(restante)
   console.log("____________________________");

   console.log("Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME");
   console.log(explorers.some(explorer => explorer.missions.frontend.exercisesFinished == true))
   console.log("____________________________");

   console.log("Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.");
   console.log(explorers.every(explorer => explorer.missions.onboarding.isFinished == true))
   console.log("____________________________");


