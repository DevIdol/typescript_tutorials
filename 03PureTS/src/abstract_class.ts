abstract class TakePhoto {
    constructor(public caremaMode: string, public filters: string) { }

    abstract getInfo(): void
    getRealTime(): number {
        return 7
    }
}

// const data = new TakePhoto("Test", "test")

class Instagrams extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filters: string,
        public burst: number
    ) {
        super(cameraMode, filters);
    }
    getInfo(): void {
        console.log("Joe")
    }
}

const data = new Instagrams("Test", "test", 3);

data.getRealTime()
