import getSymbolFromCurrency from 'currency-symbol-map';
import currencyToSymbolMap from 'currency-symbol-map/map';

export const getCurrencySymbol = (code: string): string => {
  const symbol = getSymbolFromCurrency(code);

  if (!symbol) {
    throw new Error('invalid currency symbol provided');
  }

  return symbol;
};
