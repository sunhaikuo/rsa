import Gcd from './Gcd'
import Prime from './Prime'
import Euler from './Euler'
let n1 = 30
let n2 = 20
let result = Gcd.gcd(n1, n2)
console.log(
    '-->计算2个数的最大公约数: n1=' + n1 + ', n2=' + n2,
    '结果：' + result
)

let n3 = 47
let n4 = 30
let result1 = Gcd.gcdEx(n3, n4)
console.log(
    '-->根据扩展欧几里德算法计算：' +
        n3 +
        'x + ' +
        n4 +
        'y = 1 的解为(' +
        result1 +
        ')'
)

let n5 = 17
let r2 = Prime.isPrimeNum(n5)
console.log('-->计算' + n5 + '是不是质数，结果为：' + r2)
let n6 = 18
let n7 = 21
let r3 = Prime.coprime(n6, n7)
console.log('-->计算n1=' + n6 + ', n2=' + n7 + ' 是否互质，结果为：' + r3)

let n8 = 20
let r4 = Prime.getAllPrimeNum(n8)
console.log('-->计算小于' + n8 + '的质数集合，结果为：' + r4)

let r5 = Prime.break(n8)
console.log('-->把' + n8 + '分解为质数的乘积，结果为：' + r5.join('x'))

let n9 = 100
let r6 = Euler.getEulerNum(n9)

console.log('-->根据欧拉函数取与' + n9 + '互质的个数，结果为：' + r6)
