class Rsa {
    str: string = ''
    pNumArr: Array<number> = []
    // 计算2个数的最大公约数
    gcd(n1: number, n2: number): number {
        let s = Math.floor(n1 / n2)
        let y = n1 % n2
        // console.log(n1 + ' = ' + n2 + '*' + s + ' + ' + y)
        if (y === 0) {
            return n2
        } else {
            return this.gcd(n2, y)
        }
    }
    // 判断一个数是否为质数
    isPrimeNum(num: number): boolean {
        // 1和2都是质数
        if (num < 3) {
            return true
        }
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
    coprime(n1: number, n2: number): boolean {
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
        if (this.gcd(n1, n2) === 1) {
            return true
        }
        return false
    }

    /**
     * 获取该数下所有的质数
     * @param num 转入的数
     */
    getAllPrimeNum(num: number) {
        let arr = []
        for (let i = 1; i <= num; i++) {
            if (this.isPrimeNum(i)) {
                arr.push(i)
            }
        }
        return arr
    }
    /**
     * 对数组进行去重
     * @param array
     */
    unique(array) {
        let n = [] //临时数组
        for (let i = 0; i < array.length; i++) {
            if (n.indexOf(array[i]) == -1) n.push(array[i])
        }
        return n
    }

    /**
     * 把一个正整数分解为两个质数的乘积
     * @param num
     */
    fenjie(num: number) {
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
            return this.fenjie(divNum)
        } else {
            this.pNumArr.push(divNum)
            return maxNum
        }
    }

    /**
     * 取欧拉函数的个数
     * @param num
     */
    getEulaNum(num: number) {
        this.fenjie(num)
        let arr = this.unique(this.pNumArr)
        let result = num
        for (let i = 0; i < arr.length; i++) {
            result *= 1 - 1 / arr[i]
        }
        return Math.floor(result)
    }
    /**
     * 扩展欧几里德算法 - 求方程的解
     * @param num1
     * @param num2
     */
    gcdEx(num1: number, num2: number) {
        let q = Math.floor(num1 / num2)
        let r = num1 % num2
        if (r === 0) {
            // return num2 * q
            // return 0
            return q
        } else {
            let re = this.gcdEx(num2, r)
            console.log(re)
            return num1 - re * num2
        }
    }
}

let rsa = new Rsa()
// let num = rsa.zdgys(24, 16)
// console.log('最大公约数为:' + num)
// console.log(rsa.isPrimeNum(13))
// console.log(rsa.coprime(15, 17))

// let num = 63
// for (let i = 2; i <= Math.sqrt(num); i++) {
//     console.log(i + '\t' + Math.pow(num, 1 / i))
// }
// let arr = rsa.getAllPrimeNum(100)
// console.log(arr.join(' '))
// console.log(rsa.getEulaNum(3233))
rsa.gcdEx(47, 30)
