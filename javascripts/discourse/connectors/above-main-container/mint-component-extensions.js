import { getOwner } from "discourse-common/lib/get-owner";

export default {
  setupComponent(attrs, component) {
    if (getOwner(this).resolveRegistration("component:two-topic-list")) {
      component.set("showcasedCategoriesInstalled", true);
    }

    if (getOwner(this).resolveRegistration("component:search-banner")) {
      component.set("searchBannerInstalled", true);
    }
  },
};
const a=document.querySelector(".stat-banner__title")
console.log(a,"Text");