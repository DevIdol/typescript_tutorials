interface TakePhoto {
    cameraMode: string
    filter: String
    burst: number
}

interface Story {
    createStory(): void
}

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) { }
}

class Youtube implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) { }

    createStory(): void {
        console.log("Story Created")
    }
}