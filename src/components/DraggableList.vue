<script setup lang="ts">
import { reactive, ref } from "vue";
import draggable from "vuedraggable";
import { watch, onMounted } from "vue";

const props = withDefaults(
  defineProps<{
    myList?: Array<{}>;
    displayName: string;
  }>(),
  {}
);

const emit = defineEmits<{
  (event: "moveCheck", value: any): void;
}>();

let dragList = ref();
let drag = ref(false);
const checkMove = () => {
  emit("moveCheck", dragList);
};

onMounted(async () => {
  if (props.myList) {
    dragList.value = props.myList;
  }
});
</script>

<template>
  <draggable
    v-model="dragList"
    item-key="id"
    tag="div"
    class="plan-wrap"
    :move="checkMove"
  >
    <transition-group type="transition" :name="!drag ? 'flip-list' : null">
      <template #item="{ element, index, order }">
        <slot
          name="item"
          :element="element"
          :index="index"
          :order="order"
        ></slot>
      </template>
    </transition-group>
  </draggable>
</template>
