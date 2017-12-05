/**
 * 最大公约数
 */
class Gcd {
    /**
     * 计算2个数的最大公约数
     * @param n1 数1
     * @param n2 数2
     */
    public static gcd(n1: number, n2: number): number {
        let s = Math.floor(n1 / n2)
        let y = n1 % n2
        // console.log(n1 + ' = ' + n2 + '*' + s + ' + ' + y)
        if (y === 0) {
            return n2
        } else {
            return this.gcd(n2, y)
        }
    }
    /**
     * 扩展欧几里德算法 - 求方程的解 （详细注释版）
     * 我们要求：47x + 30y = 1的解，下面为辗转相除法的步骤：
     * 47 = 30*1 + 17
     * 30 = 17*1 + 13
     * 17 = 13*1 + 4
     * 13 = 4*3 + 1
     *
     *
     * @param num1 数1
     * @param num2 数2
     */
    public static gcdEx(n1: number, n2: number): Array<number> {
        // 两数相除的商
        let q = Math.floor(n1 / n2)
        // 两数相除的余数
        let r = n1 % n2
        // 当到 13 = 4*3 + 1 即4 % 1 = 0时 返回
        // 返回值为：1 | -4 即：x=1 y=-4
        if (n2 % r === 0) {
            // 转化为：1 = 13 + 4*(-3)
            // 所以返回：x=1 y=q*(-1)=-3
            return [1, q * -1]
        } else {
            let ret = this.gcdEx(n2, r)
            // x和y为上一步返回的值
            let x = ret[0]
            let y = ret[1]
            // x1和y1为当前步骤的值
            let x1 = 1
            let y1 = -q
            // console.log('----', x, y, x1, y1)
            // x2和y2为当前步骤计算得到的值
            // 1 = 13 + 4*(-3)
            // 4 = 17 + 13*(-1)
            // 代入得：1 = 13 + (17 + 13*(-1)) * (-3)
            // 计算得：1 = 17*(-3) + 13*4 ==> x=-3 | y=4
            let x2 = y * x1
            let y2 = y * y1 + x
            ret = [x2, y2]
            return ret
        }
    }
}
export default Gcd
