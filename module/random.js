// 随机类
// 订单号 等其他随机数
export default class Random
{
    constructor()
    {
        
    };
    randomLenNum(len,date) 
    {
        let random = '';
        random = Math.ceil(Math.random() * 100000000000000).toString().substr(0, typeof len === 'number' ? len : 4);
        if (date) random = random + Date.now();
        return random;
    }
}