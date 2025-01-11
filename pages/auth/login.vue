<template>
  <div class="h-screen flex flex-col justify-center p-6">
    <NuxtImg src="launch-screen.png" class="object-contain h-[300px]" />
    <form @submit.prevent="onLogin" class="flex flex-col gap-3 items-start">
      <div class="w-full">
        <Label>Email</Label>
        <Input
          type="email"
          v-model.trim="form.email"
          placeholder="JohnDoe@gmail.com"
        />
      </div>

      <div class="w-full relative">
        <Label>Password</Label>
        <Input
          :type="passwordField"
          v-model.trim="form.password"
          placeholder="**********"
        />
        <component :is="isVisiblePassword ? Eye : EyeClosed" class="absolute right-4 top-[2.1rem] w-5 h-5 text-zinc-500" @click="togglePasswordVisibility"/>
      </div>

      <Button type="submit" class="w-full" :disabled="isLoading">
        {{ isLoading ? "Loading" : "Continue" }}
      </Button>
    </form>
  </div>
</template>

<script setup>
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/store/user";
import { toast } from "vue-sonner";
import { supabase } from "@/shared/supabase";
import { Eye, EyeClosed } from "lucide-vue-next";

definePageMeta({
  layout: "auth",
});

//state
const userStore = useUserStore();
const form = reactive({
  email: "",
  password: "",
});
const isLoading = ref(false);
const isVisiblePassword = ref(false)

//computed
const passwordField = computed(() => isVisiblePassword.value ? 'text' : 'password')

//methods
const onLogin = async () => {
  try {
    isLoading.value = true;
    const {
      data: { user },
      error,
    } = await supabase.auth.signInWithPassword(form);
    if (error) {
      toast("Failed", { description: error?.message });
      isLoading.value = false;
    }
    if (user) {
      userStore.user = user;
      return navigateTo("/");
    }
  } catch (error) {
    isLoading.value = false;
    toast("Failed", { description: error });
  }
};

const togglePasswordVisibility = () => {
  isVisiblePassword.value = !isVisiblePassword.value
}
</script>
