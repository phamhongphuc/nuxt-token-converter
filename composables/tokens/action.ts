import axios from 'axios';
import {
  fromAmountValue,
  fromTokenPrice,
  toAmountValue,
  toTokenPrice,
} from './computed';
import {
  fromAmountInput,
  fromTokenInput,
  GetTokensResponse,
  toAmountInput,
  tokens,
  toTokenInput,
} from './data';

export const updateToAmountInput = () => {
  const value = fromAmountValue.value
    .multipliedBy(fromTokenPrice.value)
    .dividedBy(toTokenPrice.value)
    .decimalPlaces(4);
  toAmountInput.value = value.isFinite() ? value.toString() : '';
};

export const updateFromAmountInput = () => {
  const value = toAmountValue.value
    .multipliedBy(toTokenPrice.value)
    .dividedBy(fromTokenPrice.value)
    .decimalPlaces(4);
  fromAmountInput.value = value.isFinite() ? value.toString() : '';
};

export const swapTokens = () => {
  [
    fromAmountInput.value,
    fromTokenInput.value,
    toAmountInput.value,
    toTokenInput.value,
  ] = [
    toAmountInput.value,
    toTokenInput.value,
    fromAmountInput.value,
    fromTokenInput.value,
  ];
};

export const updateTokens = async () => {
  const result = await axios.get<GetTokensResponse>(
    'https://api.pancakeswap.info/api/v2/tokens'
  );
  tokens.value = result.data.data;
};

export const refresh = () => {
  updateTokens();
  updateFromAmountInput();
};
