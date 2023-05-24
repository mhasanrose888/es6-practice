const person = { name: 'Harun HB', age: 17, job: 'freelancer', gfName: 'Mumu', phone: '01714536741', friends: ['Ganja Shohel', 'Dail Sakil', 'Senti Rasel'], address: 'Sutibari'};

const { name, phone, address } = person;

const complexObject = {
    name : 'Rose',
    info: {
        address: 'Rangur Sadar',
        leader: 'Connect World'
    }
}
const {leader} = complexObject.info;



const gfName = person.gfName;
// const phone = person.phone;
// console.log(person.gfName);
// console.log(person.gfName);
// console.log(person.phone);

/** akhn array try korbo tai comment out korci
console.log(gfName);
console.log(name, gfName, phone);
console.log(phone, address);
*/



const friends = ['Sala Mamun', 'Rezvi Islam', 'Kola Mamun', 'Braiv Seikh', 'Sajib Hossain', 'F Aminul'];
const [chotoFriend, nextFriend, ...restFriends] = friends;
const [firstFfirend, ...olderFriend] = friends;
console.log(...restFriends);
console.log(...olderFriend);