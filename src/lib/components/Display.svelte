<script>
  import TipAmount from "./TipAmount.svelte";
  import TotalAmount from "./TotalAmount.svelte";
  import { total, tipAmount} from '../store';
  
  const reset = ()=>{
    $total =0;

  }
</script>

<div class="w-full h-full bg-very-dark-cyan rounded-xl flex flex-col justify-between items-start ">
  <div class="flex flex-col items-center justify-center">
    <TipAmount />
    <TotalAmount />
  </div>
  <button on:click={reset} class="w-full max-w-[20.8125rem] mx-auto mb-10 py-2  uppercase cursor-pointer text-very-dark-cyan font-space-mono font-bold  rounded-md border-none  bg-strong-cyan text-xl hover:bg-light-grayish-cyan transition-colors">
    reset
  </button>
</div>
