// 验证使用



export class Tool {
    // 初始化
    constructor() {

    }
    /**
     * 验证小数点后n位
     * @param str
     * @param n
     */
    verifyDecimalPlaces(str,n) {
        let reg = new RegExp(`^[0-9]+([.]{1}[0-9]{1,${n}})?$`);
        var result = false;
        if (str==''||!reg.test(str)) {
            result = true;
        }
        return result;
    };

    /**
     * 验证正整数 有0 
     * @param str 
     */
    verifyPositiveInteger(str){
        let reg = new RegExp("^[0-9]+$");
        var result = false;
        if (!reg.test(str)) {
            result = true;
        }
        return result;
    };

    /**
     * 验证正整数 无0 
     * @param str 
     */
    verifyPositiveInteger2(str){
        let reg = new RegExp("^[1-9][0-9]*$");
        var result = false;
        if (!reg.test(str)) {
            result = true;
        }
        return result;
    };

    /**
     * 验证字符串中是否有空格
     * @param str 
     */
    verifyEmpty(str) {
        var result = false;
        if (str==''||str.indexOf(" ") != -1) {
            result = true;
        }
        return result;
    };

    /**
     * 验证英文+数字
     * @param str 
     */
    verifyEngAndNum(str){
        let reg = new RegExp("^[A-Za-z0-9]+$");
        var result = false;
        if (!reg.test(str)) {
            result = true;
        }
        return result;
    };

    /**
     * 名称合法性检测
     * @param str 
     */

    verifyLegality(str){
        let reg = new RegExp("[`~!@#$^&*=|{}':;',\\[\\].<>/?~！@#￥……&*;—|{}【】‘；：”“'。，、？]");
        var result = true;
        if (!reg.test(str)) {
            result = false;
        }
        return result;
    };


    /**
     * 验证身份证
     * @param str 
     */
    verifyCardNo(card) {
        let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)")/;
        var result = true;
        if (!reg.test(card)) {
            result = false;
        }
        return result;
    };

    /**
     * 验证手机号
     * @param str 
     */
    verifyPhoneNo(phone) {
        let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[678])[0-9]{8}$/;
        var result = true;
        if (!reg.test(phone)) {
            result = false;
        }
        return result;
    };

    // 禁止查看源代码
    stopSourceCode(){
        // 键盘事件 f12 ctrl+shift+u
        document.onkeydown=function(){
            var e=window.event||arguments[0];
            if(e.keyCode==123){
                return false;
            }else if((e.ctrlKey)&&(e.shiftKey)&&(e.keyCode==73)||(e.keyCode==85)){
                return false;
            }
        };
        // 鼠标事件
        document.oncontextmenu=function(){
            return false;
        }
    };
    // 区域外的点击 消失隐藏
    areaEvent(area)
    {
        $(document).mouseup(function(e){
            var _con = $(area);   // 设置目标区域
            if(!_con.is(e.target) && _con.has(e.target).length === 0){ // Mark 1
                $(area).hide()
            }
        });
    };
    verifyValue(data,rule)
    {
        try {
            data.filter(item=>{
                rule.filter(ruler=>{
                    if (item.name == ruler.name) {
                        if (ruler.exts != undefined) {
                            if (`${ruler.rule_name(item.value)}`) {
                                throw ruler.err_msg
                            }
                        }
                    }
                })
            })
        } catch (e) {
            return e
        }
    };
    visibilityChange(OriginTitile = '啊哈哈啊',hiddenTitle = '你看不见我...你看不见我...你看不见我',showTitle = '还是被发现了')
    {
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                document.title = hiddenTitle;
                clearTimeout(titleTime);
            } else {
                document.title = showTitle;
                titleTime = setTimeout(function() {
                    document.title = OriginTitile;
                }, 2000);
            }
        });
    }
}
