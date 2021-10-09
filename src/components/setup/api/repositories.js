/**
 * [JS ES6中export和import详解](https://www.cnblogs.com/kreo/p/11069640.html)
 *
 * [JS中的async await](https://www.cnblogs.com/hanguozhi/p/10406765.html)
 * [Async/await学习](https://segmentfault.com/a/1190000013292562)
 */
function fetchUserRepositories(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['a', 'b', 'c']);
    }, 3000);
  });
}

export { fetchUserRepositories };
