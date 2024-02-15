<script>
  export let type = "number";

  export let id = "number";
  export let placeholder = "0";
  export let className ="";
  export let disabled = false;
  export let min = 0;
  export let max = 100;
  export let value = 0;

</script>

<input
  type="number"
  {id}
  name={id}
  step="0.00"
  class={`block appearance-none font-space-mono text-xl w-full py-2 pr-2
   text-very-dark-cyan font-bold rounded-md bg-very-light-grayish-cyan
    focus:outline focus:outline-2 focus:ring-strong-cyan focus:outline-strong-cyan focus:border-strong-cyan border-none text-right invalid:focus:border-red-500 invalid:focus:outline-red-500 invalid:focus:ring-red-500 ` + className}
  {placeholder}
  {disabled}
  {min}
  {max}
  bind:value
  {...$$restProps} 
/>

<style>
  input[type='number'] {
  /* Firefox */
  -moz-appearance: textfield;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

</style>