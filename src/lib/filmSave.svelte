<script>
    import { flip } from "svelte/animate";

    const currentDate = new Date();

    let title = "";
    let description;
    let releaseYear;
    let duration;

    /**
     * @type {Film}
     */

    let film = {};



       /**
     * @type {Film}
     */
    let newFilm = {};





    function handleSaveFilm(){
       film.title = title;
       film.releaseYear = releaseYear;
       film.length = duration;
       film.description = description;

       const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(film),
        };

        function saveFilm() {
            return fetch("http://localhost:8081/films", requestOptions).then(
                (response) => {
                    if (!response.ok) {
                        throw new Error("Network respone was not Ok");
                    }
                    return response.json();
                }
            );
        }

        saveFilm()
            .then((data) => {
                newFilm = data;
            })
            .catch((error) => {
                console.error(error);
            });



    }

</script>

<div >
    <form on:submit|preventDefault={handleSaveFilm}>
        <h1>Create Film</h1>

        

        <input type="text" bind:value={title} placeholder="Title">
        <br>
        <input type="description" bind:value={description} placeholder="Description">
        <br>
        <input type="text" bind:value={releaseYear} placeholder="RelaesYear">
        <br>
        <input type="number" bind:value={duration} placeholder="Duration">
        <br>
        
        <button >
            submit
        </button>

    </form>
</div>
<div>
    {#if newFilm.title !== undefined}
        <div style="display: flex;flex-direction: column;">
            title : {newFilm.title}
            <br>
            releaseYear : {newFilm.releaseYear}
            
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