export default class romanToIntService{
    public static romanToInt(str: string){
        const map = new Map();
        map.set('I', 1);
        map.set('V', 5);
        map.set('X', 10);
        map.set('L', 50);
        map.set('C', 100);
        map.set('D', 500);
        map.set('M', 1000);
        const n = str.length;
        let result = map.get(str[n - 1]);
        for (let i = n - 2; i >= 0; i--) {
            map.get(str[i]) >= map.get(str[i + 1]) ? result += map.get(str[i]) : result -= map.get(str[i]);
        }
       if(isNaN(result) || result > 3999) throw new Error('Must be a roman number or inferior to 3999')
       return {result: result}
    }

}