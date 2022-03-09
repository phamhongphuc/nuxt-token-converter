import {
  fromAmountInput,
  fromTokenInput,
  toAmountInput,
  tokens,
  toTokenInput,
} from './data';
import { computed } from 'vue';
import BigNumber from 'bignumber.js';

export const fromAmountValue = computed(
  () => new BigNumber(fromAmountInput.value)
);

export const toAmountValue = computed(() => new BigNumber(toAmountInput.value));

export const fromToken = computed(
  () =>
    tokens.value[fromTokenInput.value] || {
      name: '-',
      price: '0',
      price_BNB: '0',
      symbol: '-',
    }
);
export const toToken = computed(
  () =>
    tokens.value[toTokenInput.value] || {
      name: '-',
      price: '0',
      price_BNB: '0',
      symbol: '-',
    }
);

export const fromTokenPrice = computed(
  () => new BigNumber(fromToken.value.price || 0)
);
export const toTokenPrice = computed(
  () => new BigNumber(toToken.value.price || 0)
);
