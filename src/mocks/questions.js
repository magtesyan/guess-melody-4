const AVATAR_URL = `https://api.adorable.io/avatars/128`;

const Questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      id: `8_YlY28mhd`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }, {
      id: `gI1IR4Vc4`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `blues`,
    }, {
      id: `DR7_tPUNB6`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `jazz`,
    }, {
      id: `dVJcBh6RK5`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }],
  },
  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [{
      id: `h402AXzfXt`,
      picture: `${AVATAR_URL}/A`,
      artist: `John Snow`,
    }, {
      id: `lWulTip-15`,
      picture: `${AVATAR_URL}/AB`,
      artist: `Jack Daniels`,
    }, {
      id: `FKThZPGmHh`,
      picture: `${AVATAR_URL}/AC`,
      artist: `Jim Beam`,
    }],
  }
];

export default Questions;
