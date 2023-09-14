 <script>
    import ActorSave from "./lib/actorSave.svelte";
    import ActorFind from "./lib/actorFind.svelte";
    import FilmFind from "./lib/filmFind.svelte";
    import FilmSave from "./lib/filmSave.svelte";
    let actorIsPresent = false;
    let filmIsPresent = false;

    let isFindActor = " ";

    let isFindFilm = " ";
    

    function handleStartClick(){
      actorIsPresent = !actorIsPresent;
      console.log(isFindActor+"<<<<<");
    }

    function handleFilmStartClick(){
      filmIsPresent = !filmIsPresent;

    }
    

 </script>



  <h1 class="title">Start Seite</h1>

  <br>


  <div class="actorsView">
    <div style="display: flex; align-items: center;">
      <h2 style="margin-right: 10px;">Actor</h2>
      <br>
      <button on:click={handleStartClick}>Actors</button>
      <input type="radio" value="create" bind:group={isFindActor}>
      <label for="create">Create</label>
      <input type="radio" value="find" bind:group={isFindActor}>
      <label for="find">find</label>
    </div>

    <div class="actorsDiv">
      {#if actorIsPresent === true && isFindActor==="find"}
        <ActorFind>
          
        </ActorFind>  
      {/if}

      {#if actorIsPresent === true && isFindActor==="create"}
        <ActorSave>
          
        </ActorSave>  
      {/if}
    </div>
</div>  


    

  
    <div class= "filmViews" style="display: flex; flex-direction: column; align-items: center;"></div>
    

      <h2 style="margin-right: 10px;">Film</h2>
      <button on:click={handleFilmStartClick}>Film</button>
      <input type="radio" value="create" bind:group={isFindFilm}>
      <label for="create">create</label>
      <input type="radio" value="find" bind:group={isFindFilm}>
      <label for="find">find</label>
    
    

      <div class="filmDiv">
        {#if filmIsPresent === true && isFindFilm==="find"}
          <FilmFind>
            
          </FilmFind>  
        {/if}

        {#if filmIsPresent === true && isFindFilm==="create"}
          <FilmSave>
            
          </FilmSave>  
        {/if}
      </div>
    
  

<style>

      #app{
       
        background-image: url("./lib/background.jpg");
      }  
      button{
        padding: 0.4cm;
        border-radius: 2cm;
        border-color: greenyellow;
        border-width: 5px;
        background-color: rgb(239, 235, 235);   
    }

    body{
      
      /* width: 100%; */
      /* height: 100%; */


    }
    html{
      width: 100%;
      height: 100%;
    }

    

    .actorsDiv{
      display: block;
      justify-content: left;
      align-items: left;
      margin: 10px;
      padding: 5px;
      border: 1px solid #ccc;
      background-color: #f2f2f2;
      opacity: 0.9;
    }

    .filmDiv{
      display: block;
      justify-content: left;
      align-items: left;
      margin: 10px;
      padding: 5px;
      border: 1px solid #ccc;
      background-color: #f2f2f2;
      opacity: 0.9;
    }
    
    
    .title{
      background-color: #ccc;
      border: 2px solid #ccc;
      border-radius: 5cm;
    }
</style>
