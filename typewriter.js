const sentence = "hello there from lighthouse labs";

let typewriter = str => {
  let delayT = 0;
  str = str.concat('\n');
  
  for (const char of str) {
    delayT += 50;
    setTimeout(() => {
      // print the char here
      process.stdout.write(char);
    }, delayT); // <= 1s delay to make it noticeable. Can dial it down later.
  }
};

typewriter(sentence);