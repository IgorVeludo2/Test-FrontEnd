<script>
  import Button from "../components/Button.svelte";
  import Input from '../components/Input.svelte';
  import { createTodo } from "../services/create/createTodoService"

  const handleMessage = async () => {
    await createTodo({title: "DISPATCH", description: "Dispatch test"})
  }

</script>
<body>
  <form>
    <Input />
    <Button on:onClick={handleMessage} buttonText="Criar" backgroundColor="#fff000" /> 
  </form>
</body>

<style>
body {
  height: 100vh;
  background-color: #f0f0f0;
}

form {
  margin: 10px auto;
}

/* reset de css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

