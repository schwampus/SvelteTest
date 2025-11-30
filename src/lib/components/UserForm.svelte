<script lang="ts">
  let formState = $state({
    answers: {} as Record<string, string>,
    step: 0,
    error: '',
  });

  const questions = [
    {
      question: 'What is your name?',
      id: 'name',
      type: 'text',
    },
    {
      question: 'What is your birthday?',
      id: 'birthday',
      type: 'date',
    },

    {
      question: 'What is your favorite pizza?',
      id: 'pizza',
      type: 'text',
    },
    {
      question: 'What is your favorite color?',
      id: 'color',
      type: 'color',
    },
  ];

  function nextStep(id: string) {
    if (formState.answers[id]) {
      formState.step += 1;
      formState.error = '';
    } else {
      formState.error = 'Please answer the question before advancing.';
    }
  }
  function startOver() {
    formState.step = 0;
    formState.answers = {};
  }
</script>

<main>
  <h2>Lets get to know each other!</h2>
  {#if formState.step >= questions.length}
    <h1>Thank You!</h1>
    <button onclick={startOver} data-test-id="start-over-btn">Lets do it again!</button>
  {:else}
    <h1>Step: {formState.step + 1}</h1>
  {/if}
  {#each questions as question, index (question.id)}
    {#if formState.step === index}
      {@render formStep(question)}
    {/if}
  {/each}

  {#if formState.error !== ''}
    <p class="error" data-test-id="error-msg">{formState.error}</p>
  {/if}
  {#snippet formStep({ question, id, type }: { type: string; id: string; question: string })}
    <article>
      <div>
        <label for={id}>{question}</label>
        <input type={type} id={id} bind:value={formState.answers[id]} data-test-id={`input-${id}`} />
      </div>
      <button onclick={() => nextStep(id)} data-test-id={`next-btn-${id}`}>Next Question!</button>
    </article>
  {/snippet}
</main>

<style>
  .error {
    color: red;
  }

  main {
    width: 520px;
    height: 300px;
    border-radius: 12px;
    color: coral;
    background-color: #480d73;
    padding: 40px 60px 20px 60px;
    gap: 14px;
    box-shadow: #160125 1px 8px 16px;
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
    gap: 42px;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
  label {
    font-size: 1.4rem;
    font-weight: bold;
  }

  button {
    width: 180px;
    height: 30px;
    background-color: coral;
    color: #160125;
    border-radius: 4px;
    align-self: center;
    font-family: 'Prompt', 'sans-serif';
    font-weight: 700;
    font-size: medium;
    box-shadow: #160125 1px 4px 6px;
  }
  p {
    text-align: center;
  }
</style>
