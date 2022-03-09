<template>
  <div class="relative">
    <input
      class="border border-gray-500 rounded h-11 w-80 pl-2 pr-[7.75rem]"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <select
      :class="[
        'absolute inset-y-2 right-2 truncate',
        'w-[7rem] h-7 leading-7',
        'rounded px-2',
        'transition-all bg-gray-200 hover:bg-gray-300',
      ]"
      :value="token"
      @change="$emit('update:token', $event.target.value)"
    >
      <option
        v-for="(tokenData, address) in tokens"
        :key="address"
        :value="address"
        class="truncate"
      >
        {{ tokenData.symbol }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import type { GetTokensResponseToken } from '~/composables/tokens';

const props = defineProps<{
  modelValue: string;
  token: string;
  tokens: Record<string, GetTokensResponseToken>;
}>();

const emits = defineEmits([
  'update:modelValue', //
  'update:token',
]);
</script>
