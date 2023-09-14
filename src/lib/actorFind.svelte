<script>
    let actorId;
    let name;
    let lastName;

    const Actor = {
        actorId: 24,
        firstName: "CAMERON",
        lastName: "STREEP",
        lastUpdate: "2006-02-15",
    };

    /**
     * @type {typeof Actor[]|undefined}
     */

    let actor;

    function isNullOrUndefined(obj) {
        return obj === null || obj === undefined || obj === "";
    }

    /**
     * 
     * @param obj
     * @returns {typeof Actor}
     */
    function actorMapper(obj){
        return {
            actorId : undefined,
            firstName: obj.actorName,
            lastName: obj.actorLastname,
            lastUpdate: undefined
        }
    }
    async function handleFindActor() {
        if (!isNullOrUndefined(actorId)) {
            //@ts-ignore
            actor =  [actorMapper(await fetchActorBy("", actorId))];
            return;
        }
        if (!isNullOrUndefined(name)) {
            actor = await fetchActorBy("firstName/", name);
            return;
        }
        if (!isNullOrUndefined(lastName)) {
            actor = await fetchActorBy("lastName/", lastName);
        }
    }

    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };

    /**
     * @return {Promise<typeof Actor[]>}
     */

    async function fetchActorBy(path, name) {
        const response = await fetch(
            `http://localhost:8081/actors/${path}${name}`,
            requestOptions
        );
        if (!response.ok) {
            throw new Error("Network respone was not Ok");
        }
        return response.json();
    }
</script>

<div class="find">
    <form on:submit|preventDefault={handleFindActor}>
        <h1>Find Actor</h1>
        <label for="actorId"></label>
        <input type="text" bind:value={actorId} placeholder="Actor-ID:" />
        <p>OR</p>
        <label for="actorId"></label>
        <input type="text" bind:value={name} placeholder="Actor Name:"/>
        <br />
        <label for="actorId"></label>
        <input type="text" bind:value={lastName} placeholder="Actor Lastname:" />
        <br />
        <button type="submit" on:click={handleFindActor}>Find Actor</button>
    </form>
    <div>
        {#if actor !== undefined}
            <div style="display: flex;flex-direction: column;">
                    {#each actor as ac}
                    <span>

                    name : {ac.firstName}
                    <br>                        
                        nachname : {ac.lastName}
                    </span>
                    <hr>
                        {/each}
            </div>
        {/if}
    </div>
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
