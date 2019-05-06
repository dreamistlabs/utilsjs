import GimmeError from '../src/functions/error';
import gimme from '../src/functions/currency';
import isoCodes from '../src/data/countryCodes';

describe('FUNCTIONS', function() {
  describe('gimme.currency()', function() {
    /*
      A new test should be written each time a new currency profile
      is added to the country-iso-codes file in the data folder to
      ensure the formatting and naming are correct.
    */
    describe("with a given iso ('USD')", function() {
      const iso = 'USD';
      const symb = '$';

      describe('and scale argument: 10', function() {
        const result = gimme.currency(iso, 10);
        const format = /^\$\d{1}(\,\d{3}){3}$/;

        it(`should return a value in the billion scale  (eg. ${symb}1,000,000,000)`, function() {
          expect(
            result,
            `The output, ${result}, should match the following format: ${symb}1,000,000,000`
          ).toMatch(format);
        });
      });
      describe('and scale argument: 6', function() {
        const result = gimme.currency(iso, 6);
        const format = /^\$\d{3},\d{3}$/;

        it(`should return a value in the hundred-thousand scale (eg. ${symb}100,000)`, function() {
          expect(
            result,
            `The output, ${result}, should match the following format: ${symb}100,000`
          ).toMatch(format);
        });
      });
      describe('and scale argument: 1', function() {
        const result = gimme.currency(iso, 1);
        const format = /^\$\d{1}$/;

        it(`should return a value in the single scale (eg. ${symb}1)`, function() {
          expect(
            result,
            `The output, ${result}, should match the following format: ${symb}1`
          ).toMatch(format);
        });
      });
    });
    describe('with a given scale (4)', function() {
      const scale = 4;

      describe('and ISO argument: USD', function() {
        const iso = 'USD';
        const result = gimme.currency(iso, scale);
        const format = /^\$\d{1}\,\d{3}$/;

        it(`should return a ${iso} formatted currency (eg. $1,000)`, function() {
          expect(
            result,
            `The output, ${result}, should match the following format: $1,000`
          ).toMatch(format);
        });
      });
      describe('and ISO argument: EUR', function() {
        const iso = 'EUR';
        const result = gimme.currency(iso, scale);
        const format = /^\€\d{1}\,\d{3}$/;

        it(`should return a ${iso} formatted currency (eg. €1,000)`, function() {
          expect(
            result,
            `The output, ${result}, should match the following format: €1,000`
          ).toMatch(format);
        });
      });
      describe('and ISO argument: GBP', function() {
        const iso = 'GBP';
        const result = gimme.currency(iso, scale);
        const format = /^\£\d{1}\,\d{3}$/;

        it(`should return a ${iso} formatted currency (eg. £1,000)`, function() {
          expect(
            result,
            `The output, ${result}, should match the following format: £1,000`
          ).toMatch(format);
        });
      });
    });
  });
});

describe('FORMATTING', function() {
  describe('currency value', function() {
    describe('prefixed symbol', function() {
      const iso = 'USD';
      const expectedSymbol = '$';
      const symbolLength = isoCodes[iso].symbol.length;
      const result = gimme.currency(iso);

      it('symbol should appear before value', function() {
        expect(result.slice(0, symbolLength)).toEqual(expectedSymbol);
      });
    });
    describe('suffixed symbol', function() {
      const iso = 'SEK';
      const expectedSymbol = 'kr';
      const symbolLength = isoCodes[iso].symbol.length;
      const result = gimme.currency(iso);

      it('symbol should appear after value', function() {
        expect(result.slice(-symbolLength)).toEqual(expectedSymbol);
      });
    });
  });
});

describe('ErrorHandling', function() {
  describe('#currency', function() {
    describe('with no arguments', function() {
      it('should return error for missing ISO parameter', function() {
        expect(function() {
          gimme.currency();
        }).toThrow(Error, /Missing Parameter/i);
      });
    });
    describe('when [iso] is not of type: String', function() {
      it('should return error when [Array] is used', function() {
        expect(function() {
          gimme.currency(['some', 'array']);
        }).toThrow(Error, /Type Error/i);
      });
      it('should return error when [Boolean] is used', function() {
        expect(function() {
          gimme.currency(true);
        }).toThrow(Error, /Type Error/i);
      });
      it('should return error when [Number] is used', function() {
        expect(function() {
          gimme.currency(8);
        }).toThrow(Error, /Type Error/i);
      });
      it('should return error when [Null] is used', function() {
        expect(function() {
          gimme.currency(null);
        }).toThrow(Error, /Type Error/i);
      });
      it('should return error when [Object] is used', function() {
        expect(function() {
          gimme.currency({ some: 'object' });
        }).toThrow(Error, /Type Error/i);
      });
    });
    describe('when [scale] is not of type: Number', function() {
      it('should return error when [Array] is used', function() {
        expect(function() {
          gimme.currency('USD', ['some', 'array']);
        }).toThrow(Error, /Type Error/i);
      });
      it('should return error when [Boolean] is used', function() {
        expect(function() {
          gimme.currency('USD', true);
        }).toThrow(Error, /Type Error/i);
      });
      it('should return error when [Null] is used', function() {
        expect(function() {
          gimme.currency('USD', null);
        }).toThrow(Error, /Type Error/i);
      });
      it('should return error when [Object] is used', function() {
        expect(function() {
          gimme.currency('USD', { some: 'object' });
        }).toThrow(Error, /Type Error/i);
      });
      it('should return error when [String] is used', function() {
        expect(function() {
          gimme.currency('USD', '8');
        }).toThrow(Error, /Type Error/i);
      });
    });
    describe('when [includeDecimal] is not of type: Boolean', function() {
      it('should return error when [Array] is used', function() {
        expect(function() {
          gimme.currency('USD', 4, ['some', 'array']);
        }).toThrow(Error, /Type Error/i);
      });
      it('should return error when [Null] is used', function() {
        expect(function() {
          gimme.currency('USD', 4, null);
        }).toThrow(Error, /Type Error/i);
      });
      it('should return error when [Number] is used', function() {
        expect(function() {
          gimme.currency('USD', 4, 8);
        }).toThrow(Error, /Type Error/i);
      });
      it('should return error when [Object] is used', function() {
        expect(function() {
          gimme.currency('USD', 4, { some: 'object' });
        }).toThrow(Error, /Type Error/i);
      });
      it('should return error when [String] is used', function() {
        expect(function() {
          gimme.currency('USD', 4, '8');
        }).toThrow(Error, /Type Error/i);
      });
    });
  });
});

describe('ISO CODES', function() {
  describe('each currency profile', function() {
    it('should have a key consisting of 3-letters only', function() {
      let listOfIsoCodes = Object.keys(isoCodes);
      let format = /^[a-zA-Z]{3}$/;

      listOfIsoCodes.forEach(function(iso) {
        if (iso.length !== 3) {
          expect.fail(iso, format, `expected ${iso} to be 3-letters long`);
        }
      });
    });
    it('should have a symbol property', function() {
      for (var profile in isoCodes) {
        var property = 'symbol';
        if (!isoCodes[profile][property]) {
          expect.fail(
            false,
            true,
            `expected ${profile} to have a ${property} property.`
          );
        }
      }
    });
    it('should have a symbol_placement property', function() {
      for (var profile in isoCodes) {
        var property = 'symbol_placement';
        if (!isoCodes[profile][property]) {
          expect.fail(
            false,
            true,
            `expected ${profile} to have a ${property} property.`
          );
        }
      }
    });
    it('should have a currency_name property', function() {
      for (var profile in isoCodes) {
        var property = 'currency_name';
        if (!isoCodes[profile][property]) {
          expect.fail(
            false,
            true,
            `expected ${profile} to have a ${property} property.`
          );
        }
      }
    });
    it('should have a group_separator property', function() {
      for (var profile in isoCodes) {
        var property = 'group_separator';
        if (!isoCodes[profile][property]) {
          expect.fail(
            false,
            true,
            `expected ${profile} to have a ${property} property.`
          );
        }
      }
    });
    it('should have a decimal_separator property', function() {
      for (var profile in isoCodes) {
        var property = 'decimal_separator';
        if (!isoCodes[profile][property]) {
          expect.fail(
            false,
            true,
            `expected ${profile} to have a ${property} property.`
          );
        }
      }
    });
  });
});
