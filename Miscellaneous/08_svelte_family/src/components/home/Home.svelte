<script>
    import { fridgeMessages } from "../../stores/fridgeStore.js";
    
</script>

<slot></slot>

{#each $fridgeMessages as fridgeMessage}
    <p>{fridgeMessage}</p>
{/each}

<h1>Home</h1>

<h2 id="welcome-mat">Velkommen til måtten</h2>

<style>
    #welcome-mat {
        background-color: blue;
        padding: 2em;

    }
</style>