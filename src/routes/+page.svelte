<script lang="ts">
  import { onMount } from "svelte"
  import NewTodo from "../components/NewTodo.svelte"
  import { getAll } from "../services/get/getTodoService"
  import Card from "../components/Card.svelte"
  import { createTodo } from "../services/create/createTodoService"
  import type { ICreateToDo } from "../types"

  let todoList: Array<any> = []

  const addTodo = async (event: CustomEvent<ICreateToDo>) => {
    const {title, description} = event.detail
    await createTodo({title, description})
  }

  function openEditCardModal(id: string) {
    alert(id)
  }

  onMount(async () => {
    try {
      const response = await getAll()
      if(response.hasOwnProperty('error')) {
        alert("Não foi possível realizar a requisição")
        return
      }
      todoList = [...response]
    }catch(error) {
      alert(`Error: ${error}`)
      return
    }
  })

</script>
<body>
  <NewTodo on:createTodo={addTodo}/>
  {#each todoList as card}
    <div class="wrapper">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="box"
        on:click={() => teste(card.id)}
      > 
        <Card {card}/>
      </div>
    </div>
  {/each}
</body>

<style>
:root {
  --white: #fff;
  --gray-100: #e1e1e6;
  --gray-300: #c4c4cc;
  --gray-400: #8d8d99;
  --gray-600: #323238;
  --gray-700: #29292e;
  --gray-800: #202024;
  --gray-900: #121214;
}

body {
  padding: 8px;
  height: 100vh;
  background: var(--gray-600);
  color: var(--gray-300);
  -webkit-font-smoothing: antialiased;
}

.wrapper {
  display: grid;
  margin: 10px auto;
  cursor: pointer;
  border: 1px solid green;
}

.box {
  /* display: inline-grid; */
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 18px;
}

/* reset de css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

