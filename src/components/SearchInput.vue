<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    unitText?: string;
    placeholder: string;
    updateType?: string;
  }>(),
  {
    unitText: "",
    placeholder: "",
  }
);
const emit = defineEmits<{
  (event: "updateDays", value: number): void;
  (event: "updateTitle", value: string): void;
}>();

const updateDays = (e: any) => {
  if (e.target.value > 20) return;

  emit(`${props.updateType}`, e.target.value);
};
</script>

<template>
  <div
    class="plan-search"
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, scale: 1 }"
    :variants="{ custom: { scale: 2 } }"
    :delay="100"
    :duration="500"
  >
    <input :placeholder="placeholder" @keyup="updateDays" type="text" />
    <div>{{ unitText }}</div>
  </div>
</template>

<style scoped>
.plan-search {
  top: 20%;
  font-size: 26px;

  gap: 20px;
  width: calc(100% - 8%);
  text-shadow: -1px -1px 0 darkgreen, 1px -1px 0 darkgreen, 1px 1px 0 darkgreen,
    1px 1px 0 darkgreen;
}
.plan-search input {
  color: #737272;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid grey;
  background-color: transparent;
  height: 50px;
  font-size: 26px;
  margin-bottom: 10px;
}
.plan-search input:focus {
  outline: none;
  background-color: rgb(194, 218, 234);
  border-color: none;
  background-color: rgb(202, 197, 194);
  box-shadow: 0px 2px 15px 0px rgba(190, 187, 187, 0.9);
}
</style>
