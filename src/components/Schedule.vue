<template>
  <div>
    <h1>Game/Training Schedules</h1>

    <h2>Upcoming Games</h2>
    <button class="button" v-on:click="getGameData">Get Game Schedules and Info</button>

    <p>{{ gameTime }}</p>

    <div
      v-for="gameData in gameList"
      :key="gameData.date"
      class="game-data"
    >
      <div class="game-stats">
        <div>
          <span>Date: {{ gameData.date }}  Time: {{ gameData.time }} <button class="button">Singup</button></span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";

const gameDataJSON =
   'https://picuploadsnew.s3.amazonaws.com/gameTime/gameScheduleNew.json';
export default {
  name: "schedule",
  data() {
    return {
      gameList: [],
    };
  },
  methods: {
    getGameData() {
      axios.get(gameDataJSON).then((response) => (this.gameList = response.data));
    },
  },
};
</script>

<style scoped>

.button {
  transition-duration: 0.4s;
  border-radius: 8px;
  background-color: white; 
  color: black;
}

.button:hover {
  background-color: black; 
  color: white;
}

.game-data {
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
  border-bottom: 2px solid #ccc;
  padding: 20px;
}

.game-stats {
  flex-grow: 8;
  text-align: left;
  padding-left: 20px;
}
</style>
