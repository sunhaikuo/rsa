import Prime from './Prime'
import Util from './Util'
/**
 * 欧拉函数
 */
class Euler {
    /**
     * 根据欧拉函数取与此数互质的个数
     * @param num 参数
     */
    public static getEulerNum(num: number) {
        Prime.break(num)
        let arr = Util.uniqueArr(Prime.break(num))
        let result = num
        for (let i = 0; i < arr.length; i++) {
            result *= 1 - 1 / arr[i]
        }
        return Math.floor(result)
    }
}

export default Euler
