import axios from "axios";

const LOG_API_BASE_URL = "http://localhost:8080/log/v1/logs";

class LogService {
  getLogs(logType) {
    return axios.get(LOG_API_BASE_URL.concat("/").concat(logType));
  }
}

export default new LogService();
