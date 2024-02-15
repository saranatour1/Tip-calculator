<script>
  export let name = "";
  export let amount = 0.00;
</script>
<div class="p-10 pb-0  flex  justify-between items-center w-full max-w-[20.8125rem] mx-auto">
  <span class=" font-space-mono flex  flex-col text-base text-white font-bold">
    {name}
    <span class=" text-sm text-grayish-cyan">/ person</span>
  </span>

  <span class=" text-5xl text-strong-cyan font-bold font-space-mono tracking-tight"> <span class="font-bold">$</span>{amount.toFixed(2)}</span>
</div>