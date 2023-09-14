interface Actor {
    id:number,
    firstName:string,
    lastName:string, 
    lastUpdate:string
}

type ActorCreateDto = Omit<Actor,"id">


interface Film{
    length: number,
    title: string,
    releaseYear: string,
    language_Name: string
    description : string

}


  

 