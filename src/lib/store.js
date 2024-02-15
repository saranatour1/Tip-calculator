import { readable, writable } from 'svelte/store';

export const count = writable(0);
export const total = writable(0);


export const tipPercentage = writable(0);
export const customTip = writable(0);

export const numberOfPeople = writable(1);

export const totalOutput = readable(0);
export const tipAmount = readable(); //after

export const options = readable([[5,"5%"],[10,"10%"],[15,"15%"],[25,"25%"],[50,"50%"], [1,"Custom"]]);


