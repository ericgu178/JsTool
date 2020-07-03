export default class array extends Array
{
    constructor(...val)
    {
        if (val != undefined) {
            super(...val)
        }
    }
    // 寻找位置
    indexOf(val,key) {
        if (key != null) {
            for (var i = 0; i < this.length; i++) {
                if (this[i][key] == val) {
                    return i;
                }
            }
        } else {
            for (var i = 0; i < this.length; i++) {
                if (this[i] == val) {
                    return i;
                }
            }
        }
        return -1;
    }
    // 执行删除
    remove(val,key = null) {
        let index = this.indexOf(val,key);
        if (index > -1) {
            this.splice(index, 1);
        }
    }
}