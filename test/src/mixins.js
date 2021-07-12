import axios from "axios";

export default {
  method: {
    async $api(url, method, data) {
      return (
        await axios({
          method: method,
          url,
          data,
        })
      ).catch((e) => {
        console.log(e);
      }).data;
    },
  },
};
