<script>
    let id;
    let title;

    /**
     * @type {Film}
     */
    let film;

    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    
    async function fetchFilmBy(path,value){
         const respone = await fetch(`http://localhost:8081/films/${path}${value}`,requestOptions)
         if(!respone.ok){
            throw new Error("Network Respone was not Ok")
         }
         return respone.json();
    }

    function isNotNullOrUndefinded(obj){
        return obj !== null && obj !== undefined && obj !== "";
    }

    async function handleFindFilm(){
        if(isNotNullOrUndefinded(id)){
            
            film = await fetchFilmBy("",id);
            return;
        }
        if(isNotNullOrUndefinded(title)){
            film = await fetchFilmBy("title/",title);
            return;
        }

  
    }
    
</script>

<div>
    <form on:submit|preventDefault={handleFindFilm}>
        <h1>Find Film</h1>
        
        <input type="text" bind:value={id} placeholder="ID-Film">
        <br>

        <p>OR</p>

        <br>
        <input type="text" bind:value={title} placeholder="Title">
        <br>

        <button>Submit</button>
    </form>
</div>
<div>
    {#if film !== undefined}
        <div>Film title : {film.title}
            <br>
            ReleaseYear : {film.releaseYear}
            <br>
            Language : {film.language_Name}
        </div>
        
        
    {/if}
    
</div>


<style>
    button{
        padding: 0.4cm;
        border-radius:2cm ;
        border-color: rgb(255, 238, 47);
        border-width: 3px;
        background-color: rgb(192, 198, 239);   
    }
    
</style>