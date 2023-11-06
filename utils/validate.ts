function handleInputNumber(event: Event) {
  const target = event.target as HTMLInputElement;
  target.value = target.value.replace(/[^0-9]/g, "");
  if (target.value.length > 3) target.value = target.value.slice(0, 3);
}

// function filterInput(
//   evt: KeyboardEvent,
//   max: number,
//   type: "numberState" | "toNumberState" | "moneyState" | "enterState"
// ): boolean | void {
//   evt = evt || window.event;
//   let char = (evt as KeyboardEvent).key.toString();

//   //todo  ...Check if the key pressed is a number
//   if (!/^[0-9]$/.test(char)) {
//     evt.preventDefault();

//     //FIXME - need focus on to bet number
//     if (type="moneyState") {
//         numberElement.value?.focus();
//       } else if (type="numberState") {
//         moneyElement.value?.focus();
//       } else if (type="enterState") {
//         btnEnterElement.value?.focus();
//       }


//   } else {
//     let currentValue = (evt.target as HTMLInputElement).value;

//     //todo  ...Check if the current value already has 3 digits
//     if (currentValue.length >= max) {
//       evt.preventDefault();
//     } else {
//       return true;
//     }
//   }
// }

// export { filterInput };
