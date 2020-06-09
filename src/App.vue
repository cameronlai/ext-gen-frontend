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
            <h3>Menu</h3>
          </b-row>
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
            <b-button
              variant="outline-primary"
              v-on:click="show('Visualize');visualize()"
            >Visualize Time Slots</b-button>
          </b-row>
          <b-row class="m-2">
            <b-button
              variant="outline-primary"
              v-on:click="show('Visualize');generate()"
            >Generate Timetable</b-button>
          </b-row>
        </b-col>
        <b-col cols="9">
          <div v-if="rightColPageName === 'TimeSlots'">
            <EditTableTimeSlots :items="timeSlotsItems" />
          </div>
          <div v-if="rightColPageName === 'StudentRecord'">
            <EditTableStudentRecord :items="studentRecordItems" />
          </div>
          <div v-if="rightColPageName === 'Visualize'">
            <FullCalendar
              defaultView="timeGridWeek"
              :weekends="false"
              :plugins="calendarPlugins"
              :events="events"
              :defaultDate="defaultDate"
            />
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
      <hr />
    </b-container>
  </div>
</template>

<script>
import EditTableTimeSlots from "./components/EditTableTimeSlots.vue";
import EditTableStudentRecord from "./components/EditTableStudentRecord.vue";
import axios from "axios";
import FullCalendar from "@fullcalendar/vue";
import timegridPlugin from "@fullcalendar/timegrid";
import moment from "moment";

export default {
  name: "App",
  components: {
    EditTableTimeSlots,
    EditTableStudentRecord,
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarPlugins: [timegridPlugin],
      rightColPageName: "StudentRecord",
      timeSlotsItems: [
        { start: "2015-11-12,9:00", end: "2015-11-12,12:00" },
        { start: "2015-11-12,15:00", end: "2015-11-12,18:00" }
      ],
      studentRecordItems: [
        { name: "A", subjects: "Chinese,English" },
        { name: "B", subjects: "Chinese,English,Math" },
        { name: "C", subjects: "Chinese,English,Math" }
      ],
      defaultDate: "2015-11-11",
      events: [
        /*
        {
          description: "",
          end: "2015-11-11T10:00:00",
          start: "2015-11-11T09:00:00",
          title: "Math"
        },
        {
          description: "",
          end: "2015-11-12T12:00:00",
          id: "timeSlots",
          rendering: "background",
          start: "2015-11-11T09:00:00"
        },
        */
      ]
    };
  },
  methods: {
    updateTextColor: function() {
      for (let i = 0; i < this.events.length; i++) {
        this.events[i].textColor = "white";
      }
    },
    visualize: function() {
      this.events = [];

      const firstMoment = moment(this.timeSlotsItems[0].start);
      this.defaultDate = firstMoment.format();

      for (let i = 0; i < this.timeSlotsItems.length; i++) {
        const item = this.timeSlotsItems[i];
        const startMoment = moment(item.start);
        const endMoment = moment(item.end);

        this.events.push({
          description: "",
          end: endMoment.format(),
          rendering: "background",
          start: startMoment.format()
        });
      }
      this.updateTextColor();
    },
    generate: function() {
      // Clear data
      this.events = [];
      // Trigger the API call
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
        .then(response => {
          console.log(response);
          const body = response.data;
          this.defaultDate = body.defaultDate;
          this.events = body.events;
          this.updateTextColor();
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
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
<style lang='sass'>
@import '~@fullcalendar/core/main.css'
@import '~@fullcalendar/timegrid/main.css'
</style>
