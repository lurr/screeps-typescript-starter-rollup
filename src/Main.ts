// Profiler
import * as Profiler from "./libs/Profiler";
import {ErrorMapper} from "./libs/ErrorMapper";

global.Profiler = Profiler.init();

export function loop() {

  try {
    // your code here
  } catch(e) {
    console.log(`Error:\n${ErrorMapper.getMappedStack(e)}`);
  }

}
