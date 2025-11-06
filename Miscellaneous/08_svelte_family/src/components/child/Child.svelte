<script>
    import { fridgeMessages } from "../../stores/fridgeStore.js";

    const { name, familySheep, isGirl, onShowLove, onEatCookie } = $props();

    let fridgeMessageInput = $state("");

    function handleWriteFridgeMessage ()    {
        fridgeMessages.set([...$fridgeMessages, fridgeMessageInput]);
        fridgeMessageInput = "";
    }

</script>

<div 
    class={familySheep || "not-a-sheep"}
    class:is-girl={isGirl}
    class:is-boy={!isGirl}
>
    <h3>{name}</h3>
</div>

<button onclick={() => onShowLove(name)}> Show your parent some love</button>

<button onclick={onEatCookie()}>Eat cookie</button>

<input bind:value={fridgeMessageInput}>
<button onclick={handleWriteFridgeMessage}>Write a fridge message</button>


<style>
    .black-sheep {
        background-color: crimson;
    }

    .grey-sheep {
        background-color: grey;
    }

    .not-a-sheep {
        background-color: yellowgreen;
    }

    .is-girl {
        border: 0.5em solid rebeccapurple
    }

    .is-boy {
        border: 0.5em solid chartreuse
    }
</style>