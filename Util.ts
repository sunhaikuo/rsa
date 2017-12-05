class Util {
    /**
     * 对数组进行去重
     * @param array
     */
    public static uniqueArr(array) {
        let n = [] //临时数组
        for (let i = 0; i < array.length; i++) {
            if (n.indexOf(array[i]) == -1) n.push(array[i])
        }
        return n
    }
}

export default Util
