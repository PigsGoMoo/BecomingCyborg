import { testFunc, testFunc1 } from './testQuest';
import { secondTestSetUp, secondTestUpdate } from './secondTestQuest';
import { stacyQuestSetUp, stacyQuestUpdate } from './stacyQuest';
import { gunQuestSetup, gunQuestUpdate } from './gunQuest';
import { fireballQuestSetup, fireballQuestUpdate } from './fireballQuest';

/*
  This quests object is a giant object of key: object pairs. The key needs to be the key for your quest. This is what is grabbed and used throughout the quest logic - including the name of your NPC, so it must be unique.

  The corresponding value pair needs to be an object with the keys:
      key, title, reward, description, objectiveReqs, isStarted, setUp, update, isCompleted, requirements
  It is case sensitive. Description, title, and requirements are not yet implemented in the quest logic but should be added in anyway.
*/
const quests = {
  testQuest: {
    key: 'testQuest',
    title: 'Clear the mob', // Not yet implemented
    reward: ['iron', 'potion', 'oil'],
    description:
      'A quest to clear the big bad wolves from the city so that the little piggy next door can go to the market in peace.', // not yet implemented
    objectiveReqs: {
      enemiesCleared: false,
    },
    isStarted: false,
    setUp: [testFunc],
    update: [testFunc1],
    isCompleted: false,
    requirements: false, // Not implemented yet
    scene: 'FgScene',
  },

  secondTestQuest: {
    key: 'secondTestQuest',
    title: 'idk',
    reward: ['iron', 'iron', 'potion', 'potion', 'potion', 'potion'],
    description: 'Idk. Just testing',
    objectiveReqs: {
      enemiesCleared: false,
    },
    isStarted: false,
    setUp: [secondTestSetUp],
    update: [secondTestUpdate],
    isCompleted: false,
    requirements: false,
    scene: 'FgScene',
  },

  gunQuest: {
    key: 'gunQuest',
    title: "I'm gun-a need a hand",
    reward: ['gunAttachment', 'iron', 'oil', 'potion'],
    description: 'Idk. Just testing',
    objectiveReqs: {
      itemFetched: false,
    },
    isStarted: false,
    setUp: [gunQuestSetup],
    update: [gunQuestUpdate],
    isCompleted: false,
    requirements: false,
    scene: 'RobotCityScene',
  },

  stacyQuest: {
    key: 'stacyQuest',
    title: 'Kill 10 Big Robots',
    reward: ['iron', 'oil', 'clearanceChip', 'potion'],
    description:
      "Kill 10 Big Robots in Robot City to save your dad and Stacy and get a clearance chip to the robot king's lair",
    objectiveReqs: {
      enemiesCleared: false,
    },
    isStarted: false,
    setUp: [stacyQuestSetUp],
    update: [stacyQuestUpdate],
    isCompleted: false,
    requirements: false,
    scene: 'RobotCityScene',
  },

  fireballQuest: {
    key: 'fireballQuest',
    title: 'Where-Wolf',
    reward: ['fireballAttachment', 'iron', 'potion', 'oil'],
    description: 'Idk. Just testing',
    objectiveReqs: {
      enemiesCleared: false,
    },
    isStarted: false,
    setUp: [fireballQuestSetup],
    update: [fireballQuestUpdate],

    isCompleted: false,
    requirements: false,
    scene: 'RobotCityScene',
  },
};

export default quests;
