import { Buffer } from 'buffer';
import process from 'process';

window.Buffer = Buffer;
window.process = process;

if (typeof process === 'undefined') {
    global.process = require('process');
}