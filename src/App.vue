<template>
  <div id="app">
    <b-container>
      <b-row>
        <h1 class="mx-auto">Exam Timetable Generator</h1>
      </b-row>
      <b-row>
        <p class="mx-auto">Optimizing exam timetables by maximizing revision time between exams</p>
      </b-row>
      <hr />
      <b-row>
        <b-col cols="3">
          <b-row class="m-2">
            <b-button variant="outline-primary" v-on:click="show('TimeSlots')">Edit Time Slots</b-button>
          </b-row>
          <b-row class="m-2">
            <b-button
              variant="outline-primary"
              v-on:click="show('StudentRecord')"
            >Edit Student Record</b-button>
          </b-row>
          <b-row class="m-2">
            <b-button variant="outline-primary" v-on:click="show('Visualize')">Visualize</b-button>
          </b-row>
          <b-row class="m-2">
            <b-button variant="outline-primary" v-on:click="generate()">Generate Timetable</b-button>
          </b-row>
        </b-col>
        <b-col cols="9">
          <div v-if="rightColPageName === 'TimeSlots'">
            <EditTableTimeSlots :items="timeSlotsItems" />
          </div>
          <div v-if="rightColPageName === 'StudentRecord'">
            <EditTableStudentRecord :items="studentRecordItems" />
          </div>
        </b-col>
      </b-row>
      <hr />
      <b-row>
        <p class="mx-auto">
          Designed by
          <a href="http://cameronlai.com">Cameron Lai</a>
        </p>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import EditTableTimeSlots from "./components/EditTableTimeSlots.vue";
import EditTableStudentRecord from "./components/EditTableStudentRecord.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    EditTableTimeSlots,
    EditTableStudentRecord
  },
  data() {
    return {
      rightColPageName: "StudentRecord",
      timeSlotsItems: [
        { start: "2015-11-12,9:00", end: "2015-11-12,12:00" },
        { start: "2015-11-12,15:00", end: "2015-11-12,18:00" }
      ],
      studentRecordItems: [
        { name: "A", subjects: "Chinese,English" },
        { name: "B", subjects: "Chinese,English,Math" },
        { name: "C", subjects: "Chinese,English,Math" }
      ]
    };
  },
  methods: {
    generate: function() {
      console.log("here");
      let body = {};
      body["timeSlots"] = this.timeSlotsItems;
      body["studentRecord"] = [];
      for (let i = 0; i < this.studentRecordItems.length; i++) {
        let element = this.studentRecordItems[i];
        let item = element["subjects"].split(",");
        item.unshift(element.name);
        console.log(item);
        body["studentRecord"].push(item);
      }
      console.log(body);
      axios
        .post(
          "https://asia-east2-personal-279606.cloudfunctions.net/ext-gen-backend",
          body
        )
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
      /*
      var request = require("request");      
      var options = {
        method: "POST",
        url:
          "https://asia-east2-personal-279606.cloudfunctions.net/ext-gen-backend-dev-first",
        headers: {
          "Access-Control-Allow-Headers": "*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          timeSlots: [{ start: "2015-11-11,9:00", end: "2015-11-12,12:00" }],
          studentRecord: [
            ["A", "Chinese", "English"],
            ["B", "Chinese", "English", "Math"],
            ["C", "Chinese", "English", "Math"]
          ]
        })
      };
      request(options, function(error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
      });
      */
    },
    show: function(name) {
      this.rightColPageName = name;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
