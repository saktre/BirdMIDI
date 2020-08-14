

function setup() {

}

function draw() {



}


TWINKLE_TWINKLE = {
  notes: [
    {pitch: 60, startTime: 0.0, endTime: 0.5},
    {pitch: 60, startTime: 0.5, endTime: 1.0},
    {pitch: 67, startTime: 1.0, endTime: 1.5},
    {pitch: 67, startTime: 1.5, endTime: 2.0},
    {pitch: 69, startTime: 2.0, endTime: 2.5},
    {pitch: 69, startTime: 2.5, endTime: 3.0},
    {pitch: 67, startTime: 3.0, endTime: 4.0},
    {pitch: 65, startTime: 4.0, endTime: 4.5},
    {pitch: 65, startTime: 4.5, endTime: 5.0},
    {pitch: 64, startTime: 5.0, endTime: 5.5},
    {pitch: 64, startTime: 5.5, endTime: 6.0},
    {pitch: 62, startTime: 6.0, endTime: 6.5},
    {pitch: 62, startTime: 6.5, endTime: 7.0},
    {pitch: 60, startTime: 7.0, endTime: 8.0},
  ],
  totalTime: 8
};


BIRD_SONG = {
  notes: [
  {
    "pitch": 0,
    "startTime": 0,
    "endTime": 0.05
  },
  {
    "pitch": 0,
    "startTime": 0.05,
    "endTime": 0.1
  },
  {
    "pitch": 0,
    "startTime": 0.1,
    "endTime": 0.15
  },
  {
    "pitch": 0,
    "startTime": 0.15,
    "endTime": 0.2
  },
  {
    "pitch": 0,
    "startTime": 0.2,
    "endTime": 0.25
  },
  {
    "pitch": 121.6368406,
    "startTime": 0.25,
    "endTime": 0.3
  },
  {
    "pitch": 120.9024387,
    "startTime": 0.3,
    "endTime": 0.35
  },
  {
    "pitch": 121.609163,
    "startTime": 0.35,
    "endTime": 0.4
  },
  {
    "pitch": 0,
    "startTime": 0.4,
    "endTime": 0.45
  },
  {
    "pitch": 0,
    "startTime": 0.45,
    "endTime": 0.5
  },
  {
    "pitch": 118.3583139,
    "startTime": 0.5,
    "endTime": 0.55
  },
  {
    "pitch": 118.2577579,
    "startTime": 0.55,
    "endTime": 0.6
  },
  {
    "pitch": 118.0548766,
    "startTime": 0.6,
    "endTime": 0.65
  },
  {
    "pitch": 117.3962697,
    "startTime": 0.65,
    "endTime": 0.7
  },
  {
    "pitch": 117.1829733,
    "startTime": 0.7,
    "endTime": 0.75
  },
  {
    "pitch": 117.2187057,
    "startTime": 0.75,
    "endTime": 0.8
  },
  {
    "pitch": 117.7460259,
    "startTime": 0.8,
    "endTime": 0.85
  },
  {
    "pitch": 117.7460259,
    "startTime": 0.85,
    "endTime": 0.9
  },
  {
    "pitch": 117.2543645,
    "startTime": 0.9,
    "endTime": 0.95
  },
  {
    "pitch": 117.4667885,
    "startTime": 0.95,
    "endTime": 1
  }
],
totalTime: 1
};

player = new mm.Player();



function playTwinkle(){
player.stop();
  player.start(TWINKLE_TWINKLE);

}

function playBird(){
player.stop();
  player.start(BIRD_SONG);

}
