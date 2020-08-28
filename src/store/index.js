import Vue from "vue";
import axios from "@/components/http";

export let state = Vue.observable({
  activityList: []
});

export let mutations = {
  setActivities({ activityList }) {
    state.activityList = activityList;
  }
};

export let actions = {
  updateActivityList() {
    return axios
      .get("/web/activities")
      .then(data => {
        const d = data.data.data;
        const activityList = [];
        if (Array.isArray(d)) {
          d.forEach(item => {
            activityList.push({
              id: item.id,
              imgUrl: item.image,
              title: item.title,
              status: item.subtitle,
              des: item.description,
              type: item.type,
              url: item.url
            });
          });
        }
        mutations.setActivities({ activityList });
        return Promise.resolve();
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
};
