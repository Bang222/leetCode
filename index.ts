
const ts: number = 5; // Số lần lặp

// Vẽ bán trên của hình thoi
for (let i: number = 1; i <= ts; i++) {
    let row: string = '';

    // Tạo dấu cách ở phía trước
    for (let j: number = 1; j <= ts - i; j++) {
        row += ' ';
    }

    // Tạo các dấu '*' ở phía trước
    for (let k: number = 1; k <= i; k++) {
        row += '* ';
    }

    console.log(row);
}

// Vẽ bán dưới của hình thoi
for (let i: number = ts - 1; i >= 1; i--) {
    let row: string = '';

    // Tạo dấu cách ở phía trước
    for (let j: number = 1; j <= ts - i; j++) {
        row += ' ';
    }

    // Tạo các dấu '*' ở phía trước
    for (let k: number = 1; k <= i; k++) {
        row += '* ';
    }

    console.log(row);
}