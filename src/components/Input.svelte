<script lang="ts">
  let inputValue = '';

  function handleInput(event: Event) {
    inputValue = (event.currentTarget as HTMLInputElement).value;
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      // Lógica para lidar com a tecla Enter pressionada
      console.log('Texto inserido:', inputValue);
      inputValue = ''; // Limpar o campo de input após a entrada
    }
  }
</script>

<input
  type="text"
  class="input"
  placeholder="Adicione uma nova nota..."
  bind:value={inputValue}
  on:input={handleInput}
  on:keydown={handleKeyDown}
/>

<style>
  .input {
    width: 100%;
    padding: 20px;
    border: none;
    border-bottom: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;
    outline: none;
  }

  .input::placeholder {
    font-style: italic;
  }
</style>