function timeConversion(s) {
    s = s.split('');
    let last2 = s.splice(8, 2);
    if (last2[0] === 'A') {
        if (s.slice(0, 2).join('') === '12') {
            s = '00' + s.splice(2,6).join('');
        } else {
            s = s.join('');            
        }
    } else {
        let hour = s.splice(0, 2).join('');
        hour = parseInt(hour, 10) + 12;        
        s = hour + s.join('');        
    }
    return s;
}

console.log(timeConversion('07:05:45PM'));
console.log(timeConversion('07:05:45AM'));
console.log(timeConversion('00:00:15PM'));