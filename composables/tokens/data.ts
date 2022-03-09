import { ref } from 'vue';

export type GetTokensResponseToken = {
  name: string;
  price: string;
  price_BNB: string;
  symbol: string;
};

export type GetTokensResponse = {
  data: Record<string, GetTokensResponseToken>;
};

export const tokens = ref<Record<string, GetTokensResponseToken>>({});

export const fromTokenInput = ref('0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56');
export const fromAmountInput = ref('');

export const toTokenInput = ref('0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c');
export const toAmountInput = ref('');
