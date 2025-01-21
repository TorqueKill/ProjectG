<script>
    export let games = ['Poker', 'Blackjack', 'Roulette'];
</script>

<h1>Welcome to the Casino</h1>
<ul>
{#each games as game}
    <li>{game}</li>
{/each}
</ul>

<style>
h1 {
    color: #444;
}
</style>
