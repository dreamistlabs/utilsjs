const schema = {
  currency: [
    {
      argName: 'iso',
      type: ['string']
    },
    {
      argName: 'digits',
      type: ['number']
    },
    {
      argName: 'decimal',
      type: ['boolean']
    }
  ],
  name: [
    {
      argName: 'type',
      type: ['string']
    },
    {
      argName: 'gender',
      type: ['string']
    },
    {
      argName: 'salutation',
      type: ['boolean', 'string']
    }
  ],
  number: [
    {
      argName: 'digits',
      type: ['number']
    },
    {
      argName: 'format',
      type: ['boolean']
    },
    {
      argName: 'decimal',
      type: ['boolean']
    }
  ],
  time: [
    {
      argName: 'period',
      type: ['string', 'boolean']
    }
  ]
};

export default schema;
