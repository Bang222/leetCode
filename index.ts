const isValid = (s: string): boolean => {
    const openMark: string[] = ["{", "[", "("];
    const matchingMark: { [key: string]: string } = {
        "}": "{",
        "]": "[",
        ")": "("
    };
    let containOpenMark: string[] = [];

    for (let i: number = 0; i < s.length; i++) {
        const currentMark: string = s.charAt(i);

        if (openMark.includes(currentMark)) {
            containOpenMark.push(currentMark);
        } else if (containOpenMark.pop() !== matchingMark[currentMark]) {
            return false;
        }
    }

    return containOpenMark.length === 0;
};

const s1 = "()";
const s2 = "()[]{}";
const s3 = "(]";
console.log("instance 1: ", String(isValid(s1)));
console.log("instance 2: ", String(isValid(s2)));
console.log("instance 3: ", String(isValid(s3)));