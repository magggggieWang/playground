<script setup lang="ts">
import { ref } from "vue";

import Search from "./SearchInput.vue";
import { useMotion } from "@vueuse/motion";
import DraggableList from "./DraggableList.vue";

const totalDays = ref<number>(0);
const planName = ref<string>("");
let myList = ref();
const target = ref<HTMLElement>();

// Get the variant from target motion instance.
const { variant } = useMotion(target, {
  initial: {
    scale: 1,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      //   type: "spring",
      //   stiffness: 250,
      //   damping: 25,
      //   mass: 0.5,
      //   repeat: Infinity,
      //   repeatType: "mirror",
      // This will go to `custom` when enter is complete.
      //   onComplete: () => (variant.value = "custom"),
    },
  },
  custom: {
    // scale: 2,
    // transition: {
    //   type: "spring",
    //   damping: 100,
    // },
  },
});
const checkMove = (data: []) => {
  console.log(data);
};
const updateDays = (num: number) => {
  let createdList = [...Array(+num).keys()].map((i) => ({
    name: "",
    days: i + 1,
    order: i + 3,
  }));
  console.log(createdList);
  myList.value = createdList;
  totalDays.value = +num;
};
const updateTitle = (text: string) => {
  planName.value = text;
};
</script>

<template>
  <div class="plan-container">
    <div class="row-head">
      <Search
        @updateTitle="updateTitle"
        updateType="updateTitle"
        placeholder="type in your plan object"
      />
      <Search
        @updateDays="updateDays"
        updateType="updateDays"
        placeholder="type in your travel days"
      />
    </div>
    <div class="subject-title">{{ planName }}</div>
    <div class="plan-list" v-if="totalDays">
      <DraggableList
        :myList="myList"
        @moveCheck="checkMove"
        :displayName="'name'"
      >
        <template #item="slotProps">
          <div class="plan-list-item" :key="slotProps.element.name">
            {{ `DAY ${slotProps.index + 1} - ${slotProps.element.order}` }}
          </div>
        </template>
      </DraggableList>
    </div>
  </div>
</template>
<style scoped>
.plan-container {
  margin-top: 38px;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.row-head {
  display: flex;
  gap: 20px;
  margin-bottom: 25px;
}
.flip-list-move {
  transition: transform 0.5s;
}
.subject-title {
  margin-bottom: 20px;
}
.plan-list {
  overflow-y: auto;
  width: 100%;
  gap: 10px;
  min-width: 80%;
  border-radius: 10px;
  padding: 10px 4px;
  border: 1px solid #9596975e;
  background-color: rgb(202, 197, 194) / 10%;
  box-shadow: 0px 2px 8px 1px rgba(190, 187, 187, 0.4);
}
.plan-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.plan-list-item {
  font-weight: 800;
  background-color: rgba(240, 248, 255, 0.128);
  display: flex;
  border-radius: 10px;
  padding: 10px 0 10px 10px;
  border: 1px solid #9596975e;
}
.sortable-ghost {
  background-color: #ffffff89;
}
</style>
