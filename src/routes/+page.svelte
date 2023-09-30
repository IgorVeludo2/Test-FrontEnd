<script lang="ts">
  import { onMount } from "svelte"
  import NewTodo from "../components/NewTodo.svelte"
  import { getAll } from "../services/get/getTodoService"

  const todoList: Array<object> = []

  interface IResponse {
    [error: string]: any
  }

  onMount(async () => {
    try {
      const response: IResponse = await getAll()
      if(response.hasOwnProperty('error')) {
        alert("Não foi possível realizar a requisição")
        return
      }
      todoList.push(response)
    }catch(error) {
      alert(`Error: ${error}`)
    }
  })

</script>
<body>
  <NewTodo />
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
  height: 100vh;
  background: var(--gray-600);
  color: var(--gray-300);
  -webkit-font-smoothing: antialiased;
}

/* reset de css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

