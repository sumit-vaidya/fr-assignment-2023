<template>
  <section>
    <h3>Log Types</h3>
    <br />
    <input
      type="radio"
      v-model="logType"
      @change="getLogsEvent"
      value="DEBUG"
    />
    Debug
    <input
      type="radio"
      v-model="logType"
      @change="getLogsEvent"
      value="ERROR"
    />
    Error
    <input type="radio" v-model="logType" @change="getLogsEvent" value="WARN" />
    Warn
    <br />
    <span>value: {{ logType }}</span>
  </section>

  <div class="container">
    <h3 class="text-center">{{ logType }} logs information</h3>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>Log description</th>
          <th>Log count</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(log, index) in logs" v-bind:key="index">
          <td>{{ log.logDescription }}</td>
          <td>{{ log.logCount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Log",
  data() {
    return {
      logType: "DEBUG",
    };
  },
  computed: {
    ...mapGetters({
      logs: "getLogs",
    }),
  },
  methods: {
    ...mapActions(["getLogs"]),
    getLogsEvent(event) {
      this.getLogs(event.target.value);
    },
  },
  created() {
    this.getLogs(this.logType);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
