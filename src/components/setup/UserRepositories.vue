<template>
  <p>Hi, {{ user }}</p>
  <div class="search">
    <input v-model="searchQuery" />
  </div>
  <div class="list">
    <div v-if="repositories.length <= 0">loading</div>
    <ul v-else>
      <li v-for="(item, i) in repositories">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import { toRefs } from 'vue';
import useUserRepositories from './composables/useUserRepositories';
import useRepositoryNameSearch from './composables/useRepositoryNameSearch';

export default {
  // props
  props: {
    user: {
      type: String,
      required: true,
    },
  },

  // setup
  setup(props) {
    console.log('--- setup ----', props);

    //  通过 toRefs 可以将某个变量转换为响应式变量
    const { user } = toRefs(props);

    // 拆分模块
    const { repositories, getUserRepositories } = useUserRepositories(user);

    const { searchQuery, repositoriesMatchingSearchQuery } =
      useRepositoryNameSearch(repositories);

    return {
      repositories: repositoriesMatchingSearchQuery,
      getUserRepositories,
      searchQuery,
    };
  },
};
</script>
