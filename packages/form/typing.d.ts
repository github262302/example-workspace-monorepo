/// <reference path="../../node_modules/vite/client.d.ts" />


import type{Component} from 'vue'

declare global {

}
declare module "*.vue" {
  export default Component
}

export {}
