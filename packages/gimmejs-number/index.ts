export interface GimmeNumberOptions {
  digits: number;
  formatted?: boolean;
  decimals?: boolean;
}

class GimmeNumber {
  public number = (options?: GimmeNumberOptions): string => {
    const opts = !options ? { digits: 4 } : options;
    const { digits, formatted, decimals } = opts;

    if (digits > 20) {
      throw new Error(
        `The maximum number of digits that can be safely generated is 20. You entered ${digits}. Try a lower number.`
      );
    }

    let r: number = Math.random();

    while (r < 0.1) {
      /* istanbul ignore next */
      r = Math.random();
    }

    const rand: number = Math.floor(r * Math.pow(10, digits));
    let numStr: string = rand.toString();

    if (formatted) {
      numStr = this.format(numStr);
    }

    if (decimals) {
      numStr = this.addDecimals(numStr);
    }

    return numStr;
  };

  /**
   * Format a number with commas.
   * @param { number } [num] - the number to format
   * @return { string }
   */
  private format = (numStr: string): string => {
    const x: string[] = numStr.split('');

    /* istanbul ignore else */
    if (x.length > 3) {
      for (let i = 3; i < x.length; i = i + 4) {
        x.splice(-i, 0, ',');
      }
    }

    return x.join('');
  };

  /**
   * Add decimal values to number.
   * @param { string } [numStr] - the number to add decimals to
   * @return { string }
   */
  private addDecimals = (numStr: string) => {
    const decimals: string = Math.random()
      .toString()
      .slice(2, 4);

    return numStr.concat(`.${decimals}`);
  };
}

export default GimmeNumber;
