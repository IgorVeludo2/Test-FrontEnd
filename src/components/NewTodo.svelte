<script lang="ts">
	import { createEventDispatcher } from 'svelte'
  
  let title = ''
  let description = ''

  const dispatch = createEventDispatcher<{createTodo: { title: string, description: string }}>()

  async function handleAddNewTodo() {
    title = title.trim()
    description = description.trim()

    if([title.trim(), description.trim()].includes('') ) {
      alert("Preencha título e descrição para poder criar uma nova nota!")
      return
    }

    dispatch("createTodo", { title, description})

    // const data = {
    //   title,
    //   description
    // }

    // await createTodo(data)

    title = ''
    description = ''
  }

  function resizeTextArea(this: HTMLTextAreaElement) {
    this.style.height = "auto"
    this.style.height = `${this.scrollHeight}px`;
  }
</script>

<div class="form">

  <form class="create-todo" on:submit|preventDefault={handleAddNewTodo}>
    <input
      class="title" 
      type="text"
      placeholder="Título"
      name="title"
      bind:value={title}
    />

    <div class="separator"/>

    <textarea 
      placeholder="Adicionar nova nota..."
      bind:value={description}
      name="description"
      on:input={resizeTextArea}
    />

    <button>+</button>
  </form>
</div>

<style>
  .create-todo {
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);
    width: 100%;
    max-width: 600px;
    border-radius: 6px;
    padding: 8px;
    background: white;
    margin: 10px auto;
    position: relative;
  }

  textarea {
    width: 100%;
    display: block;
    border: 0;
    outline: 0;
    margin: 0;
    padding: 0;
    font-size: 16px;
    background-color: transparent;
    font-family: "Open Sans";
  }

  textarea::placeholder {
    font-style: italic;
    font-weight: 600;
  }

  input::placeholder,
    textarea::placeholder {
      opacity: 0.9;
    }
  
  input {
    width: 100%;
    border: 0;
    outline: 0;
    margin: 0;
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 10px;
  }

  textarea {
    resize: none;
    line-height: 1.5;
    min-height: 5em;
    max-height: 50vh;
    width: 100%;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ff4003;
    position: absolute;
    top: 95%;
    right: 0;
    z-index: 1;
    transform: translateY(-50%);
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    cursor: pointer;
    font-size: 24px;
    line-height: 1;
    text-align: center;
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);
  }
  
  .separator {
    width: 100%;
    border-bottom: .1px solid rgb(63, 63, 67);
    height: 1px;
    margin: 10px 0px;
  }

</style>