import Gcd from './Gcd'
/**
 * 质数类
 */
class Prime {
    private static pNumArr: Array<number> = []
    /**
     * 判断一个数是否为质数
     * @param num 转入值
     */
    public static isPrimeNum(num: number): boolean {
        // 1和2都是质数
        if (num < 3) {
            return true
        }
        // i取开方，效率要比/2高出许多
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false
            }
        }
        return true
    }
    /**
     * 1. 任意两个质数构成互质关系，比如13和61。
    　　2. 一个数是质数，另一个数只要不是前者的倍数，两者就构成互质关系，比如3和10。
    　　3. 如果两个数之中，较大的那个数是质数，则两者构成互质关系，比如97和57。
    　　4. 1和任意一个自然数是都是互质关系，比如1和99。
    　　5. p是大于1的整数，则p和p-1构成互质关系，比如57和56。
    　　6. p是大于1的奇数，则p和p-2构成互质关系，比如17和15。
     */
    public static coprime(n1: number, n2: number): boolean {
        // 保证n1比n2要大
        if (n2 > n1) {
            let tmp = n1
            n1 = n2
            n2 = tmp
        }
        // 两个数中, 有一个是1, 则两数互质
        if (n1 === 1 || n2 === 1) {
            return true
        }
        // 如果两数相邻, 则两数互质
        if (n1 - n2 === 1) {
            return true
        }
        // 如果大数为奇数, 则n1-n2 = 2, 则两数互质
        if (n1 % 2 === 1 && n1 - n2 === 2) {
            return true
        }
        // 如果较大的数为质数, 则两数互质
        if (this.isPrimeNum(n1)) {
            return true
        }
        // 有一个是质数, 别一个不为此数的倍数, 则两数互质
        if ((this.isPrimeNum(n1) || this.isPrimeNum(n2)) && n1 % n2 !== 0) {
            return true
        }
        // 如果两个数都为质数, 则两个数互质
        if (this.isPrimeNum(n1) && this.isPrimeNum(n2)) {
            return true
        }
        // 如果两个数的最大公约数为1, 则两个数互质
        if (Gcd.gcd(n1, n2) === 1) {
            return true
        }
        return false
    }
    /**
     * 获取该数下所有的质数
     * @param num 转入的数
     */
    public static getAllPrimeNum(num: number) {
        let arr = []
        for (let i = 1; i <= num; i++) {
            if (this.isPrimeNum(i)) {
                arr.push(i)
            }
        }
        return arr
    }

    /**
     * 把一个正整数分解为两个质数的乘积
     * @param num
     */
    public static break(num: number) {
        this.getBreakArr(num)
        return this.pNumArr
    }

    /**
     * 把一个正整数分解为两个质数的乘积(中间步骤)
     * @param num
     */
    private static getBreakArr(num: number) {
        // 获取该数/2的所有质数
        let arr = this.getAllPrimeNum(Math.floor(num / 2))
        // 能被这个数整除的最大质数
        let maxNum = 1
        for (let i = 0; i < arr.length; i++) {
            if (num % arr[i] === 0) {
                maxNum = arr[i]
            }
        }
        // 除数
        let divNum = num / maxNum
        if (maxNum !== 1) {
            this.pNumArr.push(maxNum)
            return this.break(divNum)
        } else {
            this.pNumArr.push(divNum)
            return maxNum
        }
    }
}

export default Prime
