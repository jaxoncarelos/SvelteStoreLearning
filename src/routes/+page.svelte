<script>
    import CreateTodo from '$lib/components/CreateTodo.svelte'
    import TodoList from '$lib/components/TodoList.svelte';
</script>

<div>
    <CreateTodo class="todo"/>
    <TodoList/>
</div>

<style>
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        flex-direction: column;
    }

</style>