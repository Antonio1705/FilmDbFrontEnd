<script>
    let firstName = null;
    let lastName = null;

    /**
     * @type {Actor|undefined}
     */

    let actor;

    function handleSubmitActor() {
        const currentDate = new Date();
        /**
         * @type {ActorCreateDto}
         */
        const Actor = {
            firstName,
            lastName,
            lastUpdate:
                currentDate.getFullYear() +
                "-" +
                (currentDate.getMonth() + 1) +
                "-" +
                currentDate.getDate(),
        };
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Actor),
        };

        function saveActor() {
            return fetch("http://localhost:8081/actors", requestOptions).then(
                (response) => {
                    if (!response.ok) {
                        throw new Error("Network respone was not Ok");
                    }
                    return response.json();
                }
            );
        }

        saveActor()
            .then((data) => {
                actor = data;
            })
            .catch((error) => {
                console.error(error);
            });
    }
</script>

<div class="save">
    <form on:submit|preventDefault={handleSubmitActor}>
        <h1>Create Actors</h1>

        <input type="text" bind:value={firstName} placeholder="Name" />

        <br />

        <input type="text" bind:value={lastName} placeholder="Last Name" />
        <br />
        <button> submit </button>
    </form>
</div>

<div>
    {#if actor !== undefined}
        <div style="display: flex;flex-direction: column;">
            {actor.firstName}
            {actor.lastName}
            
        </div>
    {/if}
</div>




<style>
    button {
        padding: 0.4cm;
        border-radius: 2cm;
        border-color: rgb(255, 238, 47);
        border-width: 3px;
        background-color: rgb(192, 198, 239);
    }
</style>
