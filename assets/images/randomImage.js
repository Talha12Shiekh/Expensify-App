const images = [
    require('./1.png'),
    require('./2.png'),
    require('./3.png'),
    require('./4.png'),
    require('./5.png'),
    require('./6.png'),
    require('./7.png'),
    require('./8.png'),
    require('./9.png'),
    require('./10.png'),
    require('./11.png'),
    require('./12.png'),
];

export default function randomImage(){
    let min = 1,max = images.length;
    return images[Math.floor(Math.random() * ( max - min )) + min];
}