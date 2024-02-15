<script>
  import Input from "./Input.svelte";
  import Label from "./Label.svelte";

  import {options, tipPercentage , customTip} from '../store';

  const setValue =(value) =>{
    $tipPercentage = value;
  }

</script>

<label class="w-full">
  <Label>
    Select Tip %
  </Label>

  <fieldset  class=" appearance-none grid  grid-cols-3 outline-none border-none gap-4 p-0 mt-4" name="" id="">
    {#each $options as [value,key]}
    {#if key !=="Custom"}
    <button on:click={()=> setValue(value)} class={`bg-very-dark-cyan hover:cursor-pointer text-white font-space-mono font-bold text-xl border-none rounded-md py-2 px-3 hover:bg-strong-cyan transition-color ${value === $tipPercentage && "bg-strong-cyan"}`} value={value}>{key}</button>
    {:else}
      <Input placeholder="Custom" className=" text-center p-0" disabled={false} bind:value={$customTip} />   
    {/if}
    {/each}
  </fieldset>
</label>