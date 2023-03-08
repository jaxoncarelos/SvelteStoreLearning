<script>
    import { Todos } from '../../stores/stores'
    import {fade} from 'svelte/transition'
    let todos
    Todos.subscribe(value => {todos = value})

    function updateValues(idx)
    {
        Todos.update(vals => {
            const filteredVals = vals.filter(item => item.idx != idx)

            return filteredVals
        })
        
    }
</script>
<div class="wrapper">
    {#each todos as todo (todo.idx)}
        <div transition:fade class="each">
            <h1>{todo.plan}</h1>
            <input type="checkbox" on:click={() => {updateValues(todo.idx)}}/>
        </div>
    {/each}
</div>

<style>
    .wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 20%;
        border-radius: 15px;
        flex-wrap: wrap;
    }
    .each{
        flex: 1 10px calc(10% - 20px);
        padding: 25px;
        margin: 10px;
        min-width: 10%;
        text-align: center;
        background-color: #ffbe0b;
        color: white;
        border-radius: 15px;
    }
</style>