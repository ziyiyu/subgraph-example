import { ExampleQueryDocument, execute } from '../.graphclient'
import {  ExecutionResult } from 'graphql';


execute(ExampleQueryDocument, {
  "first1":1,
  "first2":1,
}).then((result:ExecutionResult) => {
  console.log(result.data)
}).catch((e:Error) => {
    console.error(e)
});