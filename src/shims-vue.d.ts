import Vue, { VueConstructor } from 'vue';
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
declare module 'vue/types/vue' {
    interface Vue {
      $http: any;
  }
  interface VueConstructor {
      $http: any;
  }
}
declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
      $http?: any;
  }
}


// declare module 'vue/types/options' {
//   interface ComponentOptions<V extends Vue> {
//     $http: {postJSON: (url: string, data: any) => Promise}
//   }
// }