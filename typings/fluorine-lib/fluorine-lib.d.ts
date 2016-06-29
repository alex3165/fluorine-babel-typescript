/// <reference path="../rx/rx.d.ts" />

declare namespace FluorineLib {

  export function distinctSelector(keys: Array<string>): Observable<any>;

  export interface Dispatcher {
    reduce(any: any): any;
    rawNext(any: any): any;
    next(any: any): any;
  }

  export function createDispatcher(any: any): any;

}

declare module "fluorine-lib" {
    export = FluorineLib
}
