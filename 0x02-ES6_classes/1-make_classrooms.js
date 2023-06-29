import ClassRoom from './0-classroom';

export default function initializeRooms() {
    let myArray = [19, 20, 34].map((res) => new ClassRoom(res));
    return myArray;

}
