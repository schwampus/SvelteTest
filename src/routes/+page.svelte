<script lang="ts">
  import Header from '../lib/components/Header.svelte';
  import UserForm from '../lib/components/UserForm.svelte';

  let title: string = 'SVLTST';
  let name = $state('Jon');
</script>

<main>
  <Header title={title} />
  <h2>Hello {name}!</h2>

  <div class="greetInput">
    <p>change name to greet on site load.</p>
    <input type="text" bind:value={name} data-test-id="greet-input" />
  </div>

  <UserForm></UserForm>
</main>

<style>
  main {
    background-color: coral;
    color: #480d73;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    padding: 10px;
    gap: 10px;
  }

  h2 {
    font-weight: 700;
    margin-top: -22px;
  }

  .greetInput {
    display: flex;
    max-width: 500px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 40px;
  }
</style>
