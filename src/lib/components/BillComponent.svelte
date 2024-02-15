<script>
  import DollarSign from "./DollarSign.svelte";
  import Input from "./Input.svelte";
  import Label from "./Label.svelte";

	import { total } from '../store';
    
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class=" flex flex-col">
  <Label>
    Bill
  </Label>

  <div class="relative ">
    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
    <DollarSign />
    </div>
    <Input type="number" id="bill" placeholder="0"  bind:value={$total} max={Infinity}/>
  </div>
</label>
