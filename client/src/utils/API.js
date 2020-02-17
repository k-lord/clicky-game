import axios from "axios";

export default {
    // Gets all bachelorette objects

    getBachelorettes: function() {
        return axios.get("/api/bachelorettes");
    }
};