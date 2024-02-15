<script>
  import BillComponent from "./lib/components/BillComponent.svelte";
  import Display from "./lib/components/Display.svelte";
  import NumberOfPeople from "./lib/components/NumberOfPeople.svelte";
  import TipSelect from "./lib/components/TipSelect.svelte";
  import Wrapper from "./lib/components/Wrapper.svelte";


  let submit = false;
	const handleSubmit = () => {
		submit = true
	}

</script>

<main class=" min-h-screen w-full max-w-full bg-light-grayish-cyan flex flex-col justify-start items-start">
  <span class="mx-auto uppercase pt-40 max-md:pt-20 font-space-mono tracking-[10px] text-2xl text-very-dark-cyan font-bold w-full max-w-1/2 text-clip text-wrap text-center">
    spli<br /> tter
  </span>
  <Wrapper>
    <form on:submit|preventDefault={handleSubmit} class="p-0">
      <div class=" flex justify-between w-full gap-12 max-md:flex-col">
        <div class=" flex-[0.5] flex flex-col gap-y-10 max-md:w-full ">
          <BillComponent />  
          <TipSelect />
          <NumberOfPeople />
        </div>
        <div class="flex-[0.5] max-md:w-full  w-full">
        <Display />
        </div>
      </div>    
    </form>
  </Wrapper>
</main>

