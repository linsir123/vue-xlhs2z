import { ref, onMounted, watch } from 'vue';
import { fetchUserRepositories } from '../api/repositories';

/**
 * user为一个响应式变量
 */
export default function useUserRepositories(user) {
  // 1. 通过 ref 可以将某个变量声明为响应式变量（类似 data property 返回的变量）
  const repositories = ref([]);

  const getUserRepositories = async () => {
    console.log('--- getUserRepositories ---- start');
    repositories.value = await fetchUserRepositories(user.value);
    console.log('--- getUserRepositories ---- end');
  };

  // 2. 组合式 API 上的生命周期钩子与选项式 API 的名称相同，但前缀为 on：即 mounted 看起来会像 onMounted
  onMounted(getUserRepositories);

  // 3. 对 user 添加监听
  watch(user, getUserRepositories);

  return {
    repositories,
    getUserRepositories,
  };
}
