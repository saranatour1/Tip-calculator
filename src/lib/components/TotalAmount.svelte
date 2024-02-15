<script>
  import Amount from "./Amount.svelte";

  import {numberOfPeople, total, tipPercentage,customTip} from '../store';
  
  $: if($customTip>0){
    $tipPercentage =$customTip;
  }

  $:totalPerPerson = (($total)+($total * ($tipPercentage / 100))) / $numberOfPeople;

</script>


<Amount name="Total" amount={totalPerPerson}/>

