<script>
  import Child from "../child/Child.svelte";

    const { parentName, children } = $props();

    let loveHistory = $state([
        { 
            name: "self-love",
            love: "💞"
    }]);

    function handleShowLove(childsName) {
        loveHistory.push({
            name: childsName,
            love: "💞"
        });
    }

    let cookiejar = $state(["🍪","🍪","🍪","🍪","🍪","🍪","🍪"]);

    function handleEatCookie() {
        cookiejar.pop();

        if (cookiejar.length === 0) {
            cookiejar = ["🍪","🍪","🍪","🍪","🍪","🍪","🍪"];
        };
    }
</script>

<h2>{parentName}</h2>

{#each loveHistory as love}
    <span>{love.name}: {love.love}</span>
{/each}

{#each cookiejar as cookie}
    <span>{cookie}</span>
{/each}

{#each children as child (child.name)}
    <Child {...child} onShowLove={handleShowLove} onEatCookie={handleEatCookie}/>
{/each}