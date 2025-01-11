import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref(null);

  return {
    //state
    user
  };
}, {
  persist: true
});
