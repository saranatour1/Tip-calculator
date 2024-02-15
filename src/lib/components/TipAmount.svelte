<script> // per person
  import Amount from "./Amount.svelte";
  import {numberOfPeople, total, tipPercentage,customTip} from '../store';
  
  $: if($customTip>0){
    $tipPercentage =$customTip;
  }

  $: tipAmountPerPerson = ($total * ($tipPercentage / 100)) / $numberOfPeople;

</script>

<Amount name ="Tip Amount" amount={tipAmountPerPerson} />