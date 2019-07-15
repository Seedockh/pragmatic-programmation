import Toy from './src/models/Toy';
import Pony from './src/models/Pony';
import Figurine from './src/models/Figurine';
import DragonBall from './src/models/DragonBall';
import Packaging from './src/models/Packaging';
import Box from './src/models/Box';
import GiftWrap from './src/models/GiftWrap';
import Elf from './src/models/Elf';
import ConveyorBelt from './src/models/ConveyorBelt';
import Table from './src/models/Table';
import DBHeroes from './src/constants/DBHeroes';

console.log(`
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

                         ###   RUSH EFREI KLAUS   ###

||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
`);
const littlePony = new Pony();
const redPony = new Pony();

const myBejita = new DragonBall(DBHeroes.bejita);

const box = new Box();
const paper = new GiftWrap();

const legolas = new Elf('Legolas');

const tapis = new ConveyorBelt();
const table = new Table();

console.log(`###### STEP N.1 ######\n`);
littlePony.isMoved();
myBejita.isMoved();

console.log(`###### STEP N.2 ######\n`);
legolas.pack(box,myBejita);
box.open();
legolas.pack(box,myBejita);
console.log('\n');

legolas.pack(paper,redPony);
legolas.pack(paper,redPony);
console.log('\n');

legolas.unpack(paper);
legolas.unpack(paper);
console.log('\n');

console.log(`###### STEP N.3 ######\n`);
legolas.put(littlePony,table);
legolas.put(myBejita,table);
legolas.look(table);
console.log('\n');

legolas.take(0, table);
legolas.look(table);
console.log('\n');

legolas.put(littlePony,tapis);
legolas.put(myBejita,tapis);
legolas.look(tapis);
console.log('\n');

legolas.take(littlePony, tapis);
legolas.look(tapis);
console.log('\n');

legolas.in(tapis);
legolas.look(tapis);
console.log('\n');

legolas.out(tapis);
legolas.look(tapis);
console.log('\n');
