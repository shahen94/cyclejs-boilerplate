import xs from 'xstream';
import { run } from '@cycle/xstream-run';
import {
  makeDOMDriver,
  h1
} from '@cycle/dom';

function main() {
  const DOM = xs.periodic(1000).map(i => (
    h1(`${i} seconds elapsed`)
  ));

  return { DOM };
}

const drivers = {
  DOM: makeDOMDriver('#root')
};

run(main, drivers);
