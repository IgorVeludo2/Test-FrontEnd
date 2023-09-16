<script lang="ts">
  export let buttonText = "Click";
  export let backgroundColor = "white";
  
  function handleClick() {
    //functionality
  }
</script>

<button class="button" on:click={handleClick} style:background-color={backgroundColor}>
  {buttonText}
</button>

<style>
  .button {

    padding: 20px;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid transparent;
    -webkit-transition: all 0.4s;
    transition: all 0.2s;

  }
  button:hover {
    opacity: 0.9;
    border: 1px solid black;
  }
</style>