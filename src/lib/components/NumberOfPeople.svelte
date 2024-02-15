<script>
  import Label from "./Label.svelte";
  import Input from "./Input.svelte";
  import Person from "./Person.svelte";

  import {numberOfPeople} from "../store";


</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class=" flex flex-col w-full">
  <Label>
    Number of People
  </Label>

  <div class="relative w-full">
    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none w-full">
    <Person />
    </div>
    <Input type="number" id="numberOfPeople" placeholder="0" min={1} bind:value={$numberOfPeople}/>
  </div>
</label>