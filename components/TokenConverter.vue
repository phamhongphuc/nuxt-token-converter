<template>
  <div class="shadow border rounded p-3 flex flex-col items-center">
    <InputGroup
      v-model="fromAmountInput"
      v-model:token="fromTokenInput"
      :tokens="tokens"
      @update:modelValue="updateToAmountInput"
      @update:token="updateFromAmountInput"
    />
    <div
      :class="[
        'w-7 h-7 my-3 rounded-full',
        'flex items-center justify-center',
        'cursor-pointer transition-all',
        'bg-transparent hover:bg-gray-200',
      ]"
      @click="swapTokens"
    >
      <font-awesome-icon :icon="['fas', 'arrow-down']" class="my-3 text-xl" />
    </div>
    <InputGroup
      v-model="toAmountInput"
      v-model:token="toTokenInput"
      :tokens="tokens"
      @update:modelValue="updateFromAmountInput"
      @update:token="updateToAmountInput"
    />
    <div class="flex items-center mt-2 w-full">
      <div class="font-bold text-blue-600">Price</div>
      <div class="mx-2 flex-1 text-right">
        {{
          toTokenPrice //
            .dividedBy(fromTokenPrice)
            .decimalPlaces(4)
            .toFormat()
        }}
        {{ fromToken?.symbol }} per
        {{ toToken?.symbol }}
      </div>
      <div
        :class="[
          'w-7 h-7 rounded-full',
          'flex items-center justify-center',
          'cursor-pointer transition-all',
          'bg-blue-600 hover:bg-blue-700',
        ]"
        @click="updatePrice"
      >
        <font-awesome-icon
          :icon="['fas', 'arrows-rotate']"
          class="text-white text-sm"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  fromAmountInput,
  fromTokenInput,
  toAmountInput,
  toTokenInput,
  //
  tokens,
  fromToken,
  toToken,
  fromTokenPrice,
  toTokenPrice,
  //
  updateFromAmountInput,
  updateToAmountInput,
  swapTokens,
  updateTokens,
  refresh,
} from '~/composables/tokens';

onMounted(() => {
  updateTokens();
});
</script>
