<script>
  import NewTodo from "../components/NewTodo.svelte";

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

  --green-300: #00B37E;
  --green-500: #00875f;
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

