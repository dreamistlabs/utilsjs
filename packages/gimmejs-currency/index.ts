import { getCurrencySymbol } from '../../utils';
import GimmeNumber from '../gimmejs-number';

export interface GimmeCurrencyOptions {
  code: string;
  digits: number;
  decimals?: boolean;
  symbolPosition?: string;
}

class GimmeCurrency {
  private _gimme: GimmeNumber = new GimmeNumber();

  public currency = (options?: GimmeCurrencyOptions): string => {
    const opts = !options ? { code: 'USD', digits: 4 } : options;
    const { code, digits, decimals, symbolPosition } = opts;

    const symbol = getCurrencySymbol(code);
    const value = this._gimme.number({ digits, formatted: true, decimals });

    const currency = symbolPosition === 'append' ? value.concat(symbol) : symbol.concat(value);

    return currency;
  };
}

export default GimmeCurrency;
