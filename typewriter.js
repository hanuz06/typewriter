const sentence = "hello there from lighthouse labs\n";

let delayT = 0;
for (const char of sentence) {
  delayT += 50;
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, delayT); // <= 1s delay to make it noticeable. Can dial it down later.
}