export function getBuffer() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    return (input => {
        const buffer = new ArrayBuffer(data.length * 2);
        const bufferView = new Uint16Array(buffer);
        for (let i = 0; i < input.length; i++) {
            bufferView[i] = input.charCodeAt(i);
        }
        return buffer;
    })(data);
}


export class ArrayBufferConverter {
    constructor () {
        this.buffer = null;
    }

    // может загружать данные (сигнатура load(buffer)
    load(buffer) {
        this.buffer = buffer;
        return buffer;
    }

    // умеет переводить содержимое загруженного ArrayBuffer в строку.
    toString() {
        if (!this.buffer) {
            throw new Error("Ошибка загрузки buffer.");
        }
    
        const bufferView = new Uint16Array(this.buffer);
        const jsonString = String.fromCharCode.apply(null, bufferView);
        return jsonString;
    }
}

// const convert = new ArrayBufferConverter();
// const buf = getBuffer();
// console.log(buf);
// convert.load(buf)
// const t = convert.toString();
// console.log(t);