<script setup lang="ts">
import { defineProps, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
defineProps({
  tabs: Array<{ name: string; route: string }>,
});

const active = ref<boolean>(true);
const current = ref<number>(1);
const handleTo = ($event: Event, index: number, route: string) => {
  $event.preventDefault();
  if (current.value === index) {
    return;
  }
  current.value = index;
  router.push(route);
};
</script>

<template>
  <div class="radio-inputs">
    <label
      class="radio"
      v-for="(tab, index) in tabs"
      @click="($event) => handleTo($event, index, tab.route)"
    >
      <input
        type="radio"
        name="radio"
        :checked="index === current ? active : false"
      />
      <span class="name">{{ tab.name }}</span>
    </label>
  </div>
</template>
<style scoped>
.router-link-active,
a {
  text-decoration: none;
}
.radio-inputs {
  position: relative;
  width: 300px;
  display: flex;
  justify-content: space-between;
  border-radius: 0.5rem;
  background-color: #eee;
  box-sizing: border-box;
  box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
  padding: 0.25rem;
  font-size: 14px;
}

.radio-inputs .radio {
  flex: 1 1 auto;
  text-align: center;
}

.radio-inputs .radio input {
  display: none;
}

.radio-inputs .radio .name {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem 0;
  color: rgba(51, 65, 85, 1);
  transition: all 0.15s ease-in-out;
}

.radio-inputs .radio input:checked + .name {
  background-color: #fff;
  font-weight: 600;
}
</style>
