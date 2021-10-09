import { ref, computed } from 'vue';

export default function useRepositoryNameSearch(repositories) {
  const searchQuery = ref('');

  // 这里我们给 computed 函数传递了第一个参数，它是一个类似 getter 的回调函数，输出的是一个只读的响应式引用。
  const repositoriesMatchingSearchQuery = computed(() => {
    return repositories.value.filter((repository) => {
      return repository.includes(searchQuery.value);
    });
  });

  return {
    searchQuery,
    repositoriesMatchingSearchQuery,
  };
}
