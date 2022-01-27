const { getGamers } = require('../services/gamers.service');
beforeAll(() => {
  require('whatwg-fetch');
});

describe('Gamers API', () => {
  test('it returns an array of gamers', async () => {
    const expected = [
      {
        id: 1,
        realName: 'Brianna Forbes',
        playerName: 'Dreamlurk The Unstoppable',
        asset: 'Foghammer Lead',
        status: 'unresolved',
      },
    ];

    const json = await getGamers(null);

    expect(json).toMatchObject(expected);
  });
});
