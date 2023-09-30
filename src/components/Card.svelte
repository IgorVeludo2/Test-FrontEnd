<script lang="ts">
  import type { Card } from "../types"
  export let card: Card
</script>

<div class="click">+</div>
<div class="card">
  {#if card.title.length > 0 ||card. description.length > 0}
    <h1 class={card.title ? "margin-bottom: 0.67em; font-open font-size: 1.125rem; line-height: 1.75rem; " : ""}>
      {card.title}
    </h1>

    <p class="white-space: pre-wrap; line-height: 1.5;">
      {card.description}
    </p>
  {/if}
</div>
