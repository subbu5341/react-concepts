// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
//
//
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import { Observable, of, fromEvent, from, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import {ajax } from 'rxjs/ajax';
import {allReader} from './data';
//alert('hiii')

//practice purpose
// const sourceObservable$ = new Observable(subscriber=>{
//   if(allReader.length === 0){
//     subscriber.err('No values');
//   }
//   for(let item of allReader){
//       subscriber.next(item);
//   }
//   subscriber.complete();
// })
//
// sourceObservable$.subscribe(item=>console.log(item.name))


// const source$ = of('hello', 1,2,3,'hi')
// source$.subscribe(item=>console.log(item))

// const button  = document.getElementById('button')
// fromEvent(button, 'click')
//   .subscribe(event=>{
//     console.log(event)
//     const readerDiv = document.getElementById('root')
//     for(let item of allReader){
//       readerDiv.innerHTML+=item.name + '</br>'
//     }
//   })

  // const button  = document.getElementById('button')
  // fromEvent(button, 'click')
  //   .subscribe(event=>{
  //     console.log(event);
  //     ajax('https://jsonplaceholder.typicode.com/todos')
  //       .subscribe(ajaxRes=>{
  //         console.log(ajaxRes);
  //         const readerDiv = document.getElementById('root')
  //             for(let item of ajaxRes.response){
  //               readerDiv.innerHTML+=item.title + '</br>'
  //             }
  //       })
  //   })

//#region subscribing to Observable with observers

//const technology$ = from(allReader)
//#1st way to write observers

// const myObserver ={
//   next:item=>console.log(`name: ${item.name}`),
//   error:err=>console.log(`err: ${err}`),
//   complete:()=>console.log('All done!')
// }
//
// technology$.subscribe(myObserver);

//#2 nd way to write observers

// technology$.subscribe(
//   item=>console.log(`name: ${item.name}`),
//   err=>console.log(`err: ${err}`),
//   ()=>console.log('All done!')
// );

//#end;

//# each subscribe will execute independent observer
  // const currentTime$ = new Observable(subscriber=>{
  //   const timeString = new Date().toLocaleTimeString();
  //       subscriber.next(timeString);
  //       subscriber.complete();
  // })
  //
  // currentTime$.subscribe(
  //   currentTime=>console.log(`observer 1:${currentTime}`)
  // )
  //
  // setTimeout(()=>{
  //   currentTime$.subscribe(
  //     currentTime=>console.log(`observer 2:${currentTime}`)
  //   )
  // }, 1000)
  //
  // setTimeout(()=>{
  //   currentTime$.subscribe(
  //     currentTime=>console.log(`observer 3:${currentTime}`)
  //   )
  // }, 2000)

//#end

//#Cancelling the sourceObservable$
const button = document.getElementById('button');
const timesDiv = document.getElementById('root');

const timerObservable$ = interval(1000);
const timerSubscription=timerObservable$.subscribe(
  value=> timesDiv.innerHTML+=`${new Date().toLocaleTimeString()}:(${value}) <br/>`,
  null,
  ()=>console.log('All done!')
)

fromEvent(button, 'click')
  .subscribe(event=>timerSubscription.unsubscribe()
);
