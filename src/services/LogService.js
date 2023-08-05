import axios from "axios";

const LOG_API_BASE_URL = "http://localhost:8080/log/v1";

class LogService {
  getLogs(logType) {
    return axios.get(
      LOG_API_BASE_URL.concat("/").concat(logType).concat("/logs")
    );
  }
}

export default new LogService();
