// https://maxcode.dev/problems/raf/

setTimeout(() => {
  const foo = () => {};
  setTimeout(() => {
    foo("A"); // 3
    requestAnimationFrame(() => { // raf 3
      queueMicrotask(() => {
        requestAnimationFrame(() => {
          foo("B"); // 15
        });
  
        queueMicrotask(() => {
          foo("C"); // 10
        }); 
  
        foo("D"); // 9
      });
  
      foo("E"); // 8
    });
  });
  
  queueMicrotask(() => {
    foo("F"); // 1
    queueMicrotask(() => {
      foo("G"); // 2
    });
  });
  
  requestAnimationFrame(() => { // raf1
    foo("H"); // 4
  
    queueMicrotask(() => {
      foo("I"); // 5
      setTimeout(() => {
        foo("J"); // 11
        queueMicrotask(() => {
          foo("K"); // 12
          setTimeout(() => {
            foo("L"); // 13
          });
        });
      });
    });
  
    queueMicrotask(() => {
      foo("M"); // 6
      requestAnimationFrame(() => {
        foo("N"); // 14
      });
    });
  });
  
  requestAnimationFrame(() => { // raf2
    queueMicrotask(() => {
      foo("O"); // 7
    });
  
    foo("P"); // 6
  });

}, 5000)

