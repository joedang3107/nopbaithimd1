// Viết hàm tryRemoveFromArray() nhận vào một mảng và một số nguyên index, trả về mảng ban đầu đã được loại bỏ phần tử tại vị trí index nếu index hợp lệ. Nếu index không hợp lệ, trả về mảng ban đầu.(không dùng hàm có sẵn để xoá mảng)

let myArr = [1, 3, 5, 6, 7, 9, 15]

let indexOfNumber = 2

function tryRemoveFromArray(myArr, indexOfNumber) {
    let newArr = []
    if (indexOfNumber< 0 || indexOfNumber > myArr.length) {
        return myArr
    }
    else {
        for (let index = 0; index < indexOfNumber; index++) {
            newArr.push(myArr[index])
        }
        for (let index = indexOfNumber + 1; index < myArr.length; index++) {
            newArr.push(myArr[index])
        }
    }
    return newArr

}


console.log(tryRemoveFromArray(myArr, indexOfNumber));