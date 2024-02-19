import { getBuffer, ArrayBufferConverter } from "../arraybuffer";


test("проверка ошибки что буфер не загружен", () => {
    const convert = new ArrayBufferConverter();
    expect(() => 
    convert.toString()).toThrow("Ошибка загрузки buffer.");
})

test("проверка всё загружается, парсится и работает", () => {
    const buf = getBuffer();
    const convert = new ArrayBufferConverter();
    convert.load(buf);
    const jsonString = convert.toString();
    const receivedObject = JSON.parse(jsonString);
    expect(receivedObject).toEqual({"data":{"user":{"id":1,"name":"Hitman","level":10}}});
})