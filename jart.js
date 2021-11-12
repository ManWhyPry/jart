let iota_iter = 0
function iota(reset = false) {
    if (reset) iota_iter = 0
    iota_iter++
    return iota_iter - 1
}

class JartInterpreter {
    #stdout

    constructor() {
        this.#stdout = ""
    }

    eval(string) {
        this.#stdout = string
    }

    get stdout() {
        return this.#stdout
    }
}
