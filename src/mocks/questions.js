import shortid from "shortid";

const AVATAR_URL = `https://api.adorable.io/avatars/128`;

const Questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      id: shortid.generate(),
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }, {
      id: shortid.generate(),
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `blues`,
    }, {
      id: shortid.generate(),
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `jazz`,
    }, {
      id: shortid.generate(),
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
      id: shortid.generate(),
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `John Snow`,
    }, {
      id: shortid.generate(),
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Jack Daniels`,
    }, {
      id: shortid.generate(),
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Jim Beam`,
    }],
  }
];

export default Questions;
