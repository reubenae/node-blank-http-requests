import fs from 'fs';
import { blank } from './src/blank.js';

const input = fs.readFileSync("./blank_input.txt").toString().split("\n");
console.log(blank(input));
