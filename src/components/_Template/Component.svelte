<script>
   export let isModified = false
</script>

<h1 class="Component"
  class:__modified={isModified}>
  Component
</h1>

<style>
  .Component {
    color: snow;
    background: rebeccapurple;
  }
  .Component.__modified {
      background: indianred;
  }
</style>