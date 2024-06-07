import ListView from './ListView.vue';
import bus from '../utils/bus.js';

export default function createListView(name){
  return {
    // 재사용할 컴포넌트(컴포넌트) 옵션들 
    name,
    created(){
       bus.$emit("start:spinner");
       setTimeout(() => {
         this.$store
           .dispatch("FETCH_LIST", this.$route.name)
           .then(() => {
             console.log("fetched");
             bus.$emit("end:spinner");
           })
           .catch(console.error());
       }, 1000);
    },
    render(createElement){
      return createElement(ListView);
    }
  }
}